import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">{children}</body>
    </html>
  );
}
