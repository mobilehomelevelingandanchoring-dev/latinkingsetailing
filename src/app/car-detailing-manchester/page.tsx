import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight, Shield, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildHowToSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Car Detailing Manchester | Best Mobile Car Detailing Near Me | Latin King Detailing",
  description:
    "Professional car detailing in Manchester — fully mobile, we come to you. Ceramic coating, paint correction, interior detailing & car valeting across Greater Manchester. 5★ rated. From £40. Call 07482 225323.",
  alternates: { canonical: "/car-detailing-manchester" },
  openGraph: {
    title: "Car Detailing Manchester | Latin King Detailing",
    description:
      "Manchester's highest-rated mobile car detailing service. Ceramic coating, paint correction & valeting at your door. 5★ rated. From £40.",
    type: "website",
    url: `${BUSINESS.url}/car-detailing-manchester`,
  },
};

const SERVICES = [
  { name: "Car Detailing", href: "/services/car-detailing", price: 120, duration: "4–8 hrs", description: "Full decontamination, machine polish & paint protection." },
  { name: "Ceramic Coating", href: "/services/ceramic-coating", price: 350, duration: "1–2 days", description: "Professional SiO₂ coating — lasts 2–3 years. Paint prep included." },
  { name: "Paint Correction", href: "/services/paint-correction", price: 200, duration: "6–12 hrs", description: "Machine removal of swirl marks, scratches & oxidation." },
  { name: "Mobile Valeting", href: "/services/mobile-valeting", price: 40, duration: "1.5–3 hrs", description: "Mini valet, full valet — we come to your door." },
  { name: "Interior Detailing", href: "/services/interior-detailing", price: 80, duration: "2–4 hrs", description: "Steam clean, hot water extraction, odour elimination." },
  { name: "Machine Polishing", href: "/services/machine-polishing", price: 150, duration: "4–8 hrs", description: "Restore gloss and clarity to any paint type." },
{ name: "Engine Bay Cleaning", href: "/services/engine-bay-cleaning", price: 50, duration: "45–90 min", description: "Safe steam & degreaser engine clean at your location." },
];

const MANCHESTER_AREAS = [
  { name: "Urmston", href: "/areas/urmston", note: "HQ — fastest response" },
  { name: "Stretford", href: "/areas/stretford", note: "M32" },
  { name: "Sale", href: "/areas/sale", note: "M33" },
  { name: "Didsbury", href: "/areas/didsbury", note: "M20" },
  { name: "Salford", href: "/areas/salford", note: "M6, M27" },
  { name: "Eccles", href: "/areas/eccles", note: "M30" },
  { name: "Altrincham", href: "/areas/altrincham", note: "WA14" },
  { name: "Chorlton", href: "/areas/chorlton-cum-hardy", note: "M21" },
  { name: "Old Trafford", href: "/areas/old-trafford", note: "M16" },
  { name: "Partington", href: "/areas/partington", note: "M31" },
  { name: "Timperley", href: "/areas/timperley", note: "WA15" },
  { name: "Irlam", href: "/areas/irlam", note: "M44" },
];

const FAQS = [
  {
    question: "Who is the best car detailer in Manchester?",
    answer:
      "Latin King Detailing is rated 5 stars by over 47 customers across Greater Manchester. Based in Urmston, we provide fully mobile car detailing — ceramic coating, paint correction, machine polishing and interior detailing — across Manchester, Trafford, Salford and surrounding areas. We come to your door with all equipment and products included.",
  },
  {
    question: "How much does car detailing cost in Manchester?",
    answer:
      "Car detailing in Manchester starts from £40 for a mobile mini valet. A full car detail costs from £120. Paint correction starts from £200. Professional ceramic coating starts from £350. All prices are confirmed as a fixed quote before any work begins — no hidden charges.",
  },
  {
    question: "Do you offer mobile car detailing in Manchester?",
    answer:
      "Yes. Latin King Detailing is a fully mobile car detailing service in Manchester. We bring our own water, power and all professional products to your home, workplace or any suitable location across Greater Manchester. There is no need to travel to a premises.",
  },
  {
    question: "What areas of Manchester do you cover?",
    answer:
      "Latin King Detailing covers the full Greater Manchester area from our Urmston base — including Stretford, Sale, Didsbury, Salford, Eccles, Altrincham, Chorlton, Old Trafford, Partington, Timperley and central Manchester. Message us your postcode to confirm same-day or next-day availability.",
  },
  {
    question: "Is ceramic coating worth it in Manchester?",
    answer:
      "Yes — particularly in Manchester's climate. The city's frequent rain and road salt in winter make ceramic coating especially valuable: the hydrophobic surface sheets water and grime off the paint, significantly reducing contamination between washes. A professional ceramic coating from Latin King Detailing lasts 2–3 years and keeps the car visibly cleaner with far less effort.",
  },
  {
    question: "How long does car detailing take in Manchester?",
    answer:
      "A mobile mini valet takes 1.5–2 hours. A full car detail takes 4–8 hours. Paint correction takes 6–12 hours. Ceramic coating is a 1–2 day process including paint preparation. We confirm the exact duration when providing your quote.",
  },
  {
    question: "What is the difference between a car wash and car detailing?",
    answer:
      "A car wash removes surface dirt. Car detailing is a comprehensive, multi-stage process that decontaminates the paint at a microscopic level using iron fallout remover and clay bar, corrects surface defects through machine polishing, and applies durable protection. The result is visibly glossier, cleaner paint that stays protected for months or years — not just days.",
  },
];

const PROCESS_STEPS = [
  { name: "Vehicle assessment", text: "Paint depth gauge measurement, swirl inspection and full condition check before any work begins." },
  { name: "Safe pre-wash", text: "Foam cannon pre-wash to loosen surface contamination before any contact, preventing swirl marks from the wash stage." },
  { name: "Decontamination", text: "Iron fallout remover dissolves embedded brake dust. Clay bar removes bonded surface contamination the wash leaves behind." },
  { name: "Machine polish", text: "Correct compound, pad and machine speed selected for your specific paint type. Swirl marks, scratches and oxidation removed." },
  { name: "Protection application", text: "Wax, sealant or SiO₂ ceramic coating applied to the freshly corrected surface for maximum bonding and durability." },
  { name: "Interior deep clean", text: "Hot water extraction of carpets and seats, steam cleaning all hard surfaces, leather conditioning and glass polish." },
  { name: "Final inspection", text: "Complete inspection under dual-beam lighting. Every panel checked before handover." },
];

export default function CarDetailingManchesterPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Car Detailing Manchester", url: `${BUSINESS.url}/car-detailing-manchester` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const howToSchema = buildHowToSchema({
    name: "How Latin King Detailing performs car detailing in Manchester",
    description:
      "The professional 7-stage car detailing process used by Latin King Detailing across Greater Manchester.",
    totalTime: "PT8H",
    steps: PROCESS_STEPS,
  });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS.url}/car-detailing-manchester/#service`,
    name: "Car Detailing Manchester",
    description:
      "Professional mobile car detailing in Manchester — ceramic coating, paint correction, interior detailing and car valeting across Greater Manchester.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
    },
    areaServed: { "@type": "City", name: "Manchester" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: 40,
      highPrice: 1500,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
    url: `${BUSINESS.url}/car-detailing-manchester`,
    mainEntityOfPage: `${BUSINESS.url}/car-detailing-manchester`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Car Detailing Manchester" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                Greater Manchester — Fully Mobile
              </p>
              <h1 className="mb-5">
                Car Detailing{" "}
                <span className="gradient-text-red">Manchester</span>
              </h1>
              <p
                className="text-xl mb-4 font-semibold"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
              >
                Manchester&apos;s highest-rated mobile car detailing service — we come to you.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Latin King Detailing is Greater Manchester&apos;s premier mobile car detailing service. Based on Flixton Road in Urmston, we cover Manchester, Trafford, Salford and all surrounding areas — bringing ceramic coating, paint correction, machine polishing and interior detailing directly to your door.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                We arrive fully self-sufficient with our own water, power and professional-grade products. Every job uses correct technique — foam-cannon pre-wash, clay bar decontamination, paint depth measurement before correction, and precision coating application. Our experience covers everyday hatchbacks through to exotic vehicles including the Ferrari Purosangue.
              </p>

              {/* Trust bar */}
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
                  Fixed quote before we start
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <MapPin size={14} style={{ color: "var(--color-accent-500)" }} />
                  Own water &amp; power — no access needed
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Get a Free Quote
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary">
                  <Phone size={16} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                No payment required — exact price confirmed before any work starts.
              </p>
            </div>

            {/* Service price card */}
            <div className="card p-7" style={{ background: "var(--color-base-900)" }}>
              <h2
                className="mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.3rem" }}
              >
                Services in Manchester
              </h2>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
                All services are fully mobile — we come to you.
              </p>
              <ul className="space-y-3">
                {SERVICES.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="flex items-center justify-between group py-2 border-b text-sm transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.72)" }}
                    >
                      <div>
                        <span className="group-hover:text-white transition-colors font-medium">{svc.name}</span>
                        <span className="flex items-center gap-1 text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>
                          <Clock size={10} />
                          {svc.duration}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5 flex-shrink-0 ml-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                        From £{svc.price}
                        <ArrowRight size={11} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="btn btn-secondary w-full justify-center mt-5 text-sm">
                View full pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is car detailing */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container max-w-4xl">
          <h2 className="mb-6">What is car detailing?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Car detailing is a professional-grade cleaning, correction and protection service that goes far beyond a standard car wash or valet. Where a valet removes visible dirt, detailing addresses the paint at a microscopic level — removing contamination embedded in the clear coat, correcting swirl marks and scratches through machine polishing, and applying durable protection that lasts months or years.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                A full car detail from Latin King Detailing in Manchester includes paint decontamination (iron fallout remover and clay bar), machine enhancement polish, ceramic or wax protection, interior deep clean with hot water extraction, and full glass treatment inside and out.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.1rem" }}
              >
                Car wash vs valet vs detailing
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Car Wash",
                    desc: "Removes surface dirt only. Tunnel brushes cause swirl marks. No decontamination or protection.",
                  },
                  {
                    label: "Car Valet",
                    desc: "Cleans inside and out. Better than a car wash but no paint correction or durable protection.",
                  },
                  {
                    label: "Car Detailing",
                    desc: "Full paint decontamination, machine correction, durable protection and interior deep clean — the complete, lasting treatment.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <CheckCircle
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-500)" }}
                    />
                    <div>
                      <span className="font-semibold text-white text-sm">{item.label}: </span>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad">
        <div className="section-container">
          <h2 className="mb-3">Car detailing services available in Manchester</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Every service is mobile — we come to your home, workplace or any suitable outdoor location across Greater Manchester.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="card p-6 group transition-all"
                style={{ background: "var(--color-base-900)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-base font-bold group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}
                  >
                    {svc.name}
                  </h3>
                  <ArrowRight
                    size={14}
                    className="mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    style={{ color: "var(--color-accent-500)" }}
                  />
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.52)" }}>
                  {svc.description}
                </p>
                <p className="text-sm font-semibold" style={{ color: "var(--color-accent-500)" }}>
                  From £{svc.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">Why Latin King Detailing?</p>
              <h2 className="mb-5">Manchester&apos;s top-rated mobile car detailer</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Latin King Detailing is rated 5 stars by {BUSINESS.rating.ratingCount}+ customers across Greater Manchester. Based on Flixton Road in Urmston, we have rapid response times to most Manchester postcodes and offer same-day or next-day slots in most cases.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Fully self-sufficient",
                    desc: "Own water supply, generator and all professional-grade products. No access to utilities needed at your location.",
                  },
                  {
                    title: "Fixed-price quotes",
                    desc: "We confirm your exact price before any work starts. No surprise charges on completion.",
                  },
                  {
                    title: "Correct technique every time",
                    desc: "Paint depth measurement before correction. Right machine, pad and compound for each paint type.",
                  },
                  {
                    title: "All vehicle types",
                    desc: "From everyday hatchbacks and family SUVs to exotic sports cars — including the Ferrari Purosangue.",
                  },
                  {
                    title: "24/7 availability",
                    desc: "Call or message any time to arrange a convenient slot. Same-day appointments often available.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-accent-500)" }}
                    />
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-4">
              {BUSINESS.reviews.map((review, i) => (
                <div key={i} className="card p-5" style={{ background: "var(--color-base-800)" }}>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} fill="currentColor" style={{ color: "var(--color-accent-500)" }} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-3 italic" style={{ color: "rgba(255,255,255,0.72)" }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-xs font-semibold text-white">{review.author}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                    {review.platform}
                  </p>
                </div>
              ))}
              <Link
                href="/reviews"
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--color-accent-500)" }}
              >
                Read all {BUSINESS.rating.ratingCount}+ reviews
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="section-pad">
        <div className="section-container max-w-4xl">
          <h2 className="mb-3">How we detail your car in Manchester</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Every car detail follows the same professional 7-stage process — regardless of vehicle type or location.
          </p>
          <div className="space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="card p-5 flex gap-5 items-start"
                style={{ background: "var(--color-base-900)" }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
                  style={{
                    background: "var(--color-accent-600)",
                    color: "white",
                    fontFamily: "var(--font-barlow-condensed)",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <p
                    className="font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}
                  >
                    {step.name}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container">
          <h2 className="mb-3">Areas we cover across Greater Manchester</h2>
          <p className="mb-6 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            From our Urmston base we serve the full Greater Manchester area. Message us your postcode to confirm availability.
          </p>
          <div className="flex flex-wrap gap-3">
            {MANCHESTER_AREAS.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: "var(--color-base-800)",
                  border: "1px solid var(--color-border)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <MapPin size={12} style={{ color: "var(--color-accent-500)" }} />
                {area.name}
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  ({area.note})
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm" style={{ color: "rgba(255,255,255,0.42)" }}>
            Don&apos;t see your area?{" "}
            <Link href="/contact" className="underline" style={{ color: "var(--color-accent-500)" }}>
              Get in touch
            </Link>{" "}
            — we cover a wide radius from our Urmston base.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad">
        <div className="section-container max-w-3xl">
          <h2 className="mb-8">Car detailing Manchester — frequently asked questions</h2>
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

      {/* Related pages */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container">
          <h2 className="mb-6 text-2xl">Explore more services in Manchester</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/ceramic-coating-manchester" className="btn btn-secondary text-sm">
              Ceramic Coating Manchester
            </Link>
            <Link href="/mobile-detailing-manchester" className="btn btn-secondary text-sm">
              Mobile Detailing Manchester
            </Link>
            <Link href="/services/paint-correction" className="btn btn-secondary text-sm">
              Paint Correction Manchester
            </Link>
            <Link href="/services/interior-detailing" className="btn btn-secondary text-sm">
              Interior Detailing Manchester
            </Link>
            <Link href="/pricing" className="btn btn-secondary text-sm">
              View All Prices
            </Link>
            <Link href="/areas/manchester" className="btn btn-secondary text-sm">
              Manchester Service Area
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow="Manchester's Mobile Car Detailing Service"
        title="Book Car Detailing in Manchester Today"
        description="We come to your door fully equipped — own water, power and professional products. Fixed quote confirmed before we start. Serving all Greater Manchester postcodes."
        primaryCTA="Get My Free Quote"
      />
    </>
  );
}
