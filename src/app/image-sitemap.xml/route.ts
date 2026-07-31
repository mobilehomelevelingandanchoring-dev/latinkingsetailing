import { SITE_IMAGES, type SiteImage } from "@/lib/images";
import { BUSINESS } from "@/lib/business";

const BASE = BUSINESS.url;
const GEO = "Urmston, Greater Manchester, United Kingdom";
const LICENSE = `${BASE}/`;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function imageEntry(img: SiteImage) {
  const loc = `${BASE}${img.src}`;
  return `    <image:image>
      <image:loc>${esc(loc)}</image:loc>
      <image:title>${esc(img.alt)}</image:title>
      <image:caption>${esc(img.alt)}</image:caption>
      <image:geo_location>${GEO}</image:geo_location>
      <image:license>${LICENSE}</image:license>
    </image:image>`;
}

function pageBlock(pageUrl: string, images: SiteImage[]) {
  return `  <url>
    <loc>${esc(pageUrl)}</loc>
${images.map(imageEntry).join("\n")}
  </url>`;
}

export async function GET() {
  const galleryImages = SITE_IMAGES.filter((img) => img.service === "gallery");
  const interiorImages = SITE_IMAGES.filter((img) => img.service === "interior");

  const blocks = [
    pageBlock(`${BASE}/`, galleryImages),
    pageBlock(`${BASE}/gallery`, [...galleryImages, ...interiorImages]),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${blocks.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
