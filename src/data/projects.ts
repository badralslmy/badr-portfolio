export type Project = {
  id: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  kind: "product" | "api" | "library";
  monogram: string;
  subtitle: string;
  link?: string;
};

// يمكن إضافة المشاريع القادمة هنا بنفس البنية.
export const projects: Project[] = [
  {
    id: "hesah",
    name: "حِصّة",
    subtitle: "HESAH / BUSINESS OS",
    description: "نظام لإدارة الأعمال بنظام العمولات، يجمع الحجوزات ونقاط البيع وإدارة الموظفين والمخزون والتقارير في مكان واحد.",
    category: "إدارة الأعمال",
    technologies: ["PWA", "نقاط البيع", "إدارة الحجوزات", "نظام عمولات"],
    kind: "product",
    monogram: "حِصّة",
    link: "https://hesah.site",
  },
  {
    id: "daris",
    name: "دارس",
    subtitle: "DARIS / ACADEMIC PLATFORM",
    description: "منصة إدارة أكاديمية تربط الطلاب وأعضاء هيئة التدريس والإدارة، مع خدمات المقررات والتحليلات وأدوات DARIS Studio.",
    category: "التعليم",
    technologies: ["PWA", "DARIS Studio", "تحليلات", "منصة أكاديمية"],
    kind: "product",
    monogram: "D",
    link: "https://dar-is.vercel.app",
  },
  {
    id: "arx",
    name: "ARX",
    subtitle: "CINEMA & ANIME HUB",
    description: "تطبيق للويب وسطح المكتب يجمع اكتشاف الأفلام والأنمي، القوائم الشخصية، متابعة المشاهدة، جداول العرض، والتكامل مع مصادر الوسائط في تجربة واحدة.",
    category: "الترفيه والوسائط",
    technologies: ["React", "TypeScript", "Tauri", "SQLite"],
    kind: "product",
    monogram: "ARX",
  },
  {
    id: "trex",
    name: "Trex",
    subtitle: "UNIFIED SUBTITLE ROUTER",
    description: "واجهة API موحّدة للبحث عن الترجمات عبر SubDL وSubSource بالتوازي، مع نتائج مدمجة وملعب تفاعلي وتوثيق OpenAPI.",
    category: "واجهات برمجية",
    technologies: ["Cloudflare Workers", "Hono", "OpenAPI"],
    kind: "api",
    monogram: "T",
    link: "https://trex.arxrngine.workers.dev",
  },
  {
    id: "mapx",
    name: "Mapx",
    subtitle: "MEDIA METADATA BRIDGE",
    description: "جسر بيانات يربط معرّفات الأنمي بقواعد بيانات الأفلام والمسلسلات، ويدعم الاستعلام الجماعي والحساب التلقائي لأرقام الحلقات.",
    category: "واجهات برمجية",
    technologies: ["Cloudflare Workers", "Supabase", "Metadata API"],
    kind: "api",
    monogram: "M",
    link: "https://animapx.arxrngine.workers.dev",
  },
  {
    id: "api-badr",
    name: "API-BADR",
    subtitle: "BINARY NETWORKING ENGINE",
    description: "معمارية شبكية بلغة Rust تعتمد حزمًا ثنائية بدل JSON، مع توليد نماذج Rust وTypeScript وعميل WebAssembly من تعريف واحد.",
    category: "واجهات برمجية",
    technologies: ["Rust", "WebAssembly", "UDP / QUIC"],
    kind: "api",
    monogram: "B",
  },
  {
    id: "lumina",
    name: "LuminaUI",
    subtitle: "OLED REACT UI SYSTEM",
    description: "مكتبة مكوّنات React بهوية OLED، حواف زجاجية مضيئة، وحركة تفاعلية، متاحة لبناء واجهات تطبيقات أخرى.",
    category: "مكتبات وأدوات",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    kind: "library",
    monogram: "L",
    link: "https://github.com/badralslmy/LuminaUI",
  },
];
