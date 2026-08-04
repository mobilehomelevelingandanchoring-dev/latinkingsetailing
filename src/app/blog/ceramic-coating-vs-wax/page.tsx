import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ceramic Coating vs Wax: Which Paint Protection is Right for You?",
  description:
    "Ceramic coating and wax both protect your car's paint — but they work differently, last different lengths of time, and suit different budgets. Here's an honest, factual comparison from a professional detailer.",
  alternates: { canonical: "/blog/ceramic-coating-vs-wax" },
  openGraph: {
    title: "Ceramic Coating vs Wax: The Complete Comparison",
    description: "Professional breakdown of ceramic coating vs wax — durability, hydrophobics, cost and which is right for your car.",
    type: "article",
    publishedTime: "2025-01-15",
    modifiedTime: "2025-01-15",
    authors: [BUSINESS.url],
    tags: ["ceramic coating", "car wax", "paint protection", "car detailing"],
  },
};

const FAQS = [
  {
    question: "Is ceramic coating better than wax?",
    answer:
      "Ceramic coating provides significantly longer-lasting protection (2–3 years vs 2–4 months for wax), better hydrophobic performance, improved UV resistance and greater chemical resistance. It costs more upfront but is more cost-effective over a 2–3 year period when the total cost of repeated wax applications is compared.",
  },
  {
    question: "Can you apply wax over ceramic coating?",
    answer:
      "You can apply wax over ceramic coating, but it provides minimal additional benefit and the wax will not bond as effectively to a hydrophobic ceramic surface. A ceramic coating-specific maintenance product or a SiO₂ topper spray is a better choice for refreshing an existing ceramic coating.",
  },
  {
    question: "How long does ceramic coating last compared to wax?",
    answer:
      "A professionally applied ceramic coating lasts 2–3 years with correct maintenance. Carnauba wax lasts 4–8 weeks. A synthetic polymer sealant typically lasts 3–6 months. Ceramic coating is considerably more durable.",
  },
];

export default function CeramicVsWaxPost() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Ceramic Coating vs Wax", url: `${BUSINESS.url}/blog/ceramic-coating-vs-wax` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Ceramic Coating vs Wax: Which Paint Protection is Right for Your Car?",
    description: "Ceramic coating and wax both protect your car's paint — but they work differently, last different lengths of time, and suit different budgets. An honest, factual comparison from a professional detailer.",
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    url: `${BUSINESS.url}/blog/ceramic-coating-vs-wax`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="section-pad pt-32 md:pt-40">
        <div className="section-container max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Ceramic Coating vs Wax" },
            ]}
          />

          <div className="mb-4 flex items-center gap-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded"
              style={{ background: "rgba(196,30,58,0.15)", color: "var(--color-accent-400)", border: "1px solid rgba(196,30,58,0.25)" }}
            >
              Comparison
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              <Clock size={11} />
              6 min read
            </span>
          </div>

          <h1 className="mb-6">
            Ceramic Coating vs Wax:{" "}
            <span className="gradient-text-red">Which is Right for Your Car?</span>
          </h1>

          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "none" }}>
            Wax has protected car paintwork for over a century. Ceramic coating has been the professional standard for the past decade. Both protect paint — but they work differently, suit different vehicles and represent very different value propositions. Here&apos;s an honest, factual breakdown.
          </p>

          {/* Comparison table */}
          <div className="card overflow-hidden mb-10">
            <div
              className="grid grid-cols-3 text-xs font-semibold uppercase tracking-wider p-4"
              style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}
            >
              <span>Factor</span>
              <span>Wax</span>
              <span className="text-accent-400" style={{ color: "var(--color-accent-400)" }}>Ceramic Coating</span>
            </div>
            {[
              ["Durability", "4–8 weeks (carnauba)\n3–6 months (synthetic)", "2–3 years"],
              ["Hydrophobic performance", "Good", "Excellent — water sheets off"],
              ["Scratch resistance", "Minimal", "Moderate (clear coat protection)"],
              ["UV protection", "Basic", "Strong"],
              ["Chemical resistance", "Low", "High"],
              ["Application", "DIY-friendly", "Professional recommended"],
              ["Cost (initial)", "£10–£60 per product", "£350+ professional application"],
              ["Cost over 3 years", "£60–£180+ (repeated)", "£350 (once)"],
            ].map(([factor, wax, ceramic]) => (
              <div
                key={factor}
                className="grid grid-cols-3 p-4 text-sm border-t"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span className="font-semibold text-white">{factor}</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>{wax}</span>
                <span className="font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{ceramic}</span>
              </div>
            ))}
          </div>

          <div className="prose-custom space-y-8">
            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                How wax works
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                Carnauba wax is a natural product derived from the leaves of a Brazilian palm tree. When applied to clean paint, it fills microscopic surface imperfections and creates a sacrificial layer that provides temporary UV protection and water repellency. Because it sits on the surface rather than bonding to it, it wears away quickly — typically within 4–8 weeks of regular washing and road use.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                Synthetic polymer sealants work similarly but last longer (3–6 months) and provide more consistent water behaviour. Neither option competes with ceramic coating for durability — but wax provides an accessible, DIY-friendly protection level that suits vehicles not warranting the investment of a full ceramic.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                How ceramic coating works
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                A ceramic coating is a liquid SiO₂ (silicon dioxide) polymer that, when applied to clean, decontaminated paintwork, undergoes a curing reaction and bonds permanently to the clear coat at a molecular level. The result is a semi-permanent protective layer that is significantly harder than the clear coat itself.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                This layer provides hydrophobic properties that make water bead and sheet off the surface, UV resistance that prevents colour fade and oxidation, chemical resistance against bird droppings, tree sap and road chemicals, and a measurable increase in surface scratch resistance. A professionally applied ceramic coating lasts 2–3 years with correct maintenance wash technique.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                Which should you choose?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                <strong>Choose wax or sealant if:</strong> you drive a vehicle you plan to sell within a year, your car is older and the paint condition doesn&apos;t warrant investment in premium protection, or you prefer to apply protection yourself at home.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                <strong>Choose ceramic coating if:</strong> you intend to keep your vehicle for 2+ years, your car is new or recently corrected and you want to protect that condition, you&apos;re tired of frequent wax application and reapplication, or you drive a high-value vehicle where the investment in protection makes logical sense.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl mb-6" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="card p-6">
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}>
                      {faq.question}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Author / about */}
          <div
            className="mt-12 p-6 rounded-xl flex items-center gap-4"
            style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #c41e3a, #7c0015)", color: "white" }}
            >
              LK
            </div>
            <div>
              <p className="font-bold text-white">{BUSINESS.name}</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Mobile car detailing & ceramic coating specialists. Based in {BUSINESS.address.city}, {BUSINESS.address.postcode}.
              </p>
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-12">
            <h2 className="text-xl mb-5" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
              Related articles
            </h2>
            <div className="flex flex-col gap-3">
              <Link href="/blog/how-to-maintain-ceramic-coating" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  How to maintain a ceramic coating between professional washes
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
              <Link href="/blog/mobile-detailing-vs-car-wash" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Mobile car detailing vs automated car wash: the real difference
                </span>
                <ArrowRight size={14} className="flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        eyebrow="Interested in ceramic coating?"
        title="Book a ceramic coating in Urmston"
        description="Professional SiO₂ ceramic coating across Urmston, Trafford and Greater Manchester. Get a no-obligation quote today."
      />
    </>
  );
}
