"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function MobileCTABar() {
  return (
    <div className="mobile-cta-bar" aria-label="Quick contact actions">
      <a
        href={`tel:${BUSINESS.phone}`}
        className="btn btn-secondary"
        aria-label={`Call us on ${BUSINESS.phoneDisplay}`}
      >
        <Phone size={16} aria-hidden="true" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="btn btn-primary"
        aria-label="Get a free quote online"
      >
        <CalendarCheck size={16} aria-hidden="true" />
        Free Quote
      </Link>
    </div>
  );
}
