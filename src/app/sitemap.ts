import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

const BASE = BUSINESS.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/sitemap-html`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = BUSINESS.services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const areaRoutes: MetadataRoute.Sitemap = BUSINESS.areas.map((a) => ({
    url: `${BASE}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Standalone service+location landing pages (flat URL — highest keyword-URL alignment)
  const serviceLocationRoutes: MetadataRoute.Sitemap = [
    // Tier 1 — Manchester city hub (GSC: 38 imp "manchester car detailing")
    { url: `${BASE}/car-detailing-manchester`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/ceramic-coating-manchester`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE}/mobile-detailing-manchester`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/car-valeting-manchester`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/paint-correction-manchester`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE}/interior-detailing-manchester`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Tier 2 — Urmston HQ
    { url: `${BASE}/car-detailing-urmston`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/ceramic-coating-urmston`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/car-valeting-urmston`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Tier 3 — Other key areas
    { url: `${BASE}/car-detailing-trafford`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE}/car-detailing-salford`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE}/car-detailing-sale`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE}/car-detailing-stretford`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/car-detailing-altrincham`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/car-detailing-didsbury`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = [
    "ceramic-coating-vs-wax",
    "how-to-maintain-ceramic-coating",
    "mobile-detailing-vs-car-wash",
    "ceramic-coating-cost-guide",
    "mini-valet-vs-full-valet",
    "paint-correction-vs-machine-polishing",
  ].map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...serviceLocationRoutes,
    ...blogRoutes,
  ];
}
