import "../globals.css";

import { isLocale, type Locale } from "@/data/site";
import { SiteHtml } from "../site-shell";

export { metadata, viewport } from "../site-shell";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const lang: Locale = isLocale(locale) ? locale : "vi";

  return <SiteHtml lang={lang}>{children}</SiteHtml>;
}
