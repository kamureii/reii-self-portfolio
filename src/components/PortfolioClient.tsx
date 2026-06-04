"use client";

import {
  ArrowUpRight,
  BookOpenText,
  Briefcase,
  Buildings,
  CalendarBlank,
  CheckCircle,
  DownloadSimple,
  EnvelopeSimple,
  FacebookLogo,
  FileText,
  FunnelSimple,
  GithubLogo,
  GlobeHemisphereEast,
  GraduationCap,
  ImagesSquare,
  InstagramLogo,
  Kanban,
  LinkedinLogo,
  ListChecks,
  LockKey,
  MusicNotesSimple,
  Network,
  Phone,
  ShieldCheck,
  TerminalWindow,
  VinylRecord,
  Waveform,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import type {
  Assignment,
  ContactPlatform,
  FilterId,
  Locale,
  PortfolioContent,
} from "@/data/i18n";
import { locales } from "@/data/i18n";

gsap.registerPlugin(ScrollTrigger);

type PortfolioClientProps = {
  locale: Locale;
  content: PortfolioContent;
};

const filterOrder: FilterId[] = ["all", "systems", "research", "ai", "collab", "ethics"];

const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
  zh: "中文",
};

const contactIcons: Record<ContactPlatform, Icon> = {
  phone: Phone,
  email: EnvelopeSimple,
  linkedin: LinkedinLogo,
  github: GithubLogo,
  facebook: FacebookLogo,
  instagram: InstagramLogo,
};

const assignmentIcons: Record<FilterId, Icon> = {
  all: ListChecks,
  systems: FileText,
  research: BookOpenText,
  ai: TerminalWindow,
  collab: Kanban,
  ethics: ShieldCheck,
};

const emptyEvidenceCopy: Record<Locale, string> = {
  vi: "Bài này chủ yếu là báo cáo chữ. File gốc chứa toàn bộ bảng, phân tích và tài liệu tham khảo.",
  en: "This assignment is text based. The source file contains the full tables, analysis, and references.",
  zh: "该作业主要为文本报告。源文件包含完整表格、分析和参考资料。",
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cx(
        "reveal mx-auto flex max-w-4xl flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-normal text-cream sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-stone-300/78 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function IconFrame({ icon: IconCmp }: { icon: Icon }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-crimson/25 bg-crimson/10 text-crimson">
      <IconCmp size={20} weight="duotone" />
    </span>
  );
}

function OpenIcon({ className }: { className?: string }) {
  return <ArrowUpRight className={className} size={16} weight="bold" />;
}

function EvidenceImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="group relative aspect-[16/10] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 88vw, 420px"
        className="object-cover transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.035]"
      />
      <div className="pointer-events-none absolute inset-0 border border-white/[0.035]" />
    </div>
  );
}

export function PortfolioClient({ locale, content }: PortfolioClientProps) {
  const router = useRouter();
  const scope = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [selectedId, setSelectedId] = useState(content.assignments[0].id);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const filteredAssignments = useMemo(() => {
    if (activeFilter === "all") {
      return content.assignments;
    }

    return content.assignments.filter((assignment) =>
      assignment.filters.includes(activeFilter),
    );
  }, [activeFilter, content.assignments]);

  const selectedAssignment =
    content.assignments.find((assignment) => assignment.id === selectedId) ??
    content.assignments[0];

  const sourceFiles = useMemo(
    () =>
      content.assignments.map((assignment) => ({
        href: assignment.sourceFile,
        label: `${assignment.number} ${assignment.title}`,
      })),
    [content.assignments],
  );

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        gsap.set(".reveal", { opacity: 1, y: 0, filter: "blur(0px)" });
        return;
      }

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 28, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          },
        );
      });
    },
    { scope, dependencies: [locale] },
  );

  function switchLocale(nextLocale: Locale) {
    const hash = window.location.hash;
    window.localStorage.setItem("portfolio-locale", nextLocale);
    router.push(`/${nextLocale}${hash}`);
  }

  function changeFilter(nextFilter: FilterId) {
    setActiveFilter(nextFilter);

    const nextAssignments =
      nextFilter === "all"
        ? content.assignments
        : content.assignments.filter((assignment) =>
            assignment.filters.includes(nextFilter),
          );

    if (!nextAssignments.some((assignment) => assignment.id === selectedId)) {
      setSelectedId(nextAssignments[0]?.id ?? content.assignments[0].id);
    }
  }

  function selectAssignment(assignment: Assignment) {
    setSelectedId(assignment.id);
    const detail = document.getElementById("detail");
    detail?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main ref={scope} className="min-h-[100dvh] overflow-x-hidden bg-ink text-cream">
      <div className="site-texture" />
      <div className="vinyl-mark" aria-hidden="true" />
      <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:pt-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/10 bg-ink/78 px-3 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl">
          <a
            href="#about"
            className="group flex min-w-0 items-center gap-2 rounded-full px-2 py-1 text-sm font-medium text-cream"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-crimson text-white">
              <MusicNotesSimple size={16} weight="bold" />
            </span>
            <span className="hidden truncate sm:block">{content.profile.name}</span>
          </a>

          <nav className="hidden items-center gap-1 text-sm text-stone-300/80 lg:flex">
            {[
              ["#about", content.nav.about],
              ["#experience", content.nav.experience],
              ["#roadmap", content.nav.roadmap],
              ["#assignments", content.nav.assignments],
              ["#artifacts", content.nav.artifacts],
              ["#contact", content.nav.contact],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3 py-2 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/8 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1">
            <GlobeHemisphereEast className="ml-2 hidden text-crimson sm:block" size={16} />
            {locales.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => switchLocale(option)}
                className={cx(
                  "h-8 rounded-full px-3 text-xs font-semibold transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
                  option === locale
                    ? "bg-cream text-ink"
                    : "text-stone-300 hover:bg-white/8 hover:text-white",
                )}
                aria-label={`${content.ui.language}: ${localeLabels[option]}`}
              >
                {localeLabels[option]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section
        id="about"
        className="relative flex min-h-[100dvh] items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="reveal flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-stone-300/80">
              <span className="rounded-full border border-crimson/30 bg-crimson/10 px-4 py-2 text-crimson">
                {content.hero.label}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} weight="duotone" className="text-crimson" />
                {content.profile.universityShortName}
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="max-w-6xl text-balance text-5xl font-semibold leading-[1.04] tracking-normal text-cream sm:text-6xl lg:text-7xl">
                {content.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-300/82 sm:text-xl">
                {content.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#assignments"
                className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-crimson px-6 text-sm font-semibold text-white shadow-[0_22px_60px_rgba(177,18,38,0.28)] transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#c71931] active:scale-[0.98]"
              >
                {content.hero.primaryCta}
                <span className="flex size-7 items-center justify-center rounded-full bg-white/15 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                  <OpenIcon />
                </span>
              </a>
              <a
                href="#artifacts"
                className="group inline-flex h-13 items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-6 text-sm font-semibold text-cream transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 active:scale-[0.98]"
              >
                {content.hero.secondaryCta}
                <ImagesSquare size={18} weight="duotone" className="text-crimson" />
              </a>
            </div>
          </div>

          <div className="reveal relative">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div className="rounded-[12px] border border-white/10 bg-panel p-5 sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm text-stone-400">{content.profile.studentId}</p>
                    <h2 className="mt-2 text-3xl font-semibold text-cream">
                      {content.profile.name}
                    </h2>
                  </div>
                  <VinylRecord size={42} weight="thin" className="text-crimson" />
                </div>

                <div className="mt-6 space-y-4">
                  <InfoRow
                    icon={GraduationCap}
                    title={content.profile.universityShortName}
                    value={content.profile.university}
                  />
                  <InfoRow
                    icon={LockKey}
                    title={content.experience.role}
                    value={`${content.experience.company} · ${content.experience.period}`}
                  />
                </div>

                <p className="mt-7 text-base leading-8 text-stone-300/82">
                  {content.profile.intro}
                </p>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {content.hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                    >
                      <p className="text-2xl font-semibold text-cream">{stat.value}</p>
                      <p className="mt-1 text-sm text-stone-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {content.profile.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-stone-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="wave-line mt-8" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <ProfilePanel
            icon={Buildings}
            title={content.education.title}
            heading={content.education.degree}
            body={content.education.description}
            footer={content.profile.universityShortName}
          />
          <ProfilePanel
            icon={Briefcase}
            title={content.experience.type}
            heading={`${content.experience.role} · ${content.experience.company}`}
            body={content.experience.description}
            footer={content.experience.period}
            chips={content.experience.skills}
          />
        </div>
      </section>

      <section id="roadmap" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading title={content.roadmap.title} description={content.roadmap.description} />
          </div>
          <div className="grid gap-6">
            <div className="reveal rounded-[12px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="space-y-5">
                {content.roadmap.steps.map((step, index) => (
                  <div key={step.title} className="grid gap-4 sm:grid-cols-[64px_1fr]">
                    <div className="flex items-start gap-3 sm:block">
                      <span className="flex size-12 items-center justify-center rounded-[8px] bg-crimson text-sm font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < content.roadmap.steps.length - 1 ? (
                        <span className="ml-6 mt-3 hidden h-16 w-px bg-crimson/30 sm:block" />
                      ) : null}
                    </div>
                    <div className="pb-5">
                      <h3 className="text-xl font-semibold text-cream">{step.title}</h3>
                      <p className="mt-2 leading-7 text-stone-300/78">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {content.roadmap.rubric.map((item) => (
                <div
                  key={item.title}
                  className="reveal rounded-[12px] border border-white/10 bg-panel p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-cream">{item.title}</h3>
                    <span className="rounded-full bg-crimson/12 px-3 py-1 text-xs font-semibold text-crimson">
                      {item.range}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-stone-300/78">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="assignments" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              title={content.assignmentsIntro.title}
              description={content.assignmentsIntro.description}
            />
            <div className="reveal flex flex-wrap items-center gap-2">
              <FunnelSimple size={18} weight="duotone" className="text-crimson" />
              {filterOrder.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => changeFilter(filter)}
                  className={cx(
                    "h-10 rounded-full border px-4 text-sm font-medium transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
                    activeFilter === filter
                      ? "border-crimson bg-crimson text-white"
                      : "border-white/10 bg-white/[0.035] text-stone-300 hover:border-white/20 hover:text-white",
                  )}
                >
                  {content.ui.filters[filter]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-7">
            {filteredAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                selected={assignment.id === selectedAssignment.id}
                onSelect={() => selectAssignment(assignment)}
                viewDetail={content.ui.viewDetail}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="artifacts" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title={content.artifactsIntro.title}
            description={content.artifactsIntro.description}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.artifacts.map((artifact) => (
              <button
                key={artifact.id}
                type="button"
                onClick={() => {
                  if (artifact.assignmentId) {
                    const assignment = content.assignments.find(
                      (item) => item.id === artifact.assignmentId,
                    );
                    if (assignment) selectAssignment(assignment);
                  }
                }}
                className="reveal group flex min-h-[360px] flex-col overflow-hidden rounded-[12px] border border-white/10 bg-panel text-left transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-crimson/35"
              >
                {artifact.placeholder ? (
                  <div className="flex aspect-[16/10] items-center justify-center bg-white/[0.035]">
                    <div className="text-center">
                      <ImagesSquare className="mx-auto text-crimson" size={34} weight="duotone" />
                      <p className="mt-3 text-sm font-semibold text-stone-300">
                        {content.ui.replaceLater}
                      </p>
                    </div>
                  </div>
                ) : artifact.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={artifact.image}
                      alt={artifact.title}
                      fill
                      sizes="(max-width: 768px) 92vw, 420px"
                      className="object-cover transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-crimson/12 px-3 py-1 text-xs font-semibold text-crimson">
                      {artifact.kind}
                    </span>
                    {artifact.source ? (
                      <a
                        href={artifact.source}
                        onClick={(event) => event.stopPropagation()}
                        className="rounded-full border border-white/10 p-2 text-stone-300 transition hover:border-crimson/40 hover:text-crimson"
                        aria-label={content.ui.downloadSource}
                      >
                        <DownloadSimple size={16} weight="bold" />
                      </a>
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-cream">{artifact.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300/78">
                    {artifact.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="detail" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="reveal rounded-[12px] border border-white/10 bg-panel p-3 lg:sticky lg:top-28 lg:self-start">
            <p className="px-3 py-2 text-sm font-semibold text-stone-300">
              {content.ui.selected}
            </p>
            <div className="grid gap-2">
              {content.assignments.map((assignment) => (
                <button
                  key={assignment.id}
                  type="button"
                  onClick={() => setSelectedId(assignment.id)}
                  className={cx(
                    "rounded-[8px] px-3 py-3 text-left transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    assignment.id === selectedAssignment.id
                      ? "bg-crimson text-white"
                      : "text-stone-300 hover:bg-white/[0.055] hover:text-white",
                  )}
                >
                  <span className="text-xs font-semibold opacity-70">{assignment.number}</span>
                  <span className="mt-1 block text-sm font-semibold">{assignment.title}</span>
                </button>
              ))}
            </div>
          </aside>

          <article className="reveal overflow-hidden rounded-[14px] border border-white/10 bg-panel">
            <div className="grid gap-8 p-5 sm:p-7 xl:grid-cols-[1.02fr_0.98fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <IconFrame icon={assignmentIcons[selectedAssignment.filters[0] ?? "all"]} />
                  <div>
                    <p className="text-sm font-semibold text-crimson">
                      {selectedAssignment.number} · {selectedAssignment.theme}
                    </p>
                    <h2 className="mt-1 text-3xl font-semibold text-cream">
                      {selectedAssignment.title}
                    </h2>
                  </div>
                </div>

                <DetailBlock title={content.ui.objective} body={selectedAssignment.objective} />
                <DetailBlock title={content.ui.process}>
                  <ul className="space-y-3">
                    {selectedAssignment.process.map((item) => (
                      <li key={item} className="flex gap-3 text-stone-300/82">
                        <CheckCircle
                          className="mt-0.5 shrink-0 text-crimson"
                          size={19}
                          weight="duotone"
                        />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
                <DetailBlock title={content.ui.outcome} body={selectedAssignment.outcome} />

                <div className="mt-7 flex flex-wrap gap-2">
                  {selectedAssignment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedAssignment.sourceFile}
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-crimson/35 bg-crimson/10 px-5 py-3 text-sm font-semibold text-crimson transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-crimson hover:text-white"
                >
                  <DownloadSimple size={18} weight="bold" />
                  {content.ui.downloadSource}
                </a>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-cream">{content.ui.evidence}</h3>
                  <Waveform className="text-crimson" size={24} weight="duotone" />
                </div>
                {selectedAssignment.evidence.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {selectedAssignment.evidence.slice(0, 6).map((src, index) => (
                      <EvidenceImage
                        key={src}
                        src={src}
                        alt={`${selectedAssignment.title} evidence ${index + 1}`}
                        priority={index === 0}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[12px] border border-white/10 bg-white/[0.035] p-6">
                    <FileText size={32} weight="duotone" className="text-crimson" />
                    <p className="mt-4 leading-7 text-stone-300/82">
                      {emptyEvidenceCopy[locale]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title={content.summary.title}
            description={content.summary.statement}
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.summary.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="reveal rounded-[12px] border border-white/10 bg-panel p-6"
              >
                <Network size={28} weight="duotone" className="text-crimson" />
                <h3 className="mt-5 text-xl font-semibold text-cream">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300/78">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[16px] border border-white/10 bg-panel p-5 sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="reveal">
              <h2 className="text-3xl font-semibold text-cream">{content.contact.title}</h2>
              <p className="mt-4 max-w-xl leading-8 text-stone-300/78">
                {content.contact.description}
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-stone-300">{content.ui.allFiles}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {sourceFiles.map((file) => (
                    <a
                      key={file.href}
                      href={file.href}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-stone-300 transition hover:border-crimson/40 hover:text-crimson"
                    >
                      {file.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {content.profile.contacts.map((contact) => {
                const ContactIcon = contactIcons[contact.platform];
                return (
                  <a
                    key={contact.platform}
                    href={contact.href}
                    target={contact.platform === "phone" || contact.platform === "email" ? undefined : "_blank"}
                    rel={contact.platform === "phone" || contact.platform === "email" ? undefined : "noreferrer"}
                    className="reveal group rounded-[12px] border border-white/10 bg-white/[0.035] p-4 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-crimson/35"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex size-10 items-center justify-center rounded-[8px] bg-crimson/10 text-crimson">
                        <ContactIcon size={20} weight="duotone" />
                      </span>
                      <OpenIcon className="text-stone-500 transition group-hover:text-crimson" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-stone-400">{contact.label}</p>
                    <p className="mt-1 break-words text-base font-medium text-cream">
                      {contact.value}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-stone-500 sm:flex-row">
            <p>{content.footer.note}</p>
            <p>2026 · {content.profile.name}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: Icon;
  title: string;
  value: string;
}) {
  const IconCmp = icon;
  return (
    <div className="flex gap-4 rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
      <IconCmp className="mt-1 shrink-0 text-crimson" size={22} weight="duotone" />
      <div>
        <p className="text-sm font-semibold text-cream">{title}</p>
        <p className="mt-1 text-sm leading-6 text-stone-400">{value}</p>
      </div>
    </div>
  );
}

function ProfilePanel({
  icon,
  title,
  heading,
  body,
  footer,
  chips,
}: {
  icon: Icon;
  title: string;
  heading: string;
  body: string;
  footer: string;
  chips?: string[];
}) {
  const IconCmp = icon;
  return (
    <article className="reveal rounded-[14px] border border-white/10 bg-panel p-6 sm:p-8">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-sm font-semibold text-crimson">{title}</p>
          <h2 className="mt-3 text-2xl font-semibold text-cream">{heading}</h2>
        </div>
        <span className="flex size-12 items-center justify-center rounded-[10px] bg-crimson/10 text-crimson">
          <IconCmp size={24} weight="duotone" />
        </span>
      </div>
      <p className="mt-6 leading-8 text-stone-300/80">{body}</p>
      <div className="mt-7 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-stone-300">
          <CalendarBlank size={16} weight="duotone" className="text-crimson" />
          {footer}
        </span>
        {chips?.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-stone-300"
          >
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}

function AssignmentCard({
  assignment,
  selected,
  onSelect,
  viewDetail,
}: {
  assignment: Assignment;
  selected: boolean;
  onSelect: () => void;
  viewDetail: string;
}) {
  const IconCmp = assignmentIcons[assignment.filters[0] ?? "all"];
  return (
    <article
      className={cx(
        "reveal flex min-h-[310px] flex-col rounded-[12px] border p-4 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] xl:col-span-1",
        selected
          ? "border-crimson/60 bg-crimson/10"
          : "border-white/10 bg-panel hover:-translate-y-1 hover:border-crimson/35",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-2xl font-semibold text-cream">{assignment.number}</span>
        <IconCmp size={24} weight="duotone" className="text-crimson" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase text-crimson">{assignment.theme}</p>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-cream">{assignment.title}</h3>
      <p className="mt-3 line-clamp-4 text-sm leading-7 text-stone-300/78">
        {assignment.summary}
      </p>
      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={onSelect}
          className="group inline-flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-cream transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-crimson/40 hover:text-crimson active:scale-[0.98]"
        >
          {viewDetail}
          <OpenIcon className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
}

function DetailBlock({
  title,
  body,
  children,
}: {
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mt-7 border-t border-white/10 pt-6">
      <h3 className="text-sm font-semibold uppercase text-crimson">{title}</h3>
      {body ? <p className="mt-3 leading-8 text-stone-300/82">{body}</p> : null}
      {children ? <div className="mt-3">{children}</div> : null}
    </section>
  );
}
