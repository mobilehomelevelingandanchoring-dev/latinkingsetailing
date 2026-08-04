import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { buildBlogSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Car Detailing Blog — Tips, Guides & Expert Advice | Latin King Detailing",
  description:
    "Expert car detailing guides, comparisons and advice from Latin King Detailing in Urmston. Ceramic coating vs wax, paint correction explained, and more.",
  alternates: { canonical: "/blog" },
};

const POSTS = [
  {
    slug: "ceramic-coating-vs-wax",
    title: "Ceramic Coating vs Wax: Which Paint Protection is Right for Your Car?",
    excerpt:
      "Wax has been the default paint protection choice for decades. Ceramic coating is now the professional standard. We break down exactly what each does, how long they last, and which makes more sense for your vehicle and your budget.",
    readTime: "6 min read",
    category: "Comparison",
    date: "2025-01-15",
  },
  {
    slug: "how-to-maintain-ceramic-coating",
    title: "How to Maintain a Ceramic Coating Between Professional Washes",
    excerpt:
      "A ceramic coating is only as good as the maintenance that follows it. This guide covers the correct wash technique, safe products, and what to avoid to preserve your coating's hydrophobic performance for the full 2–3 year lifespan.",
    readTime: "5 min read",
    category: "How-To",
    date: "2025-02-08",
  },
  {
    slug: "mobile-detailing-vs-car-wash",
    title: "Mobile Car Detailing vs Automated Car Wash: The Real Difference",
    excerpt:
      "An automated car wash takes 3 minutes and costs £5–£10. A mobile detail takes several hours and costs significantly more. Here's an honest breakdown of what you actually get for the difference — and why swirl marks matter.",
    readTime: "5 min read",
    category: "Comparison",
    date: "2025-03-01",
  },
];

export default function BlogIndexPage() {
  const blogSchema = buildBlogSchema();

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
    <section className="section-pad pt-32 md:pt-40">
      <div className="section-container">
        <p className="eyebrow">Knowledge base</p>
        <h1 className="mb-5">
          Car detailing{" "}
          <span className="gradient-text-red">guides & advice</span>
        </h1>
        <p className="text-lg mb-14" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "52ch" }}>
          Expert guides on ceramic coatings, paint protection, correct wash technique and more — written by Latin King Detailing based on real-world experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card p-7 flex flex-col gap-4 h-full"
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded"
                  style={{
                    background: "rgba(196,30,58,0.15)",
                    color: "var(--color-accent-400)",
                    border: "1px solid rgba(196,30,58,0.25)",
                  }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </div>

              <h2
                className="text-xl leading-snug group-hover:text-white transition-colors"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1.2rem",
                }}
              >
                {post.title}
              </h2>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                {post.excerpt}
              </p>

              <div
                className="flex items-center gap-2 text-sm font-semibold pt-4 mt-auto"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "var(--color-accent-500)" }}
              >
                Read article
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
