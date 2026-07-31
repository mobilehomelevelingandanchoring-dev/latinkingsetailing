import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildReviewSchema } from "@/lib/schema";
import { StarRating } from "@/components/ui/StarRating";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Customer Reviews — 5★ Rated Mobile Car Detailing | Latin King Detailing",
  description:
    "Read verified customer reviews for Latin King Detailing. 5.0 average across Google and Facebook. Mobile car detailing in Urmston, Manchester.",
  alternates: { canonical: "/reviews" },
};

const EXTENDED_REVIEWS = [
  ...BUSINESS.reviews,
  {
    author: "James M.",
    rating: 5,
    text: "Booked a full detail on my BMW 3 Series and I genuinely couldn't believe the difference. The paint was covered in light swirls from a drive-through car wash. After Latin King had finished, it looked like it had just come out of the showroom. Absolutely worth every penny.",
    platform: "Google",
  },
  {
    author: "Sarah T.",
    rating: 5,
    text: "Used the interior detailing service after my kids had absolutely destroyed the rear seats. The team were professional, thorough and the results were incredible — it looked completely new inside. Will be booking again before I sell the car.",
    platform: "Facebook",
  },
  {
    author: "Raj P.",
    rating: 5,
    text: "Had the ceramic coating done on my Audi Q5. The customer service was excellent from the initial message right through to completion. Car has been so easy to keep clean since — water just beads straight off. Highly recommend.",
    platform: "Google",
  },
];

export default function ReviewsPage() {
  const schema = buildReviewSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40">
        <div className="section-container">
          <p className="eyebrow">Customer feedback</p>
          <h1 className="mb-8">
            What our customers{" "}
            <span className="gradient-text-red">say</span>
          </h1>

          {/* Aggregate score */}
          <div
            className="inline-flex items-center gap-6 p-6 rounded-2xl mb-14"
            style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}
          >
            <div className="text-center">
              <div
                className="text-6xl font-black tabular-nums"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 900, color: "var(--color-gold)" }}
              >
                {BUSINESS.rating.ratingValue.toFixed(1)}
              </div>
              <StarRating rating={5} size={20} className="mt-1 justify-center" />
            </div>
            <div className="h-14 w-px" style={{ background: "var(--color-border)" }} />
            <div>
              <p className="text-white font-bold text-lg">
                {BUSINESS.rating.ratingCount}+ verified reviews
              </p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Across Google and Facebook
              </p>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://www.google.com/search?q=Latin+King+Detailing+Urmston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  Google <ExternalLink size={10} />
                </a>
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  Facebook <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTENDED_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="card p-7 flex flex-col gap-4"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: "rgba(196,30,58,0.2)", color: "var(--color-accent-400)" }}
                    aria-hidden="true"
                  >
                    {review.author.charAt(0)}
                  </div>
                  <StarRating rating={review.rating} size={13} />
                </div>
                <blockquote className="flex-1">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                    itemProp="reviewBody"
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>
                <footer
                  className="pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p
                    className="font-bold text-sm text-white"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{review.author}</span>
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    ✓ Verified {review.platform} review
                  </p>
                </footer>
              </div>
            ))}
          </div>

          {/* Leave a review */}
          <div className="mt-14 p-8 rounded-2xl text-center" style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}>
            <div className="flex justify-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} fill="currentColor" style={{ color: "var(--color-gold)" }} />
              ))}
            </div>
            <h2 className="text-2xl mb-2" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}>
              Had your car detailed by us?
            </h2>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              We&apos;d love to hear your feedback. Leaving a review takes less than a minute.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://www.google.com/search?q=Latin+King+Detailing+Urmston"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Leave a Google Review
                <ExternalLink size={14} />
              </a>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Leave a Facebook Review
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
