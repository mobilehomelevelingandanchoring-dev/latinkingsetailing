import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema } from "@/lib/schema";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | Mobile Car Detailing & Ceramic Coating — Urmston, Manchester`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Premium mobile car detailing, paint correction & ceramic coating in Urmston, Manchester. We come to you — showroom-quality results at your door. 5★ rated. Call 07482 225323.",
  keywords: [
    "mobile car detailing urmston",
    "car valeting manchester",
    "ceramic coating urmston",
    "paint correction manchester",
    "mobile car wash urmston",
    "car detailing trafford",
  ],
  authors: [{ name: BUSINESS.name, url: BUSINESS.url }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Premium Mobile Car Detailing — Urmston, Manchester`,
    description:
      "5★ rated mobile car detailing, ceramic coating & paint correction serving Urmston, Trafford and Greater Manchester. Book online or call 07482 225323.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Mobile Car Detailing — Urmston`,
    description:
      "5★ mobile car detailing & ceramic coating across Urmston and Greater Manchester.",
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BUSINESS.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = buildLocalBusinessSchema();

  return (
    <html
      lang="en-GB"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
