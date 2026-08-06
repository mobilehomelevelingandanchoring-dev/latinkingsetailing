// JSON-LD schema builder — typed, validated output for all schema.org types.
// Feeds from business.ts as single source of truth.

import { BUSINESS } from "./business";

const BASE_URL = BUSINESS.url;

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness", "AutoBodyShop"],
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BASE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    image: `${BASE_URL}/og-image.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
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
    hasMap: `https://www.google.com/maps?q=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        email: BUSINESS.email,
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
    ],
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        geoRadius: "15000",
      },
      ...BUSINESS.areas.map((area) => ({
        "@type": "City",
        name: area.name,
      })),
    ],
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
    knowsAbout: [
      "Car Detailing",
      "Ceramic Coating",
      "Paint Correction",
      "Machine Polishing",
      "Paint Enhancement",
      "Car Valeting",
"Interior Detailing",
      "Engine Bay Cleaning",
      "Mobile Car Detailing",
      "Swirl Mark Removal",
      "Vehicle Paint Protection",
      "SiO2 Nano Coating",
      "Clay Bar Decontamination",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car Detailing Services — Latin King Detailing",
      itemListElement: BUSINESS.services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
          },
          price: s.priceFrom,
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
        },
      })),
    },
    sameAs: [
      BUSINESS.social.instagram,
      BUSINESS.social.tiktok,
      BUSINESS.social.facebook,
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: BUSINESS.name,
    url: BASE_URL,
    description: BUSINESS.description,
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-GB",
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      url: `${BASE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    image: `${BASE_URL}/og-image.jpg`,
    description: BUSINESS.description,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.county,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.countryCode,
    },
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
    areaServed: BUSINESS.areas.map((a) => ({ "@type": "City", name: a.name })),
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: service.priceFrom,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
        minPrice: service.priceFrom,
      },
      description: `Starting from £${service.priceFrom}`,
      availability: "https://schema.org/InStock",
    },
    url: `${BASE_URL}/services/${service.slug}`,
    mainEntityOfPage: `${BASE_URL}/services/${service.slug}`,
  };
}

export function buildArticleSchema(article: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${article.url}#article`,
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    url: article.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    image: article.imageUrl
      ? { "@type": "ImageObject", url: article.imageUrl }
      : `${BASE_URL}/og-image.jpg`,
    author: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS.name,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS.name,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${BASE_URL}/blog#blog`,
      name: `${BUSINESS.name} Blog`,
      url: `${BASE_URL}/blog`,
    },
    about: {
      "@type": "Thing",
      name: "Car Detailing",
    },
    inLanguage: "en-GB",
  };
}

export function buildBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/blog#blog`,
    name: `${BUSINESS.name} — Car Detailing Blog`,
    description:
      "Expert car detailing guides, comparisons and advice from Latin King Detailing in Urmston, Manchester.",
    url: `${BASE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS.name,
    },
    inLanguage: "en-GB",
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

export function buildServiceLocationSchema(params: {
  serviceName: string;
  serviceSlug: string;
  serviceDescription: string;
  priceFrom: number;
  locationName: string;
  locationSlug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/${params.serviceSlug}-${params.locationSlug}/#service`,
    name: `${params.serviceName} in ${params.locationName}`,
    description: params.serviceDescription,
    areaServed: {
      "@type": "City",
      name: params.locationName,
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: BUSINESS.name,
    },
    offers: {
      "@type": "Offer",
      price: params.priceFrom,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: params.priceFrom,
        priceCurrency: "GBP",
        description: `Starting from £${params.priceFrom}`,
      },
    },
    url: `${BASE_URL}/${params.serviceSlug}-${params.locationSlug}`,
    mainEntityOfPage: `${BASE_URL}/${params.serviceSlug}-${params.locationSlug}`,
  };
}

export function buildHowToSchema(params: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    ...(params.totalTime && { totalTime: params.totalTime }),
    step: params.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function buildServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/services/#servicelist`,
    name: "Car Detailing Services — Latin King Detailing Manchester",
    url: `${BASE_URL}/services`,
    numberOfItems: BUSINESS.services.length,
    itemListElement: BUSINESS.services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${BASE_URL}/services/${s.slug}`,
      description: s.description,
    })),
  };
}

export function buildPricingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/pricing/#pricelist`,
    name: "Car Detailing Prices — Latin King Detailing Manchester",
    description:
      "Professional mobile car detailing service prices in Manchester and Greater Manchester. Fixed quotes confirmed before work starts.",
    url: `${BASE_URL}/pricing`,
    numberOfItems: BUSINESS.services.length,
    itemListElement: BUSINESS.services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#business`,
          name: BUSINESS.name,
        },
        offers: {
          "@type": "Offer",
          price: s.priceFrom,
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: s.priceFrom,
            priceCurrency: "GBP",
            description: `Starting from £${s.priceFrom} — exact price confirmed before work begins`,
          },
        },
      },
    })),
  };
}
