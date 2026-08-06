"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Sparkles,
  Zap,
  RotateCw,
  Shield,
  Sofa,
  Droplets,
  Star,
  Settings,
  ArrowRight,
} from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, React.ReactNode> = {
  car: <Car size={22} />,
  sparkles: <Sparkles size={22} />,
  zap: <Zap size={22} />,
  "rotate-cw": <RotateCw size={22} />,
  shield: <Shield size={22} />,
  sofa: <Sofa size={22} />,
  droplets: <Droplets size={22} />,
  star: <Star size={22} />,
  settings: <Settings size={22} />,
};

const HOMEPAGE_TAGLINES: Record<string, string> = {
  "mobile-valeting": "Mobile car wash & valet at your door — no travel, no hassle",
  "car-detailing": "Full detailing service — hand-wash care, showroom-grade finish",
  "paint-correction": "Swirl mark, scratch & oxidation removal by machine polishing pros",
  "machine-polishing": "Restore gloss, depth and clarity — professional dual-action polish",
  "ceramic-coating": "Permanent SiO₂ ceramic coat — hydrophobic liquid-glass shield",
};

export function ServicesGrid({ limit }: { limit?: number }) {
  const services = limit ? BUSINESS.services.slice(0, limit) : BUSINESS.services;

  return (
    <section className="section-pad" aria-labelledby="services-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="What we offer"
          title="Every detail,"
          titleHighlight="perfected"
          description="From a quick valet to a full ceramic coating package — every service is carried out at your location using professional-grade products."
        />

        <div className="grid-auto-fill-300">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group card gloss-sheen flex flex-col h-full p-6 transition-all duration-200 hover:border-white/[0.18]"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-accent-600/20"
                  style={{
                    background: "rgba(196,30,58,0.1)",
                    color: "var(--color-accent-500)",
                  }}
                >
                  {ICON_MAP[service.icon] ?? <Car size={22} />}
                </div>

                <h3 className="text-lg mb-2 font-bold" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.25rem" }}>
                  {service.name}
                </h3>

                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {(limit && HOMEPAGE_TAGLINES[service.slug]) || service.tagline}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                    From £{service.priceFrom}
                  </span>
                  <span
                    className="flex items-center gap-1 text-sm font-semibold transition-colors duration-200 group-hover:text-accent-400"
                    style={{ color: "var(--color-accent-500)" }}
                  >
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Link href="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
