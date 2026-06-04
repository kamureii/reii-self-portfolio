import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortfolioClient } from "@/components/PortfolioClient";
import { isLocale, locales, portfolioContent } from "@/data/i18n";

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

  const content = portfolioContent[locale];

  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PortfolioClient locale={locale} content={portfolioContent[locale]} />;
}
