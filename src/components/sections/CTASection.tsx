"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function CTASection({
  eyebrow = "Ready to book?",
  title = "Get your free quote today",
  description = "Tell us your vehicle, location and the service you're after — we'll come back with a no-obligation price. Mobile, flexible and fully professional.",
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
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "none" }}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn btn-primary text-base px-8 py-4">
              <MessageCircle size={18} />
              Get My Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn btn-secondary text-base px-8 py-4"
            >
              <Phone size={18} />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            {BUSINESS.availability}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
