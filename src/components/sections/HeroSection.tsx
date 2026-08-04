"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Star, MapPin, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--color-base-950)" }}
      aria-label="Hero — Latin King Detailing"
    >
      {/* ── Background image — LCP critical ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/gallery/gallery-ferrari-purosangue-urmston-latin-king-detailing-07-1280w.webp"
          alt="Ferrari Purosangue after professional ceramic coating and paint correction by Latin King Detailing — Urmston, Manchester"
          fill
          priority
          fetchPriority="high"
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Primary overlay — dark left, car reveals right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(10,10,11,0.97) 0%, rgba(10,10,11,0.92) 35%, rgba(10,10,11,0.65) 58%, rgba(10,10,11,0.25) 100%)",
          }}
        />

        {/* Bottom fade into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-base-950))" }}
        />

        {/* Brand red glow — top right */}
        <div
          className="absolute"
          style={{
            top: "5%", right: "3%",
            width: "40vw", height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,30,58,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="section-container relative z-10 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          style={{ maxWidth: "680px" }}
        >
          {/* Trust row */}
          <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-2 mb-7">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" style={{ color: "var(--color-gold)" }} />
              ))}
            </div>
            <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
              5.0 — {BUSINESS.rating.ratingCount}+ reviews
            </span>
            <span
              className="text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{
                background: "rgba(196,30,58,0.15)",
                color: "var(--color-accent-400)",
                border: "1px solid rgba(196,30,58,0.3)",
              }}
            >
              Professional Mobile Car Detailing · Manchester
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={FADE_UP}
            className="mb-6"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              fontSize: "clamp(3.25rem, 9vw, 6.5rem)",
            }}
          >
            Exceptional
            <br />
            Car Detailing,
            <br />
            <span className="gradient-text-red">Delivered</span> to Your Door
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={FADE_UP}
            className="text-base md:text-lg mb-9 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.62)", maxWidth: "52ch" }}
          >
            Latin King Detailing is a professional mobile car detailing service
            based in Urmston, Manchester — specialising in interior &amp; exterior
            detailing, paint correction, ceramic coating and vehicle protection.
            We come to your home, workplace or any location convenient to you.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 mb-5">
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}
              aria-label="Get a free, no-obligation quote for mobile car detailing"
            >
              Get My Free Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn btn-secondary"
              style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}
              aria-label={`Call us now on ${BUSINESS.phoneDisplay}`}
            >
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
            </a>
          </motion.div>
          <motion.p
            variants={FADE_UP}
            className="text-xs mb-7"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            No payment required · Fixed quote before we start · Open 24/7
          </motion.p>

          {/* Location chips */}
          <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-2">
            <MapPin size={13} style={{ color: "var(--color-accent-500)" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
              Serving Manchester &amp; surrounding areas:
            </span>
            {["Urmston", "Stretford", "Sale", "Altrincham", "Chorlton", "+10 more"].map((area) => (
              <span
                key={area}
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {area}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.28)" }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <ChevronDown size={18} style={{ color: "rgba(255,255,255,0.28)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
