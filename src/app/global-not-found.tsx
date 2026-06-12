import type { Metadata } from "next";

import "./globals.css";
import { NotFoundContent } from "./not-found-content";
import { SiteHtml } from "./site-shell";

export const metadata: Metadata = {
  title: "404 | KAMUREI",
  description: "The requested page could not be found.",
};

export default function GlobalNotFound() {
  return (
    <SiteHtml>
      <NotFoundContent />
    </SiteHtml>
  );
}
