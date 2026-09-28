export const personalInfo = {
  name: "Bovano",
  role: "Video Editor / Motion Designer",
  availability: "Створюй те що залишає слід",

  tagline:
    "Працюю з монтажем, motion design та анімацією. Для мене важливо, щоб відео не просто виглядало красиво, а мало ритм, характер і нормально тримало увагу.",

  email: "mr.van2332@gmail.com",
  phone: "+380930969406",
  location: "Україна / Львів",

  socials: {
    telegram: "https://t.me/IvanBobak",
    whatsapp: "https://wa.me/380930969406",
  },
};

export const about = {
  paragraphs: [
    "Я займаюся монтажем і motion design та постійно розвиваюся в цьому напрямку ",
    "Найбільше мені подобається брати навіть неідеальний матеріал і через монтаж, ритм, звук та графіку збирати з нього цілісне відео.",
    "Працюю з анімацією логотипів, текстом, VFX та AI-інструментами. Можу окремо працювати з монтажем або зібрати всю візуальну частину проєкту в одному стилі.",
  ],
 specialties: [
  {
    title: "Video Editing",
    text: "Збираю відео по ритму, змісту й настрою. Працюю з музикою, саунд-дизайном, кольором і структурою кадру.",
  },
  {
    title: "Motion Design",
    text: "Додаю анімацію тексту, графіки, титрів та візуальних елементів так, щоб вони працювали разом із монтажем, а не жили окремо.",
  },
  {
    title: "AI / Generative",
    text: "Використовую AI для генерації відео, зображень, музики та озвучки, а потім збираю й допрацьовую все це в монтажі.",
  },
],
  tags: [ "Video Editing", "Motion Design", "Logo Animation", "VFX", "Sound Design", "AI / Generative"],
  stats: [
    { label: "Років досвіду", value: "2" },
    { label: "Проєктів", value: "35+" },
    { label: "Клієнтів", value: "6+" },
  ],
};

export const skills = {
  categories: [
    {
      title: "Video Editing",
      items: ["Монтаж, робота з ритмом, структурою відео, музикою, саунд-дизайном та кольором."],
    },
    {
      title: "Motion Design",
      items: ["Анімація тексту, графіки, титрів та окремих елементів композиції."],
    },
     {
      title: "Logo Animation",
      items: ["Анімація логотипів, intro та коротких брендованих заставок."],
    },
    {
      title: "VFX & Compositing",
      items: ["Візуальні ефекти, світло, частинки, compositing та робота з кадром в After Effects."],
    },
    {
      title: "AI / Generative",
      items: ["Використовую AI для генерації відео, зображень, музики та озвучки, а потім допрацьовую все це в монтажі."],
    },
     {
      title: "Software",
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

    categories: ["logo", "motion", "social"],

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

    categories: ["logo", "motion", "vfx"],

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

    categories: ["vfx", "motion"],

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

    categories: ["motion", "vfx"],

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

    categories: ["motion", "social"],

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

    categories: ["editing", "motion", "social"],

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
    company: "Мій професійний шлях",
    role: "Video Editor / Motion Designer",
    period: "2025 — зараз",
    description:
      "До того, як я серйозно зайнявся монтажем і motion design, я працював у зовсім іншому напрямку та мав досвід керування робочою групою. Це дало мені розуміння відповідальності, організації процесів і роботи з людьми. Паралельно я навчався дизайну, монтажу та анімації, робив власні проєкти й поступово перейшов у творчий напрямок. Зараз мій основний фокус — video editing, motion design, logo animation та розвиток BOVANO.",
  },
];

export const navLinks = [
  { label: "Навички", href: "#skills" },
  { label: "Роботи", href: "#projects" },
  { label: "Контакт", href: "#contact" },
];
