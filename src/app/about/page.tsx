import type { Metadata } from "next";
import { Star, Shield, MapPin, Award } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { StarRating } from "@/components/ui/StarRating";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Latin King Detailing — Urmston Mobile Car Detailing",
  description:
    "Latin King Detailing is a premium mobile car detailing business based in Urmston, Manchester. We're passionate about paint and dedicated to showroom-quality results at your door.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="eyebrow">Our story</p>
              <h1 className="mb-6">
                Obsessed with paint.
                <br />
                <span className="gradient-text-red">Built around you.</span>
              </h1>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                <p>
                  Latin King Detailing was built on a simple premise: that every vehicle deserves professional care, and every customer deserves to have that care delivered conveniently. We&apos;re based in Urmston on Flixton Road, M41 — and we serve customers across Greater Manchester without them needing to leave their home or office.
                </p>
                <p>
                  We take paint seriously. Not just because it&apos;s what we do professionally, but because we understand what correct technique, the right products and genuine attention to detail actually mean for the end result. There are no shortcuts in our process — every step is there for a reason.
                </p>
                <p>
                  Our experience ranges from everyday hatchbacks and family SUVs to luxury and exotic vehicles. Having worked on cars like the Ferrari Purosangue, we understand both the additional responsibility and the elevated standard of finish these vehicles demand. That experience makes us better across every job we take on.
                </p>
                <p>
                  The 5-star rating across Google and Facebook isn&apos;t a target we aim for — it&apos;s a natural outcome of doing things properly, treating customers well and standing behind our work.
                </p>
              </div>
            </div>

            {/* Trust signals */}
            <div className="space-y-4">
              <div className="card p-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(196,30,58,0.12)", color: "var(--color-accent-500)" }}>
                    <Star size={22} fill="currentColor" style={{ color: "var(--color-gold)" }} />
                  </div>
                  <div>
                    <p className="text-3xl font-black" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 900 }}>5.0</p>
                    <StarRating rating={5} size={14} />
                  </div>
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Perfect average rating across all {BUSINESS.rating.ratingCount}+ verified reviews on Google and Facebook.
                </p>
              </div>

              <div className="card p-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(196,30,58,0.12)", color: "var(--color-accent-500)" }}>
                    <Shield size={22} />
                  </div>
                  <p className="text-xl font-bold" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>Professional grade, always</p>
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  We use the same professional-grade compounds, coatings and tools used by the best detailers in the country — not consumer products dressed up in professional packaging.
                </p>
              </div>

              <div className="card p-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(196,30,58,0.12)", color: "var(--color-accent-500)" }}>
                    <Award size={22} />
                  </div>
                  <p className="text-xl font-bold" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>Exotic car experience</p>
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Experience coating and correcting exotic vehicles — including the Ferrari Purosangue — is an authority signal that translates directly into confidence and quality on every car we touch.
                </p>
              </div>

              <div className="card p-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(196,30,58,0.12)", color: "var(--color-accent-500)" }}>
                    <MapPin size={22} />
                  </div>
                  <p className="text-xl font-bold" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>Based in Urmston, M41</p>
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {BUSINESS.address.full}. Serving {BUSINESS.areas.length} locations across Greater Manchester.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container">
          <h2 className="mb-10 text-3xl" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 900 }}>
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Honesty", body: "We quote honestly. If your paint needs more work than we initially thought, or if a service won't make a meaningful difference, we'll tell you." },
              { title: "Precision", body: "Every step of our process has a reason. We don't rush, and we don't skip preparation — it's the preparation that defines the result." },
              { title: "Care", body: "We treat every vehicle as if it's our own. Whether it's a daily driver or an exotic, it receives the same level of respect and attention." },
              { title: "Results", body: "We measure our success by your reaction when you see your car at the end of the job — not by how quickly we got it done." },
            ].map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "var(--color-accent-400)" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Book your detail today"
        description="Whether you need a quick valet or a full ceramic coating package — get in touch and we'll provide a straight, honest quote."
      />
    </>
  );
}
