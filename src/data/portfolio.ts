export const personalInfo = {
  name: "BOVANO",
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
    "Мене звати Іван Бобак. Я займаюся монтажем і motion design та постійно розвиваюся в цьому напрямку ",
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
    title: "BOVANO Showreel",
    description: "Добірка моїх робіт у монтажі, графіці та візуальних ефектах. Зібрав різні за настроєм кадри в один ритмічний ролик, який показує мій підхід до відео.",
    tags: ["VFX", "Video Editing"],

    categories: ["vfx", "editing"],

    poster: "videos/showreel.jpg",
    video: "https://youtube.com/shorts/SnYp39ica_8?feature=share",
    year: "2026",
    duration: "0:37",
    orientation: "vertical",
  },

  {
    id: 2,
    title: "Mazda MX-5",
    description: "Коротке відео про Mazda MX-5 з акцентом на форму, деталі та характер автомобіля. Через монтаж і звук зібрав окремі плани в цілісну атмосферу.",
    tags: ["Video Editing"],

    categories: ["social","editing"],

    poster: "/videos/storm born.jpg",
    video: "https://youtube.com/shorts/9UaOwYz6acU",
    year: "2026",
    duration: "0.41",
    orientation: "vertical",
  },

  {
    id: 3,
    title: "Cyberzone Event",
    description: "Динамічне відео з ігрового простору Cyberzone. Монтажем підкреслив людей, деталі та швидкий темп події.",
    tags: ["AI / Generative"],

    categories: ["social","vfx", "motion", "editing"],

    poster: "/videos/vfx-showreel-poster.jpg",
    video: "https://youtube.com/shorts/xrd_Cy6xdEI",
    year: "2026",
    duration: "0.23",
    orientation: "vertical",
  },

  {
    id: 4,
    title: "AI Visual Story",
    description: "Візуальна історія, створена за допомогою AI інструментів. Поєднав згенеровані кадри, музику, титри та монтаж в один завершений ролик.",
    tags: ["VFX", "Video Editing", "Compositing"],

    categories: ["ai"],

    poster: "/videos/charity-poster.jpg",
    video: "https://youtube.com/shorts/wJ3TCc1DKBo",
    year: "2026",
    duration: "0:33",
    orientation: "vertical",
  },

  {
    id: 5,
    title: "Орявчик — промовідео осіннього вишколу",
    description: "Зібрав короткий ролик, який знайомить із програмою вишколу та передає атмосферу поїздки в гори. Поєднав кадри активностей, анімовані написи й музику, щоб глядач швидко зрозумів, що чекає на учасників.",
    tags: ["Typography", "Motion", "Video Editing"],

    categories: ["editing", "motion", "social"],

    poster: "/videos/black-friday-poster.jpg",
    video: "https://youtube.com/shorts/09OWJYJ5N3M",
    year: "2026",
    duration: "0:38",
    orientation: "vertical",
  },

  {
    id: 6,
    title: "Орявчик 2",
    description: "Монтаж, музика та короткі титри передають атмосферу й запрошують долучитися до нового вишколу.",
    tags: ["Typography", "Video Editing"],

    categories: ["editing", "social"],

    poster: "/videos/fact-poster.jpg",
    video: "https://youtube.com/shorts/8U3b0nK0HII",
    year: "2026",
    duration: "0:34",
    orientation: "vertical",
  },

  {
    id: 7,
    title: "BMW — монтаж розмовного відео",
    description: "Короткий ролик для автомайстерні: показав роботу з кузовом і результат крупними планами. Додав субтитри з акцентами на ключових словах, щоб пояснення було легко сприймати навіть без звуку.",
    tags: ["Video Editing"],

    categories: ["editing", "social"],

    poster: "/videos/camp-poster.jpg",
    video: "https://youtube.com/shorts/ZrEvKyrqTu8",
    year: "2026",
    duration: "0:19",
    orientation: "vertical",
  },

{
    id: 8,
    title: "17 07 2026",
    description: "Коротке відео з повсякденних моментів і деталей. Через монтаж зберіг живу фактуру матеріалу та зібрав його в послідовний настрій.",
    tags: ["Video Editing"],

    categories: ["editing"],

    poster: "/videos/camp-poster.jpg",
    video: "https://youtube.com/shorts/MZCUKWRCnSc",
    year: "2026",
    duration: "0:46",
    orientation: "vertical",
  },

{
    id: 9,
    title: "Картопля 2026",
    description: "Відео про збір картоплі з простих кадрів поля, роботи та результату. Через послідовність планів і ритм монтажу перетворив звичайний процес на невелику історію.",
    tags: ["Video Editing"],

    categories: ["editing"],

    poster: "/videos/camp-poster.jpg",
    video: "https://youtube.com/shorts/9az6rBSRfeQ",
    year: "2026",
    duration: "0:43",
    orientation: "vertical",
  },

  {
    id: 10,
    title: "Осінній вишкіл",
    description: "Промовідео вишколу, де важливо було передати рух, командну роботу й атмосферу події. Стиснув різні епізоди в динамічну історію, яка тримає увагу.",
    tags: ["Video Editing"],

    categories: ["editing", "vfx"],

    poster: "/videos/camp-poster.jpg",
    video: "https://youtube.com/shorts/9az6rBSRfeQ",
    year: "2026",
    duration: "4:22",
    orientation: "vertical",
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
