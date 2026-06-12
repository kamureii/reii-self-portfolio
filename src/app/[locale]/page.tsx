import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PersonalSiteClient } from "@/components/PersonalSiteClient";
import { isLocale, locales, siteContent } from "@/data/site";
import { localizedAlternates, localizedPath, openGraphImage } from "../site-shell";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = siteContent[locale];
  const canonical = localizedPath(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical,
      languages: localizedAlternates(),
    },
    openGraph: {
      type: "website",
      title: content.meta.title,
      description: content.meta.description,
      url: canonical,
      locale,
      alternateLocale: locales.filter((option) => option !== locale),
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: [openGraphImage],
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PersonalSiteClient locale={locale} content={siteContent[locale]} />;
}
