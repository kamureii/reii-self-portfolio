"use client";

import {
  ArrowDown,
  ArrowUpRight,
  EnvelopeSimple,
  FacebookLogo,
  GithubLogo,
  GlobeHemisphereEast,
  GraduationCap,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  MusicNotesSimple,
  PhoneCall,
  Play,
  ShieldCheck,
  SoundcloudLogo,
  VinylRecord,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  locales,
  type ContactPlatform,
  type Locale,
  type Note,
  type PersonalSiteContent,
  type Project,
  type Track,
} from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

type PersonalSiteClientProps = {
  locale: Locale;
  content: PersonalSiteContent;
};

const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
  zh: "中文",
};

const sceneIds = ["signal", "bio", "academic", "work", "music", "notes", "contact"] as const;

type SceneId = (typeof sceneIds)[number];

const sceneThemes: Record<SceneId, Record<string, number>> = {
  signal: {
    "--scene-r": 177,
    "--scene-g": 18,
    "--scene-b": 38,
    "--scene-r2": 108,
    "--scene-g2": 14,
    "--scene-b2": 28,
    "--scene-bg-r": 5,
    "--scene-bg-g": 5,
    "--scene-bg-b": 6,
  },
  bio: {
    "--scene-r": 142,
    "--scene-g": 17,
    "--scene-b": 34,
    "--scene-r2": 177,
    "--scene-g2": 18,
    "--scene-b2": 38,
    "--scene-bg-r": 6,
    "--scene-bg-g": 5,
    "--scene-bg-b": 7,
  },
  academic: {
    "--scene-r": 36,
    "--scene-g": 132,
    "--scene-b": 196,
    "--scene-r2": 17,
    "--scene-g2": 71,
    "--scene-b2": 125,
    "--scene-bg-r": 3,
    "--scene-bg-g": 16,
    "--scene-bg-b": 27,
  },
  work: {
    "--scene-r": 0,
    "--scene-g": 154,
    "--scene-b": 255,
    "--scene-r2": 23,
    "--scene-g2": 93,
    "--scene-b2": 154,
    "--scene-bg-r": 2,
    "--scene-bg-g": 17,
    "--scene-bg-b": 30,
  },
  music: {
    "--scene-r": 177,
    "--scene-g": 18,
    "--scene-b": 38,
    "--scene-r2": 48,
    "--scene-g2": 104,
    "--scene-b2": 150,
    "--scene-bg-r": 7,
    "--scene-bg-g": 5,
    "--scene-bg-b": 8,
  },
  notes: {
    "--scene-r": 142,
    "--scene-g": 17,
    "--scene-b": 34,
    "--scene-r2": 244,
    "--scene-g2": 241,
    "--scene-b2": 238,
    "--scene-bg-r": 6,
    "--scene-bg-g": 6,
    "--scene-bg-b": 8,
  },
  contact: {
    "--scene-r": 177,
    "--scene-g": 18,
    "--scene-b": 38,
    "--scene-r2": 244,
    "--scene-g2": 241,
    "--scene-b2": 238,
    "--scene-bg-r": 5,
    "--scene-bg-g": 4,
    "--scene-bg-b": 6,
  },
};

const contactIcons: Record<ContactPlatform, Icon> = {
  phone: PhoneCall,
  email: EnvelopeSimple,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  facebook: FacebookLogo,
  instagram: InstagramLogo,
  music: SoundcloudLogo,
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function OpenIcon({ className }: { className?: string }) {
  return <ArrowUpRight className={className} size={16} weight="bold" />;
}

function SceneHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cx(
        "scene-reveal flex flex-col gap-6",
        align === "center" ? "mx-auto max-w-5xl items-center text-center" : "max-w-4xl",
      )}
    >
      <h2 className="text-balance text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-normal text-cream">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-stone-300/84 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SectionNav({
  content,
  activeSection,
}: {
  content: PersonalSiteContent;
  activeSection: string;
}) {
  const chapters = [
    ["signal", content.nav.signal],
    ["bio", content.nav.bio],
    ["academic", content.nav.academic],
    ["work", content.nav.work],
    ["music", content.nav.music],
    ["notes", content.nav.notes],
    ["contact", content.nav.contact],
  ];

  return (
    <aside className="chapter-rail fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 2xl:block">
      <nav aria-label="Chapters" className="flex flex-col gap-3">
        {chapters.map(([id, label], index) => (
          <a
            key={id}
            href={`#${id}`}
            className={cx("chapter-link group", activeSection === id && "chapter-link-active")}
            aria-label={label}
          >
            <span className="chapter-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="chapter-label">{label}</span>
            <span className="chapter-dot" />
          </a>
        ))}
      </nav>
    </aside>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLinked = Boolean(project.href);
  const colSpan = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";
  const cardContent = (
    <>
      <div className="packet-line" aria-hidden="true" />
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-sm text-sky-200/70">{String(index + 1).padStart(2, "0")}</span>
        <span className="rounded-full border border-sky-300/18 bg-sky-300/8 px-3 py-1 text-xs font-semibold text-sky-100">
          {project.status}
        </span>
      </div>
      <h3 className="mt-12 max-w-xl text-2xl font-semibold leading-tight text-cream sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-xl leading-8 text-slate-200/82">{project.description}</p>
      <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300/72">{project.contribution}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-9">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-sky-300/14 bg-sky-300/7 px-3 py-1.5 text-xs font-medium text-sky-100/82"
          >
            {technology}
          </span>
        ))}
        {isLinked ? (
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-white">
            View
            <OpenIcon className="transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        ) : null}
      </div>
    </>
  );

  if (isLinked) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={cx("project-card scene-reveal group", colSpan)}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className={cx("project-card scene-reveal group", colSpan)}>
      {cardContent}
    </article>
  );
}

function TrackCard({ track, index }: { track: Track; index: number }) {
  const isLiveLink = Boolean(track.href && track.href !== "#");
  const cardClassName = cx(
    "track-card scene-reveal group",
    index === 0 ? "track-card-featured" : `track-card-${index + 1}`,
  );
  const cardContent = (
    <>
      <div className="track-cover">
        <span className="track-orbit" />
        <span className="track-center">
          <Play size={16} weight="fill" />
        </span>
        <div className="track-wave" aria-hidden="true">
          {Array.from({ length: 18 }, (_, bar) => (
            <span key={bar} style={{ "--bar-index": bar } as React.CSSProperties} />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-4 text-xs text-stone-400">
          <span>{track.mood}</span>
          <span className="font-mono">{track.year}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-cream">{track.title}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-300/82">{track.description}</p>
        <div className="mt-auto flex items-center justify-between pt-7 text-sm font-semibold text-crimson-bright">
          <span>{track.platform}</span>
          {isLiveLink ? (
            <OpenIcon className="transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
          ) : (
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-stone-400">Coming soon</span>
          )}
        </div>
      </div>
    </>
  );

  if (!isLiveLink) {
    return <article className={cardClassName}>{cardContent}</article>;
  }

  return (
    <a href={track.href} target="_blank" rel="noreferrer" className={cardClassName}>
      {cardContent}
    </a>
  );
}

function NoteCard({
  note,
  locale,
  index,
  label,
}: {
  note: Note;
  locale: Locale;
  index: number;
  label: string;
}) {
  return (
    <Link
      href={`/${locale}/notes/${note.slug}`}
      className={cx("note-card scene-reveal group", index === 0 && "note-card-featured")}
    >
      <div className="flex items-center justify-between gap-4 text-xs text-stone-400">
        <span className="text-crimson-bright">{note.category}</span>
        <span className="font-mono">{note.date}</span>
      </div>
      <h3 className="mt-7 max-w-2xl text-balance text-2xl font-semibold leading-tight text-cream sm:text-3xl">
        {note.title}
      </h3>
      <p className="mt-4 max-w-xl leading-8 text-stone-300/82">{note.excerpt}</p>
      <div className="mt-auto flex items-center justify-between gap-4 pt-10 text-sm font-semibold">
        <span className="text-stone-400">{note.readingTime}</span>
        <span className="inline-flex items-center gap-2 text-cream">
          {label}
          <OpenIcon className="text-crimson-bright transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  );
}

function ScrubQuote({ text }: { text: string }) {
  const words = text.split(/\s+/);
  return (
    <p className="scrub-quote-container mt-5 text-balance text-2xl font-medium leading-relaxed text-cream sm:text-3xl">
      {words.map((word, i) => (
        <span key={i} className="scrub-word" data-scrub-index={i}>
          {word}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

export function PersonalSiteClient({ locale, content }: PersonalSiteClientProps) {
  const scope = useRef<HTMLElement>(null);
  const activeSectionRef = useRef<SceneId>("signal");
  const [activeSection, setActiveSection] = useState<SceneId>("signal");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  // Close mobile menu on Escape and handle body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeMobileMenu();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen, closeMobileMenu]);

  useGSAP(
    () => {
      const shell = scope.current;
      if (!shell) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const sceneElements = sceneIds
        .map((id) => shell.querySelector<HTMLElement>(`#${id}`))
        .filter((section): section is HTMLElement => Boolean(section));
      let hasSyncedScene = false;

      const applyScene = (sceneId: SceneId, immediate = false) => {
        const changed = activeSectionRef.current !== sceneId;
        if (!changed && !immediate) return;

        if (changed) {
          activeSectionRef.current = sceneId;
          setActiveSection(sceneId);
        }

        shell.dataset.activeScene = sceneId;
        const theme = sceneThemes[sceneId];

        if (immediate || reduceMotion) {
          gsap.set(shell, theme);
          return;
        }

        gsap.to(shell, {
          ...theme,
          duration: 0.82,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const syncScene = () => {
        const scanLine = window.innerHeight * 0.46;
        let nextScene: SceneId = "signal";

        sceneElements.forEach((section) => {
          if (section.getBoundingClientRect().top <= scanLine) {
            nextScene = section.id as SceneId;
          }
        });

        applyScene(nextScene, !hasSyncedScene);
        hasSyncedScene = true;
      };

      ScrollTrigger.create({
        trigger: shell,
        start: "top top",
        end: "bottom bottom",
        onUpdate: syncScene,
        onRefresh: syncScene,
      });

      syncScene();

      if (reduceMotion) {
        gsap.set(".scene-reveal", { opacity: 1, y: 0, filter: "blur(0px)" });
        return;
      }

      const initialHash = window.location.hash;

      gsap.fromTo(
        ".hero-word",
        { autoAlpha: 0, yPercent: 12, filter: "blur(16px)" },
        {
          autoAlpha: 1,
          yPercent: 0,
          filter: "blur(0px)",
          duration: 1.35,
          ease: "expo.out",
        },
      );

      gsap.fromTo(
        ".hero-support",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 1.05, delay: 0.42, stagger: 0.11, ease: "power3.out" },
      );

      gsap.fromTo(
        ".hero-portrait-art",
        { autoAlpha: 0, yPercent: 3, scale: 1.045 },
        { autoAlpha: 1, yPercent: 0, scale: 1, duration: 1.8, delay: 0.22, ease: "expo.out" },
      );

      gsap.utils.toArray<HTMLElement>(".scene-reveal").forEach((element) => {
        if (initialHash && element.closest(initialHash)) {
          gsap.set(element, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
          return;
        }

        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 52, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.to(shell, {
        "--scroll-progress": 1,
        ease: "none",
        scrollTrigger: {
          trigger: shell,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // F2 — Scroll-driven text scrub on bio quote
      const scrubWords = gsap.utils.toArray<HTMLElement>(".scrub-word");
      if (scrubWords.length > 0) {
        const quoteContainer = shell.querySelector(".scrub-quote-container");
        if (quoteContainer) {
          scrubWords.forEach((word, i) => {
            gsap.to(word, {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: quoteContainer,
                start: () => `top+=${(i / scrubWords.length) * 100}% 80%`,
                end: () => `top+=${((i + 1) / scrubWords.length) * 100}% 60%`,
                scrub: 0.6,
              },
            });
          });
        }
      }

      gsap.to(".signal-orbit", {
        rotation: 38,
        scale: 1.12,
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: shell,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".hero-portrait-art", {
        yPercent: -5,
        scale: 1.035,
        ease: "none",
        scrollTrigger: {
          trigger: "#signal",
          start: "top top",
          end: "bottom top",
          scrub: 0.85,
        },
      });

      gsap.utils.toArray<HTMLElement>(".depth-layer").forEach((layer, index) => {
        gsap.to(layer, {
          yPercent: index % 2 === 0 ? -10 : 8,
          ease: "none",
          scrollTrigger: {
            trigger: layer,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.34, y: 60, scale: 0.97, rotateX: index % 2 === 0 ? 3 : -3 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 56%",
              scrub: 0.75,
            },
          },
        );
      });
    },
    { scope, dependencies: [locale] },
  );

  const navItems = [
    ["#bio", content.nav.bio],
    ["#academic", content.nav.academic],
    ["#work", content.nav.work],
    ["#music", content.nav.music],
    ["#notes", content.nav.notes],
    ["#contact", content.nav.contact],
  ];

  return (
    <main
      id="main-content"
      ref={scope}
      data-active-scene={activeSection}
      className="personal-shell min-h-[100dvh] w-full max-w-full overflow-x-hidden text-cream"
    >
      <div className="cinematic-background" aria-hidden="true" />
      <div className="cinematic-grid" aria-hidden="true" />
      <div className="signal-orbit" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      {/* Mobile menu overlay */}
      <nav
        id="mobile-nav"
        className="mobile-overlay"
        data-open={mobileMenuOpen}
        aria-hidden={!mobileMenuOpen}
        aria-label="Mobile navigation"
      >
        {navItems.map(([href, label]) => (
          <a
            key={href}
            href={href}
            onClick={closeMobileMenu}
            tabIndex={mobileMenuOpen ? undefined : -1}
            className={cx(
              "mobile-overlay-link",
              activeSection === href.slice(1) && "active",
            )}
          >
            {label}
          </a>
        ))}
      </nav>

      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:pt-5">
        <div className="site-nav mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/10 bg-ink/76 px-3 py-2 backdrop-blur-xl">
          <a
            href="#signal"
            aria-label="KAMUREI"
            className="logoLink"
          >
            <Image
              src="/assets/kamurei-graffiti-transparent.png"
              alt="KAMUREI graffiti logo"
              width={300}
              height={100}
              preload
              sizes="(max-width: 768px) 120px, 150px"
              className="logoImage"
            />
          </a>

          <nav className="hidden items-center gap-1 text-sm text-stone-300/76 lg:flex">
            {navItems.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={cx(
                  "nav-link rounded-full px-3 py-2",
                  activeSection === href.slice(1) && "nav-link-active",
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="mobile-menu-btn lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="flex flex-col gap-[5px]">
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </span>
          </button>

          <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1">
            <GlobeHemisphereEast className="ml-2 hidden text-crimson-bright sm:block" size={16} />
            {locales.map((option) => (
              <Link
                key={option}
                href={`/${option}#${activeSection}`}
                onClick={() => window.localStorage.setItem("portfolio-locale", option)}
                className={cx(
                  "inline-flex h-8 items-center rounded-full px-3 text-xs font-semibold transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
                  option === locale
                    ? "bg-cream text-ink"
                    : "text-stone-300 hover:bg-white/8 hover:text-white",
                )}
                aria-label={`${content.ui.language}: ${localeLabels[option]}`}
              >
                {localeLabels[option]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <SectionNav content={content} activeSection={activeSection} />

      <section
        id="signal"
        data-scene
        className="scene-section hero-scene relative min-h-[100dvh] px-4 pb-20 pt-28 sm:px-6 lg:px-8"
      >
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-layout relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-10">
          <div className="hero-copy relative z-10">
            <p className="hero-support hero-kicker">{content.hero.alias}</p>
            <h1 className="hero-word hero-title">{content.hero.name}</h1>
            <p className="hero-support hero-descriptor">{content.hero.roles}</p>
            <p className="hero-support hero-intro">{content.hero.line}</p>
          </div>

          <figure className="hero-support hero-portrait-stage relative" aria-hidden="true">
            <div className="hero-portrait-halo" aria-hidden="true" />
            <Image
              src="/portrait/kamurei-typographic.png"
              alt=""
              fill
              preload
              sizes="(max-width: 767px) 92vw, (max-width: 1023px) 78vw, 58vw"
              className="hero-portrait-art"
            />
            <div className="hero-portrait-vignette" aria-hidden="true" />
          </figure>

          <div className="hero-support hero-actions">
            <a href="#bio" className="primary-cta group">
              {content.ui.exploreStory}
              <span>
                <ArrowDown size={16} weight="bold" />
              </span>
            </a>
            <a href="#contact" className="secondary-cta group">
              {content.ui.contactMe}
              <span>
                <OpenIcon />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="bio"
        data-scene
        className="scene-section relative min-h-[100dvh] px-4 py-28 sm:px-6 lg:px-8 lg:py-44"
      >
        <div className="mx-auto max-w-7xl">
          <div className="bio-section-label scene-reveal">
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              {content.nav.bio}
            </span>
          </div>
          <SceneHeading title={content.bio.title} />
          <p className="scene-reveal mt-10 max-w-3xl text-lg leading-9 text-stone-200/78 sm:text-xl">
            {content.bio.lead}
          </p>
          <blockquote className="documentary-caption scene-reveal mt-14 max-w-4xl">
            <span className="font-mono text-xs text-crimson-bright">KAMUREI</span>
            <ScrubQuote text={`\u201c${content.bio.quote}\u201d`} />
          </blockquote>
          <div className="fact-grid mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-white/10 bg-white/10 sm:grid-cols-2">
            {content.bio.facts.map((fact, index) => (
              <div key={fact.label} className="scene-reveal fact-cell">
                {index === 0 ? <MapPin size={22} weight="duotone" /> : null}
                {index === 1 ? <GraduationCap size={22} weight="duotone" /> : null}
                {index === 2 ? <ShieldCheck size={22} weight="duotone" /> : null}
                {index === 3 ? <MusicNotesSimple size={22} weight="duotone" /> : null}
                <p className="mt-6 text-sm text-stone-400">{fact.label}</p>
                <p className="mt-2 text-lg font-semibold text-cream">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="academic"
        data-scene
        className="scene-section academic-scene relative min-h-[100dvh] px-4 py-28 sm:px-6 lg:px-8 lg:py-44"
      >
        <div className="blueprint-lines" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="depth-layer scene-reveal">
            <div className="institution-panel">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">
                    {content.academic.institutionShort}
                  </p>
                  <h3 className="mt-5 text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                    {content.academic.major}
                  </h3>
                </div>
                <div className="rounded-[14px] bg-white p-2">
                  <Image
                    src="/brand/uet-vnu.png"
                    alt="UET-VNU"
                    width={72}
                    height={72}
                    className="size-16 object-contain"
                  />
                </div>
              </div>
              <p className="mt-8 text-sm leading-7 text-sky-100/80">{content.academic.institution}</p>
              <div className="mt-10 border-t border-sky-300/14 pt-6 font-mono text-xs text-sky-200/72">
                {content.academic.signal}
              </div>
            </div>
          </div>
          <div>
            <SceneHeading title={content.academic.title} description={content.academic.description} />
            <div className="focus-list mt-12">
              {content.academic.focus.map((item, index) => (
                <div key={item} className="scene-reveal focus-row">
                  <span className="font-mono text-xs text-sky-300/72">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium text-cream">{item}</span>
                  <span className="focus-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        data-scene
        className="scene-section work-scene relative min-h-[100dvh] px-4 py-28 sm:px-6 lg:px-8 lg:py-44"
      >
        <div className="network-map" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div className="depth-layer scene-reveal">
              <div className="work-identity">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold text-sky-300">{content.work.company}</p>
                    <h3 className="mt-4 text-3xl font-semibold text-cream">{content.work.role}</h3>
                    <p className="mt-3 text-sm text-sky-100/80">{content.work.period}</p>
                  </div>
                  <div className="rounded-[14px] bg-white p-2">
                    <Image
                      src="/brand/vnpt-cyber-immunity-cropped.png"
                      alt="VNPT Cyber Immunity"
                      width={68}
                      height={68}
                      className="size-16 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {content.work.focus.map((area) => (
                    <span key={area} className="focus-chip">{area}</span>
                  ))}
                </div>
              </div>
            </div>
            <SceneHeading title={content.work.title} description={content.work.description} />
          </div>
          <div className="project-grid mt-16 grid grid-flow-dense grid-cols-1 gap-4 lg:grid-cols-12">
            {content.work.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="music"
        data-scene
        className="scene-section music-scene relative min-h-[100dvh] px-4 py-28 sm:px-6 lg:px-8 lg:py-44"
      >
        <div className="music-wave-bg" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <SceneHeading title={content.music.title} description={content.music.description} />
            <div className="scene-reveal flex items-center justify-between border-b border-crimson/25 pb-4 font-mono text-xs uppercase tracking-[0.2em] text-crimson-bright">
              <span>{content.ui.selectedTracks}</span>
              <VinylRecord size={26} weight="thin" />
            </div>
          </div>
          <div className="track-deck track-deck-stagger mt-14 grid grid-cols-1 gap-5">
            {content.music.tracks.map((track, index) => (
              <TrackCard key={track.title} track={track} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="notes"
        data-scene
        className="scene-section notes-scene relative min-h-[100dvh] px-4 py-28 sm:px-6 lg:px-8 lg:py-44"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <SceneHeading title={content.notes.title} description={content.notes.description} />
            <p className="scene-reveal justify-self-end font-mono text-xs uppercase tracking-[0.2em] text-stone-400">
              {content.ui.latestNotes} / {content.notes.posts.length}
            </p>
          </div>
          <div className="notes-grid mt-14 grid grid-flow-dense grid-cols-1 gap-4 lg:grid-cols-12">
            {content.notes.posts.map((note, index) => (
              <NoteCard
                key={note.slug}
                note={note}
                locale={locale}
                index={index}
                label={content.ui.viewNote}
              />
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        data-scene
        className="scene-section contact-scene relative min-h-[100dvh] px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-44"
      >
        <div className="contact-signal" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[78dvh] max-w-7xl flex-col justify-between">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SceneHeading title={content.contact.title} description={content.contact.description} />
              <p className="scene-reveal mt-12 max-w-3xl text-balance text-2xl font-medium leading-relaxed text-cream sm:text-3xl">
                {content.contact.closing}
              </p>
              <div className="scene-reveal mt-10">
                <a href="mailto:kamureii.official@gmail.com" className="primary-cta group">
                  {content.ui.sendSignal}
                  <span><EnvelopeSimple size={17} weight="bold" /></span>
                </a>
              </div>
            </div>
            <div className="contact-list">
              {content.contact.links.map((contact) => {
                const ContactIcon = contactIcons[contact.platform];
                const opensExternalTab = contact.platform !== "email" && contact.platform !== "phone";
                return (
                  <a
                    key={contact.platform}
                    href={contact.href}
                    target={opensExternalTab ? "_blank" : undefined}
                    rel={opensExternalTab ? "noreferrer" : undefined}
                    className="scene-reveal contact-link group"
                  >
                    <span className="flex items-center gap-3">
                      <ContactIcon size={20} weight="duotone" />
                      <span>
                        <span className="block text-xs text-stone-400">{contact.label}</span>
                        <span className="mt-1 block text-sm font-medium text-cream">{contact.value}</span>
                      </span>
                    </span>
                    <OpenIcon className="text-stone-400 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-crimson-bright" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-stone-400 sm:flex-row">
            <p>{content.footer}</p>
            <p>{new Date().getFullYear()} / Vietnam</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
