import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { BUSINESS } from "@/lib/business";
import { BookingForm } from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Get a Free Quote — Mobile Car Detailing in Manchester | Latin King Detailing",
  description:
    "Contact Latin King Detailing for a free, no-obligation quote. Mobile car detailing, ceramic coating and paint correction across Urmston and Greater Manchester. Call 07482 225323.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="section-pad pt-32 md:pt-40">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: info */}
            <div>
              <p className="eyebrow">Get in touch</p>
              <h1 className="mb-5">
                Get your{" "}
                <span className="gradient-text-red">free quote</span>
              </h1>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "48ch" }}>
                Tell us your vehicle, location and what you&apos;re after — we&apos;ll come back with a fixed, no-obligation quote. No surprises.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent-600/20"
                    style={{ background: "rgba(196,30,58,0.1)", color: "var(--color-accent-500)" }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Phone / WhatsApp</p>
                    <p className="font-bold text-white text-lg">{BUSINESS.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent-600/20"
                    style={{ background: "rgba(196,30,58,0.1)", color: "var(--color-accent-500)" }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Email</p>
                    <p className="font-bold text-white">{BUSINESS.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(196,30,58,0.1)", color: "var(--color-accent-500)" }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Based at</p>
                    <address className="not-italic font-bold text-white leading-snug">
                      {BUSINESS.address.street},<br />
                      {BUSINESS.address.city}, {BUSINESS.address.postcode}
                    </address>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(196,30,58,0.1)", color: "var(--color-accent-500)" }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Availability</p>
                    <p className="font-bold text-white leading-snug">
                      {BUSINESS.availability}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg font-medium"
                  style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)", color: "rgba(255,255,255,0.65)" }}
                >
                  <InstagramIcon size={15} />
                  Instagram
                </a>
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg font-medium"
                  style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)", color: "rgba(255,255,255,0.65)" }}
                >
                  <FacebookIcon size={15} />
                  Facebook
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="card p-6 sm:p-8" style={{ background: "var(--color-base-900)" }}>
              <h2
                className="mb-1"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                }}
              >
                Request a free quote
              </h2>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                No obligation — we&apos;ll call to confirm and quote before any work starts.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
