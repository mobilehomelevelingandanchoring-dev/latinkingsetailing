import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Sitemap | Latin King Detailing",
  description:
    "Browse all pages on the Latin King Detailing website — services, areas covered, gallery, blog and contact information.",
  alternates: { canonical: "/sitemap-html" },
};

const SECTIONS = [
  {
    heading: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Customer Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact & Free Quote", href: "/contact" },
      { label: "Book Online", href: "/book" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "All Services", href: "/services" },
      ...BUSINESS.services.map((s) => ({
        label: s.name,
        href: `/services/${s.slug}`,
      })),
    ],
  },
  {
    heading: "Areas We Cover",
    links: [
      { label: "All Service Areas", href: "/areas" },
      ...BUSINESS.areas.map((a) => ({
        label: `${a.name}${a.postcodes.length ? ` (${a.postcodes.join(", ")})` : ""}`,
        href: `/areas/${a.slug}`,
      })),
    ],
  },
  {
    heading: "Blog & Guides",
    links: [
      { label: "Car Detailing Blog", href: "/blog" },
      { label: "Ceramic Coating vs Wax", href: "/blog/ceramic-coating-vs-wax" },
      { label: "How to Maintain a Ceramic Coating", href: "/blog/how-to-maintain-ceramic-coating" },
      { label: "Mobile Detailing vs Automated Car Wash", href: "/blog/mobile-detailing-vs-car-wash" },
    ],
  },
  {
    heading: "Legal",
    links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
  },
];

export default function SitemapHtmlPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Sitemap", url: `${BUSINESS.url}/sitemap-html` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="section-pad pt-32 md:pt-40">
        <div className="section-container max-w-4xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Sitemap" },
            ]}
          />

          <p className="eyebrow">Navigation</p>
          <h1 className="mb-10">Site Map</h1>

          <div className="grid gap-10 sm:grid-cols-2">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2
                  className="text-sm font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-barlow)" }}
                >
                  {section.heading}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm footer-link hover:text-white transition-colors"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              For automated crawlers, the XML sitemap is available at{" "}
              <Link
                href="/sitemap.xml"
                className="underline"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                /sitemap.xml
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
