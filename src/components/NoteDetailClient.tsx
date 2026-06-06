"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  GlobeHemisphereEast,
  House,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import { locales, type Locale, type Note, type PersonalSiteContent } from "@/data/site";

type NoteDetailClientProps = {
  locale: Locale;
  content: PersonalSiteContent;
  note: Note;
  previousNote: Note;
  nextNote: Note;
};

const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
  zh: "中文",
};

export function NoteDetailClient({
  locale,
  content,
  note,
  previousNote,
  nextNote,
}: NoteDetailClientProps) {
  return (
    <main className="note-page min-h-[100dvh] overflow-x-hidden bg-ink text-cream">
      <div className="note-page-background" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:pt-5">
        <div className="site-nav mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/10 bg-ink/76 px-3 py-2 backdrop-blur-xl">
          <Link
            href={`/${locale}#notes`}
            aria-label="KAMUREI / FIELD NOTES"
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
          </Link>

          <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1">
            <GlobeHemisphereEast className="ml-2 hidden text-crimson sm:block" size={16} />
            {locales.map((option) => (
              <Link
                key={option}
                href={`/${option}/notes/${note.slug}`}
                className={`inline-flex h-8 items-center rounded-full px-3 text-xs font-semibold transition duration-500 ${
                  option === locale
                    ? "bg-cream text-ink"
                    : "text-stone-300 hover:bg-white/8 hover:text-white"
                }`}
              >
                {localeLabels[option]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <article className="relative mx-auto max-w-4xl px-4 pb-24 pt-36 sm:px-6 lg:pt-44">
        <Link
          href={`/${locale}#notes`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-400 transition hover:text-crimson"
        >
          <ArrowLeft size={16} weight="bold" />
          {content.ui.backHome}
        </Link>

        <div className="mt-14 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="text-crimson">{note.category}</span>
          <span className="text-stone-600">/</span>
          <span className="text-stone-500">{note.date}</span>
          <span className="text-stone-600">/</span>
          <span className="text-stone-500">{note.readingTime}</span>
        </div>

        <h1 className="mt-8 text-balance text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[0.98] tracking-normal text-cream">
          {note.title}
        </h1>
        <p className="mt-9 max-w-2xl text-xl leading-9 text-stone-300/76">{note.excerpt}</p>

        <div className="note-rule mt-16" />

        <div className="note-body mt-14">
          {note.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          <Link href={`/${locale}/notes/${previousNote.slug}`} className="note-next-link group">
            <span className="text-xs text-stone-500">{content.ui.previousNote}</span>
            <span className="mt-3 flex items-center gap-3 text-lg font-semibold text-cream">
              <ArrowLeft
                size={18}
                weight="bold"
                className="text-crimson transition group-hover:-translate-x-1"
              />
              {previousNote.title}
            </span>
          </Link>
          <Link href={`/${locale}/notes/${nextNote.slug}`} className="note-next-link group">
            <span className="text-xs text-stone-500">{content.ui.nextNote}</span>
            <span className="mt-3 flex items-center justify-between gap-3 text-lg font-semibold text-cream">
              {nextNote.title}
              <ArrowRight
                size={18}
                weight="bold"
                className="text-crimson transition group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="mailto:hung.tran@example.com"
            className="secondary-cta group"
          >
            {content.ui.sendSignal}
            <span>
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </a>
        </div>
      </article>

      <footer className="border-t border-white/8 px-4 py-8 text-sm text-stone-500">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p>KAMUREI / FIELD NOTES</p>
          <Link href={`/${locale}`} aria-label={content.ui.backHome} className="hover:text-crimson">
            <House size={18} weight="duotone" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
