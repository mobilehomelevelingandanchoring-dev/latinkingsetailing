"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { StarRating } from "@/components/ui/StarRating";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsSection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--color-base-900)" }}
      aria-labelledby="reviews-heading"
    >
      <div
        className="hero-glow"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.2 }}
        aria-hidden="true"
      />
      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Customer reviews"
          title="What our clients"
          titleHighlight="say"
          description="Don't take our word for it. Here's what real customers say about Latin King Detailing."
          centered
        />

        <p className="text-center text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
          Rated 5.0 from verified Google and Facebook reviews across Urmston and Greater Manchester.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {BUSINESS.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card gloss-sheen p-7 flex flex-col gap-4"
            >
              <Quote
                size={28}
                style={{ color: "var(--color-accent-600)", opacity: 0.7 }}
                aria-hidden="true"
              />
              <blockquote className="flex-1">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
              </blockquote>
              <footer className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <p className="font-bold text-sm text-white">{review.author}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Verified {review.platform} review
                  </p>
                </div>
                <StarRating rating={review.rating} size={13} />
              </footer>
            </motion.div>
          ))}
        </div>

        {/* Aggregate badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col items-center sm:items-start">
            <div
              className="text-5xl font-black tabular-nums"
              style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 900, color: "var(--color-gold)" }}
            >
              5.0
            </div>
            <StarRating rating={5} size={18} />
          </div>
          <div className="h-px w-12 sm:h-12 sm:w-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div className="text-center sm:text-left">
            <p className="font-bold text-white text-lg">Perfect score across all platforms</p>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              {BUSINESS.rating.ratingCount}+ verified reviews on Google and Facebook
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
