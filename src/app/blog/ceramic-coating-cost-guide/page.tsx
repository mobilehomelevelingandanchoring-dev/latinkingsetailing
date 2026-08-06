import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How Much Does Ceramic Coating Cost in the UK? (2025 Guide) | Latin King Detailing",
  description:
    "Ceramic coating prices in the UK explained — what affects the cost, what's included, whether it's worth it, and how much to expect to pay in Manchester. Honest guide from a professional detailer.",
  alternates: { canonical: "/blog/ceramic-coating-cost-guide" },
  openGraph: {
    title: "Ceramic Coating Cost UK: Complete 2025 Price Guide",
    description:
      "What does ceramic coating cost in the UK? We break down prices, what's included, and whether it's worth it — from a professional detailer in Manchester.",
    type: "article",
    publishedTime: "2025-06-01",
    modifiedTime: "2025-06-01",
    authors: [BUSINESS.url],
    tags: ["ceramic coating", "ceramic coating cost", "ceramic coating price uk", "car detailing manchester"],
  },
};

const FAQS = [
  {
    question: "How much does ceramic coating cost in the UK?",
    answer:
      "Professional ceramic coating in the UK costs between £200 and £2,000+ depending on vehicle size, paint condition and the grade of coating applied. A professional coating on a standard-sized car from a reputable mobile detailer in Manchester starts from £250 at Latin King Detailing. This always includes full paint decontamination and machine polishing before application.",
  },
  {
    question: "Is ceramic coating worth it in the UK?",
    answer:
      "Yes — particularly in the UK's wet climate. A professional ceramic coating lasts 2–3 years and costs less over that period than repeated wax applications, while providing significantly better hydrophobic performance, UV protection and gloss. For drivers in Manchester and the northwest, where rain and road salt are frequent, the practical daily benefit is a car that stays cleaner with far less effort.",
  },
  {
    question: "Why is ceramic coating expensive?",
    answer:
      "The cost reflects the preparation required, not just the coating itself. A professional ceramic coating package includes full paint decontamination (iron fallout removal, clay bar), machine polishing to correct surface defects, IPA wipe-down for maximum adhesion, and careful coating application with a controlled cure time. The preparation stage is the most time-intensive part — skipping it produces a poor result.",
  },
  {
    question: "How long does professional ceramic coating last?",
    answer:
      "A professionally applied ceramic coating lasts 2–3 years with correct maintenance — specifically, using touchless or two-bucket hand wash technique and avoiding automated brush car washes. Some premium-grade coatings with annual maintenance top-ups can last 5+ years.",
  },
];

export default function CeramicCoatingCostGuidePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Ceramic Coating Cost Guide", url: `${BUSINESS.url}/blog/ceramic-coating-cost-guide` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "How Much Does Ceramic Coating Cost in the UK? (2025 Price Guide)",
    description:
      "Ceramic coating prices in the UK explained — what affects the cost, what's included, whether it's worth the investment, and how much to expect to pay in Manchester and Greater Manchester.",
    datePublished: "2025-06-01",
    dateModified: "2025-06-01",
    url: `${BUSINESS.url}/blog/ceramic-coating-cost-guide`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article>
        <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
          <div className="section-container max-w-3xl">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Ceramic Coating Cost Guide" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Cost Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                6 min read
              </span>
            </div>

            <h1 className="mb-5">
              How Much Does Ceramic Coating Cost in the UK?
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              A clear, honest breakdown of ceramic coating prices in the UK — what affects the cost, what you should get for your money, and whether the investment is worth it.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="prose-custom space-y-8">

              <div>
                <h2 className="mb-4">Ceramic coating price summary — UK 2025</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                        {["Vehicle size", "Price range", "What's included"].map((h) => (
                          <th
                            key={h}
                            className="text-left py-3 px-4 font-semibold text-white text-xs uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Small / Hatchback", "£250–£500", "Prep, polish and coating"],
                        ["Medium / Saloon", "£250–£700", "Prep, polish and coating"],
                        ["Large / SUV", "£500–£1,000", "Prep, polish and coating"],
                        ["Prestige / Exotic", "£800–£2,000+", "Full correction + premium coating"],
                      ].map(([size, price, inc], i) => (
                        <tr
                          key={i}
                          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                        >
                          <td className="py-3 px-4 text-white">{size}</td>
                          <td className="py-3 px-4" style={{ color: "var(--color-accent-500)", fontWeight: 700 }}>
                            {price}
                          </td>
                          <td className="py-3 px-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                            {inc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Prices based on professional mobile detailing in Manchester / Greater Manchester. Latin King Detailing starts from £250.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What affects the cost of ceramic coating?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  The final price of a ceramic coating depends on several factors — none of which should be cut to reduce cost.
                </p>
                {[
                  {
                    title: "Paint preparation — the biggest time cost",
                    body: "Ceramic coating bonds to whatever surface is beneath it. If the paint has swirl marks, contamination or scratches, the coating will lock them in permanently. A professional coating package always includes decontamination (iron fallout removal, clay bar) and a machine polish stage to correct or enhance the paint before coating application. This preparation stage takes the majority of the job time.",
                  },
                  {
                    title: "Vehicle size",
                    body: "A larger vehicle takes more time to wash, decontaminate, polish and coat. A small hatchback takes significantly less product and time than a full-size SUV or prestige saloon. Most detailers size their quotes accordingly.",
                  },
                  {
                    title: "Paint condition",
                    body: "A car covered in heavy swirl marks or deep scratches requires a more intensive paint correction stage before coating. A one-stage enhancement polish takes less time and fewer passes than a two-stage correction on heavily defected paint.",
                  },
                  {
                    title: "Coating grade and brand",
                    body: "Consumer-grade coatings (available online for £20–£50) are significantly less durable than professional-grade products. A professional coating applied by a trained detailer uses formulations not available to the public, applied at the correct temperature and with the correct cure technique.",
                  },
                ].map((item) => (
                  <div key={item.title} className="mb-5">
                    <h3
                      className="mb-2"
                      style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="mb-4">What should be included in a professional ceramic coating?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A professional ceramic coating package should always include — at a minimum:
                </p>
                <ul className="space-y-2">
                  {[
                    "Full exterior wash (foam cannon pre-wash + safe hand wash)",
                    "Iron fallout decontamination",
                    "Clay bar bonded contamination removal",
                    "Machine polish or paint correction stage",
                    "IPA (isopropyl alcohol) panel-wipe for maximum coating adhesion",
                    "Professional-grade SiO₂ ceramic coating application",
                    "Controlled flash and cure time",
                    "Post-cure inspection under detail lighting",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      <span style={{ color: "var(--color-accent-500)", marginTop: "2px" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  className="text-sm leading-relaxed mt-4 p-4 rounded-lg"
                  style={{ color: "rgba(255,255,255,0.65)", background: "var(--color-base-800)", borderLeft: "3px solid var(--color-accent-500)" }}
                >
                  <strong className="text-white">Warning:</strong> A ceramic coating applied over contaminated or swirled paint will look worse than the uncoated original — it locks in those defects permanently. If a quote seems unusually cheap, it is likely because the preparation stage has been reduced or skipped.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Is ceramic coating worth the cost in Manchester?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Yes — and the case for ceramic coating is particularly strong in Manchester&apos;s climate.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Manchester is one of the UK&apos;s wettest cities, with frequent rain throughout the year and road salt in winter. Without protection, these conditions mean the paint accumulates contamination rapidly between washes. A ceramic-coated car repels water and grime significantly more effectively — the hydrophobic surface causes water to bead and sheet off, carrying contaminants with it.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Compared to wax: carnauba wax lasts 4–8 weeks and costs £30–£100 per application (professionally applied). Over a 2–3 year period, you would spend £300–£800+ on wax applications that collectively provide less protection than a single £250+ ceramic coating. The maths favour ceramic coating for most drivers who use their car regularly in a Manchester climate.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Ceramic coating vs DIY coating kits</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Consumer ceramic coating products are widely available online for £20–£80. While they contain some SiO₂, they are typically lower in concentration than professional products and require the same preparation steps as a professional application — which most DIY applicators skip.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  The risk of DIY ceramic coating is high-spots — areas where the coating cures unevenly, leaving a smeared, rainbow-coloured mark that requires machine polishing to remove. Professional application includes controlling the ambient temperature and flash time, and inspecting each panel under LED lighting to catch high-spots before they cure. This expertise is what justifies the professional cost.
                </p>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="mb-6">Common questions about ceramic coating costs</h2>
                <div className="space-y-5">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="card p-6">
                      <h3
                        className="font-bold mb-3"
                        style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}
                      >
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related */}
              <div className="pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                <p className="text-sm font-semibold text-white mb-3">Related articles</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/blog/ceramic-coating-vs-wax" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Ceramic Coating vs Wax
                    <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/how-to-maintain-ceramic-coating" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    How to Maintain Ceramic Coating
                    <ArrowRight size={13} />
                  </Link>
                  <Link href="/ceramic-coating-manchester" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Ceramic Coating Manchester
                    <ArrowRight size={13} />
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    View Our Pricing
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Professional Ceramic Coating — Manchester"
        title="Get Your Ceramic Coating Quote Today"
        description="Professional SiO₂ ceramic coating from £250. Full paint decontamination and machine polish always included. Fixed price confirmed before we start."
        primaryCTA="Get My Coating Quote"
      />
    </>
  );
}
