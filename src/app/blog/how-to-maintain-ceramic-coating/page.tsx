import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How to Maintain a Ceramic Coating Between Washes | Latin King Detailing",
  description:
    "Your ceramic coating lasts 2–3 years only if you maintain it correctly. This guide covers the right wash method, safe products, and what to avoid — from the professionals who applied it.",
  alternates: { canonical: "/blog/how-to-maintain-ceramic-coating" },
};

const FAQS = [
  {
    question: "Can I take my ceramic-coated car through an automatic car wash?",
    answer:
      "No. Automated car washes with rotating brushes will introduce swirl marks into even a ceramic-coated surface. The ceramic layer reduces but does not eliminate the damage these brushes cause. Use touchless car washes or, preferably, hand washing with the two-bucket method.",
  },
  {
    question: "How often should I wash a ceramic-coated car?",
    answer:
      "Wash your ceramic-coated car whenever it looks visibly dirty — typically every 2–4 weeks. One benefit of ceramic coating is that dirt does not bond as readily to the surface, so washes are quicker and easier than on uncoated paint.",
  },
  {
    question: "What products are safe to use on ceramic coating?",
    answer:
      "Use pH-neutral car shampoos for regular washing. Avoid shampoos containing wax or gloss enhancers as these can leave residues on the hydrophobic surface. For maintenance top-ups, use a SiO₂ ceramic topper or detailer spray designed for use on coated surfaces.",
  },
];

export default function MaintainCeramicPost() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "How to Maintain Ceramic Coating", url: `${BUSINESS.url}/blog/how-to-maintain-ceramic-coating` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Maintain a Ceramic Coating",
        description: "Steps to maintain a professionally applied ceramic coating to maximise its 2–3 year lifespan.",
        author: { "@type": "Organization", name: BUSINESS.name },
        step: [
          { "@type": "HowToStep", name: "Use the two-bucket wash method", text: "Fill one bucket with shampoo solution and one with clean rinse water. Always rinse your mitt in the clean bucket before loading with fresh shampoo solution." },
          { "@type": "HowToStep", name: "Use a pH-neutral shampoo", text: "Avoid alkaline-heavy traffic film removers and degreasers that strip ceramic coating chemistry. Use a dedicated pH-neutral shampoo." },
          { "@type": "HowToStep", name: "Dry with a microfibre drying towel", text: "Pat dry with a large, clean microfibre drying towel rather than a chamois to avoid introducing micro-scratches." },
          { "@type": "HowToStep", name: "Apply a SiO₂ topper spray every 3–4 months", text: "A ceramic topper spray applied to a wet car after washing refreshes the hydrophobic layer and boosts water beading performance." },
          { "@type": "HowToStep", name: "Avoid automated car washes", text: "Brushes in automated car washes introduce swirl marks even through a ceramic coating. Stick to hand washing." },
        ],
      })}} />

      <article className="section-pad pt-32 md:pt-40">
        <div className="section-container max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Maintain Ceramic Coating" },
            ]}
          />

          <div className="mb-4 flex items-center gap-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded" style={{ background: "rgba(196,30,58,0.15)", color: "var(--color-accent-400)", border: "1px solid rgba(196,30,58,0.25)" }}>
              How-To
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Clock size={11} /> 5 min read
            </span>
          </div>

          <h1 className="mb-6">
            How to Maintain a{" "}
            <span className="gradient-text-red">Ceramic Coating</span>{" "}
            Between Washes
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "none" }}>
            A ceramic coating lasts 2–3 years only if it&apos;s maintained correctly. Use the wrong products or the wrong wash technique and you&apos;ll degrade the coating prematurely. This guide covers exactly what you need to do — and what to avoid — to keep your coating performing at its best.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                1. Always use the two-bucket wash method
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                The two-bucket method is the correct way to hand wash any vehicle — coated or not. Fill one bucket with your pH-neutral shampoo solution and one bucket with clean rinse water. After each wipe across the paint, rinse your wash mitt in the clean water bucket before loading it with fresh soapy water. This prevents dirt picked up from the paint from being dragged back across the surface, which is the primary cause of wash-induced swirl marks.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                2. Use only pH-neutral shampoo
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                Alkaline cleaning products — traffic film removers, degreasers and shampoos containing alkaline surfactants — can strip the chemistry of a ceramic coating over repeated use. Always use a pH-neutral car shampoo. Avoid shampoos with added wax or gloss enhancers, as these leave hydrophilic residues that interfere with the coating&apos;s hydrophobic performance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                3. Never use an automated brush car wash
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                This is the single most important rule. Rotating brushes in automated car washes introduce swirl marks and fine scratches into the clear coat — even through a ceramic coating. The ceramic layer reduces the damage but does not prevent it entirely. If you need a quick wash and can&apos;t hand wash, a touchless high-pressure rinse is acceptable for removing light surface contamination.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                4. Dry with a clean microfibre — not a chamois
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                Chamois leathers, however soft they feel, drag across the paint and can introduce fine scratches, particularly on dark colours. Use a large, clean waffle-weave or plush microfibre drying towel and pat or blot dry rather than wiping in long strokes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                5. Apply a SiO₂ topper every 3–4 months
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                A ceramic coating maintenance topper — sometimes called a &ldquo;spray coat&rdquo; or &ldquo;SiO₂ quick detailer&rdquo; — is applied to the wet car immediately after rinsing. It refreshes the hydrophobic layer, boosts water beading and adds a temporary top layer of protection. Applied every 3–4 months, it significantly extends the effective life of the underlying ceramic coating.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                6. Remove contaminants promptly
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                Bird droppings, tree sap and insect residue are acidic and can etch into the ceramic coating if left in direct sunlight. Remove these promptly using a dedicated citrus pre-wash spray or by soaking with a damp cloth before wiping away. Never dry-wipe bird dropping off paint — always wet first.
              </p>
            </section>

            {/* Summary */}
            <div className="card p-6" style={{ background: "rgba(196,30,58,0.07)", border: "1px solid rgba(196,30,58,0.2)" }}>
              <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.15rem" }}>
                Maintenance checklist
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                {[
                  "✓ Two-bucket wash method every time",
                  "✓ pH-neutral shampoo — no wax additives",
                  "✓ No automated brush car washes",
                  "✓ Microfibre drying towel — not chamois",
                  "✓ SiO₂ topper spray every 3–4 months",
                  "✓ Promptly remove bird droppings and tree sap",
                  "✓ Annual professional inspection recommended",
                ].map((item) => (
                  <li key={item} className="font-medium">{item}</li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl mb-6" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                Common questions
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

          <div className="mt-12 flex flex-col gap-3">
            <h2 className="text-xl" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>Related reading</h2>
            <Link href="/blog/ceramic-coating-vs-wax" className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
              <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>Ceramic coating vs wax — which paint protection is right for your car?</span>
              <ArrowRight size={14} className="flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
            </Link>
          </div>
        </div>
      </article>

      <CTASection
        eyebrow="Professional ceramic coating"
        title="Book a ceramic coating in Manchester"
        description="Latin King Detailing applies professional-grade SiO₂ ceramic coatings across Urmston and Greater Manchester. Full paint prep included."
      />
    </>
  );
}
