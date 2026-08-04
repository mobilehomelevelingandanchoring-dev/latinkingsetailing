import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildServiceLocationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Ceramic Coating Manchester | Best SiO₂ Nano Coating Near Me | Latin King Detailing",
  description:
    "Professional ceramic coating in Manchester — SiO₂ nano-coating lasts 2–3 years, hydrophobic & UV-resistant. Full paint correction prep included. Mobile service at your door. From £350. Call 07482 225323.",
  alternates: { canonical: "/ceramic-coating-manchester" },
  openGraph: {
    title: "Ceramic Coating Manchester | Latin King Detailing",
    description:
      "Professional SiO₂ ceramic coating in Manchester. Lasts 2–3 years. Hydrophobic, scratch-resistant, UV-resistant. Paint prep included. From £350.",
    type: "website",
    url: `${BUSINESS.url}/ceramic-coating-manchester`,
  },
};

const WHAT_IS_INCLUDED = [
  "Full paint wash and iron fallout decontamination",
  "Clay bar treatment — removes bonded surface contamination",
  "Machine polish / paint correction stage",
  "IPA panel-wipe for maximum coating adhesion",
  "Professional-grade SiO₂ ceramic coating application",
  "Controlled flash and cure time",
  "Post-cure full inspection under dual-beam lighting",
];

const BENEFITS = [
  {
    title: "Hydrophobic surface",
    desc: "Water beads and sheets off the paint, carrying road grime with it. Far easier to keep clean between washes.",
  },
  {
    title: "2–3 year protection",
    desc: "A professionally applied ceramic coating outlasts wax by years — not weeks. Correct maintenance extends this further.",
  },
  {
    title: "UV and chemical resistance",
    desc: "The SiO₂ layer blocks UV radiation that causes paint fade and oxidation, and resists light chemical etching from bird droppings and road fallout.",
  },
  {
    title: "Enhanced gloss and depth",
    desc: "Ceramic coating optically enhances the paint beneath it — particularly effective after a paint correction stage.",
  },
  {
    title: "Scratch resistance",
    desc: "Significantly reduces swirl marks from washing and minor surface contact. Does not prevent deep scratches — PPF handles that.",
  },
  {
    title: "All vehicle types",
    desc: "We have applied ceramic coatings to everyday hatchbacks through to exotic vehicles including the Ferrari Purosangue.",
  },
];

const FAQS = [
  {
    question: "How much does ceramic coating cost in Manchester?",
    answer:
      "Professional ceramic coating in Manchester starts from £350 at Latin King Detailing. The exact price depends on vehicle size and paint condition. Paint correction is recommended before coating — this is always included in our ceramic coating packages. We confirm a fixed price before any work begins.",
  },
  {
    question: "How long does ceramic coating last in Manchester?",
    answer:
      "A professionally applied ceramic coating lasts 2–3 years with correct maintenance — specifically, using touchless or two-bucket hand wash technique and avoiding automated brush car washes. In Manchester's climate, ceramic coating is particularly effective as the hydrophobic surface repels the frequent rainfall and road salt, keeping the car visibly cleaner between washes.",
  },
  {
    question: "Is ceramic coating worth it in Manchester?",
    answer:
      "Yes. Manchester's frequent rain and winter road salt create ideal conditions where a ceramic coating earns its cost quickly. The hydrophobic surface means rain sheeting off the paint rather than bonding to it, road grime releasing more readily, and the car requiring less frequent washing. Over 2–3 years, ceramic coating is significantly more cost-effective than repeated wax applications.",
  },
  {
    question: "What is the difference between ceramic coating and wax?",
    answer:
      "Wax sits on top of the clear coat and lasts 2–4 months before needing reapplication. Ceramic coating bonds permanently at a molecular level to the clear coat and lasts 2–3 years. Ceramic also provides far superior hydrophobic performance, UV protection and resistance to light chemical damage — and unlike wax, its gloss-enhancing properties are durable.",
  },
  {
    question: "Do you need to correct the paint before ceramic coating?",
    answer:
      "Yes — this is strongly recommended and is always included in our coating packages. Ceramic coating bonds to whatever surface is beneath it. If the paint has swirl marks, scratches or contamination, the coating will lock those imperfections in permanently. A full decontamination and machine polish stage is always performed before we apply the coating.",
  },
  {
    question: "Do you apply ceramic coating to new cars in Manchester?",
    answer:
      "Yes — new car ceramic coating is one of our most popular services. Many new cars come from the factory with transport contamination and swirl marks from dealership prep. We decontaminate and correct the paint before applying a professional SiO₂ coating, giving the best possible protection from day one.",
  },
  {
    question: "Can ceramic coating be applied to exotic and luxury cars?",
    answer:
      "Yes. Latin King Detailing has experience applying ceramic coatings to high-value vehicles including the Ferrari Purosangue. We understand the additional care required with exotic paint systems — their typically thinner clear coats require precise paint depth measurement and a more conservative correction approach before coating.",
  },
];

export default function CeramicCoatingManchesterPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Car Detailing Manchester", url: `${BUSINESS.url}/car-detailing-manchester` },
    { name: "Ceramic Coating Manchester", url: `${BUSINESS.url}/ceramic-coating-manchester` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const serviceSchema = buildServiceLocationSchema({
    serviceName: "Ceramic Coating",
    serviceSlug: "ceramic-coating",
    serviceDescription:
      "Professional SiO₂ ceramic coating in Manchester — hydrophobic, UV-resistant and scratch-resistant protection lasting 2–3 years. Full paint correction prep always included.",
    priceFrom: 350,
    locationName: "Manchester",
    locationSlug: "manchester",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Car Detailing Manchester", href: "/car-detailing-manchester" },
              { label: "Ceramic Coating Manchester" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                Greater Manchester — Mobile Ceramic Coating
              </p>
              <h1 className="mb-5">
                Ceramic Coating{" "}
                <span className="gradient-text-red">Manchester</span>
              </h1>
              <p
                className="text-xl mb-4"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
              >
                Professional SiO₂ ceramic coating — lasts 2–3 years. Applied at your door across Greater Manchester.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Latin King Detailing applies professional-grade silicon dioxide (SiO₂) ceramic coatings to vehicles across Manchester and Greater Manchester. The coating bonds permanently to the clear coat, creating a hydrophobic, UV-resistant, scratch-resistant barrier that keeps your car cleaner for longer and dramatically enhances gloss.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Manchester&apos;s wet climate makes ceramic coating especially effective — rain sheets off the coated surface rather than bonding to it, significantly reducing how often you need to wash the car. Every coating package includes full paint decontamination and machine polishing before application.
              </p>

              <div className="flex flex-wrap gap-5 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="currentColor" style={{ color: "var(--color-accent-500)" }} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white">5.0</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                    ({BUSINESS.rating.ratingCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <Shield size={14} style={{ color: "var(--color-accent-500)" }} />
                  Fixed quote — no hidden costs
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Get a Ceramic Coating Quote
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary">
                  <Phone size={16} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.42)" }}>
                From £350 · Fixed price confirmed before we start · Mobile across Greater Manchester
              </p>
            </div>

            {/* What's included card */}
            <div className="card p-7" style={{ background: "var(--color-base-900)" }}>
              <div className="mb-5 pb-5" style={{ borderBottom: "1px solid var(--color-border)" }}>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Starting from
                </p>
                <div
                  className="text-5xl font-black"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 900, color: "white" }}
                >
                  £350
                </div>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Exact price depends on vehicle size and paint condition
                </p>
              </div>
              <h2
                className="text-base font-bold mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1rem" }}
              >
                Every ceramic coating package includes:
              </h2>
              <ul className="space-y-2.5">
                {WHAT_IS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.68)" }}>
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary w-full justify-center mt-6">
                Book Ceramic Coating
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is ceramic coating */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container max-w-4xl">
          <h2 className="mb-6">What is a ceramic coating?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                A ceramic coating is a liquid silicon dioxide (SiO₂) polymer that bonds permanently to the vehicle&apos;s clear coat when applied correctly. Unlike wax or sealant — which sit on the surface and wear away within weeks or months — ceramic coating integrates with the clear coat at a molecular level and lasts 2–3 years.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                The result is a surface that is significantly more hydrophobic, more resistant to UV radiation, more resistant to light chemical damage, and optically deeper in gloss than uncoated or waxed paint. For Manchester drivers dealing with regular rain and winter road salt, the practical daily benefit is a car that stays visibly cleaner for much longer.
              </p>
            </div>
            <div>
              <h3
                className="text-base font-bold mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}
              >
                Ceramic coating vs wax vs sealant
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Carnauba Wax", duration: "4–8 weeks", hydro: "Good", bond: "Surface only" },
                  { label: "Polymer Sealant", duration: "3–6 months", hydro: "Very good", bond: "Surface bond" },
                  { label: "SiO₂ Ceramic Coating", duration: "2–3 years", hydro: "Exceptional", bond: "Molecular bond" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="p-3 rounded-lg flex items-center justify-between text-sm"
                    style={{ background: "var(--color-base-800)" }}
                  >
                    <span className="font-semibold text-white">{row.label}</span>
                    <div className="flex gap-4 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <span>{row.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad">
        <div className="section-container">
          <h2 className="mb-8">Benefits of ceramic coating</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="card p-6" style={{ background: "var(--color-base-900)" }}>
                <CheckCircle size={20} className="mb-3" style={{ color: "var(--color-accent-500)" }} />
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1rem" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container max-w-3xl">
          <h2 className="mb-8">Ceramic coating Manchester — frequently asked questions</h2>
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
          <h2 className="mb-6 text-2xl">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/car-detailing-manchester" className="btn btn-secondary text-sm">
              Car Detailing Manchester
            </Link>
            <Link href="/services/paint-correction" className="btn btn-secondary text-sm">
              Paint Correction Manchester
            </Link>
            <Link href="/services/paint-protection-film" className="btn btn-secondary text-sm">
              Paint Protection Film
            </Link>
            <Link href="/blog/ceramic-coating-vs-wax" className="btn btn-secondary text-sm">
              Ceramic Coating vs Wax Guide
            </Link>
            <Link href="/blog/how-to-maintain-ceramic-coating" className="btn btn-secondary text-sm">
              How to Maintain Ceramic Coating
            </Link>
            <Link href="/pricing" className="btn btn-secondary text-sm">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow="Professional Ceramic Coating — Manchester"
        title="Protect Your Car&apos;s Paint for 2–3 Years"
        description="Professional SiO₂ ceramic coating applied at your door across Greater Manchester. Paint correction and full decontamination always included. Fixed quote before we start."
        primaryCTA="Get My Coating Quote"
      />
    </>
  );
}
