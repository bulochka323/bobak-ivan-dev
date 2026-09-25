export const personalInfo = {
  name: "Bovano",
  role: "Motion Designer",
  tagline:
    "Моушн-дизайнер зі смаком до сучасної динамічної анімації. Створюю стильні intro, анімую логотипи та текст, перетворюючи звичайні ідеї на крутий візуальний продукт.",
  email: "hello@bovano.com",
  phone: "+380930969406",
  location: "Україна / Львів",
  socials: {
    telegram: "https://t.me/IvanBobak",
    whatsapp: "https://wa.me/380930969406",
  },
};

export const about = {
  paragraphs: [
    "Хочете, щоб ваш бренд виділявся на тлі конкурентів? Перетворіть статичне лого в епічну історію за допомогою моушн-дизайну.",
    "Я спеціалізуюся на анімації логотипів, візуальних ефектах (VFX) та текстовій анімації.",
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
      title: "Інструменти",
      items: ["After Effects", "Premiere Pro", "Illustrator", "Photoshop"],
    },
  ],
};

export const projectCategories = [
  { id: "all", label: "Усі роботи" },
  { id: "editing", label: "Video Editing" },
  { id: "motion", label: "Motion Design" },
  { id: "logo", label: "Logo Animation" },
  { id: "vfx", label: "VFX" },
  { id: "ai", label: "AI / Generative" },
  { id: "social", label: "Social / Reels" },
];

export const projects = [
  {
    id: 1,
    title: "12x",
    description: "Брендинг і анімоване лого для YouTube-каналу про моушн-дизайн.",
    tags: ["Logo Animation", "Branding"],
    
    categories: 
      ["all"],
    
    poster: "/videos/Sequence 01_1091.jpg",
    video: "https://www.youtube.com/shorts/gRRcW5RnGlw",
    year: "2026",
    duration: "0:21",
    orientation: "vertical",
  },
  {
    id: 2,
    title: "Storm/born",
    description: "Динамічна анімація логотипу з неоновими акцентами та плавними переходами.",
    tags: ["Logo Animation", "After Effects"],

    categories: ["editing"],
    
    poster: "/videos/storm born.jpg",
    video: "https://youtu.be/722EU6mSSIQ",
    year: "2026",
    duration: "5:03",
    orientation: "horizontal",
  },
  {
    id: 3,
    title: "VFX Showreel",
    description: "Візуальні ефекти: частинки, електричні розряди та складні світлові композиції.",
    tags: ["VFX", "Particles", "Compositing"],
    categories: ["editing"],
    poster: "/videos/vfx-showreel-poster.jpg",
    video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    year: "2025",
    duration: "3:20",
    orientation: "horizontal",
  },
  {
    id: 4,
    title: "Благодійне бюро",
    description: "Кінематографічне intro з об’ємною графікою та атмосферним освітленням.",
    tags: ["Intro", "3D", "Motion"],
    categories: ["editing"],
    poster: "/videos/charity-poster.jpg",
    video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    year: "2024",
    duration: "1:58",
    orientation: "horizontal",
  },
  {
    id: 5,
    title: "Black Friday +30%",
    description: "Яскрава промо-анімація для акції з динамічною типографікою.",
    tags: ["Typography", "Promo", "Motion"],
    categories: ["editing"],
    poster: "/videos/black-friday-poster.jpg",
    video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    year: "2024",
    duration: "0:48",
    orientation: "horizontal",
  },
  {
    id: 6,
    title: "Цікавий факт",
    description: "Стильна текстова анімація з мінімалістичною графікою.",
    tags: ["Typography", "Titling"],
    categories: ["editing"],
    poster: "/videos/fact-poster.jpg",
    video: "https://www.youtube.com/shorts/XXXXXXXXXXX",
    year: "2024",
    duration: "0:45",
    orientation: "vertical",
  },
  {
  id: 7,
  title: "Camp Promo",
  description: "Динамічний проморолик із монтажем, motion-графікою та саунд-дизайном.",
  tags: ["Editing", "Motion", "Sound Design"],

  categories: ["editing", "motion", "social"],

  poster: "/videos/camp-poster.jpg",
  video: "/videos/camp.mp4",

  year: "2026",
  duration: "0:45",
  orientation: "horizontal",
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
  { label: "Навички", href: "#skills" },
  { label: "Роботи", href: "#projects" },
  { label: "Контакт", href: "#contact" },
];
