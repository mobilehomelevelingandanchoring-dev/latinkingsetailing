import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--color-base-950)" }}
    >
      <div className="section-container text-center py-24">
        <div
          className="text-[8rem] font-black leading-none mb-4"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 900,
            background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          404
        </div>

        <h1
          className="text-4xl mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}
        >
          Page not found
        </h1>
        <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "40ch", margin: "0 auto 2.5rem" }}>
          The page you&apos;re looking for doesn&apos;t exist. It may have moved, or you may have typed the address incorrectly.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link href="/services" className="btn btn-secondary">
            <Search size={16} />
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
