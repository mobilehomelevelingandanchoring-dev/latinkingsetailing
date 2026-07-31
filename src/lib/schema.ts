// JSON-LD schema builder — typed, validated output for all schema.org types.
// Feeds from business.ts as single source of truth.

import { BUSINESS } from "./business";

const BASE_URL = BUSINESS.url;

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BASE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    image: `${BASE_URL}/og-image.jpg`,
    logo: `${BASE_URL}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.county,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.areas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    openingHoursSpecification: BUSINESS.openingHoursSpec.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.ratingValue,
      reviewCount: BUSINESS.rating.ratingCount,
      bestRating: BUSINESS.rating.bestRating,
      worstRating: BUSINESS.rating.worstRating,
    },
    review: BUSINESS.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    })),
    sameAs: [
      BUSINESS.social.instagram,
      BUSINESS.social.tiktok,
      BUSINESS.social.facebook,
    ],
  };
}

export function buildServiceSchema(service: {
  slug: string;
  name: string;
  description: string;
  priceFrom: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${service.slug}/#service`,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: BUSINESS.name,
    },
    areaServed: BUSINESS.areas.map((a) => a.name).join(", "),
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: service.priceFrom,
      description: `Starting from £${service.priceFrom}`,
    },
    url: `${BASE_URL}/services/${service.slug}/`,
  };
}

export function buildFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.ratingValue,
      reviewCount: BUSINESS.rating.ratingCount,
      bestRating: BUSINESS.rating.bestRating,
    },
    review: BUSINESS.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    })),
  };
}
