import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { defaultLocale, locales, siteContent, type Locale } from "@/data/site";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const siteUrl = "https://kamureii.com";
export const openGraphImage = "/assets/kamurei-graffiti-transparent.png";

export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

export function localizedAlternates(path = "") {
  return Object.fromEntries(
    locales.map((locale) => [locale, localizedPath(locale, path)]),
  ) as Record<Locale, string>;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KAMUREI | Trần Quốc Hưng",
  description:
    "Blog và portfolio cá nhân của Trần Quốc Hưng: information systems, network security, fullstack learning và âm nhạc.",
  applicationName: "KAMUREI",
  authors: [{ name: "Trần Quốc Hưng" }],
  keywords: [
    "KAMUREI",
    "Trần Quốc Hưng",
    "personal blog",
    "network security",
    "information systems",
    "music creator",
    "UET-VNU",
    "VNPT Cyber Immunity",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: localizedPath(defaultLocale),
    languages: localizedAlternates(),
  },
  openGraph: {
    type: "website",
    title: "KAMUREI | Trần Quốc Hưng",
    description: siteContent[defaultLocale].meta.description,
    url: localizedPath(defaultLocale),
    locale: defaultLocale,
    alternateLocale: locales.filter((locale) => locale !== defaultLocale),
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAMUREI | Trần Quốc Hưng",
    description: siteContent[defaultLocale].meta.description,
    images: [openGraphImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
};

type SiteHtmlProps = Readonly<{
  children: React.ReactNode;
  lang?: string;
}>;

export function SiteHtml({ children, lang = defaultLocale }: SiteHtmlProps) {
  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
