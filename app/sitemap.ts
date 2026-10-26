import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date("2026-10-26"), priority: 1 },
    { url: `${SITE.url}/blog`, lastModified: new Date("2026-10-31"), priority: 0.8 },
    ...["demo", "pilot", "about", "resources"].map((s) => ({
      url: `${SITE.url}/${s}`,
      lastModified: new Date("2026-11-04"),
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.7,
    })),
  ];
}
