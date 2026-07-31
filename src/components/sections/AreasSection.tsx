"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AreasSection() {
  return (
    <section className="section-pad" aria-labelledby="areas-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Service area"
          title="We come to"
          titleHighlight="you"
          description={`Mobile car wash, valet and detailing service covering ${BUSINESS.areas.length} locations across Greater Manchester and parts of Cheshire. We come to your home, workplace or any convenient location — no travel required.`}
        />

        <div className="grid-auto-fill-240 mb-10">
          {BUSINESS.areas.map((area, i) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.07 }}
            >
              <Link
                href={`/areas/${area.slug}`}
                className="group flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 hover:border-accent-700"
                style={{
                  border: "1px solid var(--color-border)",
                  background: (area as { isHQ?: boolean }).isHQ ? "rgba(196,30,58,0.07)" : "transparent",
                }}
              >
                <MapPin
                  size={15}
                  style={{
                    color: (area as { isHQ?: boolean }).isHQ ? "var(--color-accent-500)" : "rgba(255,255,255,0.3)",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium transition-colors group-hover:text-white" style={{ color: (area as { isHQ?: boolean }).isHQ ? "white" : "rgba(255,255,255,0.65)" }}>
                  {area.name}
                  {(area as { isHQ?: boolean }).isHQ && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(196,30,58,0.25)", color: "var(--color-accent-300)" }}>
                      Base
                    </span>
                  )}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-6 rounded-xl" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
          <div className="flex-1">
            <p className="font-bold text-white mb-1">Not in the list? We may still cover you.</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Our service radius extends across all of Greater Manchester and parts of Cheshire. Message us with your postcode to confirm availability.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary flex-shrink-0">
            Check My Area
          </Link>
        </div>
      </div>
    </section>
  );
}
