import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Clock, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema, buildFAQSchema, buildPricingSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Car Detailing Prices Manchester | Mobile Valeting & Ceramic Coating Costs | Latin King",
  description:
    "Car detailing prices in Manchester — mini valet from £40, full detail from £120, paint correction from £200, ceramic coating from £350. Fixed quotes, no hidden costs. Call 07482 225323.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Car Detailing Prices Manchester | Latin King Detailing",
    description:
      "Transparent car detailing prices in Manchester. Mini valet from £40 · Ceramic coating from £350 · All prices fixed before work starts.",
    type: "website",
    url: `${BUSINESS.url}/pricing`,
  },
};

const PRICE_TIERS = [
  {
    slug: "mobile-valeting",
    name: "Mobile Valeting",
    priceFrom: 40,
    duration: "1.5–3.5 hours",
    tagline: "The everyday clean",
    description:
      "Our mobile valet service cleans the interior and exterior of your car at your door. Choose from mini valet or full valet.",
    includes: [
      "Foam-cannon pre-wash and safe two-bucket hand wash",
      "Wheel and tyre cleaning and dressing",
      "Exterior glass clean (streak-free)",
      "Interior vacuum — carpets, seats, boot",
      "Interior wipe-down — dashboard, doors, console",
      "Door shut and sill cleaning",
      "Air freshener finish",
      "Full valet adds: hand polish, seat shampoo, door shuts deep clean",
    ],
    href: "/services/mobile-valeting",
    badge: null,
  },
  {
    slug: "car-detailing",
    name: "Car Detailing",
    priceFrom: 120,
    duration: "4–8 hours",
    tagline: "The complete treatment",
    description:
      "A full car detail goes beyond cleaning — decontamination, machine polishing and durable protection included.",
    includes: [
      "Everything in mobile valeting, plus:",
      "Iron fallout remover decontamination",
      "Clay bar bonded contamination removal",
      "Machine enhancement polish",
      "Wax, sealant or ceramic topper protection",
      "Hot water extraction — seats and carpets",
      "Full glass treatment inside and out",
    ],
    href: "/services/car-detailing",
    badge: "Most popular",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    priceFrom: 200,
    duration: "6–12 hours",
    tagline: "Permanent defect removal",
    description:
      "Machine-assisted paint correction permanently removes swirl marks, scratches, water spots and oxidation from the clear coat.",
    includes: [
      "Paint depth gauge assessment before starting",
      "Full pre-wash and decontamination",
      "One-stage or two-stage machine correction",
      "Panel-wipe IPA inspection",
      "Finishing wax, sealant or ceramic coating",
      "Final inspection under dual-beam lighting",
    ],
    href: "/services/paint-correction",
    badge: null,
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    priceFrom: 350,
    duration: "1–2 days",
    tagline: "2–3 year protection",
    description:
      "Professional SiO₂ ceramic coating bonded permanently to your clear coat — hydrophobic, UV-resistant and gloss-enhancing.",
    includes: [
      "Full wash and iron fallout decontamination",
      "Clay bar decontamination",
      "Machine polish / paint correction stage",
      "IPA panel-wipe for maximum adhesion",
      "Professional-grade SiO₂ ceramic coating",
      "Controlled flash and cure time",
      "Post-cure full inspection",
    ],
    href: "/ceramic-coating-manchester",
    badge: "Best value long-term",
  },
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    priceFrom: 80,
    duration: "2–4 hours",
    tagline: "Deep clean every surface",
    description:
      "A full interior detail using steam, hot water extraction and dedicated products for every surface type.",
    includes: [
      "Hot water extraction — carpets and upholstery",
      "Steam cleaning all hard surfaces and vents",
      "Leather cleaning and conditioning",
      "Dashboard, door card and console dressing",
      "Full interior glass clean (including windscreen)",
      "Odour elimination treatment",
      "Roof lining spot-clean",
    ],
    href: "/services/interior-detailing",
    badge: null,
  },
  {
    slug: "machine-polishing",
    name: "Machine Polishing / Paint Enhancement",
    priceFrom: 150,
    duration: "4–8 hours",
    tagline: "Restore gloss and clarity",
    description:
      "Professional machine polishing to enhance paintwork depth and remove mild surface defects. Ideal pre-coating prep.",
    includes: [
      "Pre-wash and decontamination",
      "Machine polish with selected compound and pad",
      "Panel-wipe IPA inspection",
      "Finishing wax or sealant protection",
    ],
    href: "/services/machine-polishing",
    badge: null,
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    priceFrom: 200,
    duration: "6–10 hours",
    tagline: "Total vehicle reset",
    description:
      "Our most comprehensive all-inclusive package — full exterior detail, full interior deep clean, engine bay tidy and finishing protection.",
    includes: [
      "Full exterior wash, decontamination and polish",
      "Wax or sealant protection",
      "Full interior hot water extraction",
      "Steam cleaning all surfaces",
      "Engine bay tidy and degrease",
      "Full glass treatment inside and out",
      "Odour elimination",
    ],
    href: "/services/deep-cleaning",
    badge: null,
  },
  {
    slug: "engine-bay-cleaning",
    name: "Engine Bay Cleaning",
    priceFrom: 50,
    duration: "45–90 minutes",
    tagline: "Showroom-clean engine bay",
    description:
      "Safe steam and degreaser cleaning of the engine bay — electronics protected throughout. Performed at your location.",
    includes: [
      "Degreaser application",
      "Careful steam clean or low-pressure rinse",
      "Electronic component protection",
      "Plastic trim and rubber dressing",
    ],
    href: "/services/engine-bay-cleaning",
    badge: null,
  },
];

const FAQS = [
  {
    question: "Are these prices fixed or estimates?",
    answer:
      "All prices listed are starting points. The exact price for your vehicle is confirmed as a fixed quote before any work begins — based on vehicle size, condition and the specific service required. There are no hidden charges or surprise costs on completion.",
  },
  {
    question: "How much does a mini valet cost in Manchester?",
    answer:
      "A mobile mini valet in Manchester starts from £40 at Latin King Detailing. This covers exterior wash, wheel clean, interior vacuum and wipe-down. A full valet starts from £80.",
  },
  {
    question: "How much does ceramic coating cost in Manchester?",
    answer:
      "Professional ceramic coating in Manchester starts from £350. The exact price depends on vehicle size and paint condition. Paint decontamination and machine polishing are always included in our ceramic coating packages.",
  },
  {
    question: "Do you charge extra for large vehicles?",
    answer:
      "Yes. SUVs, MPVs, large 4x4s and vans take more time and product, so pricing is adjusted accordingly. We confirm the exact price for your vehicle before booking. The prices shown are starting prices based on a standard-sized car.",
  },
  {
    question: "Can I combine services to get a better price?",
    answer:
      "Yes. We frequently combine services — for example, paint correction with ceramic coating, or a full valet with interior detailing. Speak to us about your requirements and we can build a package suited to your vehicle and budget.",
  },
  {
    question: "How do I pay?",
    answer:
      "Payment is due on completion of the service. We accept bank transfer and cash. For larger packages (full correction with ceramic coating), a deposit may be required at booking.",
  },
];

export default function PricingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Pricing", url: `${BUSINESS.url}/pricing` },
  ]);
  const pricingSchema = buildPricingSchema();
  const faqSchema = buildFAQSchema(FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing" },
            ]}
          />

          <div className="max-w-3xl">
            <p className="eyebrow">Transparent pricing</p>
            <h1 className="mb-5">
              Car Detailing{" "}
              <span className="gradient-text-red">Prices</span>
            </h1>
            <p className="text-xl mb-4" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}>
              Mobile car detailing prices in Manchester — fixed quotes, no hidden costs.
            </p>
            <p className="text-base leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "56ch" }}>
              All prices shown are starting points. Latin King Detailing provides a fixed, confirmed quote before any work begins — based on your specific vehicle size, condition and the service required. You will never receive a surprise bill on completion.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "56ch" }}>
              All services are fully mobile — we come to your door across Greater Manchester with our own water, power and professional-grade products.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get My Fixed Quote
              </Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary">
                <Phone size={16} />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-pad">
        <div className="section-container">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PRICE_TIERS.map((tier) => (
              <div
                key={tier.slug}
                className="card p-7 flex flex-col"
                style={{ background: "var(--color-base-900)" }}
              >
                {tier.badge && (
                  <div
                    className="inline-flex self-start px-3 py-1 rounded-full text-xs font-bold mb-4"
                    style={{ background: "var(--color-accent-600)", color: "white" }}
                  >
                    {tier.badge}
                  </div>
                )}

                <div className="mb-4">
                  <h2
                    className="text-xl mb-1"
                    style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.4rem" }}
                  >
                    {tier.name}
                  </h2>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {tier.tagline}
                  </p>
                </div>

                <div className="mb-4 pb-4" style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>From</span>
                    <span
                      className="text-4xl font-black"
                      style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 900, color: "white" }}
                    >
                      £{tier.priceFrom}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    <Clock size={11} />
                    {tier.duration}
                    <span className="mx-1">·</span>
                    <MapPin size={11} />
                    Mobile — we come to you
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {tier.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.62)" }}>
                      <CheckCircle size={12} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Link href="/contact" className="btn btn-primary flex-1 justify-center text-sm">
                    Get Quote
                  </Link>
                  <Link
                    href={tier.href}
                    className="btn btn-secondary text-sm px-3"
                    style={{ minWidth: "auto" }}
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing disclaimer */}
          <div
            className="mt-10 p-6 rounded-2xl"
            style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}
          >
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              <strong className="text-white">Pricing notes:</strong> All prices are starting prices for a standard-sized car in average condition. SUVs, vans and large vehicles are priced higher to reflect additional time and product. Heavily soiled interiors or heavily swirled paintwork may require additional stages. Your exact, fixed quote is confirmed before any work begins. Prices correct as of {new Date().getFullYear()}.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container max-w-3xl">
          <h2 className="mb-8">Pricing — frequently asked questions</h2>
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
      </section>

      {/* Related */}
      <section className="section-pad">
        <div className="section-container">
          <h2 className="mb-6 text-2xl">Explore services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/car-detailing-manchester" className="btn btn-secondary text-sm">
              Car Detailing Manchester
            </Link>
            <Link href="/ceramic-coating-manchester" className="btn btn-secondary text-sm">
              Ceramic Coating Manchester
            </Link>
            <Link href="/mobile-detailing-manchester" className="btn btn-secondary text-sm">
              Mobile Detailing Manchester
            </Link>
            <Link href="/blog/ceramic-coating-cost-guide" className="btn btn-secondary text-sm">
              Ceramic Coating Cost Guide
            </Link>
            <Link href="/blog/mini-valet-vs-full-valet" className="btn btn-secondary text-sm">
              Mini Valet vs Full Valet
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Transparent, Fixed Pricing"
        title="Get Your Fixed Quote Today"
        description="Tell us your vehicle, location and service — we&apos;ll confirm your exact price before we start. No surprises, no hidden costs."
        primaryCTA="Get My Free Quote"
      />
    </>
  );
}
