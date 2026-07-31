import type { Metadata } from "next";
import Link from "next/link";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { BUSINESS } from "@/lib/business";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Before & After Gallery — Car Detailing Results | Latin King Detailing",
  description:
    "See real before and after results from Latin King Detailing. Paint correction, ceramic coating, interior deep cleans and full details across Urmston and Manchester.",
  alternates: { canonical: "/gallery" },
};

const BEFORE_AFTER_PAIRS = [
  {
    before: {
      src: "/images/interior/interior-urmston-latin-king-detailing-03-1280w.webp",
      alt: "Car accelerator pedal before interior detailing — heavily soiled with ingrained salt deposits and grime",
    },
    after: {
      src: "/images/interior/interior-urmston-latin-king-detailing-01-1280w.webp",
      alt: "Car accelerator pedal after interior deep clean by Latin King Detailing — restored to like-new condition",
    },
    service: "Interior Deep Clean",
    vehicle: "Audi TT",
  },
  {
    before: {
      src: "/images/interior/interior-urmston-latin-king-detailing-04-1280w.webp",
      alt: "Car footwell before deep cleaning by Latin King Detailing — contaminated floor mat with salt and dirt around pedals",
    },
    after: {
      src: "/images/interior/interior-urmston-latin-king-detailing-02-1280w.webp",
      alt: "Car footwell after interior deep clean by Latin King Detailing, Urmston — pristinely clean mats and polished pedals",
    },
    service: "Interior Deep Clean",
    vehicle: "Audi",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40">
        <div className="section-container">
          <p className="eyebrow">Real results</p>
          <h1 className="mb-5">
            Before & after{" "}
            <span className="gradient-text-red">transformations</span>
          </h1>
          <p className="text-lg mb-14" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "55ch" }}>
            Every result shown here is genuine work carried out by Latin King Detailing — real cars, real results, no filters or digital enhancement. Drag the sliders to see the full transformation.
          </p>

          {/* Before/after sliders */}
          <div className="space-y-16 mb-16">
            {BEFORE_AFTER_PAIRS.map((pair, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <BeforeAfterSlider
                    before={pair.before}
                    after={pair.after}
                    className="aspect-[4/3]"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="eyebrow">Result #{i + 1}</p>
                  <h2 className="text-3xl mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
                    {pair.service}
                  </h2>
                  <p className="text-base mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Vehicle: {pair.vehicle}
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Drag the slider across the image above to compare the before and after result. Every transformation is achieved using professional-grade products and techniques — no shortcuts, no filters.
                  </p>
                  <Link href="/contact" className="btn btn-primary">
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof / Instagram */}
          <div
            className="p-8 rounded-2xl text-center"
            style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}
          >
            <InstagramIcon size={32} className="mx-auto mb-4" style={{ color: "var(--color-accent-500)" }} />
            <h2 className="text-2xl mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
              See more on Instagram & TikTok
            </h2>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "44ch", margin: "0 auto 1.5rem" }}>
              We post regular before and after content, behind-the-scenes footage and ceramic coating applications — including work on exotic vehicles.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <InstagramIcon size={16} />
                @latinkingdetailing
              </a>
              <a
                href={BUSINESS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <TikTokIcon size={16} />
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
