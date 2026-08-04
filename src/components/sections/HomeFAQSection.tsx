"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQS = [
  {
    question: "Do you come to me, or do I bring the car to you?",
    answer:
      "We are 100% mobile — you never need to leave your home, office or any convenient location. We bring all the equipment, water and professional-grade products directly to you. All we need is reasonable vehicle access and a power socket if possible.",
  },
  {
    question: "Which areas in Greater Manchester do you cover?",
    answer:
      "We cover 15 locations across Greater Manchester and parts of Cheshire, including Urmston (our base), Stretford, Sale, Altrincham, Chorlton, Salford, Eccles, Didsbury, Timperley and more. Key postcodes include M41, M32, M33, M17, M30, M27, WA14 and WA15. Not sure if you're in range? Message us with your postcode and we'll confirm straight away.",
  },
  {
    question: "What's the difference between a valet and a full detail?",
    answer:
      "A valet (or mobile car wash) is a thorough clean — interior hoover, wipe-down, exterior hand wash and dry. A full detail goes further: paintwork decontamination, machine polishing or correction, deep interior steam clean, hot water extraction and a protective coating or sealant. Think of valeting as maintenance and detailing as a full reset.",
  },
  {
    question: "Do you offer ceramic coating and paint correction near Urmston?",
    answer:
      "Yes — ceramic coating and paint correction are two of our most popular services across Urmston, Trafford and the wider Greater Manchester area. Ceramic coating provides a permanent SiO₂ hydrophobic shield lasting 2–3 years. Paint correction removes swirl marks, light scratches and oxidation using professional machine polishing equipment. Both are carried out at your location.",
  },
  {
    question: "How much does a mobile car wash or mini valet cost in Urmston?",
    answer:
      "Our mobile car wash and mini valet service in Urmston starts from £40. A full valet starts from £80, a full car detail from £120, and ceramic coating from £350. Every price includes us coming to your home or workplace in Urmston (M41) or any covered area — no travel required. We confirm your exact quote before any work begins.",
  },
  {
    question: "Do you detail sports cars and exotic vehicles in Manchester?",
    answer:
      "Yes — sports car and exotic vehicle detailing is something we do regularly. We have hands-on experience with high-value and exotic cars including the Ferrari Purosangue, and we understand the extra care required for thin paint systems, exotic finishes and specialist materials. We use products and techniques selected specifically for each vehicle.",
  },
  {
    question: "Can you wash or valet a satin or matte wrapped car?",
    answer:
      "Yes — we regularly work with satin, matte and gloss-wrapped vehicles. Automated car washes with brushes can scratch or lift wrap edges, but our safe two-bucket hand wash technique and pH-neutral, wax-free products are fully compatible with vinyl wraps and specialist paint finishes. We know what not to use as much as what to use.",
  },
  {
    question: "How is a mobile valet different from a hand car wash?",
    answer:
      "A traditional hand car wash is a shared-space, rapid turnaround service — often using recycled water, worn cloths and a brush on your glass. Our mobile valet comes to your door with fresh clean water, professional microfibre products and individual attention to your specific vehicle. The result is noticeably safer for your paint and thoroughly cleaner — without you leaving home.",
  },
];

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section-pad" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="section-container">
        <SectionHeader
          eyebrow="Common questions"
          title="Everything you need"
          titleHighlight="to know"
          description="Quick answers about our mobile car wash, valeting and detailing service."
          centered
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--color-border)", background: "var(--color-base-900)" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                    style={{ color: "var(--color-accent-500)" }}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="px-6 pb-6 text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
