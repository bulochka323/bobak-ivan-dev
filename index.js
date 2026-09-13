import express from "express";
import multer from "multer";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, ".data");
const VIDEO_DIR = path.join(DATA_DIR, "videos");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");
const PORT = Number(process.env.PORT || 10000);
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "change-me";

fs.mkdirSync(VIDEO_DIR, { recursive: true });

const defaults = [
  { id: 1, title: "MR.VAN — Motion Design Channel", description: "Брендинг і анімоване лого для YouTube-каналу про моушн-дизайн.", tags: ["Logo Animation", "Branding"], video: "/videos/mrvan.mp4", poster: "/videos/mrvan-poster.jpg", year: "2025" },
  { id: 2, title: "Logo Animation", description: "Динамічна анімація логотипу з неоновими акцентами та плавними переходами.", tags: ["Logo Animation", "After Effects"], video: "/videos/logo-animation.mp4", poster: "/videos/logo-animation-poster.jpg", year: "2025" },
  { id: 3, title: "VFX Showreel", description: "Візуальні ефекти: частинки, електричні розряди та складні світлові композиції.", tags: ["VFX", "Particles", "Compositing"], video: "/videos/vfx-showreel.mp4", poster: "/videos/vfx-showreel-poster.jpg", year: "2025" },
  { id: 4, title: "Благодійне бюро", description: "Кінематографічне intro з об’ємною графікою та атмосферним освітленням.", tags: ["Intro", "3D", "Motion"], video: "/videos/charity.mp4", poster: "/videos/charity-poster.jpg", year: "2024" },
  { id: 5, title: "Black Friday +30%", description: "Яскрава промо-анімація для акції з динамічною типографікою.", tags: ["Typography", "Promo", "Motion"], video: "/videos/black-friday.mp4", poster: "/videos/black-friday-poster.jpg", year: "2024" },
  { id: 6, title: "Цікавий факт", description: "Стильна текстова анімація з мінімалістичною графікою.", tags: ["Typography", "Titling"], video: "/videos/fact.mp4", poster: "/videos/fact-poster.jpg", year: "2024" }
];

if (!fs.existsSync(PROJECTS_FILE)) fs.writeFileSync(PROJECTS_FILE, JSON.stringify(defaults, null, 2));
const readProjects = () => JSON.parse(fs.readFileSync(PROJECTS_FILE, "utf8"));
const writeProjects = (x) => fs.writeFileSync(PROJECTS_FILE, JSON.stringify(x, null, 2));
const token = () => crypto.createHmac("sha256", ADMIN_PASSWORD).update("bovano-admin").digest("hex");
const auth = (req) => req.headers["x-admin-token"] === token();

const app = express();
app.use(express.json({ limit: "1mb" }));

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, VIDEO_DIR),
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase() || ".mp4";
      const base = path.basename(file.originalname, path.extname(file.originalname))
        .replace(/[^a-zA-Z0-9а-яА-ЯіІїЇєЄ_-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 70) || "video";
      cb(null, `${Date.now()}-${base}${ext}`);
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => cb(null, ["video/mp4", "video/webm", "video/quicktime"].includes(file.mimetype) || /\.(mp4|webm|mov)$/i.test(file.originalname))
});

app.get("/api/projects", (_req, res) => res.json(readProjects()));
app.post("/api/admin/login", (req, res) => {
  if (req.body?.password !== ADMIN_PASSWORD) return res.status(401).json({ error: "Невірний пароль" });
  res.json({ token: token() });
});
app.post("/api/admin/projects", upload.single("video"), (req, res) => {
  if (!auth(req)) {
    if (req.file) fs.rmSync(req.file.path, { force: true });
    return res.status(401).json({ error: "Неавторизовано" });
  }
  if (!req.file) return res.status(400).json({ error: "Відео не завантажено" });
  let tags = [];
  try { tags = req.body.tags ? JSON.parse(req.body.tags) : []; } catch {}
  const projects = readProjects();
  const id = projects.reduce((m, p) => Math.max(m, Number(p.id) || 0), 0) + 1;
  const project = {
    id,
    title: String(req.body.title || "Новий проєкт").slice(0, 120),
    description: String(req.body.description || "").slice(0, 500),
    tags: Array.isArray(tags) ? tags.slice(0, 12).map(String) : [],
    video: `/media/${encodeURIComponent(req.file.filename)}`,
    poster: "",
    year: String(req.body.year || new Date().getFullYear()).slice(0, 4)
  };
  projects.unshift(project); writeProjects(projects); res.status(201).json(project);
});
app.delete("/api/admin/projects/:id", (req, res) => {
  if (!auth(req)) return res.status(401).json({ error: "Неавторизовано" });
  const id = Number(req.params.id), projects = readProjects(), project = projects.find(p => Number(p.id) === id);
  if (!project) return res.status(404).json({ error: "Проєкт не знайдено" });
  if (project.video?.startsWith("/media/")) fs.rmSync(path.join(VIDEO_DIR, path.basename(decodeURIComponent(project.video.slice(7)))), { force: true });
  writeProjects(projects.filter(p => Number(p.id) !== id)); res.json({ ok: true });
});

// HTTP Range support = браузер може перемотувати та підвантажувати великий файл частинами.
app.get("/media/:filename", (req, res) => {
  const file = path.basename(decodeURIComponent(req.params.filename));
  const filePath = path.join(VIDEO_DIR, file);
  if (!fs.existsSync(filePath)) return res.status(404).end();
  const stat = fs.statSync(filePath), range = req.headers.range;
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Content-Type", /\.webm$/i.test(file) ? "video/webm" : "video/mp4");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  if (!range) { res.setHeader("Content-Length", stat.size); return fs.createReadStream(filePath).pipe(res); }
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!match) return res.status(416).end();
  const start = match[1] ? Number(match[1]) : 0, requestedEnd = match[2] ? Number(match[2]) : stat.size - 1;
  if (start >= stat.size || start > requestedEnd) return res.status(416).end();
  const end = Math.min(requestedEnd, stat.size - 1);
  res.status(206).setHeader("Content-Range", `bytes ${start}-${end}/${stat.size}`);
  res.setHeader("Content-Length", end - start + 1);
  fs.createReadStream(filePath, { start, end }).pipe(res);
});

const dist = path.join(ROOT, "dist");
app.use(express.static(dist));
app.get("/admin", (_req, res) => res.sendFile(path.join(dist, "admin.html")));
app.get("/{*splat}", (_req, res) => res.sendFile(path.join(dist, "index.html")));
app.listen(PORT, "0.0.0.0", () => console.log(`BOVANO server listening on ${PORT}`));
