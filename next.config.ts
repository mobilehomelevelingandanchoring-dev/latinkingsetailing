import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Strict mode for React best practices
  reactStrictMode: true,
};

export default nextConfig;
