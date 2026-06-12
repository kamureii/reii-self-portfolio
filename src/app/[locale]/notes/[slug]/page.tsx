import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NoteDetailClient } from "@/components/NoteDetailClient";
import { isLocale, locales, siteContent } from "@/data/site";
import { localizedAlternates, localizedPath, openGraphImage } from "../../../site-shell";

type NotePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    siteContent[locale].notes.posts.map((note) => ({ locale, slug: note.slug })),
  );
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const note = siteContent[locale].notes.posts.find((item) => item.slug === slug);
  if (!note) return {};

  const title = `${note.title} | KAMUREI`;
  const notePath = `/notes/${slug}`;
  const canonical = localizedPath(locale, notePath);

  return {
    title,
    description: note.excerpt,
    alternates: {
      canonical,
      languages: localizedAlternates(notePath),
    },
    openGraph: {
      type: "article",
      title,
      description: note.excerpt,
      url: canonical,
      locale,
      alternateLocale: locales.filter((option) => option !== locale),
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: note.excerpt,
      images: [openGraphImage],
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const content = siteContent[locale];
  const index = content.notes.posts.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const note = content.notes.posts[index];
  const previousNote =
    content.notes.posts[(index - 1 + content.notes.posts.length) % content.notes.posts.length];
  const nextNote = content.notes.posts[(index + 1) % content.notes.posts.length];

  return (
    <NoteDetailClient
      locale={locale}
      content={content}
      note={note}
      previousNote={previousNote}
      nextNote={nextNote}
    />
  );
}
