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
  title: "Portfolio Nhập môn Công nghệ số và AI | Trần Quốc Hưng",
  description:
    "Portfolio đa ngôn ngữ trình bày kết quả bài tập môn Nhập môn Công nghệ số và AI.",
  applicationName: "Portfolio Nhập môn Công nghệ số và AI",
  authors: [{ name: "Trần Quốc Hưng" }],
  keywords: [
    "portfolio",
    "UET-VNU",
    "Nhập môn Công nghệ số",
    "AI",
    "Trần Quốc Hưng",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">{children}</body>
    </html>
  );
}
