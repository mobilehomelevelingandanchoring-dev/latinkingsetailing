"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--color-base-950)" }}
    >
      <div className="section-container text-center py-24">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(196,30,58,0.15)", color: "var(--color-accent-500)" }}
        >
          <RefreshCw size={28} />
        </div>
        <h1
          className="text-4xl mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}
        >
          Something went wrong
        </h1>
        <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "40ch", margin: "0 auto 2.5rem" }}>
          An unexpected error occurred. Please try refreshing the page or return to the homepage.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={reset} className="btn btn-primary">
            <RefreshCw size={16} />
            Try Again
          </button>
          <Link href="/" className="btn btn-secondary">
            <Home size={16} />
            Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
