import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownLeft01Icon,
  ArrowLeft01Icon,
  ArrowUpLeft01Icon,
  CheckmarkCircle01Icon,
  CodeFolderIcon,
  GithubIcon,
  Layers01Icon,
  Menu01Icon,
  Search01Icon,
  Cancel01Icon,
  Tag01Icon,
  Globe02Icon,
  Database01Icon,
  ToolsIcon,
  CloudIcon,
  BookOpen01Icon,
  Moon02Icon,
  Sun03Icon,
  Call02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import {
  siCloudflareworkers,
  siHono,
  siOpenapiinitiative,
  siPwa,
  siReact,
  siRust,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siWebassembly,
  siTauri,
  siSqlite,
  type SimpleIcon,
} from "simple-icons";
import { projects, type Project } from "./data/projects";
import { caseStudies } from "./data/caseStudies";
import { projectEnglish, translations, type Language } from "./i18n";

type Filter = "all" | Project["kind"];

const filters: Filter[] = ["all", "product", "api", "library"];

const groups: { kind: Project["kind"]; eyebrow: string }[] = [
  { kind: "product", eyebrow: "01 / PRODUCTS" },
  { kind: "api", eyebrow: "02 / INFRASTRUCTURE" },
  { kind: "library", eyebrow: "03 / OPEN SOURCE" },
];

const brandIcons: Record<string, SimpleIcon> = {
  "PWA": siPwa,
  "Cloudflare Workers": siCloudflareworkers,
  "Hono": siHono,
  "OpenAPI": siOpenapiinitiative,
  "Supabase": siSupabase,
  "React": siReact,
  "TypeScript": siTypescript,
  "Tailwind CSS": siTailwindcss,
  "Rust": siRust,
  "WebAssembly": siWebassembly,
  "Tauri": siTauri,
  "SQLite": siSqlite,
};

const projectIcons: Record<string, string> = {
  hesah: "/hesah-icon.png",
  daris: "/daris-icon.svg",
  arx: "/arx-icon.svg",
  trex: "/trex-mark.svg",
  mapx: "/mapx-mark.svg",
  "api-badr": "/api-badr-icon.svg",
  lumina: "/lumina-icon.svg",
};

function TechnologyTag({ name, language }: { name: string; language: Language }) {
  const logo = brandIcons[name];
  const names = translations[language].techNames;
  const label = names[name as keyof typeof names] ?? name;
  return (
    <span className="technology-tag">
      <span className="technology-icon" aria-hidden="true">
        {logo ? <svg viewBox="0 0 24 24" aria-hidden="true" fill={`#${logo.hex}`}><path d={logo.path} /></svg> : <HugeiconsIcon icon={name.includes("API") ? CodeFolderIcon : name.includes("الحجوزات") ? BookOpen01Icon : name.includes("تحليلات") ? Database01Icon : name.includes("عمولات") ? Tag01Icon : name.includes("UDP") ? CloudIcon : name.includes("Studio") ? ToolsIcon : Globe02Icon} size={17} strokeWidth={1.8} />}
      </span>
      <span className="technology-name">{label}</span>
    </span>
  );
}

function Header({ language, onLanguageChange, theme, onThemeChange }: { language: Language; onLanguageChange: () => void; theme: "light" | "dark"; onThemeChange: () => void }) {
  const [open, setOpen] = useState(false);
  const t = translations[language];
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="/#home" className="logo" aria-label={t.home}><img className="brand-mark" src="/badr-mark.svg" alt="" /><span>{t.identity}<span className="logo-slash"> / </span><small>{t.identityTagline}</small></span></a>
        <nav className={`header-nav ${open ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
          <a href="/#work" onClick={() => setOpen(false)}>{t.navWork}</a>
          <a href="/#about" onClick={() => setOpen(false)}>{t.navAbout}</a>
          <a href="/#contact" onClick={() => setOpen(false)}>{t.navContact}</a>
        </nav>
        <div className="header-actions">
          <button className="utility-button language-button" type="button" onClick={onLanguageChange} aria-label={t.languageSwitch} title={t.languageSwitch}>{language === "ar" ? "EN" : "عربي"}</button>
          <button className="utility-button theme-button" type="button" onClick={onThemeChange} aria-label={theme === "light" ? t.themeDark : t.themeLight} title={theme === "light" ? t.themeDark : t.themeLight}><HugeiconsIcon icon={theme === "light" ? Moon02Icon : Sun03Icon} size={18} /></button>
        </div>
        <a className="header-link" href="https://github.com/badralslmy" target="_blank" rel="noopener noreferrer">GitHub <HugeiconsIcon icon={ArrowUpLeft01Icon} size={16} /></a>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-label={open ? t.menuClose : t.menuOpen} onClick={() => setOpen(!open)}><HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={23} /></button>
      </div>
    </header>
  );
}

function HeroVisual({ language, navigate }: { language: Language; navigate: (path: string) => void }) {
  const t = translations[language];
  return (
    <div className="hero-visual" aria-label={t.heroVisual}>
      <div className="visual-grid" />
      <div className="visual-monogram" aria-hidden="true">b.</div>
      <div className="visual-topline"><span>SELECTED WORK / 001</span><span>↗ {String(projects.length).padStart(2, "0")} PROJECTS</span></div>
      <div className="hero-apps">
        {projects.map((project) => <a className="hero-app" href={`/projects/${project.id}`} key={project.id} onClick={(event) => { if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); navigate(`/projects/${project.id}`); } }}><img src={projectIcons[project.id]} alt="" /><span>{language === "en" ? projectEnglish[project.id]?.name ?? project.name : project.name}</span></a>)}
      </div>
      <span className="visual-bottomline">{t.heroBottom}</span>
    </div>
  );
}

function Hero({ language, navigate }: { language: Language; navigate: (path: string) => void }) {
  const t = translations[language];
  return (
    <section id="home" className="wrap hero">
      <div className="hero-content">
        <div className="eyebrow"><span className="eyebrow-dot" /> {t.developer} <span className="eyebrow-index">/ 001</span></div>
        <h1>{t.heroFirst}<br />{t.heroSecond} <span className="highlight">{t.heroAccent}</span><br />{t.heroThird}<span className="period">.</span></h1>
        <p>{t.heroDescription}</p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#work">{t.explore} <HugeiconsIcon icon={ArrowDownLeft01Icon} size={19} /></a>
          <a className="button-text" href="#about">{t.learnMore} <HugeiconsIcon icon={ArrowLeft01Icon} size={17} /></a>
        </div>
        <div className="hero-meta"><span><strong>{String(projects.length).padStart(2, "0")}</strong> {t.projectCount}</span><span className="meta-divider" /><span><strong>{String(groups.length).padStart(2, "0")}</strong> {t.domainCount}</span></div>
      </div>
      <HeroVisual language={language} navigate={navigate} />
    </section>
  );
}

function ProjectCard({ project, index, language, navigate }: { project: Project; index: number; language: Language; navigate: (path: string) => void }) {
  const t = translations[language];
  const localized = language === "en" ? projectEnglish[project.id] : undefined;
  const name = localized?.name ?? project.name;
  return (
    <a className={`project-card ${project.id}`} href={`/projects/${project.id}`} id={project.id} aria-label={`${t.detailsLabel} ${name}`} onClick={(event) => { if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); navigate(`/projects/${project.id}`); } }}>
      <div className="app-card-top">
        <img className="app-icon" src={projectIcons[project.id]} alt={`${t.logoLabel} ${name}`} loading="lazy" />
        <div className="app-title"><span className="project-category">{localized?.category ?? project.category} / {String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><span className="project-subtitle">{project.subtitle}</span></div>
      </div>
      <p className="app-description">{localized?.description ?? project.description}</p>
      <div className="tech-list" aria-label={`${t.technologies} ${name}`}>{project.technologies.map((tech) => <TechnologyTag key={tech} name={tech} language={language} />)}</div>
      <div className="app-card-footer"><span className="project-visit">{t.details} <HugeiconsIcon icon={ArrowLeft01Icon} size={18} /></span><span className="project-kind">{project.kind === "product" ? "PRODUCT" : project.kind === "api" ? "API" : "LIBRARY"}</span></div>
    </a>
  );
}

function Work({ language, navigate }: { language: Language; navigate: (path: string) => void }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const t = translations[language];
  const visible = projects.filter((project) => {
    if (filter !== "all" && project.kind !== filter) return false;
    const english = projectEnglish[project.id];
    return `${project.name} ${project.category} ${project.description} ${english?.name ?? ""} ${english?.category ?? ""} ${english?.description ?? ""} ${project.technologies.join(" ")} ${project.technologies.map((tech) => t.techNames[tech as keyof typeof t.techNames] ?? tech).join(" ")}`.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  });
  return (
    <section className="work-section" id="work">
      <div className="wrap">
        <div className="section-header"><div><span className="section-index">{t.workIndex}</span><h2>{t.workTitle}<br /><em>{t.workAccent}</em></h2></div><p>{t.workDescription}</p></div>
        <div className="work-controls">
          <div className="filters" role="group" aria-label={t.filterLabel}>{filters.map((item) => <button key={item} type="button" className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{t.filters[item]}</button>)}</div>
          <label className="search-box"><HugeiconsIcon icon={Search01Icon} size={18} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} aria-label={t.searchLabel} />{query && <button type="button" onClick={() => setQuery("")} aria-label={t.clearSearch}><HugeiconsIcon icon={Cancel01Icon} size={15} /></button>}</label>
        </div>
        <div className="results-line"><span>{t.projects} <strong>({visible.length.toString().padStart(2, "0")})</strong></span><span>{t.sorted}</span></div>
        {visible.length ? (
          <div className="project-groups">
            {groups.map((group) => {
              const items = visible.filter((project) => project.kind === group.kind);
              if (!items.length) return null;
              const copy = t.groups[group.kind];
              return (
                <section className="project-group" key={group.kind} aria-label={copy.title}>
                  <div className="group-heading"><div><span className="group-eyebrow">{group.eyebrow}</span><h3>{copy.title} <sup>{String(items.length).padStart(2, "0")}</sup></h3></div><p>{copy.description}</p></div>
                  <div className="project-list">{items.map((project) => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} language={language} navigate={navigate} />)}</div>
                </section>
              );
            })}
          </div>
        ) : <div className="empty-state"><HugeiconsIcon icon={Search01Icon} size={27} /><h3>{t.emptyTitle}</h3><p>{t.emptyDescription}</p><button type="button" onClick={() => { setQuery(""); setFilter("all"); }}>{t.showAll} <HugeiconsIcon icon={ArrowLeft01Icon} size={16} /></button></div>}
        <div className="more-note"><span>{t.moreFirst}</span><span>{t.moreSecond} <span aria-hidden="true">✳</span></span></div>
      </div>
    </section>
  );
}

function ProjectDetail({ project, language, navigate }: { project: Project; language: Language; navigate: (path: string) => void }) {
  const t = translations[language];
  const content = caseStudies[project.id];
  const copy = content[language];
  const localized = language === "en" ? projectEnglish[project.id] : undefined;
  const name = localized?.name ?? project.name;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const nextName = language === "en" ? projectEnglish[next.id]?.name ?? next.name : next.name;
  return (
    <main className="detail-page">
      <div className="wrap">
        <a className="detail-back" href="/#work"><HugeiconsIcon icon={ArrowLeft01Icon} size={18} /> {t.backToWork}</a>
        <section className="detail-hero" aria-labelledby="detail-title">
          <div className="detail-identity">
            <img className="detail-icon" src={projectIcons[project.id]} alt={`${t.logoLabel} ${name}`} />
            <div><span className="detail-kicker">{localized?.category ?? project.category} · {t.caseStudy}</span><h1 id="detail-title">{name}</h1><span className="detail-subtitle">{project.subtitle}</span></div>
          </div>
          <p>{localized?.description ?? project.description}</p>
          <div className="detail-actions">
            {project.link ? <a className="button button-primary" href={project.link} target="_blank" rel="noopener noreferrer">{t.visitLive} <HugeiconsIcon icon={ArrowUpLeft01Icon} size={18} /></a> : <span className="detail-unavailable">{t.noPublicLink}</span>}
          </div>
        </section>
        <div className="detail-layout">
          <div className="detail-story">
            {([
              ["01", t.challenge, copy.problem],
              ["02", t.solution, copy.solution],
              ["03", t.implementation, copy.implementation],
            ] as const).map(([number, title, description]) => (
              <section className="story-section" key={number}>
                <span className="story-number">{number} / {t.caseStudy}</span>
                <h2>{title}</h2>
                <p>{description}</p>
              </section>
            ))}
            <section className="story-section">
              <span className="story-number">04 / {t.caseStudy}</span>
              <h2>{t.highlights}</h2>
              <ul className="detail-highlights">{copy.highlights.map((feature) => <li key={feature}><HugeiconsIcon icon={CheckmarkCircle01Icon} size={19} />{feature}</li>)}</ul>
            </section>
          </div>
          <aside className="detail-sidebar" aria-label={t.technologies}>
            <span className="detail-sidebar-label">{t.technologies}</span>
            <div className="tech-list">{project.technologies.map((tech) => <TechnologyTag key={tech} name={tech} language={language} />)}</div>
            <span className="detail-sidebar-type">{project.kind.toUpperCase()} / {String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
          </aside>
        </div>
        <section className="detail-gallery" aria-labelledby="gallery-title">
          <div className="detail-gallery-heading"><span className="section-index">05 — {t.gallery}</span><h2 id="gallery-title">{t.gallery}</h2><p>{t.galleryDescription}</p></div>
          <div className="detail-gallery-grid">
            {content.gallery.map((image) => (
              <figure className="detail-figure" key={image.src}>
                <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`${t.gallery}: ${image.caption[language]}`}><img src={image.src} alt={image.caption[language]} loading="lazy" /></a>
                <figcaption><span className="gallery-kind">{image.kind === "screenshot" ? t.screenshot : t.documentation}</span>{image.caption[language]}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <a className="detail-next" href={`/projects/${next.id}`} onClick={(event) => { if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); navigate(`/projects/${next.id}`); } }}>
          <span>{t.nextProject}</span><strong>{nextName}</strong><HugeiconsIcon icon={ArrowLeft01Icon} size={25} />
        </a>
      </div>
    </main>
  );
}

function About({ language }: { language: Language }) {
  const t = translations[language];
  return (
    <section className="about-section wrap" id="about">
      <div className="about-heading"><span className="section-index">{t.aboutIndex}</span><h2>{t.aboutFirst}<br /><em>{t.aboutAccent}</em></h2></div>
      <div className="about-content"><p>{t.aboutLead}</p><p>{t.aboutMore}</p><div className="about-points"><span><HugeiconsIcon icon={CheckmarkCircle01Icon} size={17} /> {t.aboutProduct}</span><span><HugeiconsIcon icon={CodeFolderIcon} size={17} /> {t.aboutApi}</span><span><HugeiconsIcon icon={Layers01Icon} size={17} /> {t.aboutTools}</span></div></div>
    </section>
  );
}

function Footer({ language }: { language: Language }) {
  const t = translations[language];
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-top"><span>{t.contactIndex}</span><span>LET'S MAKE SOMETHING USEFUL ↗</span></div>
        <div className="footer-main">
          <div><h2>{t.contactFirst}<br /><em>{t.contactAccent}</em></h2><p>{t.contactDescription}</p></div>
          <div className="footer-links">
            <a className="footer-contact" href="tel:+966545932092" aria-label={t.phoneLabel}><HugeiconsIcon icon={Call02Icon} size={20} /><bdi dir="ltr">0545932092</bdi></a>
            <a className="footer-contact" href="mailto:bdralslmy876@gmail.com" aria-label={t.emailLabel}><HugeiconsIcon icon={Mail01Icon} size={20} /><bdi dir="ltr">bdralslmy876@gmail.com</bdi></a>
            <a href="https://github.com/badralslmy" target="_blank" rel="noopener noreferrer" className="footer-cta" aria-label={t.githubLabel}><HugeiconsIcon icon={GithubIcon} size={24} /><span>{t.github}</span><HugeiconsIcon icon={ArrowUpLeft01Icon} size={24} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span className="footer-signature"><img src="/badr-mark.svg" alt="" /> © {new Date().getFullYear()} {t.identity}</span><span>{t.madeWithCare}</span><a href="/#home">{t.backToTop}</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem("portfolio-language") === "en" ? "en" : "ar"; } catch { return "ar"; }
  });
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch { /* Use the system preference below. */ }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    const slug = path.match(/^\/projects\/([^/]+)\/?$/)?.[1];
    const project = projects.find((entry) => entry.id === slug);
    const projectName = project && (language === "en" ? projectEnglish[project.id]?.name ?? project.name : project.name);
    document.title = projectName ? `${projectName} — ${translations[language].identity}` : translations[language].pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", translations[language].pageDescription);
    try { localStorage.setItem("portfolio-language", language); } catch { /* Storage may be disabled. */ }
  }, [language, path]);
  useEffect(() => {
    const onPopState = () => { setPath(window.location.pathname); window.scrollTo({ top: 0, behavior: "instant" }); };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#101521" : "#f6f6f2");
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Storage may be disabled. */ }
  }, [theme]);
  const navigate = (nextPath: string) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const slug = path.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  const selected = projects.find((project) => project.id === slug);
  return <><Header language={language} onLanguageChange={() => setLanguage(language === "ar" ? "en" : "ar")} theme={theme} onThemeChange={() => setTheme(theme === "light" ? "dark" : "light")} />{selected ? <ProjectDetail project={selected} language={language} navigate={navigate} /> : <main><Hero language={language} navigate={navigate} /><Work language={language} navigate={navigate} /><About language={language} /></main>}<Footer language={language} /></>;
}
