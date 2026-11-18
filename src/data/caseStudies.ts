import type { Language } from "../i18n";

export type GalleryImage = {
  src: string;
  caption: Record<Language, string>;
  kind: "screenshot" | "documentation";
};

export type CaseCopy = {
  problem: string;
  solution: string;
  implementation: string;
  highlights: string[];
};

export type CaseStudy = {
  ar: CaseCopy;
  en: CaseCopy;
  gallery: GalleryImage[];
};

export const caseStudies: Record<string, CaseStudy> = {
  hesah: {
    ar: {
      problem: "تتوزع أعمال المنشآت التي تعتمد العمولات بين دفتر حجوزات، نقاط بيع، ملفات موظفين وتقارير منفصلة. هذا التشتت يجعل متابعة العمل والأرقام اليومية أصعب.",
      solution: "حِصّة تجمع مسار العمل في نظام واحد: من الحجز والخدمة إلى المبيعات والعمولات والمخزون، مع لوحة تعطي صاحب العمل صورة أوضح عمّا يحدث.",
      implementation: "تطبيق ويب عربي مبني بـReact وTypeScript، مع واجهة قابلة للتثبيت كتطبيق PWA. يعتمد على Supabase للمصادقة والبيانات، وتضم بنيته إعدادًا لفصل بيانات العملاء في نشرات مستقلة.",
      highlights: ["حجوزات ونقاط بيع في تدفق واحد", "إدارة الموظفين والعمولات والمخزون", "تقارير تساعد على متابعة أداء العمل", "واجهة عربية تعمل من المتصفح والهاتف"],
    },
    en: {
      problem: "Commission-based businesses often spread bookings, sales, staff records, and reports across separate tools. That fragmentation makes daily operations and numbers harder to follow.",
      solution: "Hesah brings the workflow together: from appointments and services to sales, commissions, inventory, and reporting in one place.",
      implementation: "An Arabic-first React and TypeScript web app with PWA support. Supabase handles authentication and data, while the codebase includes groundwork for isolated customer deployments.",
      highlights: ["Bookings and point of sale in one flow", "Staff, commissions, and inventory management", "Operational reports for day-to-day decisions", "Arabic interface on desktop and mobile"],
    },
    gallery: [
      { src: "/project-shots/hesah/business-portal.webp", kind: "screenshot", caption: { ar: "بوابة مركز حِصّة للخدمات", en: "Hesah service center portal" } },
      { src: "/project-shots/hesah/login.webp", kind: "screenshot", caption: { ar: "صفحة تسجيل دخول المؤسسة", en: "Organization sign-in screen" } },
      { src: "/hesah.webp", kind: "screenshot", caption: { ar: "الصفحة التعريفية المنشورة لنظام حِصّة", en: "Hesah's live product landing page" } },
    ],
  },
  daris: {
    ar: {
      problem: "يحتاج الطالب وعضو هيئة التدريس والإدارة إلى بيانات مترابطة، لكن تعدد القنوات والأدوات يصعّب متابعة المقررات والتواصل والتقارير.",
      solution: "دارس يضع الأطراف الثلاثة في منصة أكاديمية واحدة، مع بوابات بحسب الدور وخدمات للمقررات والرسائل والتحليلات وأداة DARIS Studio.",
      implementation: "تطبيق React وTypeScript متصل بـAppwrite للمصادقة والبيانات والملفات والتحديثات الفورية. يستخدم طبقات تخزين مؤقت في الذاكرة وIndexedDB قبل مزامنة البيانات مع المصدر السحابي.",
      highlights: ["بوابات للطلاب وأعضاء هيئة التدريس والإدارة", "المقررات والرسائل ومتابعة البيانات", "DARIS Studio لإنشاء التقارير", "مزامنة فورية وتخزين مؤقت لتجربة أسرع"],
    },
    en: {
      problem: "Students, faculty, and administrators need connected information, but scattered tools make courses, communication, and reporting difficult to coordinate.",
      solution: "Daris brings the three groups into one academic platform with role-based portals, course services, messaging, analytics, and DARIS Studio.",
      implementation: "Built with React and TypeScript. Appwrite provides authentication, data, file storage, and realtime updates, with in-memory and IndexedDB caching before cloud synchronization.",
      highlights: ["Role-based student, faculty, and admin portals", "Courses, messaging, and academic data", "DARIS Studio for report creation", "Realtime updates with layered caching"],
    },
    gallery: [
      { src: "/project-shots/daris/login.webp", kind: "screenshot", caption: { ar: "واجهة تسجيل الدخول إلى دارس", en: "Daris sign-in screen" } },
      { src: "/project-shots/daris/schedule.webp", kind: "screenshot", caption: { ar: "جدول الدراسة والمهام", en: "Study schedule and tasks" } },
      { src: "/project-shots/daris/courses.webp", kind: "screenshot", caption: { ar: "صفحة المقررات الدراسية", en: "Courses page" } },
      { src: "/project-shots/daris/messages.webp", kind: "screenshot", caption: { ar: "واجهة الرسائل في دارس", en: "Daris messaging interface" } },
      { src: "/project-shots/daris/profile.webp", kind: "screenshot", caption: { ar: "صفحة الحساب والإعدادات", en: "Account and settings page" } },
      { src: "/project-shots/daris/studio.webp", kind: "screenshot", caption: { ar: "واجهة أدوات DARIS Studio", en: "DARIS Studio tools" } },
      { src: "/daris.webp", kind: "screenshot", caption: { ar: "الصفحة التعريفية المنشورة لمنصة دارس", en: "Daris's live academic platform landing page" } },
    ],
  },
  arx: {
    ar: {
      problem: "تجربة متابعة الأفلام والأنمي تتنقل غالبًا بين فهارس مختلفة، قوائم مشاهدة منفصلة، ومعلومات حلقات ومصادر وسائط لا تتصل ببعضها.",
      solution: "ARX يجمع الاكتشاف والقوائم والتقدم والمواعيد والتكاملات في تجربة واحدة، مع ملفات شخصية مستقلة للسينما والأنمي.",
      implementation: "واجهة React وTypeScript تعمل للويب، ونسخة سطح مكتب عبر Tauri وRust. يستخدم تطبيق سطح المكتب SQLite لحفظ الملفات الشخصية والإعدادات والقوائم والتقدم، مع مزامنة اختيارات الأنمي مع AniList عند ربط الحساب.",
      highlights: ["ملفات شخصية للسينما والأنمي", "قوائم مشاهدة وتقدم ومواعيد عرض", "تجربة ويب وتطبيق سطح مكتب", "تكاملات للبيانات والمصادر الخارجية بحسب إعداد المستخدم"],
    },
    en: {
      problem: "Following movies and anime often means jumping between catalogs, watchlists, episode schedules, and disconnected media sources.",
      solution: "ARX combines discovery, personal lists, progress, schedules, and integrations in one experience, with separate cinema and anime profiles.",
      implementation: "A React and TypeScript web interface with a Tauri and Rust desktop build. The desktop app stores profiles, settings, lists, and progress in SQLite, and can sync anime lists with AniList when connected.",
      highlights: ["Separate cinema and anime profiles", "Watchlists, progress, and airing schedules", "Web and desktop experiences", "Optional metadata and media-source integrations"],
    },
    gallery: [
      { src: "/project-shots/arx/home.webp", kind: "screenshot", caption: { ar: "واجهة المشاهدة الرئيسية في ARX", en: "ARX watch home screen" } },
      { src: "/project-shots/arx/discover.webp", kind: "screenshot", caption: { ar: "استكشاف الأفلام حسب التصنيف والمنصة", en: "Discover films by category and provider" } },
      { src: "/project-shots/arx/episodes.webp", kind: "screenshot", caption: { ar: "تفاصيل المسلسل وقائمة الحلقات", en: "Series details and episode list" } },
      { src: "/project-shots/arx/profile.webp", kind: "screenshot", caption: { ar: "ملف المستخدم ونشاط المشاهدة", en: "User profile and viewing activity" } },
      { src: "/project-shots/arx/settings.webp", kind: "screenshot", caption: { ar: "إعدادات اللغة والمشغّل", en: "Language and player settings" } },
      { src: "/project-shots/arx/profiles.webp", kind: "screenshot", caption: { ar: "اختيار الملفات الشخصية للسينما والأنمي", en: "Choose a cinema or anime profile" } },
      { src: "/project-shots/arx-desktop.png", kind: "screenshot", caption: { ar: "شاشة الإعداد الأولى في نسخة ARX المحلية، دون بيانات مستخدم", en: "Fresh-install setup screen from a local ARX build, without user data" } },
    ],
  },
  trex: {
    ar: {
      problem: "البحث عن ترجمة لفيلم أو حلقة عبر أكثر من مزود يعني التعامل مع واجهات مختلفة ومفاتيح ونتائج غير موحدة.",
      solution: "Trex يوفر نقطة دخول واحدة تبحث بالتوازي لدى SubDL وSubSource، ثم تعرض نتائج موحدة مع إبقاء استجابة كل مصدر منفصلة عند الحاجة.",
      implementation: "واجهة API مبنية بـHono على Cloudflare Workers. تتضمن توثيق OpenAPI وملعبًا تجريبيًا، وتقبل مفاتيح المزودين من الطلب أو إعداد الخادم بدل وضعها في الواجهة.",
      highlights: ["بحث متوازٍ في مصدري ترجمة", "نتائج موحدة مع حالة كل مزود", "توثيق OpenAPI وملعب لتجربة الطلبات", "استعلامات بحسب العنوان أو المعرّف أو اسم الملف"],
    },
    en: {
      problem: "Subtitle search across multiple providers requires different APIs, credentials, and response formats.",
      solution: "Trex provides a single entry point that searches SubDL and SubSource in parallel, returns unified results, and keeps each provider's raw response available.",
      implementation: "A Hono API running on Cloudflare Workers. It includes OpenAPI documentation and an interactive playground, with provider keys supplied per request or through server configuration.",
      highlights: ["Parallel search across two subtitle providers", "Unified results and per-provider status", "OpenAPI documentation and live playground", "Title, identifier, and filename-based queries"],
    },
    gallery: [{ src: "/project-shots/trex-docs.png", kind: "screenshot", caption: { ar: "لقطة حقيقية لواجهة توثيق Trex المنشورة", en: "Real screenshot of the published Trex API documentation" } }],
  },
  mapx: {
    ar: {
      problem: "معرّفات الأنمي في AniList وMAL وAniDB لا تطابق مباشرة معرّفات TMDB وTVDB وIMDb، كما تختلف أرقام الحلقات والمواسم بين قواعد البيانات.",
      solution: "Mapx يحوّل بين هذه المعرّفات في طلب واحد أو دفعات، ويدعم البحث العكسي وحساب انتقال الحلقة إلى موسمها المقابل.",
      implementation: "واجهة على Cloudflare Workers تقرأ بيانات المطابقات من Supabase. يعتمد خط مزامنة البيانات على Magret لتحويل مجموعات AniBridge إلى جداول مفهرسة، وتعرض الواجهة توثيقًا وملعبًا تفاعليًا.",
      highlights: ["ربط فهارس الأنمي بقواعد بيانات الأفلام والمسلسلات", "استعلامات مفردة ودفعية وبحث عكسي", "حساب إزاحات الحلقات والمواسم", "قاعدة بيانات مفهرسة وتوثيق تفاعلي"],
    },
    en: {
      problem: "Anime IDs from AniList, MAL, and AniDB do not directly match TMDB, TVDB, or IMDb IDs, and episode numbering varies across catalogs.",
      solution: "Mapx resolves those identifiers in single or batch requests, supports reverse lookups, and maps episode numbers to their corresponding seasons.",
      implementation: "A Cloudflare Workers API backed by Supabase. The Magret synchronization pipeline converts AniBridge mappings into indexed tables, while the API site offers documentation and a playground.",
      highlights: ["Anime-to-global-catalog identifier mapping", "Single, batch, and reverse lookups", "Season and episode offset calculations", "Indexed data and interactive documentation"],
    },
    gallery: [{ src: "/project-shots/mapx-docs.png", kind: "screenshot", caption: { ar: "لقطة من واجهة API المنشورة؛ يظهر فيها اسم Magret المستخدم في التوثيق", en: "Published API documentation; the site currently uses the Magret name" } }],
  },
  "api-badr": {
    ar: {
      problem: "في الأنظمة الحساسة للزمن، قد تضيف الرسائل النصية ومعالجة JSON وتكرار تعريف النماذج بين العميل والخادم عبئًا يصعب ضبطه.",
      solution: "API-BADR يقترح تعريفًا واحدًا للرسائل الثنائية ومساراتها، بحيث تُولَّد منه نماذج العمل والعملاء بدل إعادة كتابتها لكل بيئة.",
      implementation: "معمارية Rust تعتمد ملف badr.toml لتعريف الحزم، ومكوّنات لتوليد نماذج Rust وTypeScript وعميل WebAssembly، إلى جانب Broker للتوجيه وطبقات نقل تشمل UDP وQUIC وWebTransport كما في توثيق المشروع.",
      highlights: ["تعريف موحد للحزم في badr.toml", "توليد نماذج وعملاء لعدة بيئات", "بروتوكول ثنائي وتوجيه للحزم", "أدوات CLI ومكوّنات Broker وClient"],
    },
    en: {
      problem: "In latency-sensitive systems, text payloads, JSON parsing, and repeated client/server model definitions can add overhead and drift.",
      solution: "API-BADR explores a single definition for binary packets and routes, generating models and clients instead of rewriting them in each environment.",
      implementation: "A Rust architecture based on badr.toml packet definitions. Its documented components generate Rust and TypeScript models and a WebAssembly client, with a routing broker and transport layers for UDP, QUIC, and WebTransport.",
      highlights: ["Single packet definition in badr.toml", "Generated models and clients", "Binary protocol and packet routing", "CLI, broker, and client components"],
    },
    gallery: [{ src: "/project-shots/api-badr-architecture.png", kind: "documentation", caption: { ar: "صورة معمارية من ملفات المشروع؛ ليست لقطة لواجهة تشغيل", en: "Architecture artwork from the project files, not an application screenshot" } }],
  },
  lumina: {
    ar: {
      problem: "تقتصر مكتبات الواجهات التقليدية غالبًا على مكوّنات مسطحة؛ بينما يحتاج بعض المنتجات إلى تباين OLED عميق وحركة ملموسة ومكوّنات جاهزة للتجارب الغنية.",
      solution: "LuminaUI تقدم نظام مكوّنات React بهوية OLED، مع حواف زجاجية مضيئة وحركة نابضية ومكوّنات متخصصة، من دون فرضها كهوية لهذا المعرض.",
      implementation: "مكتبة React وTypeScript مع أنماط جاهزة وتهيئة عبر CLI. يتضمن توثيقها Dynamic Island ومجموعة CinemaKit لمكوّنات الوسائط؛ ويمكن استيراد المكوّنات والأنماط إلى تطبيقات أخرى.",
      highlights: ["تباين OLED ومؤثرات زجاج وإضاءة", "مكوّنات React قابلة لإعادة الاستخدام", "Dynamic Island وCinemaKit", "تهيئة عبر CLI وأنماط جاهزة"],
    },
    en: {
      problem: "Many UI libraries stop at flat components, while some products call for deep OLED contrast, tactile motion, and richer ready-made interactions.",
      solution: "LuminaUI offers a React component system with an OLED aesthetic, luminous glass edges, spring motion, and specialized components. It is a project here, not this portfolio's design system.",
      implementation: "A React and TypeScript library with precompiled styles and CLI setup. Its documentation includes a Dynamic Island and the CinemaKit media component suite for use in other applications.",
      highlights: ["OLED contrast, glass, and light effects", "Reusable React components", "Dynamic Island and CinemaKit", "CLI setup and ready-to-import styles"],
    },
    gallery: [{ src: "/lumina-banner.svg", kind: "documentation", caption: { ar: "بانر التصميم الأصلي من توثيق LuminaUI، وليس لقطة لتطبيق", en: "Original design banner from the LuminaUI documentation, not an app screenshot" } }],
  },
};
