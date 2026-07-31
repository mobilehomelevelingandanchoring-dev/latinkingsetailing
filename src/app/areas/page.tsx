import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Areas We Cover — Mobile Car Detailing Across Greater Manchester",
  description:
    "Latin King Detailing covers Urmston, Stretford, Sale, Altrincham, Chorlton, Salford, Eccles and 10+ more locations across Greater Manchester. We come to you.",
  alternates: { canonical: "/areas" },
};

const POSTCODES = [
  { postcode: "M41", area: "Urmston / Flixton / Davyhulme" },
  { postcode: "M32", area: "Stretford" },
  { postcode: "M33", area: "Sale / Sale Moor" },
  { postcode: "M16/M17", area: "Old Trafford / Trafford Park" },
  { postcode: "M21", area: "Chorlton-cum-Hardy / Withington" },
  { postcode: "M30", area: "Eccles / Monton" },
  { postcode: "M27", area: "Salford / Pendleton / Swinton" },
  { postcode: "WA14", area: "Altrincham / Bowdon / Hale" },
  { postcode: "WA15", area: "Timperley / Hale Barns" },
  { postcode: "M31", area: "Carrington / Partington" },
  { postcode: "M44", area: "Irlam / Cadishead" },
  { postcode: "M20", area: "Didsbury / West Didsbury" },
];

export default function AreasHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40">
        <div className="section-container">
          <p className="eyebrow">Service area</p>
          <h1 className="mb-5">
            Mobile car detailing across{" "}
            <span className="gradient-text-red">Greater Manchester</span>
          </h1>
          <p className="text-lg mb-14" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "58ch" }}>
            Latin King Detailing is based in Urmston, M41 — and operates as a fully mobile service across Trafford, Salford and Greater Manchester. We come to your home, workplace or any outdoor space.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {BUSINESS.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group flex items-center justify-between p-5 rounded-xl border transition-all duration-200"
                style={{
                  border: (area as { isHQ?: boolean }).isHQ ? "1px solid rgba(196,30,58,0.35)" : "1px solid var(--color-border)",
                  background: (area as { isHQ?: boolean }).isHQ ? "rgba(196,30,58,0.07)" : "var(--color-base-900)",
                }}
              >
                <div className="flex items-center gap-3">
                  <MapPin
                    size={16}
                    style={{ color: (area as { isHQ?: boolean }).isHQ ? "var(--color-accent-500)" : "rgba(255,255,255,0.3)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-bold text-white text-sm">{area.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {area.postcodes.join(", ")}
                      {(area as { isHQ?: boolean }).isHQ && " · Our base"}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                />
              </Link>
            ))}
          </div>

          {/* Postcode coverage */}
          <div
            className="p-8 rounded-2xl"
            style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}
          >
            <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
              Postcode coverage
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POSTCODES.map((p) => (
                <div
                  key={p.postcode}
                  className="flex items-center gap-3 p-3.5 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span
                    className="text-sm font-bold tracking-wide tabular-nums"
                    style={{ color: "var(--color-accent-400)", minWidth: "3.5rem" }}
                  >
                    {p.postcode}
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {p.area}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Not in the list? We may still cover your postcode — message us to confirm.
            </p>
          </div>
        </div>
      </section>

      {/* Why mobile */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container">
          <SectionHeader
            eyebrow="Why mobile detailing?"
            title="Your location."
            titleHighlight="Your schedule."
            description="The biggest advantage of a mobile detailing service isn't the price — it's the time you save. We come to you so you can carry on with your day while your car is being transformed."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "No travel time wasted", body: "No need to drive to a car wash, wait around and drive back. We come to your home or office and work while you continue your day." },
              { title: "Work done in your driveway", body: "Your car stays at your property throughout the service. No risk of transit damage, no unfamiliar hands moving it between bays." },
              { title: "Same postcode, different results", body: "We serve the same neighbourhoods as the local car washes — but with professional-grade products, correction techniques and a genuine commitment to quality." },
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

      <CTASection
        eyebrow="Book in your area"
        title="Find your nearest slot"
        description="Tell us your postcode, vehicle and preferred service. We'll confirm availability and price within minutes."
      />
    </>
  );
}
