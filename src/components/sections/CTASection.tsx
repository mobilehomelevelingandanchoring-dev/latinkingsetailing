"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCTA?: string;
  trustPoints?: string[];
}

const DEFAULT_TRUST_POINTS = [
  "No upfront payment required",
  "We bring all equipment — water, power & products",
  "5★ rated · 50+ verified Google reviews",
  "Open 24/7 — call or message anytime",
];

export function CTASection({
  eyebrow = "Free Quote · No Obligation",
  title = "Book Your Detail — We Come to You",
  description = "Tell us your vehicle, location and the service you're after. We'll confirm your quote before any work starts — no payment required upfront.",
  primaryCTA = "Get My Free Quote",
  trustPoints = DEFAULT_TRUST_POINTS,
}: CTASectionProps) {
  return (
    <section
      className="section-pad relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(196,30,58,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(196,30,58,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 border-y"
        style={{ borderColor: "var(--color-border)" }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="eyebrow justify-center before:content-none after:content-none text-center" style={{ color: "var(--color-accent-400)" }}>
            {eyebrow}
          </p>
          <h2 id="cta-heading" className="mb-5">
            {title}
          </h2>
          <p className="text-lg mb-7" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "none" }}>
            {description}
          </p>

          {trustPoints.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8 text-left max-w-xl mx-auto">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                  <CheckCircle size={14} className="flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn btn-primary text-base px-8 py-4">
              <MessageCircle size={18} />
              {primaryCTA}
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn btn-secondary text-base px-8 py-4"
            >
              <Phone size={18} />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          <p className="mt-5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            No payment required — we&apos;ll call to confirm your quote before booking is confirmed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
