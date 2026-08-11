import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent embedding in iframes (clickjacking protection)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Control referrer information sent to other origins
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Enable HSTS for 1 year, include subdomains, allow preload
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  // Restrict access to browser features not needed by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // Enable DNS prefetching for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Basic XSS protection for legacy browsers (modern browsers use CSP)
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig: NextConfig = {
  // Prevent large native-binary packages from being bundled into
  // the Netlify server-handler function (keeps bundle under 250 MB).
  serverExternalPackages: ["sharp", "exiftool-vendored", "@supabase/supabase-js"],

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,

  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Long-lived caching for static WebP gallery images
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
