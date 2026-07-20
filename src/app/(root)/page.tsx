"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, isLocale } from "@/data/site";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-locale");
    const locale = stored && isLocale(stored) ? stored : defaultLocale;
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
