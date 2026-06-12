import type { MetadataRoute } from "next";

import { locales, siteContent } from "@/data/site";

const BASE_URL = "https://kamureii.com";
const SITE_LAST_MODIFIED = new Date("2026-06-12T00:00:00.000Z");

function parseDottedDate(date: string) {
  const [day, month, year] = date.split(".").map(Number);

  if (!day || !month || !year) {
    return SITE_LAST_MODIFIED;
  }

  return new Date(Date.UTC(year, month - 1, day));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
    });

    const content = siteContent[locale];
    for (const note of content.notes.posts) {
      routes.push({
        url: `${BASE_URL}/${locale}/notes/${note.slug}`,
        lastModified: parseDottedDate(note.date),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
