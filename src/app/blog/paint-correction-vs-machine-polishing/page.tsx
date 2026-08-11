import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Paint Correction vs Machine Polishing: What's the Difference? | Latin King Detailing",
  description:
    "Paint correction and machine polishing are often confused — but they serve different purposes. Here's a clear, expert guide to what each process does, what defects each removes, and which your car needs.",
  alternates: { canonical: "/blog/paint-correction-vs-machine-polishing" },
  openGraph: {
    title: "Paint Correction vs Machine Polishing: What's the Difference?",
    description:
      "Expert guide to the difference between paint correction and machine polishing — what each removes, when you need each, and how to choose from a professional Manchester detailer.",
    type: "article",
    publishedTime: "2025-07-01",
    modifiedTime: "2025-07-01",
    authors: [BUSINESS.url],
    tags: ["paint correction", "machine polishing", "swirl marks", "car detailing manchester", "scratch removal"],
  },
};

const FAQS = [
  {
    question: "What is machine polishing?",
    answer:
      "Machine polishing is the use of a motorised polishing machine — dual-action (DA) or rotary — with a selected compound or polish and appropriate pad to refine the surface of a vehicle's clear coat. It removes mild surface defects and significantly improves gloss compared to polishing by hand.",
  },
  {
    question: "What is paint correction?",
    answer:
      "Paint correction is a specific, intensive machine polishing process designed to remove significant paint defects — swirl marks, scratches, water spots, oxidation and haze — from the clear coat. It typically uses more aggressive cutting compounds and multiple polishing stages compared to a standard enhancement polish.",
  },
  {
    question: "Can machine polishing remove swirl marks?",
    answer:
      "Yes — light to moderate swirl marks can be removed or significantly reduced by machine polishing. Deep swirl marks and scratches typically require the more aggressive compounds used in a full paint correction process.",
  },
  {
    question: "How do I know if my car needs paint correction or just a machine polish?",
    answer:
      "Inspect the paintwork under direct sunlight or strong artificial lighting from a low angle. Faint circular marks (swirl marks) and mild haze visible only in strong light suggest a machine enhancement polish will be sufficient. Clearly visible scratches, significant oxidation, or dense swirl marks visible in normal daylight suggest a full paint correction is needed.",
  },
  {
    question: "How much does paint correction cost in Manchester?",
    answer:
      "Paint correction in Manchester starts from £200 at Latin King Detailing. Machine polishing (enhancement polish) starts from £200. The exact price depends on vehicle size, paint condition and the number of stages required. We assess the paint and provide a fixed quote before any work begins.",
  },
];

export default function PaintCorrectionVsMachinePolishingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Paint Correction vs Machine Polishing", url: `${BUSINESS.url}/blog/paint-correction-vs-machine-polishing` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Paint Correction vs Machine Polishing: What's the Difference and Which Does Your Car Need?",
    description:
      "A clear expert guide to the difference between paint correction and machine polishing — what defects each process removes, when you need each, and how to tell which is right for your car.",
    datePublished: "2025-07-01",
    dateModified: "2025-07-01",
    url: `${BUSINESS.url}/blog/paint-correction-vs-machine-polishing`,
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
                { label: "Paint Correction vs Machine Polishing" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Detailing Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                5 min read
              </span>
            </div>

            <h1 className="mb-5">
              Paint Correction vs Machine Polishing: What&apos;s the Difference?
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              The terms are often used interchangeably — but they describe different processes, different levels of intensity, and different results.
            </p>
          </div>
        </section>

        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <div className="space-y-8">

              <div>
                <h2 className="mb-4">The quick summary</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      name: "Machine Polishing / Paint Enhancement",
                      also: "Enhancement polish",
                      removes: "Mild swirls, light haze, minor oxidation",
                      adds: "Gloss, clarity, depth",
                      price: "From £200",
                      time: "4–8 hours",
                    },
                    {
                      name: "Paint Correction",
                      also: "One-stage or two-stage correction",
                      removes: "Swirl marks, scratches, water spots, oxidation, haze",
                      adds: "Restored clarity, significant gloss improvement",
                      price: "From £200",
                      time: "6–12 hours",
                    },
                  ].map((v) => (
                    <div key={v.name} className="card p-6" style={{ background: "var(--color-base-800)" }}>
                      <h3 className="font-bold text-white mb-1" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.2rem" }}>
                        {v.name}
                      </h3>
                      <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {v.also}
                      </p>
                      <div className="space-y-1.5 text-xs">
                        <p style={{ color: "rgba(255,255,255,0.65)" }}>
                          <span className="text-white font-semibold">Removes: </span>{v.removes}
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.65)" }}>
                          <span className="text-white font-semibold">Price: </span>
                          <span style={{ color: "var(--color-accent-500)", fontWeight: 700 }}>{v.price}</span>
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.65)" }}>
                          <span className="text-white font-semibold">Time: </span>{v.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4">What is machine polishing?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Machine polishing — also called an enhancement polish — uses a dual-action or rotary polishing machine with a finishing or light cutting compound to refine the clear coat surface. The goal is to improve the gloss, depth and clarity of the paint, removing mild imperfections in the process.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A machine enhancement polish is ideal for cars in reasonable condition that have mild surface haze, very light swirl marks, or paint that has simply lost its depth over time. It is a key step before ceramic coating application, ensuring the paint surface is as refined as possible before the protective layer is applied.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What is paint correction?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Paint correction is a more intensive machine polishing process that uses more aggressive cutting compounds and — in the case of a two-stage correction — multiple polishing stages. The aim is to physically remove defects from the clear coat layer: the circular swirl marks left by automated car washes, scratches from incorrect washing, water spots etched into the clear coat, oxidation (the white chalky haze that affects older or poorly maintained paint) and haze.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Paint correction works by removing a controlled, minimal amount of clear coat — levelling the surface until the defects sitting within it are eliminated. Latin King Detailing measures paint depth with a gauge before every correction to confirm the clear coat is thick enough to be worked safely.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What defects can each process remove?</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                        {["Defect", "Machine Polish", "Paint Correction"].map((h) => (
                          <th key={h} className="text-left py-3 px-4 font-semibold text-white text-xs uppercase tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Mild surface haze", "Yes", "Yes"],
                        ["Light swirl marks", "Partly", "Yes"],
                        ["Heavy swirl marks", "No", "Yes"],
                        ["Fine scratches (clear coat)", "No", "Yes"],
                        ["Water spots (light)", "Partly", "Yes"],
                        ["Water spots (etched)", "No", "Yes"],
                        ["Oxidation (mild)", "Partly", "Yes"],
                        ["Oxidation (heavy)", "No", "Yes"],
                        ["Deep scratches (base coat)", "No", "No"],
                        ["Stone chips", "No", "No"],
                      ].map(([defect, polish, correction], i) => (
                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                          <td className="py-3 px-4" style={{ color: "rgba(255,255,255,0.75)" }}>{defect}</td>
                          <td className="py-3 px-4" style={{ color: polish === "Yes" ? "#4ade80" : polish === "Partly" ? "#facc15" : "#f87171" }}>
                            {polish}
                          </td>
                          <td className="py-3 px-4" style={{ color: correction === "Yes" ? "#4ade80" : "#f87171" }}>
                            {correction}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="mb-4">How to tell which process your car needs</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Inspect the paintwork under direct sunlight or a strong LED light, held at a low angle to the surface. This makes surface defects visible that would be invisible in diffuse indoor light.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      symptom: "Faint swirl marks visible only in direct sunlight, paint looks generally good",
                      verdict: "Enhancement polish (machine polishing) will be sufficient.",
                    },
                    {
                      symptom: "Clearly visible circular swirl marks, paint looks dull in most lighting",
                      verdict: "One-stage paint correction is recommended.",
                    },
                    {
                      symptom: "Dense swirl marks plus visible scratches and/or water spots etched into the clear coat",
                      verdict: "Two-stage paint correction required.",
                    },
                    {
                      symptom: "White haze or chalky appearance on older paint",
                      verdict: "Paint correction is required — this is oxidation within the clear coat.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="card p-5" style={{ background: "var(--color-base-800)" }}>
                      <p className="text-sm mb-1.5 font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                        If you see: {item.symptom}
                      </p>
                      <p className="text-sm flex items-start gap-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                        <span style={{ color: "var(--color-accent-500)" }}>→</span>
                        {item.verdict}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4">What happens after polishing or correction?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Both machine polishing and paint correction remove the existing protection from the paint surface — any wax or sealant is stripped in the process. Both should always be followed by a protective coating: wax, polymer sealant or — for the best and most durable result — a professional SiO₂ ceramic coating.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Ceramic coating applied immediately after paint correction gives the best possible result: the freshly corrected surface bonds more effectively with the coating, and the newly enhanced gloss is preserved and enhanced by the ceramic layer. This combination — correction then coating — is the gold standard finish in professional car detailing.
                </p>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="mb-6">Common questions</h2>
                <div className="space-y-5">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="card p-6">
                      <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}>
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                <p className="text-sm font-semibold text-white mb-3">Related services and articles</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services/paint-correction" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Paint Correction Service <ArrowRight size={13} />
                  </Link>
                  <Link href="/services/machine-polishing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Machine Polishing Service <ArrowRight size={13} />
                  </Link>
                  <Link href="/ceramic-coating-manchester" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Ceramic Coating Manchester <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/ceramic-coating-vs-wax" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Ceramic Coating vs Wax <ArrowRight size={13} />
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    View All Prices <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTASection
        eyebrow="Paint Correction & Machine Polishing — Manchester"
        title="Restore Your Paint&apos;s True Gloss"
        description="Professional paint correction and machine polishing across Greater Manchester. We assess your paint and recommend the right process for your car — with a fixed price before we start."
        primaryCTA="Get Paint Correction Quote"
      />
    </>
  );
}
