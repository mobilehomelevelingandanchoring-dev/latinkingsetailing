import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, Sparkles, Zap, RotateCw, Shield, Layers, Sofa, Droplets, Star, Settings } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { buildLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Car Detailing Services — Mobile Valeting, Ceramic Coating, Paint Correction",
  description:
    "Complete range of mobile car detailing services in Urmston and Greater Manchester — valeting, paint correction, ceramic coating, machine polishing, interior and exterior detailing. We come to you.",
  alternates: { canonical: "/services" },
};

const ICON_MAP: Record<string, React.ReactNode> = {
  car: <Car size={28} />,
  sparkles: <Sparkles size={28} />,
  zap: <Zap size={28} />,
  "rotate-cw": <RotateCw size={28} />,
  shield: <Shield size={28} />,
  layers: <Layers size={28} />,
  sofa: <Sofa size={28} />,
  droplets: <Droplets size={28} />,
  star: <Star size={28} />,
  settings: <Settings size={28} />,
};

export default function ServicesHubPage() {
  const schema = buildLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" aria-labelledby="services-h1">
        <div className="section-container">
          <p className="eyebrow">All services</p>
          <h1 id="services-h1" className="mb-5">
            Premium mobile{" "}
            <span className="gradient-text-red">detailing services</span>
            <br />across Greater Manchester
          </h1>
          <p className="text-lg mb-12" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "58ch" }}>
            From a swift mobile valet to a full multi-day ceramic coating package — Latin King Detailing brings showroom-quality care to your home, office or any convenient location.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group card gloss-sheen p-7 flex flex-col gap-4 h-full"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(196,30,58,0.12)", color: "var(--color-accent-500)" }}
                  aria-hidden="true"
                >
                  {ICON_MAP[service.icon] ?? <Car size={28} />}
                </div>

                <div className="flex-1">
                  <h2 className="text-xl mb-2" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                    {service.name}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.56)" }}>
                    {service.description.slice(0, 120)}…
                  </p>
                </div>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div>
                    <span className="text-lg font-bold" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "white" }}>
                      From £{service.priceFrom}
                    </span>
                    <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                      · {service.duration}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--color-accent-500)" }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }} aria-labelledby="why-heading">
        <div className="section-container">
          <SectionHeader
            eyebrow="Why Latin King Detailing"
            title="Professional results,"
            titleHighlight="your location"
            description="We eliminate the inconvenience of driving to a valet bay or hand car wash. Our fully mobile setup brings the right products and expertise directly to you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fully mobile", body: "We bring everything needed — water, power, products — to your home, workplace or any convenient outdoor space. No drive-throughs, no waiting rooms." },
              { title: "Premium products only", body: "We use professional-grade SiO₂ ceramic coatings, pH-neutral shampoos, iron fallout removers and dedicated interior care products. No supermarket shortcuts." },
              { title: "All makes & models", body: "From daily hatchbacks and SUVs to prestige and exotic vehicles — we have the knowledge and the correct compounds for every paint type and colour." },
              { title: "5★ rated service", body: "Every single review across Google and Facebook is a 5-star rating. Our work speaks for itself — and our customers come back." },
              { title: "Ceramic coating specialism", body: "We have real experience coating high-end vehicles including Ferrari models. That expertise translates directly to confidence and quality on every car we touch." },
              { title: "Flexible booking", body: "No rigid timetable — we work around you. Message us your availability and preferred location and we'll confirm a slot that works." },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.15rem" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
