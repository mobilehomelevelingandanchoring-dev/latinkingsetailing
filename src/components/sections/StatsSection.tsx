"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MapPin, CheckCircle, Award } from "lucide-react";
import { BUSINESS } from "@/lib/business";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const STATS: Stat[] = [
  {
    value: BUSINESS.rating.ratingValue,
    suffix: "★",
    label: "Average rating across Google & Facebook",
    icon: <Star size={20} fill="currentColor" style={{ color: "var(--color-gold)" }} />,
  },
  {
    value: BUSINESS.rating.ratingCount,
    suffix: "+",
    label: "Verified 5-star customer reviews",
    icon: <Award size={20} style={{ color: "var(--color-accent-500)" }} />,
  },
  {
    value: BUSINESS.areas.length,
    suffix: "+",
    label: "Locations served across Greater Manchester",
    icon: <MapPin size={20} style={{ color: "var(--color-accent-500)" }} />,
  },
  {
    value: 100,
    suffix: "%",
    label: "Mobile — no travel required, we come to you",
    icon: <CheckCircle size={20} style={{ color: "var(--color-accent-500)" }} />,
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 40;
    const step = target / steps;
    let count = 0;
    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.round(count * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = Number.isInteger(target)
    ? Math.round(current).toString()
    : current.toFixed(1);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section
      className="relative border-y"
      style={{ borderColor: "var(--color-border)", background: "var(--color-base-900)" }}
      aria-label="Latin King Detailing — key stats"
    >
      <div className="section-container py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-hidden="true"
              >
                {stat.icon}
              </div>
              <div>
                <div
                  className="text-4xl font-black leading-none mb-1 tabular-nums"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          Proudly covering M41, M32, M33, M17, M30, M27, WA13, WA14 &amp; WA3 postcodes across Greater Manchester.
        </p>
      </div>
    </section>
  );
}
