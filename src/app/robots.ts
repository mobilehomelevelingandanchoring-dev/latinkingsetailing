import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/admin/login/",
        ],
      },
    ],
    sitemap: [
      `${BUSINESS.url}/sitemap.xml`,
      `${BUSINESS.url}/image-sitemap.xml`,
    ],
    host: BUSINESS.url,
  };
}
