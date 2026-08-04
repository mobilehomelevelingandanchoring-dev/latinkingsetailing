import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { BUSINESS, getArea } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

// Keyword-optimised metadata for highest-value areas
const AREA_META: Record<string, { title: string; description: string }> = {
  urmston: {
    title: "Car Wash Urmston | Car Valet Urmston M41 | Mobile Car Detailing Near Me",
    description:
      "Best mobile car wash & valet in Urmston (M41) — hand car wash alternative, mini valet, full valet, ceramic coating & paint correction at your door. 5★ rated. Call 07482 225323.",
  },
  stretford: {
    title: "Car Valet Stretford | Mobile Car Detailing M32 | Latin King Detailing",
    description:
      "Mobile car valet & detailing in Stretford (M32). Professional car cleaning, ceramic coating & paint correction at your door in Stretford. 5★ rated. Call 07482 225323.",
  },
  sale: {
    title: "Car Detailing Sale Manchester | Mobile Car Valet M33 | Latin King Detailing",
    description:
      "Mobile car detailing & valeting in Sale (M33). Car wash, valet, ceramic coating & paint correction at your door in Sale & Sale Moor. 5★ rated. Call 07482 225323.",
  },
  didsbury: {
    title: "Car Detailing Didsbury | Mobile Car Valet South Manchester | Latin King",
    description:
      "Professional car detailing in Didsbury — mobile car valet, ceramic coating & paint correction at your door. Serving Didsbury & South Manchester. 5★ rated. Book now.",
  },
  altrincham: {
    title: "Car Detailing Altrincham | Mobile Car Valet WA14 | Latin King Detailing",
    description:
      "Mobile car detailing & valeting in Altrincham (WA14, WA15). Ceramic coating, paint correction & full car valet at your door. 5★ rated. Call 07482 225323.",
  },
  salford: {
    title: "Car Detailing Salford | Mobile Car Valet Near Me | Latin King Detailing",
    description:
      "Mobile car detailing in Salford (M27, M6, M7). Car valet, ceramic coating & paint correction at your door — Salford Quays, Pendleton & Swinton. 5★ rated. Call 07482 225323.",
  },
  eccles: {
    title: "Car Detailing Eccles | Mobile Car Valet M30 | Latin King Detailing",
    description:
      "Mobile car detailing & valeting in Eccles (M30). Car cleaning, ceramic coating & paint correction at your door across Eccles & Salford. 5★ rated. Book now.",
  },
  flixton: {
    title: "Car Valet Flixton | Mobile Car Detailing M41 | Latin King Detailing",
    description:
      "Mobile car valet & detailing in Flixton (M41). Professional car cleaning & ceramic coating at your door — rapid response from our Urmston base. 5★ rated. Call 07482 225323.",
  },
  chorlton: {
    title: "Car Detailing Chorlton Manchester | Mobile Car Valet M21 | Latin King",
    description:
      "Mobile car detailing & valeting in Chorlton-cum-Hardy (M21). Car cleaning, ceramic coating & paint correction at your door in Chorlton. 5★ rated. Book now.",
  },
  manchester: {
    title: "Car Detailing Manchester | Mobile Ceramic Coating & Paint Correction | Latin King Detailing",
    description:
      "Professional mobile car detailing across Manchester — ceramic coating, paint correction, machine polishing & interior detailing at your door. 5★ rated. From £40. Call 07482 225323.",
  },
  "old-trafford": {
    title: "Car Detailing Old Trafford | Mobile Car Valet M16 M17 | Latin King Detailing",
    description:
      "Mobile car detailing & valeting in Old Trafford (M16, M17). Ceramic coating, paint correction & full car valet at your door. 5★ rated. Call 07482 225323.",
  },
  partington: {
    title: "Car Detailing Partington | Mobile Car Wash Partington M31 | Latin King",
    description:
      "Mobile car detailing & valeting in Partington (M31) — hand car wash alternative, full detail, ceramic coating & paint correction at your door. 5★ rated. Call 07482 225323.",
  },
  irlam: {
    title: "Car Detailing Irlam | Mobile Car Valet M44 | Latin King Detailing",
    description:
      "Mobile car detailing & valeting in Irlam (M44). Full car detail, ceramic coating & paint correction at your door in Irlam & Cadishead. 5★ rated. Call 07482 225323.",
  },
  timperley: {
    title: "Car Detailing Timperley | Mobile Car Valet WA15 | Latin King Detailing",
    description:
      "Mobile car detailing & valeting in Timperley (WA15). Ceramic coating, paint correction & full car valet at your door. 5★ rated. Call 07482 225323.",
  },
  carrington: {
    title: "Car Detailing Carrington | Mobile Car Valet M31 | Latin King Detailing",
    description:
      "Mobile car detailing & valeting in Carrington (M31). Car cleaning, ceramic coating & paint correction at your door. 5★ rated. Call 07482 225323.",
  },
  davyhulme: {
    title: "Car Detailing Davyhulme | Mobile Car Valet M41 | Latin King Detailing",
    description:
      "Mobile car detailing & valeting in Davyhulme (M41) — next to our Urmston HQ, same-day slots available. Ceramic coating, paint correction & full valet at your door. 5★ rated. Call 07482 225323.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BUSINESS.areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const meta = AREA_META[slug];
  return {
    title: meta?.title ?? `Car Detailing & Valeting in ${area.name} | Latin King Detailing`,
    description: meta?.description ?? `Mobile car detailing, valeting, ceramic coating and paint correction in ${area.name}, Greater Manchester. We come to your door. 5★ rated. Call 07482 225323.`,
    alternates: { canonical: `/areas/${slug}` },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const schema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Areas", url: `${BUSINESS.url}/areas` },
    { name: area.name, url: `${BUSINESS.url}/areas/${slug}` },
  ]);

  // Nearby areas (exclude current)
  const nearbyAreas = BUSINESS.areas
    .filter((a) => a.slug !== slug)
    .slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Areas", href: "/areas" },
              { label: area.name },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <MapPin size={12} aria-hidden="true" />
                {area.postcodes.join(", ")} postcode
              </p>
              <h1 className="mb-5">
                Mobile car detailing in{" "}
                <span className="gradient-text-red">{area.name}</span>
              </h1>
              <p className="text-lg mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "52ch" }}>
                {area.description}
              </p>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.58)", maxWidth: "52ch" }}>
                {area.isHQ
                  ? `As our home base, ${area.name} customers benefit from the fastest availability and most flexible scheduling. Call or message to arrange your appointment.`
                  : `All of our services — from mobile valeting to ceramic coating and paint correction — are available in ${area.name} with the same quality and professionalism as our home base in Urmston.`}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Book in {area.name}
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary">
                  <Phone size={16} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                No payment required — fixed quote confirmed before any work starts.
              </p>
            </div>

            {/* Info card */}
            <div className="card p-7" style={{ background: "var(--color-base-900)" }}>
              <h2 className="text-xl mb-6" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.3rem" }}>
                Services available in {area.name}
              </h2>
              <ul className="space-y-3">
                {BUSINESS.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between group text-sm py-2 border-b transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)" }}
                    >
                      <span className="group-hover:text-white transition-colors">{service.name}</span>
                      <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                        <span>From £{service.priceFrom}</span>
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  All services performed at your location in {area.name}. Prices are starting points — exact quote depends on vehicle size and condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container max-w-3xl">
          <h2 className="mb-8 text-3xl">
            Car detailing in {area.name} — common questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: `Do you offer mobile car valeting in ${area.name}?`,
                a: `Yes. Latin King Detailing provides fully mobile car valeting and detailing services in ${area.name} (${area.postcodes.join(", ")}). We come to your home, workplace or any convenient outdoor location — no need to travel.`,
              },
              {
                q: `How much does a car valet in ${area.name} cost?`,
                a: `A mobile valet in ${area.name} starts from £40 for a mini valet. Full valets and detailing packages start from £80–£120+ depending on vehicle size and service level. We provide a fixed quote before any work begins — no surprise charges.`,
              },
              {
                q: `What areas near ${area.name} do you also cover?`,
                a: `As well as ${area.name}, Latin King Detailing covers ${nearbyAreas.slice(0, 4).map((a) => a.name).join(", ")} and all surrounding Greater Manchester postcodes. Message us with your postcode to confirm availability.`,
              },
            ].map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="section-pad">
        <div className="section-container">
          <h2 className="text-2xl mb-6">We also cover nearby areas</h2>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((nearArea) => (
              <Link
                key={nearArea.slug}
                href={`/areas/${nearArea.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: "var(--color-base-900)",
                  border: "1px solid var(--color-border)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <MapPin size={12} style={{ color: "var(--color-accent-500)" }} />
                {nearArea.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow={`Serving ${area.name}`}
        title={`Book Mobile Car Detailing in ${area.name}`}
        description={`We come to your door in ${area.name} — fully equipped with our own water, power and professional products. Get a fixed quote before we start.`}
        primaryCTA={`Book in ${area.name}`}
      />
    </>
  );
}
