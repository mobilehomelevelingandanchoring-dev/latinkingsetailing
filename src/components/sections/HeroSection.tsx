"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Star, MapPin, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

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
      {/* Background radial glow */}
      <div
        className="hero-glow"
        style={{ top: "-10%", left: "20%", opacity: 0.6 }}
        aria-hidden="true"
      />
      <div
        className="hero-glow"
        style={{ bottom: "-20%", right: "10%", opacity: 0.3, width: "40vw", height: "40vw" }}
        aria-hidden="true"
      />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Trust signals */}
            <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    style={{ color: "var(--color-gold)" }}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
                5.0 — {BUSINESS.rating.ratingCount}+ reviews
              </span>
              <span
                className="hidden sm:block text-xs px-2.5 py-1 rounded-full font-semibold"
                style={{
                  background: "rgba(196,30,58,0.15)",
                  color: "var(--color-accent-400)",
                  border: "1px solid rgba(196,30,58,0.3)",
                }}
              >
                Mobile Car Valet & Detailing · We Come to You
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
                lineHeight: 1.0,
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
              }}
            >
              Showroom
              <br />
              Finish,{" "}
              <span className="gradient-text-red">Delivered</span>
              <br />
              to Your Door
            </motion.h1>

            <motion.p
              variants={FADE_UP}
              className="text-base md:text-lg mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", maxWidth: "46ch" }}
            >
              Mobile car wash, valeting, ceramic coating and paint correction
              across Urmston, Trafford and Greater Manchester. Hand car wash
              quality, showroom-grade results — no travel required.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact" className="btn btn-primary text-base px-6 py-3.5">
                Get My Free Quote
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn btn-secondary text-base px-6 py-3.5"
              >
                <Phone size={16} />
                {BUSINESS.phoneDisplay}
              </a>
            </motion.div>

            {/* Location chips */}
            <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-2">
              <MapPin size={13} style={{ color: "var(--color-accent-500)" }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Serving:</span>
              {["Urmston", "Stretford", "Sale", "Altrincham", "Chorlton", "+10 more"].map(
                (area) => (
                  <span
                    key={area}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {area}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right — Before/After */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div
              className="absolute -inset-4 rounded-2xl opacity-30 blur-xl"
              style={{ background: "radial-gradient(circle, rgba(196,30,58,0.4) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <BeforeAfterSlider
              before={{
                src: "/images/before-1.jpg",
                alt: "Car before professional detailing — dull, dirty paintwork",
              }}
              after={{
                src: "/images/after-1.jpg",
                alt: "Car after ceramic coating by Latin King Detailing — mirror-shine finish",
              }}
              className="relative aspect-[4/3] w-full"
            />
            <p
              className="mt-3 text-center text-xs"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Drag to compare — real results, no filters
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          <ChevronDown size={18} style={{ color: "rgba(255,255,255,0.3)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
