import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import { BookingForm } from "@/components/sections/BookingForm";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Book a Free Quote | Mobile Car Detailing — Urmston, Manchester",
  description:
    "Request a free, no-obligation quote for mobile car detailing, ceramic coating or valeting across Urmston and Greater Manchester. We come to you — submit your details and we'll call to confirm.",
  alternates: { canonical: `${BUSINESS.url}/book` },
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return (
    <main className="section-pad" style={{ minHeight: "100dvh" }}>
      {/* Header spacer for fixed nav */}
      <div style={{ height: "5rem" }} aria-hidden="true" />

      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left — info */}
          <div>
            <span className="eyebrow">Free Quote</span>
            <h1
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                marginBottom: "1.25rem",
              }}
            >
              Book Your{" "}
              <span className="gradient-text-red">Mobile Detail</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: "42ch", marginBottom: "2rem" }}>
              Fill in the form and we&apos;ll call you back to confirm your slot and give you an
              accurate quote — no payment needed upfront.
            </p>

            {/* Contact shortcuts */}
            <div className="flex flex-col gap-4" style={{ marginBottom: "2.5rem" }}>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 group"
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(196,30,58,0.12)", border: "1px solid rgba(196,30,58,0.25)" }}
                >
                  <Phone size={16} style={{ color: "var(--color-accent-400)" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "1px" }}>
                    Prefer to call?
                  </p>
                  <p className="font-semibold" style={{ color: "#fff" }}>{BUSINESS.phoneDisplay}</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(196,30,58,0.12)", border: "1px solid rgba(196,30,58,0.25)" }}
                >
                  <MapPin size={16} style={{ color: "var(--color-accent-400)" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "1px" }}>
                    Service area
                  </p>
                  <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Urmston, Trafford & Greater Manchester
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(196,30,58,0.12)", border: "1px solid rgba(196,30,58,0.25)" }}
                >
                  <Clock size={16} style={{ color: "var(--color-accent-400)" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "1px" }}>
                    Availability
                  </p>
                  <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Open 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div
              className="p-4 rounded-xl"
              style={{ background: "var(--color-base-800)", border: "1px solid var(--color-border)" }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--color-gold)", marginBottom: "0.25rem" }}
              >
                ★★★★★ 5.0 — {BUSINESS.rating.ratingCount}+ Google reviews
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                &ldquo;Exceptional attention to detail and a truly professional service.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="card p-6 sm:p-8"
            style={{ background: "var(--color-base-900)" }}
          >
            <BookingForm />
          </div>
        </div>
      </div>
    </main>
  );
}
