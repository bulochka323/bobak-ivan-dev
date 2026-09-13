export const personalInfo = {
  name: "Bovano",
  role: "Motion Designer",
  tagline:
    "Моушн-дизайнер зі смаком до сучасної динамічної анімації. Створюю стильні intro, анімую логотипи та текст, перетворюючи звичайні ідеї на крутий візуальний продукт.",
  email: "hello@bovano.com",
  phone: "+380930969406",
  location: "Україна / Львів",
  availability: "Відкритий до співпраці",
  socials: {
    telegram: "https://t.me/IvanBobak",
    whatsapp: "https://wa.me/380930969406",
    portfolio: "https://mrvan.myportfolio.com",
  },
};

export const about = {
  paragraphs: [
    "Хочете, щоб ваш бренд виділявся на тлі конкурентів? Перетворіть статичне лого в епічну історію за допомогою моушн-дизайну. У моєму шоурілі представлені роботи, які демонструють, як правильно підібраний рух може підсилити візуальну айдентику вашого проєкту.",
    "Я спеціалізуюся на анімації логотипів, візуальних ефектах (VFX) та текстовій анімації — створюю унікальні intro для подкастів, YouTube та презентацій, працюю з частинками, світловими ефектами та елегантними титрами.",
  ],
  specialties: [
    {
      title: "Анімація логотипів",
      text: "Створення унікальних intro для подкастів, YouTube та презентацій.",
    },
    {
      title: "Візуальні ефекти (VFX)",
      text: "Робота з частинками, електричними розрядами та складними світловими ефектами.",
    },
    {
      title: "Текстова анімація",
      text: "Елегантні та читабельні титри для будь-якого контенту.",
    },
  ],
  tags: ["Logo Animation", "Typography", "Motion Graphics", "Compositing & VFX"],
  stats: [
    { label: "Років досвіду", value: "2" },
    { label: "Проєктів", value: "35+" },
    { label: "Клієнтів", value: "6+" },
  ],
};

export const skills = {
  categories: [
    {
      title: "Motion & Animation",
      items: ["Logo Animation", "Typography & Titling", "Motion Graphics", "Compositing"],
    },
    {
      title: "VFX & Effects",
      items: ["Particles", "Light Effects", "Electric Discharges", "Visual Effects"],
    },
    {
      title: "Tools",
      items: ["After Effects", "Premiere Pro", "Illustrator", "Photoshop"],
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "MR.VAN — Motion Design Channel",
    description: "Брендинг і анімоване лого для YouTube-каналу про моушн-дизайн.",
    tags: ["Logo Animation", "Branding"],
    poster: "/videos/mrvan-poster.jpg",
    video: "/videos/mrvan.mp4",
    year: "2025",
    duration: "2:14",
  },
  {
    id: 2,
    title: "Logo Animation",
    description: "Динамічна анімація логотипу з неоновими акцентами та плавними переходами.",
    tags: ["Logo Animation", "After Effects"],
    poster: "/videos/logo-animation-poster.jpg",
    video: "/videos/logo-animation.mp4",
    year: "2025",
    duration: "1:45",
  },
  {
    id: 3,
    title: "VFX Showreel",
    description: "Візуальні ефекти: частинки, електричні розряди та складні світлові композиції.",
    tags: ["VFX", "Particles", "Compositing"],
    poster: "/videos/vfx-showreel-poster.jpg",
    video: "/videos/vfx-showreel.mp4",
    year: "2025",
    duration: "3:20",
  },
  {
    id: 4,
    title: "Благодійне бюро",
    description: "Кінематографічне intro з об’ємною графікою та атмосферним освітленням.",
    tags: ["Intro", "3D", "Motion"],
    poster: "/videos/charity-poster.jpg",
    video: "/videos/charity.mp4",
    year: "2024",
    duration: "1:58",
  },
  {
    id: 5,
    title: "Black Friday +30%",
    description: "Яскрава промо-анімація для акції з динамічною типографікою.",
    tags: ["Typography", "Promo", "Motion"],
    poster: "/videos/black-friday-poster.jpg",
    video: "/videos/black-friday.mp4",
    year: "2024",
    duration: "0:48",
  },
  {
    id: 6,
    title: "Цікавий факт",
    description: "Стильна текстова анімація з мінімалістичною графікою.",
    tags: ["Typography", "Titling"],
    poster: "/videos/fact-poster.jpg",
    video: "/videos/fact.mp4",
    year: "2024",
    duration: "1:12",
  },
];

export const experience = [
  {
    company: "ТОВ «Вентвам»",
    role: "Керівник робочої групи",
    period: "2021 — 2026",
    description:
      "Керівництво командою, моушн-дизайн, анімація логотипів та VFX для клієнтських проєктів.",
  },
  {
    company: "ТОВ «АртХаус Буд»",
    role: "Керівник робочої групи",
    period: "2020 — 2021",
    description: "Організація робочих процесів, створення візуального контенту та анімації.",
  },
];

export const education = [
  {
    period: "2024 — 2026",
    place: "Європейський університет",
    detail: "Комп’ютерні науки",
  },
  {
    period: "2024 — 2027",
    place: "IT STEP Computer Academy",
    detail: "Комп’ютерна графіка і Дизайн",
  },
  {
    period: "2013 — 2015",
    place: "КНУКіМ",
    detail: "Дизайн",
  },
];

export const navLinks = [
  { label: "Про мене", href: "#about" },
  { label: "Навички", href: "#skills" },
  { label: "Роботи", href: "#projects" },
  { label: "Досвід", href: "#experience" },
  { label: "Контакт", href: "#contact" },
];
