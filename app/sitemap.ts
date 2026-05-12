import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/artwork-data";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/artwork",
    "/commission-process",
    "/commission",
    "/available",
    "/about",
    "/contact",
  ];

  const base = pages.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const categories = CATEGORIES.map((c) => ({
    url: `${SITE.url}/artwork/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...base, ...categories];
}
