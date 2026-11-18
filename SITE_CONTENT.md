# مرجع شامل لمحتوى معرض أعمال بدر السلمي

> ملف مستقل يمكن إرساله إلى أي نموذج ذكاء اصطناعي لفهم الموقع ومحتواه الحالي. يعكس ملفات المشروع وقت كتابته؛ عند اختلافه مع الشيفرة تكون الملفات `src/i18n.ts` و`src/data/projects.ts` و`src/data/caseStudies.ts` و`src/App.tsx` هي المرجع النهائي. هذا **وصف للموقع** وليس نصًا يثبت إطلاق المنتجات أو نشر الموقع على Vercel.

## 1. التعريف بالموقع

- **المالك:** بدر السلمي / Badr Al-Sulami، مطوّر برمجيات مستقل.
- **الغرض:** معرض أعمال شخصي يشرح سبعة مشاريع من المنتجات الرقمية والواجهات البرمجية ومكتبات المطورين؛ ليس متجرًا، ولا يعرض أسعارًا، ولا يجمع بيانات عبر نموذج تواصل.
- **مستودع الموقع العام:** https://github.com/badralslmy/badr-portfolio
- **اللغات:** العربية افتراضيًا مع اتجاه RTL، والإنجليزية مع اتجاه LTR.
- **المظهر:** فاتح وداكن مع حفظ تفضيل المستخدم محليًا. عند عدم وجود اختيار محفوظ يتبع تفضيل النظام.
- **التقنية:** React 19 وTypeScript وVite 6. أيقونات الواجهة Hugeicons، وشعارات التقنيات المعروفة من `simple-icons`.
- **الهوية:** تصميم مستقل خاص بمعرض بدر؛ **LuminaUI مشروع معروض وليس نظام تصميم الموقع**.
- **الصفحات:** الصفحة الرئيسية `/` وصفحات المشاريع `/projects/hesah` و`/projects/daris` و`/projects/arx` و`/projects/trex` و`/projects/mapx` و`/projects/api-badr` و`/projects/lumina`. يوجد أيضًا أقسام الصفحة الرئيسية `#home` و`#work` و`#about` و`#contact`.
- **عدد المشاريع وترتيبها:** 7؛ ثلاثة منتجات (حِصّة، دارس، ARX)، ثلاث واجهات/بنى تحتية (Trex، Mapx، API-BADR)، ومكتبة واحدة (LuminaUI). يظهر هذا الترتيب نفسه في البطاقات والتنقل «المشروع التالي».
- **النشر:** المستودع مرفوع إلى GitHub ومجهز تقنيًا للاستيراد في Vercel؛ لا يفترض هذا الملف وجود رابط منشور للموقع على Vercel.

## 2. هيكل الصفحات وتجربة الاستخدام

1. **الترويسة:** شعار بدر `public/badr-mark.svg`، روابط الأعمال/عنّي/تواصل، زر تبديل اللغة، زر الوضع الفاتح/الداكن، رابط GitHub، وقائمة تنقل للهواتف.
2. **المقدمة:** تعريف قصير ببدر، عنوان كبير، وصف، رابط «اكتشف أعمالي» وآخر «تعرّف عليّ»، عدّاد 07 مشاريع و03 مجالات، وشبكة شعارات المشاريع السبعة. الضغط على شعار يفتح صفحة تفاصيل المشروع.
3. **الأعمال:** مجموعات مرتبة بحسب المجال، فلاتر الكل/منتجات/واجهات برمجية/مكتبات، بحث بالاسم والوصف والمجال والتقنية في اللغتين، وعدد النتائج. البطاقات شبيهة بمتاجر التطبيقات وتعرض شعار المشروع واسمه وتصنيفه ووصفه وتقنياته؛ الضغط على أي بطاقة يفتح صفحة التفاصيل الداخلية، وليس الرابط الخارجي.
4. **صفحة التفاصيل لكل مشروع:** رابط العودة للمشاريع، شعار واسم وتصنيف وملخص، رابط خارجي فقط إن كان مؤكدًا، أقسام المشكلة والحل وكيف بُني وأبرز ما يقدمه، قائمة التقنيات، معرض صور مع وصف ونوع كل صورة، ورابط المشروع التالي. يمكن فتح الصور بحجمها الأصلي في تبويب جديد.
5. **عنّي:** نبذة بدر ومجالات العمل.
6. **التواصل في التذييل:** رقم الهاتف والبريد الإلكتروني كرابطين قابلين للضغط، رابط GitHub، وحقوق السنة الحالية ورابط العودة للأعلى.
7. **التنقل:** روابط التفاصيل تعمل بالفتح المباشر والتحديث، والتنقل الداخلي يستخدم History API مع دعم رجوع/تقدم المتصفح. إعداد Vercel يعيد مسارات التفاصيل إلى التطبيق.

## 3. النصوص العامة الظاهرة — عربي / English

### الترويسة والمقدمة

| الموضع | العربية | English |
|---|---|---|
| عنوان تبويب الرئيسية | برمجيات بدر السلمي — أعمال ومنتجات رقمية | Badr Al-Sulami — Software & Digital Products |
| وصف الصفحة | اكتشف مشاريع بدر السلمي: منتجات رقمية، واجهات برمجية ومكتبات للمطورين. | Explore Badr Al-Sulami's products, APIs, and developer tools. |
| الاسم | بدر السلمي | Badr Al-Sulami |
| العبارة بجانب الاسم | برمجيات وتجارب رقمية | Software & digital experiences |
| التنقل | الأعمال · عنّي · تواصل | Work · About · Contact |
| التوصيف | مطوّر برمجيات مستقل | Independent software developer |
| العنوان الكبير | أحوّل الأفكار إلى **برمجيات** تُستخدم. | Turning ideas into **software** people use. |
| وصف المقدمة | أبني منتجات رقمية، واجهات برمجية، وأدوات للمطورين. هنا مساحة تجمع ما عملت عليه؛ من الفكرة الأولى إلى المنتج الذي يمكنك تجربته اليوم. | I build digital products, APIs, and tools for developers. This is a space for the work behind each idea, from its first sketch to a product you can try today. |
| أزرار المقدمة | اكتشف أعمالي · تعرّف عليّ | Explore my work · About me |
| العدّادات | 07 مشاريع معروضة · 03 مجالات مختلفة | 07 projects · 03 disciplines |
| وصف شبكة الشعارات | شعارات مختارة من مشاريعي | Selected project icons |
| العبارة على الصورة | صُنعت بعناية — بدر السلمي | BUILT WITH INTENTION — BADR AL-SULAMI |

### معرض الأعمال

| الموضع | العربية | English |
|---|---|---|
| رقم القسم | 01 — مختارات من أعمالي | 01 — Selected work |
| العنوان | أعمال تتحدث عن نفسها. | Work that speaks for itself. |
| الوصف | منتجات وأدوات صنعتها لحل مشكلات حقيقية. تصفّحها واكتشف ما وراء كل فكرة. | Products and tools built around real problems. Browse the work and discover the thinking behind it. |
| الفلاتر | الكل · منتجات · واجهات برمجية · مكتبات | All · Products · APIs · Libraries |
| البحث | ابحث عن مشروع... | Search projects... |
| ترتيب النتائج | المشاريع · مرتبة حسب المجال ↓ | Projects · Grouped by discipline ↓ |
| مجموعة المنتجات | منتجات رقمية — تجارب موجهة للناس والعمل اليومي. | Digital products — Experiences made for people and everyday work. |
| مجموعة الواجهات | واجهات وبنية تحتية — أدوات تربط البيانات وتسهّل البناء عليها. | APIs & infrastructure — Tools that connect data and help others build. |
| مجموعة المكتبات | مكتبات وأدوات — أشياء صُنعت ليستفيد منها مطوّرون آخرون. | Libraries & tools — Things made for other developers to use. |
| دعوة البطاقة | اكتشف التفاصيل | Explore details |
| لا توجد نتائج | لا توجد نتائج مطابقة — جرّب البحث باسم أو مجال آخر. — عرض جميع المشاريع | No matching projects — Try another name or category. — Show all projects |
| ختام المعرض | وهذه ليست كل الحكاية. المزيد من المشاريع سيُضاف قريبًا | There's more to the story. More projects coming soon |

### التفاصيل وعنّي والتواصل

| الموضع | العربية | English |
|---|---|---|
| العودة | العودة إلى المشاريع | Back to projects |
| نوع الصفحة | قصة المشروع | The project story |
| عناوين أقسام المشروع | المشكلة · الحل · كيف بُني؟ · أبرز ما يقدمه · صور من المشروع | The problem · The solution · How it was built · What it offers · Project visuals |
| وصف المعرض | لقطات من الواجهات المنشورة أو صور من توثيق المشروع. | Screenshots of live interfaces or artwork from the project's documentation. |
| أنواع الصور | لقطة شاشة · صورة توثيقية | Screenshot · Documentation artwork |
| زر الوجهة | زيارة المشروع | Visit live project |
| إن لم توجد وجهة مؤكدة | لا يوجد رابط عام مؤكّد لهذا المشروع. | No confirmed public link is available for this project. |
| الانتقال | المشروع التالي | Next project |
| عنّي — رقم وعنوان | 02 — ما وراء المشاريع · أحبّ أن تكون الفكرة مفيدة. | 02 — Beyond the projects · I like ideas that matter. |
| عنّي — النص الأول | أنا بدر السلمي. أصنع البرمجيات بفضول تجاه المشكلات التي تستحق الحل، واهتمام بالتجربة التي تبقى بعد كتابة آخر سطر من الكود. | I'm Badr Al-Sulami. I build software with curiosity for problems worth solving and care for the experience that remains after the last line of code. |
| عنّي — النص الثاني | هذا المعرض بداية لعرض منتجاتي وأدواتي؛ وسيكبر مع الأعمال القادمة. | This portfolio is a starting point for my products and tools, with more work to come. |
| عنّي — المجالات | منتجات رقمية · واجهات برمجية · أدوات للمطورين | Digital products · APIs · Developer tools |
| التواصل — رقم وعنوان | 03 — ما التالي؟ · لنبنِ شيئًا يستحق. | 03 — What's next? · Let's build something useful. |
| التواصل — الوصف | لديك فكرة أو مشروع؟ يسعدني تواصلك عبر الهاتف أو البريد الإلكتروني. | Have an idea or a project? Get in touch by phone or email. |
| رابط GitHub | زيارة GitHub | Visit GitHub |
| السطر الأخير | صُنع بعناية، من الفكرة حتى التفاصيل. · العودة للأعلى ↑ | Made with care, from idea to detail. · Back to top ↑ |

نصوص إضافية وظيفية: زر اللغة يعرض `EN` عند العربية و`عربي` عند الإنجليزية؛ زرا القائمة والسمات مترجمان؛ اسم الفئة المعروض على البطاقة وترجمة شارات التقنيات يتبعان اللغة. توجد تسمية وصول للشعار والبحث ومسح البحث والفلاتر والاتصال والبريد والرابط الخارجي.

النصوص الإنجليزية الثابتة بصريًا في التصميم: `SELECTED WORK / 001` و`↗ 07 PROJECTS` على لوحة المقدمة، `01 / PRODUCTS` و`02 / INFRASTRUCTURE` و`03 / OPEN SOURCE` فوق المجموعات، و`PRODUCT` و`API` و`LIBRARY` على نوع البطاقة، و`LET'S MAKE SOMETHING USEFUL ↗` في التذييل. الرقم `07` يتولد من عدد المشاريع الفعلي، وكذلك الأرقام بجانب كل مجموعة وبطاقة. زر تبديل الوضع بالعربية: «تفعيل الوضع الداكن»/«تفعيل الوضع الفاتح» وبالإنجليزية: “Switch to dark mode”/“Switch to light mode”. زر القائمة: «فتح القائمة»/«إغلاق القائمة» و“Open menu”/“Close menu”. زر مسح البحث: «مسح البحث»/“Clear search”.

## 4. الاتصال والروابط الثابتة

| العنصر | النص/الرابط |
|---|---|
| الهاتف الظاهر | `0545932092` |
| وجهة زر الهاتف | `tel:+966545932092` |
| البريد الظاهر ووجهته | `bdralslmy876@gmail.com` → `mailto:bdralslmy876@gmail.com` |
| GitHub الشخصي | https://github.com/badralslmy |
| مستودع الموقع | https://github.com/badralslmy/badr-portfolio |

الرقم والبريد معلومات نشرها صاحب الموقع صراحة في التذييل. لا توجد استمارة داخلية أو نظام مراسلة داخل الموقع.

## 5. دراسات المشاريع — النصوص المعروضة

### 5.1 حِصّة / Hesah

- **المسار:** `/projects/hesah`؛ **النوع:** منتج؛ **التصنيف:** إدارة الأعمال / Business management.
- **السطر التعريفي:** `HESAH / BUSINESS OS`.
- **الشعار:** `public/hesah-icon.png`.
- **التقنيات والشارات:** PWA، نقاط البيع / Point of sale، إدارة الحجوزات / Bookings، نظام عمولات / Commissions.
- **الرابط الخارجي:** https://hesah.site
- **وصف البطاقة بالعربية:** نظام لإدارة الأعمال بنظام العمولات، يجمع الحجوزات ونقاط البيع وإدارة الموظفين والمخزون والتقارير في مكان واحد.
- **Card description (EN):** A commission-based business platform bringing bookings, point of sale, staff, inventory, and reporting together.

**المشكلة:** تتوزع أعمال المنشآت التي تعتمد العمولات بين دفتر حجوزات، نقاط بيع، ملفات موظفين وتقارير منفصلة. هذا التشتت يجعل متابعة العمل والأرقام اليومية أصعب.

**الحل:** حِصّة تجمع مسار العمل في نظام واحد: من الحجز والخدمة إلى المبيعات والعمولات والمخزون، مع لوحة تعطي صاحب العمل صورة أوضح عمّا يحدث.

**كيف بُني؟** تطبيق ويب عربي مبني بـReact وTypeScript، مع واجهة قابلة للتثبيت كتطبيق PWA. يعتمد على Supabase للمصادقة والبيانات، وتضم بنيته إعدادًا لفصل بيانات العملاء في نشرات مستقلة.

**أبرز ما يقدمه:** حجوزات ونقاط بيع في تدفق واحد؛ إدارة الموظفين والعمولات والمخزون؛ تقارير تساعد على متابعة أداء العمل؛ واجهة عربية تعمل من المتصفح والهاتف.

**The problem:** Commission-based businesses often spread bookings, sales, staff records, and reports across separate tools. That fragmentation makes daily operations and numbers harder to follow.

**The solution:** Hesah brings the workflow together: from appointments and services to sales, commissions, inventory, and reporting in one place.

**How it was built:** An Arabic-first React and TypeScript web app with PWA support. Supabase handles authentication and data, while the codebase includes groundwork for isolated customer deployments.

**What it offers:** Bookings and point of sale in one flow; Staff, commissions, and inventory management; Operational reports for day-to-day decisions; Arabic interface on desktop and mobile.

**المعرض بترتيب العرض / Gallery:**

1. `/project-shots/hesah/business-portal.webp` — لقطة شاشة: «بوابة مركز حِصّة للخدمات» / “Hesah service center portal”.
2. `/project-shots/hesah/login.webp` — لقطة شاشة: «صفحة تسجيل دخول المؤسسة» / “Organization sign-in screen”.
3. `/hesah.webp` — لقطة شاشة: «الصفحة التعريفية المنشورة لنظام حِصّة» / “Hesah's live product landing page”. **الصورة السابقة محفوظة.**

### 5.2 دارس / Daris

- **المسار:** `/projects/daris`؛ **النوع:** منتج؛ **التصنيف:** التعليم / Education.
- **السطر التعريفي:** `DARIS / ACADEMIC PLATFORM`.
- **الشعار:** `public/daris-icon.svg`.
- **التقنيات والشارات:** PWA، DARIS Studio، تحليلات / Analytics، منصة أكاديمية / Academic platform.
- **الرابط الخارجي:** https://dar-is.vercel.app
- **وصف البطاقة بالعربية:** منصة إدارة أكاديمية تربط الطلاب وأعضاء هيئة التدريس والإدارة، مع خدمات المقررات والتحليلات وأدوات DARIS Studio.
- **Card description (EN):** An academic platform connecting students, faculty, and administration with course services, analytics, and DARIS Studio.

**المشكلة:** يحتاج الطالب وعضو هيئة التدريس والإدارة إلى بيانات مترابطة، لكن تعدد القنوات والأدوات يصعّب متابعة المقررات والتواصل والتقارير.

**الحل:** دارس يضع الأطراف الثلاثة في منصة أكاديمية واحدة، مع بوابات بحسب الدور وخدمات للمقررات والرسائل والتحليلات وأداة DARIS Studio.

**كيف بُني؟** تطبيق React وTypeScript متصل بـAppwrite للمصادقة والبيانات والملفات والتحديثات الفورية. يستخدم طبقات تخزين مؤقت في الذاكرة وIndexedDB قبل مزامنة البيانات مع المصدر السحابي.

**أبرز ما يقدمه:** بوابات للطلاب وأعضاء هيئة التدريس والإدارة؛ المقررات والرسائل ومتابعة البيانات؛ DARIS Studio لإنشاء التقارير؛ مزامنة فورية وتخزين مؤقت لتجربة أسرع.

**The problem:** Students, faculty, and administrators need connected information, but scattered tools make courses, communication, and reporting difficult to coordinate.

**The solution:** Daris brings the three groups into one academic platform with role-based portals, course services, messaging, analytics, and DARIS Studio.

**How it was built:** Built with React and TypeScript. Appwrite provides authentication, data, file storage, and realtime updates, with in-memory and IndexedDB caching before cloud synchronization.

**What it offers:** Role-based student, faculty, and admin portals; Courses, messaging, and academic data; DARIS Studio for report creation; Realtime updates with layered caching.

**المعرض بترتيب العرض / Gallery:**

1. `/project-shots/daris/login.webp` — لقطة شاشة: «واجهة تسجيل الدخول إلى دارس» / “Daris sign-in screen”.
2. `/project-shots/daris/schedule.webp` — لقطة شاشة: «جدول الدراسة والمهام» / “Study schedule and tasks”.
3. `/project-shots/daris/courses.webp` — لقطة شاشة: «صفحة المقررات الدراسية» / “Courses page”.
4. `/project-shots/daris/messages.webp` — لقطة شاشة: «واجهة الرسائل في دارس» / “Daris messaging interface”.
5. `/project-shots/daris/profile.webp` — لقطة شاشة: «صفحة الحساب والإعدادات» / “Account and settings page”.
6. `/project-shots/daris/studio.webp` — لقطة شاشة: «واجهة أدوات DARIS Studio» / “DARIS Studio tools”.
7. `/daris.webp` — لقطة شاشة: «الصفحة التعريفية المنشورة لمنصة دارس» / “Daris's live academic platform landing page”. **الصورة السابقة محفوظة.**

### 5.3 ARX

- **المسار:** `/projects/arx`؛ **النوع:** منتج؛ **التصنيف:** الترفيه والوسائط / Entertainment & media.
- **السطر التعريفي:** `CINEMA & ANIME HUB`.
- **الشعار:** `public/arx-icon.svg`.
- **التقنيات والشارات:** React، TypeScript، Tauri، SQLite.
- **الرابط الخارجي:** لا يوجد رابط عام مؤكّد؛ لا تعرض الصفحة زر زيارة خارجيًا.
- **وصف البطاقة بالعربية:** تطبيق للويب وسطح المكتب يجمع اكتشاف الأفلام والأنمي، القوائم الشخصية، متابعة المشاهدة، جداول العرض، والتكامل مع مصادر الوسائط في تجربة واحدة.
- **Card description (EN):** A web and desktop home for discovering movies and anime, managing watchlists, tracking progress, exploring schedules, and connecting media sources.

**المشكلة:** تجربة متابعة الأفلام والأنمي تتنقل غالبًا بين فهارس مختلفة، قوائم مشاهدة منفصلة، ومعلومات حلقات ومصادر وسائط لا تتصل ببعضها.

**الحل:** ARX يجمع الاكتشاف والقوائم والتقدم والمواعيد والتكاملات في تجربة واحدة، مع ملفات شخصية مستقلة للسينما والأنمي.

**كيف بُني؟** واجهة React وTypeScript تعمل للويب، ونسخة سطح مكتب عبر Tauri وRust. يستخدم تطبيق سطح المكتب SQLite لحفظ الملفات الشخصية والإعدادات والقوائم والتقدم، مع مزامنة اختيارات الأنمي مع AniList عند ربط الحساب.

**أبرز ما يقدمه:** ملفات شخصية للسينما والأنمي؛ قوائم مشاهدة وتقدم ومواعيد عرض؛ تجربة ويب وتطبيق سطح مكتب؛ تكاملات للبيانات والمصادر الخارجية بحسب إعداد المستخدم.

**The problem:** Following movies and anime often means jumping between catalogs, watchlists, episode schedules, and disconnected media sources.

**The solution:** ARX combines discovery, personal lists, progress, schedules, and integrations in one experience, with separate cinema and anime profiles.

**How it was built:** A React and TypeScript web interface with a Tauri and Rust desktop build. The desktop app stores profiles, settings, lists, and progress in SQLite, and can sync anime lists with AniList when connected.

**What it offers:** Separate cinema and anime profiles; Watchlists, progress, and airing schedules; Web and desktop experiences; Optional metadata and media-source integrations.

**المعرض بترتيب العرض / Gallery:**

1. `/project-shots/arx/home.webp` — لقطة شاشة: «واجهة المشاهدة الرئيسية في ARX» / “ARX watch home screen”.
2. `/project-shots/arx/discover.webp` — لقطة شاشة: «استكشاف الأفلام حسب التصنيف والمنصة» / “Discover films by category and provider”.
3. `/project-shots/arx/episodes.webp` — لقطة شاشة: «تفاصيل المسلسل وقائمة الحلقات» / “Series details and episode list”.
4. `/project-shots/arx/profile.webp` — لقطة شاشة: «ملف المستخدم ونشاط المشاهدة» / “User profile and viewing activity”.
5. `/project-shots/arx/settings.webp` — لقطة شاشة: «إعدادات اللغة والمشغّل» / “Language and player settings”.
6. `/project-shots/arx/profiles.webp` — لقطة شاشة: «اختيار الملفات الشخصية للسينما والأنمي» / “Choose a cinema or anime profile”.
7. `/project-shots/arx-desktop.png` — لقطة شاشة: «شاشة الإعداد الأولى في نسخة ARX المحلية، دون بيانات مستخدم» / “Fresh-install setup screen from a local ARX build, without user data”. **الصورة السابقة محفوظة.**

### 5.4 Trex

- **المسار:** `/projects/trex`؛ **النوع:** واجهة برمجية؛ **التصنيف:** واجهات برمجية / APIs.
- **السطر التعريفي:** `UNIFIED SUBTITLE ROUTER`.
- **الشعار:** `public/trex-mark.svg`.
- **التقنيات والشارات:** Cloudflare Workers، Hono، OpenAPI.
- **الرابط الخارجي:** https://trex.arxrngine.workers.dev
- **وصف البطاقة بالعربية:** واجهة API موحّدة للبحث عن الترجمات عبر SubDL وSubSource بالتوازي، مع نتائج مدمجة وملعب تفاعلي وتوثيق OpenAPI.
- **Card description (EN):** One API for subtitle search across SubDL and SubSource, with merged results, an interactive playground, and OpenAPI documentation.

**المشكلة:** البحث عن ترجمة لفيلم أو حلقة عبر أكثر من مزود يعني التعامل مع واجهات مختلفة ومفاتيح ونتائج غير موحدة.

**الحل:** Trex يوفر نقطة دخول واحدة تبحث بالتوازي لدى SubDL وSubSource، ثم تعرض نتائج موحدة مع إبقاء استجابة كل مصدر منفصلة عند الحاجة.

**كيف بُني؟** واجهة API مبنية بـHono على Cloudflare Workers. تتضمن توثيق OpenAPI وملعبًا تجريبيًا، وتقبل مفاتيح المزودين من الطلب أو إعداد الخادم بدل وضعها في الواجهة.

**أبرز ما يقدمه:** بحث متوازٍ في مصدري ترجمة؛ نتائج موحدة مع حالة كل مزود؛ توثيق OpenAPI وملعب لتجربة الطلبات؛ استعلامات بحسب العنوان أو المعرّف أو اسم الملف.

**The problem:** Subtitle search across multiple providers requires different APIs, credentials, and response formats.

**The solution:** Trex provides a single entry point that searches SubDL and SubSource in parallel, returns unified results, and keeps each provider's raw response available.

**How it was built:** A Hono API running on Cloudflare Workers. It includes OpenAPI documentation and an interactive playground, with provider keys supplied per request or through server configuration.

**What it offers:** Parallel search across two subtitle providers; Unified results and per-provider status; OpenAPI documentation and live playground; Title, identifier, and filename-based queries.

**المعرض:** `/project-shots/trex-docs.png` — لقطة شاشة: «لقطة حقيقية لواجهة توثيق Trex المنشورة» / “Real screenshot of the published Trex API documentation”.

### 5.5 Mapx

- **المسار:** `/projects/mapx`؛ **النوع:** واجهة برمجية؛ **التصنيف:** واجهات برمجية / APIs.
- **السطر التعريفي:** `MEDIA METADATA BRIDGE`.
- **الشعار:** `public/mapx-mark.svg`.
- **التقنيات والشارات:** Cloudflare Workers، Supabase، Metadata API.
- **الرابط الخارجي:** https://animapx.arxrngine.workers.dev
- **وصف البطاقة بالعربية:** جسر بيانات يربط معرّفات الأنمي بقواعد بيانات الأفلام والمسلسلات، ويدعم الاستعلام الجماعي والحساب التلقائي لأرقام الحلقات.
- **Card description (EN):** A metadata bridge mapping anime IDs to movie and TV databases, with batch lookups and episode-number alignment.

**المشكلة:** معرّفات الأنمي في AniList وMAL وAniDB لا تطابق مباشرة معرّفات TMDB وTVDB وIMDb، كما تختلف أرقام الحلقات والمواسم بين قواعد البيانات.

**الحل:** Mapx يحوّل بين هذه المعرّفات في طلب واحد أو دفعات، ويدعم البحث العكسي وحساب انتقال الحلقة إلى موسمها المقابل.

**كيف بُني؟** واجهة على Cloudflare Workers تقرأ بيانات المطابقات من Supabase. يعتمد خط مزامنة البيانات على Magret لتحويل مجموعات AniBridge إلى جداول مفهرسة، وتعرض الواجهة توثيقًا وملعبًا تفاعليًا.

**أبرز ما يقدمه:** ربط فهارس الأنمي بقواعد بيانات الأفلام والمسلسلات؛ استعلامات مفردة ودفعية وبحث عكسي؛ حساب إزاحات الحلقات والمواسم؛ قاعدة بيانات مفهرسة وتوثيق تفاعلي.

**The problem:** Anime IDs from AniList, MAL, and AniDB do not directly match TMDB, TVDB, or IMDb IDs, and episode numbering varies across catalogs.

**The solution:** Mapx resolves those identifiers in single or batch requests, supports reverse lookups, and maps episode numbers to their corresponding seasons.

**How it was built:** A Cloudflare Workers API backed by Supabase. The Magret synchronization pipeline converts AniBridge mappings into indexed tables, while the API site offers documentation and a playground.

**What it offers:** Anime-to-global-catalog identifier mapping; Single, batch, and reverse lookups; Season and episode offset calculations; Indexed data and interactive documentation.

**المعرض:** `/project-shots/mapx-docs.png` — لقطة شاشة: «لقطة من واجهة API المنشورة؛ يظهر فيها اسم Magret المستخدم في التوثيق» / “Published API documentation; the site currently uses the Magret name”.

**تنبيه تسمية:** اسم المشروع المعروض في المعرض **Mapx** لا AnimaPX. الرابط الموروث يحتوي `animapx`، وموقع التوثيق المنشور يعرض **Magret**؛ لا تغيّر اسم المشروع الظاهر بسبب عنوان الرابط أو اسم التوثيق.

### 5.6 API-BADR

- **المسار:** `/projects/api-badr`؛ **النوع:** واجهة/بنية تحتية؛ **التصنيف:** واجهات برمجية / APIs.
- **السطر التعريفي:** `BINARY NETWORKING ENGINE`.
- **الشعار:** `public/api-badr-icon.svg`، رسم مخصص للمعرض وليس شعارًا رسميًا.
- **التقنيات والشارات:** Rust، WebAssembly، UDP / QUIC.
- **الرابط الخارجي:** لا يوجد رابط عام مؤكّد؛ لا تعرض الصفحة زر زيارة خارجيًا.
- **وصف البطاقة بالعربية:** معمارية شبكية بلغة Rust تعتمد حزمًا ثنائية بدل JSON، مع توليد نماذج Rust وTypeScript وعميل WebAssembly من تعريف واحد.
- **Card description (EN):** A Rust networking architecture with compact binary packets instead of JSON, generating Rust, TypeScript, and WebAssembly clients from one definition.

**المشكلة:** في الأنظمة الحساسة للزمن، قد تضيف الرسائل النصية ومعالجة JSON وتكرار تعريف النماذج بين العميل والخادم عبئًا يصعب ضبطه.

**الحل:** API-BADR يقترح تعريفًا واحدًا للرسائل الثنائية ومساراتها، بحيث تُولَّد منه نماذج العمل والعملاء بدل إعادة كتابتها لكل بيئة.

**كيف بُني؟** معمارية Rust تعتمد ملف badr.toml لتعريف الحزم، ومكوّنات لتوليد نماذج Rust وTypeScript وعميل WebAssembly، إلى جانب Broker للتوجيه وطبقات نقل تشمل UDP وQUIC وWebTransport كما في توثيق المشروع.

**أبرز ما يقدمه:** تعريف موحد للحزم في badr.toml؛ توليد نماذج وعملاء لعدة بيئات؛ بروتوكول ثنائي وتوجيه للحزم؛ أدوات CLI ومكوّنات Broker وClient.

**The problem:** In latency-sensitive systems, text payloads, JSON parsing, and repeated client/server model definitions can add overhead and drift.

**The solution:** API-BADR explores a single definition for binary packets and routes, generating models and clients instead of rewriting them in each environment.

**How it was built:** A Rust architecture based on badr.toml packet definitions. Its documented components generate Rust and TypeScript models and a WebAssembly client, with a routing broker and transport layers for UDP, QUIC, and WebTransport.

**What it offers:** Single packet definition in badr.toml; Generated models and clients; Binary protocol and packet routing; CLI, broker, and client components.

**المعرض:** `/project-shots/api-badr-architecture.png` — **صورة توثيقية لا لقطة شاشة تشغيل**: «صورة معمارية من ملفات المشروع؛ ليست لقطة لواجهة تشغيل» / “Architecture artwork from the project files, not an application screenshot”.

### 5.7 LuminaUI

- **المسار:** `/projects/lumina`؛ **النوع:** مكتبة؛ **التصنيف:** مكتبات وأدوات / Libraries & tools.
- **السطر التعريفي:** `OLED REACT UI SYSTEM`.
- **الشعار:** `public/lumina-icon.svg`، رسم مخصص للمعرض وليس شعارًا رسميًا.
- **التقنيات والشارات:** React، TypeScript، Tailwind CSS.
- **الرابط الخارجي:** https://github.com/badralslmy/LuminaUI
- **وصف البطاقة بالعربية:** مكتبة مكوّنات React بهوية OLED، حواف زجاجية مضيئة، وحركة تفاعلية، متاحة لبناء واجهات تطبيقات أخرى.
- **Card description (EN):** A React component library with an OLED identity, luminous glass edges, and interactive motion for building other applications.

**المشكلة:** تقتصر مكتبات الواجهات التقليدية غالبًا على مكوّنات مسطحة؛ بينما يحتاج بعض المنتجات إلى تباين OLED عميق وحركة ملموسة ومكوّنات جاهزة للتجارب الغنية.

**الحل:** LuminaUI تقدم نظام مكوّنات React بهوية OLED، مع حواف زجاجية مضيئة وحركة نابضية ومكوّنات متخصصة، من دون فرضها كهوية لهذا المعرض.

**كيف بُني؟** مكتبة React وTypeScript مع أنماط جاهزة وتهيئة عبر CLI. يتضمن توثيقها Dynamic Island ومجموعة CinemaKit لمكوّنات الوسائط؛ ويمكن استيراد المكوّنات والأنماط إلى تطبيقات أخرى.

**أبرز ما يقدمه:** تباين OLED ومؤثرات زجاج وإضاءة؛ مكوّنات React قابلة لإعادة الاستخدام؛ Dynamic Island وCinemaKit؛ تهيئة عبر CLI وأنماط جاهزة.

**The problem:** Many UI libraries stop at flat components, while some products call for deep OLED contrast, tactile motion, and richer ready-made interactions.

**The solution:** LuminaUI offers a React component system with an OLED aesthetic, luminous glass edges, spring motion, and specialized components. It is a project here, not this portfolio's design system.

**How it was built:** A React and TypeScript library with precompiled styles and CLI setup. Its documentation includes a Dynamic Island and the CinemaKit media component suite for use in other applications.

**What it offers:** OLED contrast, glass, and light effects; Reusable React components; Dynamic Island and CinemaKit; CLI setup and ready-to-import styles.

**المعرض:** `/lumina-banner.svg` — **صورة توثيقية لا لقطة شاشة تشغيل**: «بانر التصميم الأصلي من توثيق LuminaUI، وليس لقطة لتطبيق» / “Original design banner from the LuminaUI documentation, not an app screenshot”.

## 6. الأصول البصرية ومصدرها

- شعار بدر: `public/badr-mark.svg`، مستخدم في الترويسة والتذييل وأيقونة التبويب.
- شعار حِصّة `public/hesah-icon.png` من أيقونة التطبيق المنشورة؛ شعارات ARX وTrex وMapx من أصول مشروع ARX المحلية؛ وشعارات دارس وAPI-BADR وLuminaUI رسومات SVG مخصصة للمعرض، **ليست شعارات رسمية لتلك المشاريع**.
- صور حِصّة ودارس القديمة `public/hesah.webp` و`public/daris.webp` تُظهر الصفحات التعريفية؛ الصور الإضافية في `public/project-shots/hesah/` و`public/project-shots/daris/` من اللقطات التي قدمها صاحب المشاريع، وحُوّلت إلى WebP. لم تُحذف الصور القديمة.
- صور ARX الست في `public/project-shots/arx/` من لقطات قدمها صاحب المشروع، وحُوّلت إلى WebP؛ `public/project-shots/arx-desktop.png` شاشة إعداد أولي من نسخة محلية بلا بيانات مستخدم، وما زالت محفوظة في المعرض.
- `public/project-shots/trex-docs.png` و`public/project-shots/mapx-docs.png` لقطتان لواجهتي التوثيق المنشورتين. الصورة الثانية تعرض اسم Magret في التوثيق.
- `public/project-shots/api-badr-architecture.png` صورة معمارية من ملفات API-BADR، و`public/lumina-banner.svg` بانر توثيق LuminaUI؛ لا تقدمهما على أنهما صور لواجهة تطبيق قيد التشغيل.
- تُستخدم أسماء صور المعرض وأوصافها البديلة باللغتين، وتفتح الصورة كاملة عند النقر. أول صورة في معارض المشاريع متعددة الصور بارزة، والبقية شبكية على الشاشات الواسعة وعمودية على الهاتف.
- جميع مسارات الصور في قائمة المشروع تبدأ بـ`/` على الويب؛ ملفها الفعلي داخل `public/` في المستودع.

## 7. التصميم والاستجابة

- لغة بصرية نظيفة ذات خلفيات عاجية/بيضاء في الوضع الفاتح، لون نص داكن، ولمسات زرقاء/بنفسجية، ومناطق داكنة للتذييل. يظهر الوضع الداكن بخلفيات كحلية وبطاقات داكنة ونص فاتح. اللون الأزرق البارز نحو `#3343e8`، والخلفية الفاتحة `#f6f6f2`؛ القيم التنفيذية الدقيقة في `src/styles.css`.
- الخط العربي الأساسي **IBM Plex Sans Arabic**، والخط اللاتيني والأرقام البارزة **Space Grotesk**، مع خطوط النظام احتياطًا. الخطوط محمّلة من Google Fonts.
- بطاقات المشاريع تتمحور حول **أيقونات التطبيقات/المشاريع**، لا بانرات كبيرة؛ تظهر فئة المشروع ووصفه وشارات التقنيات بأسلوب قريب من متاجر التطبيقات. شارات التقنيات المعروفة تستخدم `simple-icons`، والبقية Hugeicons.
- المقدمة تعرض شبكة شعارات سبعة مشاريع على لوحة زرقاء، وأقسام العمل وعنّي والتواصل لها ترقيم بصري 01 و02 و03؛ صفحة التفاصيل تعرض ترقيمًا 01–05 للأقسام.
- أقسام الصفحة الرئيسية والتفاصيل تستجيب للشاشات الصغيرة. عند نحو 700px تصبح قائمة الترويسة قابلة للفتح، ويُعاد ترتيب المحتوى عموديًا؛ في صفحة التفاصيل ينتقل صندوق التقنيات قبل النص، ويصبح معرض الصور بعمود واحد.
- روابط الصور والخارجيات تفتح بتبويب جديد مع `noopener noreferrer`؛ روابط الهاتف `tel:` والبريد `mailto:`؛ اللغة والاتجاه والسمات محفوظة محليًا. واجهة البحث والفلاتر تعمل على جهة المتصفح دون خادم.

## 8. بنية المشروع والنشر

| الملف أو المجلد | دوره |
|---|---|
| `src/App.tsx` | أقسام الصفحة، البطاقات، صفحة التفاصيل، التفاعل، تبديل اللغة والسمات، التنقل والاتصال |
| `src/i18n.ts` | النصوص الثابتة بالعربية والإنجليزية والأسماء/التصنيفات/الأوصاف الإنجليزية للمشاريع |
| `src/data/projects.ts` | ترتيب المشاريع السبعة وتصنيفاتها وتقنياتها وروابطها وملخصات البطاقات بالعربية |
| `src/data/caseStudies.ts` | المشكلة والحل والتنفيذ والميزات والصور ووصفها باللغتين لكل مشروع |
| `src/styles.css` | تخطيط الواجهة والألوان والحالات الداكنة والاستجابة للهواتف |
| `public/` | الشعارات والصور وأيقونة التبويب |
| `index.html` | عنوان مبدئي ووصف مبدئي وإعداد اللغة والمظهر المبكر وتحميل الخطوط |
| `vercel.json` | إعداد Vite والبناء إلى `dist` وإعادة كتابة مسارات `/projects/:id` و`/projects/:id/` إلى `index.html` |
| `README.md` | خطوات التشغيل والنشر وملاحظات مصادر الصور |

**التشغيل المحلي:** `npm install` ثم `npm run dev`. **التحقق والبناء:** `npm run build` (TypeScript ثم Vite). **Vercel:** استيراد مستودع GitHub، الإطار Vite، أمر البناء `npm run build`، الناتج `dist`، لا متغيرات بيئة مطلوبة لهذا الموقع. الموقع معرض ثابت ولا يستضيف خلفية حِصّة أو دارس أو أي API من المشاريع داخله.

## 9. ضوابط الدقة عند تزويد نموذج ذكاء اصطناعي بهذا الملف

1. لا تخترع روابط منشورة لـARX أو API-BADR؛ صفحة كل منهما تقول إن لا رابط عامًا مؤكدًا.
2. لا تسمِّ Mapx باسم AnimaPX داخل المعرض. عنوان URL والتوثيق قد يحملان أسماء قديمة أو مغايرة، وهذا مذكور صراحة.
3. لا تجعل LuminaUI هوية واجهة المعرض؛ هو أحد المشاريع السبعة فقط.
4. لا تصف صور API-BADR وLuminaUI بأنها لقطات تطبيق تشغيل. لا تُزل لقطات حِصّة ودارس وARX القديمة عند اقتراح إضافات.
5. لا تدّع نشر معرض الأعمال على Vercel ما لم يُتحقق من رابط نشر فعلي؛ التجهيز والمستودع على GitHub لا يعنيان اكتمال النشر.
6. عند تعديل النصوص أو الصور أو الروابط لاحقًا، حدّث مصادرها في الشيفرة أولًا ثم حدّث هذا المرجع حتى يبقى مطابقًا للموقع.
