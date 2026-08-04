import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { GMBMapSection } from "@/components/sections/GMBMapSection";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildWebSiteSchema, buildOrganizationSchema } from "@/lib/schema";

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
    default: `Car Detailing Manchester | Mobile Valeting & Ceramic Coating — Latin King Detailing`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Professional mobile car detailing in Manchester & Urmston. Ceramic coating, paint correction, machine polishing & interior detailing — we come to your door. 5★ rated. From £40. Call 07482 225323.",
  keywords: [
    "car wash urmston",
    "car valet urmston",
    "hand car wash urmston",
    "mobile car detailing manchester",
    "manchester car detailing",
    "car detailing manchester",
    "mobile car valet urmston",
    "mini valet near me",
    "car valet near me",
    "car cleaning near me",
    "ceramic coating manchester",
    "interior car detailing manchester",
    "mobile car detailing urmston",
    "car valeting manchester",
    "ceramic coating urmston",
    "paint correction manchester",
    "mobile car wash urmston",
    "car detailing trafford",
    "best ceramic coating for cars uk",
    "car engine steam cleaning near me",
    "sports car detailing manchester",
    "full car detail manchester",
  ],
  authors: [{ name: BUSINESS.name, url: BUSINESS.url }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `Car Detailing Manchester | Mobile Ceramic Coating & Paint Correction — Latin King Detailing`,
    description:
      "5★ rated mobile car detailing, ceramic coating & paint correction across Manchester, Urmston, Trafford and Greater Manchester. Fixed quotes. Call 07482 225323.",
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BUSINESS.url,
  },
  verification: {
    google: "fjxECF8Q5nGXCLFZ5Q0wqVglIhN82FModYO5DwC_tFM",
  },
  other: {
    "msvalidate.01": "EFE63A3012771FF0D88E1168661DBB0F",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const webSiteSchema = buildWebSiteSchema();
  const organizationSchema = buildOrganizationSchema();

  return (
    <html
      lang="en-GB"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        {/* Resource hints for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        {/* Skip-to-content for keyboard and screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold focus:text-white"
          style={{ background: "var(--color-accent-600)" }}
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <GMBMapSection />
        <Footer />
        <MobileCTABar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
