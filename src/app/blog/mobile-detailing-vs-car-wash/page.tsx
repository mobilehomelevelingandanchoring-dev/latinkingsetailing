import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Mobile Car Detailing vs Automated Car Wash — The Real Difference",
  description:
    "What do you actually get from a £5 drive-through versus a professional mobile detail? We break down the differences in products, results and long-term paint health.",
  alternates: { canonical: "/blog/mobile-detailing-vs-car-wash" },
};

const FAQS = [
  {
    question: "Is a hand car wash better than an automatic car wash?",
    answer:
      "A professional hand wash using the correct two-bucket method and pH-neutral shampoo is significantly better for your paintwork than an automated brush car wash. Brushes in automated washes introduce swirl marks and fine scratches over time. A contactless automated wash is safer than a brush wash but still less thorough than a careful hand wash.",
  },
  {
    question: "What is the difference between a valet and car detailing?",
    answer:
      "A valet focuses on cleaning — washing, vacuuming and wiping down the vehicle. Detailing goes further to include paint decontamination (iron removal, clay bar), machine polishing to correct surface defects, and long-term protection application such as wax, sealant or ceramic coating.",
  },
  {
    question: "Are automated car washes bad for car paint?",
    answer:
      "Automated car washes with rotating brushes introduce swirl marks and fine scratches into clear coat paint over repeated use, particularly on darker colours where these marks are more visible. Touchless automated car washes avoid this but are less effective at removing bonded contamination than a proper hand wash with correct technique.",
  },
];

export default function MobileVsCarWashPost() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Mobile Detailing vs Car Wash", url: `${BUSINESS.url}/blog/mobile-detailing-vs-car-wash` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="section-pad pt-32 md:pt-40">
        <div className="section-container max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Mobile Detailing vs Car Wash" },
            ]}
          />

          <div className="mb-4 flex items-center gap-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded" style={{ background: "rgba(196,30,58,0.15)", color: "var(--color-accent-400)", border: "1px solid rgba(196,30,58,0.25)" }}>
              Comparison
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Clock size={11} /> 5 min read
            </span>
          </div>

          <h1 className="mb-6">
            Mobile Car Detailing vs{" "}
            <span className="gradient-text-red">Automated Car Wash</span>:{" "}
            The Real Difference
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "none" }}>
            A drive-through car wash costs £5–£10 and takes three minutes. A professional mobile detail costs significantly more and takes several hours. This is an honest comparison of what you actually get for the difference — and why it matters for the long-term health of your paint.
          </p>

          <div className="card overflow-hidden mb-10">
            <div className="grid grid-cols-3 text-xs font-semibold uppercase tracking-wider p-4" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}>
              <span>Factor</span>
              <span>Automated Wash</span>
              <span style={{ color: "var(--color-accent-400)" }}>Mobile Detail</span>
            </div>
            {[
              ["Paint safety", "Brushes cause swirl marks", "Safe technique, no contact damage"],
              ["Decontamination", "None — surface rinse only", "Iron fallout + clay bar"],
              ["Interior", "Not included", "Full vacuum, wipe, steam"],
              ["Protection applied", "None", "Wax, sealant or ceramic"],
              ["Swirl removal", "Not possible", "Machine polishing available"],
              ["Convenience", "Drive-in (travel required)", "We come to you"],
              ["Time on site", "3–5 minutes", "2–8+ hours (thorough)"],
              ["Cost", "£5–£15", "From £40 (mini valet)"],
            ].map(([factor, auto, mobile]) => (
              <div key={factor} className="grid grid-cols-3 p-4 text-sm border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <span className="font-semibold text-white">{factor}</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>{auto}</span>
                <span style={{ color: "rgba(255,255,255,0.85)" }}>{mobile}</span>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                What an automated car wash actually does to your paint
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                The rotating brushes in an automated car wash pick up grit and debris from one vehicle and drag it across the next. Even brushes described as &ldquo;soft&rdquo; or &ldquo;foam&rdquo; introduce microscopic scratches into your clear coat over time. On dark-coloured vehicles — black, deep blue, gunmetal grey — these swirl marks become clearly visible in direct sunlight and under artificial light.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                Touchless high-pressure automated washes are safer for the paint but rely on strong alkaline or acidic chemicals to compensate for the lack of agitation. These chemicals, used repeatedly, strip any wax or sealant protection and can dull the clear coat over time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                What a professional mobile detail actually includes
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                A mobile detail from Latin King Detailing begins with a pre-wash — a foam cannon application to loosen surface contamination before any contact is made with the paint. This alone makes the subsequent hand wash significantly safer than any automated wash approach.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                After washing, we use iron fallout remover to chemically dissolve brake dust particles embedded in the paintwork — contamination that a car wash cannot touch. Clay bar treatment then physically removes any remaining bonded contamination, leaving the paint surface genuinely clean at a microscopic level for the first time, in many cases, since the vehicle left the factory.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                Protection is applied last — wax, polymer sealant or ceramic coating depending on the package. This protection reduces the frequency and effort of future cleaning and preserves the paintwork condition you just paid to achieve.
              </p>
            </section>

            <section>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                The convenience factor — and why it shifts the comparison
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                An automated car wash requires you to drive to it, queue, go through and drive back. A mobile detail requires nothing from you except access to the vehicle. Latin King Detailing comes to your home or workplace, works independently and leaves your car noticeably transformed. The time cost of an automated wash is often underestimated when compared against a mobile service.
              </p>
            </section>

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
            {[
              { href: "/blog/ceramic-coating-vs-wax", label: "Ceramic coating vs wax — which protection lasts longer?" },
              { href: "/blog/how-to-maintain-ceramic-coating", label: "How to maintain a ceramic coating between professional washes" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-3 group p-4 rounded-lg transition-colors" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
                <span className="flex-1 text-sm font-medium group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>{link.label}</span>
                <ArrowRight size={14} className="flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
              </Link>
            ))}
          </div>
        </div>
      </article>

      <CTASection
        eyebrow="Try the real thing"
        title="Book a mobile detail in Manchester"
        description="Professional mobile car detailing at your door across Urmston, Trafford and Greater Manchester. Starting from £40."
      />
    </>
  );
}
