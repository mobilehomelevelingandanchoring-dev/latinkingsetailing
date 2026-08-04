import type { Metadata } from "next";
import Link from "next/link";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Mini Valet vs Full Valet: What's the Difference? | Latin King Detailing Manchester",
  description:
    "Mini valet vs full valet — what's actually included, how long each takes, which one your car needs and how much each costs in Manchester. Clear guide from a professional mobile detailer.",
  alternates: { canonical: "/blog/mini-valet-vs-full-valet" },
  openGraph: {
    title: "Mini Valet vs Full Valet: What's the Difference?",
    description:
      "Clear guide to what a mini valet and full valet include, how long they take, and which your car actually needs — from Latin King Detailing in Manchester.",
    type: "article",
    publishedTime: "2025-06-15",
    modifiedTime: "2025-06-15",
    authors: [BUSINESS.url],
    tags: ["mini valet", "full valet", "car valet manchester", "mobile valeting", "car cleaning"],
  },
};

const FAQS = [
  {
    question: "What is a mini valet?",
    answer:
      "A mini valet is a thorough clean of the most important surfaces inside and outside the car — exterior wash, wheel clean, exterior glass, interior vacuum and a wipe-down of the dashboard, doors and console. It takes 1.5–2 hours and is ideal for cars that are regularly maintained and need a proper clean rather than a full reset.",
  },
  {
    question: "What is a full valet?",
    answer:
      "A full valet extends the mini valet with deeper interior cleaning — seat shampoo or leather conditioning, door shut deep clean, boot area, and a hand polish of the exterior. It takes 2.5–3.5 hours and is suitable for cars that need a more thorough clean or haven't been valeted for a while.",
  },
  {
    question: "How much does a mini valet cost near Manchester?",
    answer:
      "A mobile mini valet in Manchester starts from £40 at Latin King Detailing. This is a fully mobile service — we come to your home or workplace with our own water, power and products.",
  },
  {
    question: "How long does a mini valet take?",
    answer:
      "A mini valet takes approximately 1.5–2 hours for a standard-sized car. A full valet takes 2.5–3.5 hours. Both are performed at your location as a mobile service.",
  },
  {
    question: "What is the difference between a valet and a car detail?",
    answer:
      "A valet focuses on cleaning — removing visible dirt inside and out. A car detail goes further: it decontaminates the paint at a microscopic level using iron fallout remover and clay bar, corrects paint defects through machine polishing, and applies durable protection such as ceramic coating or sealant. A detail produces a higher-quality, longer-lasting result.",
  },
];

const MINI_INCLUDES = [
  "Foam-cannon pre-wash (no-contact)",
  "Safe two-bucket hand wash",
  "Wheel and tyre cleaning and dressing",
  "Exterior glass clean (streak-free)",
  "Interior vacuum — carpets, seats, boot",
  "Dashboard and door card wipe-down",
  "Centre console clean",
  "Window clean interior",
  "Air freshener finish",
];

const FULL_ADDS = [
  "Hand polish of exterior paintwork",
  "Door shut and sill deep clean",
  "Boot area deep clean",
  "Seat shampoo OR leather cleaning and conditioning",
  "Detailed trim and vent cleaning",
  "Full headlining wipe-down",
  "Additional interior glass polish",
];

export default function MiniValetVsFullValetPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: "Mini Valet vs Full Valet", url: `${BUSINESS.url}/blog/mini-valet-vs-full-valet` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const articleSchema = buildArticleSchema({
    headline: "Mini Valet vs Full Valet: What's the Difference and Which Does Your Car Need?",
    description:
      "Clear guide to what a mini valet and full valet include, how long each takes, which your car actually needs, and how much each costs in Manchester.",
    datePublished: "2025-06-15",
    dateModified: "2025-06-15",
    url: `${BUSINESS.url}/blog/mini-valet-vs-full-valet`,
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
                { label: "Mini Valet vs Full Valet" },
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--color-base-800)", color: "rgba(255,255,255,0.6)" }}
              >
                Valeting Guide
              </span>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} />
                4 min read
              </span>
            </div>

            <h1 className="mb-5">Mini Valet vs Full Valet: What&apos;s the Difference?</h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)", maxWidth: "58ch" }}>
              A straightforward guide to what each service includes, how long it takes, and which one your car actually needs.
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
                    { name: "Mini Valet", price: "From £40", time: "1.5–2 hours", best: "Regular maintenance clean" },
                    { name: "Full Valet", price: "From £80", time: "2.5–3.5 hours", best: "Thorough reset or first valet in a while" },
                  ].map((v) => (
                    <div key={v.name} className="card p-6" style={{ background: "var(--color-base-800)" }}>
                      <h3 className="font-bold text-white mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.2rem" }}>
                        {v.name}
                      </h3>
                      <div className="space-y-1.5 text-sm">
                        <p style={{ color: "rgba(255,255,255,0.65)" }}>
                          <span className="text-white font-semibold">Price:</span> {v.price}
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.65)" }}>
                          <span className="text-white font-semibold">Time:</span> {v.time}
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.65)" }}>
                          <span className="text-white font-semibold">Best for:</span> {v.best}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4">What does a mini valet include?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A mini valet from Latin King Detailing covers the most important surfaces inside and outside the car — delivered as a fully mobile service at your home or workplace.
                </p>
                <ul className="space-y-2">
                  {MINI_INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  A mini valet does not include seat shampoo, leather conditioning, door shut deep clean, hand polish or boot area cleaning. These are included in the full valet.
                </p>
              </div>

              <div>
                <h2 className="mb-4">What does a full valet add?</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A full valet includes everything in the mini valet, plus deeper interior cleaning and an exterior hand polish:
                </p>
                <ul className="space-y-2">
                  {FULL_ADDS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4">Which one does your car need?</h2>
                <div className="space-y-4">
                  {[
                    {
                      condition: "Your car is regularly cleaned and maintained",
                      recommendation: "Mini valet — keeps it fresh without a full reset.",
                    },
                    {
                      condition: "It hasn't been professionally cleaned for 3+ months",
                      recommendation: "Full valet — the interior will benefit from seat shampoo and a deeper clean.",
                    },
                    {
                      condition: "You have children, pets or regularly carry sports equipment",
                      recommendation: "Full valet — pet hair, food debris and odours need the deeper process.",
                    },
                    {
                      condition: "You want to prepare the car for sale",
                      recommendation: "Full valet at minimum — consider adding paint correction for maximum value.",
                    },
                    {
                      condition: "You want swirl marks and scratches removed",
                      recommendation: "Neither — that requires paint correction, which is a separate service.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="card p-5" style={{ background: "var(--color-base-800)" }}>
                      <p className="text-sm font-bold text-white mb-1">{item.condition}</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                        → {item.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4">Valet vs car detail — the important distinction</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A valet — whether mini or full — focuses on cleaning the car. It removes visible dirt and makes the interior and exterior presentable.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  A car detail goes significantly further: it decontaminates the paint at a microscopic level (iron fallout remover, clay bar), corrects surface defects in the clear coat through machine polishing (swirl marks, scratches, water spots), and applies durable protection — wax, sealant or ceramic coating. If you want the paint to actually look better rather than just cleaner, you want a detail.
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
                <p className="text-sm font-semibold text-white mb-3">Related articles and services</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services/mobile-valeting" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Book a Mobile Valet <ArrowRight size={13} />
                  </Link>
                  <Link href="/blog/mobile-detailing-vs-car-wash" className="flex items-center gap-1.5 text-sm" style={{ color: "var(--color-accent-500)" }}>
                    Mobile Detailing vs Car Wash <ArrowRight size={13} />
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
        eyebrow="Mobile Valeting — Greater Manchester"
        title="Book a Mini Valet or Full Valet Today"
        description="We come to your door across Greater Manchester — fully equipped with own water, power and professional products. Fixed quote before we start. From £40."
        primaryCTA="Book My Valet"
      />
    </>
  );
}
