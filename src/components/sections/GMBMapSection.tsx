import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function GMBMapSection() {
  return (
    <section
      aria-label="Latin King Detailing location — Urmston, Manchester"
      style={{
        background: "var(--color-base-950)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="section-container py-12 md:py-16">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div
            style={{
              width: "2rem",
              height: "2px",
              background: "var(--color-accent-500)",
              borderRadius: "9999px",
            }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: "var(--color-accent-400)" }}
          >
            Find Us
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_1.7fr] gap-8 lg:gap-14 items-start">

          {/* ── Left: NAP + CTAs ── */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 900,
                fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "0.75rem",
              }}
            >
              Mobile Car Detailing
              <br />
              Based in{" "}
              <span className="gradient-text-red">Urmston</span>,{" "}
              Manchester
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.9rem",
                lineHeight: 1.65,
                marginBottom: "1.75rem",
                maxWidth: "38ch",
              }}
            >
              Our base is in Urmston, but our professional mobile car detailing
              service comes directly to you — at your home, workplace or any
              convenient location across Greater Manchester and surrounding areas.
            </p>

            {/* NAP block — machine-readable for Google */}
            <address
              className="not-italic"
              style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.75rem" }}
            >
              <a
                href={`tel:${BUSINESS.phone}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(196,30,58,0.12)",
                    border: "1px solid rgba(196,30,58,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={14} style={{ color: "var(--color-accent-400)" }} />
                </span>
                {BUSINESS.phoneDisplay}
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(196,30,58,0.08)",
                    border: "1px solid rgba(196,30,58,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  <MapPin size={14} style={{ color: "var(--color-accent-400)" }} />
                </span>
                <span>
                  {BUSINESS.address.street},<br />
                  {BUSINESS.address.city}, {BUSINESS.address.county},{" "}
                  {BUSINESS.address.postcode}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(196,30,58,0.08)",
                    border: "1px solid rgba(196,30,58,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Clock size={14} style={{ color: "var(--color-accent-400)" }} />
                </span>
                Open 24/7
              </div>
            </address>

            {/* Get Directions CTA */}
            <a
              href="https://maps.google.com/?cid=17899574820820656803"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: "0.875rem", display: "inline-flex" }}
            >
              <Navigation size={14} />
              Get Directions on Google Maps
            </a>

            {/* Service area note */}
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.55)",
                marginTop: "1rem",
                lineHeight: 1.5,
              }}
            >
              Serving Urmston, Stretford, Sale, Altrincham, Chorlton, Salford,
              Eccles, Wigan, Leigh, Worsley, Swinton, Irlam, Partington &amp;
              Flixton.
            </p>
          </div>

          {/* ── Right: Google Map ── */}
          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 0 1px rgba(196,30,58,0.08), 0 8px 40px rgba(0,0,0,0.4)",
              aspectRatio: "16/10",
              minHeight: "280px",
              position: "relative",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.3280089026325!2d-2.3868986240073164!3d53.44472256735903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf6cc52e3dc8dc1d%3A0xf85f8acd81c952a3!2sLatin%20king%20detailing!5e0!3m2!1sen!2s!4v1785569042537!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Latin King Detailing — Mobile Car Detailing, Urmston, Manchester"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
