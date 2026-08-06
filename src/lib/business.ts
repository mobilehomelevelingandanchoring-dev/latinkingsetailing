// Single source of truth for all business data.
// Feeds: schema JSON-LD, metadata, footer, contact page, NAP mentions.

export const BUSINESS = {
  name: "Latin King Detailing",
  legalName: "Latin King Detailing",
  description:
    "Premium mobile car detailing, paint correction, ceramic coating and valeting service based in Urmston, Manchester. We come to you — showroom-quality results at your door.",
  shortDescription: "Mobile car detailing & ceramic coating — Urmston, Manchester.",

  // NAP — never deviate from these strings anywhere on the site
  address: {
    street: "426 Flixton Rd",
    city: "Urmston",
    county: "Manchester",
    postcode: "M41 6QT",
    country: "United Kingdom",
    countryCode: "GB",
    full: "426 Flixton Rd, Urmston, Manchester, M41 6QT, United Kingdom",
  },
  geo: {
    latitude: 53.4478,
    longitude: -2.3616,
  },

  phone: "+44 7482 225323",
  phoneDisplay: "07482 225323",
  email: "latinkingdetailing@yahoo.com",
  domain: "latinkingdetailing.co.uk",
  url: "https://latinkingdetailing.co.uk",

  // Booking / availability
  availability: "Open 24/7 — call or message anytime.",
  openingHoursSpec: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  social: {
    instagram: "https://www.instagram.com/latin_King_detailing",
    tiktok: "https://www.tiktok.com/@latinkingdetailing",
    facebook: "https://www.facebook.com/latinkingdetailing",
  },

  rating: {
    ratingValue: 5.0,
    ratingCount: 47,
    bestRating: 5,
    worstRating: 1,
  },

  reviews: [
    {
      author: "Thalia Corbishley",
      rating: 5,
      text: "Extremely satisfied with the results — my car looks completely brand new. Exceptional attention to detail and a truly professional service.",
      platform: "Google",
    },
    {
      author: "Infinity Tattoo Studio",
      rating: 5,
      text: "Outstanding customer service and remarkable results. The team went above and beyond to deliver a showroom-quality finish. Highly recommended for any business fleet or personal vehicle.",
      platform: "Google",
    },
    {
      author: "Clair Staines",
      rating: 5,
      text: "Fantastic service from start to finish. I'll definitely be coming back — wouldn't take my car anywhere else. Absolutely recommend Latin King Detailing.",
      platform: "Facebook",
    },
  ],

  priceRange: "££",

  // All services offered
  services: [
    {
      slug: "mobile-valeting",
      name: "Mobile Valeting",
      shortName: "Mobile Valet",
      tagline: "Professional valeting delivered to your door",
      description:
        "Full interior and exterior mobile valet service — we come to your home, workplace or any convenient location across Greater Manchester. From a thorough mini valet to a complete full valet, every clean is carried out using premium products with meticulous attention to detail.",
      priceFrom: 40,
      duration: "1.5–3 hours",
      icon: "car",
    },
    {
      slug: "car-detailing",
      name: "Car Detailing",
      shortName: "Car Detail",
      tagline: "Showroom-quality detailing, at your location",
      description:
        "A comprehensive multi-stage detail covering paintwork decontamination, deep interior cleaning, glass treatment and protection application. The result is a vehicle that looks and feels as close to factory-new as possible.",
      priceFrom: 120,
      duration: "4–8 hours",
      icon: "sparkles",
    },
    {
      slug: "paint-correction",
      name: "Paint Correction",
      shortName: "Paint Correction",
      tagline: "Remove swirls, scratches & oxidation permanently",
      description:
        "Machine-assisted paint correction eliminates swirl marks, light scratches, water spots and oxidation from the clear coat, restoring genuine gloss and depth. Available as a one-stage enhancement or multi-stage correction depending on paint condition.",
      priceFrom: 200,
      duration: "6–12 hours",
      icon: "zap",
    },
    {
      slug: "machine-polishing",
      name: "Machine Polishing / Paint Enhancement",
      shortName: "Machine Polish",
      tagline: "Restore depth, gloss and clarity to any paintwork",
      description:
        "Professional dual-action and rotary machine polishing to enhance paintwork gloss and clarity. Suitable for all paint types including delicate single-stage and matte-look finishes when used with the correct compound and speed combination.",
      priceFrom: 150,
      duration: "4–8 hours",
      icon: "rotate-cw",
    },
    {
      slug: "ceramic-coating",
      name: "Ceramic Coating",
      shortName: "Ceramic Coating",
      tagline: "Lasting protection with a permanent liquid-glass shield",
      description:
        "Professional-grade SiO₂ ceramic coating bonds permanently to your paintwork, creating a hydrophobic, scratch-resistant barrier that keeps the car cleaner for longer and dramatically enhances gloss. Lasts up to 2–3 years with correct maintenance. We have experience coating vehicles from everyday hatchbacks to luxury exotics including the Ferrari Purosangue.",
      priceFrom: 350,
      duration: "1–2 days",
      icon: "shield",
    },
    {
      slug: "interior-detailing",
      name: "Interior Detailing",
      shortName: "Interior Detail",
      tagline: "Deep-clean every surface inside your vehicle",
      description:
        "A full interior detail includes steam cleaning, hot water extraction of carpets and upholstery, leather conditioning, dashboard and trim dressing, odour elimination and glass polishing. Eliminates allergens, bacteria and ingrained grime for a genuinely fresh, like-new interior.",
      priceFrom: 80,
      duration: "2–4 hours",
      icon: "sofa",
    },
    {
      slug: "exterior-detailing",
      name: "Exterior Detailing",
      shortName: "Exterior Detail",
      tagline: "Decontaminate, polish and protect your paintwork",
      description:
        "A thorough exterior detail covers safe foam-cannon wash, iron fallout removal, clay bar decontamination, paintwork enhancement polish and sealant or wax protection application. Leaves the exterior clean, protected and visibly glossier.",
      priceFrom: 80,
      duration: "2–4 hours",
      icon: "droplets",
    },
    {
      slug: "deep-cleaning",
      name: "Deep Cleaning",
      shortName: "Deep Clean",
      tagline: "Total reset — inside and out, no corner missed",
      description:
        "Our most intensive all-inclusive package combining full interior deep clean, full exterior wash and decontamination, engine bay tidy, glass treatment and finishing wax. Ideal for vehicles returning from long-term storage, pre-sale preparation or simply long-overdue care.",
      priceFrom: 200,
      duration: "6–10 hours",
      icon: "star",
    },
    {
      slug: "engine-bay-cleaning",
      name: "Engine Bay Cleaning",
      shortName: "Engine Bay",
      tagline: "Steam-clean your engine bay to showroom standard",
      description:
        "Steam and degreaser treatment of the entire engine bay, removing oil residue, brake dust and road grime from all exposed surfaces. Safe for modern electronics when performed with correct technique. Dramatically improves appearance and makes fault diagnosis easier.",
      priceFrom: 50,
      duration: "45–90 minutes",
      icon: "settings",
    },
  ],

  // All service area locations
  areas: [
    {
      slug: "urmston",
      name: "Urmston",
      postcodes: ["M41"],
      isHQ: true,
      description:
        "Our home base and primary service area. Latin King Detailing is the leading mobile car wash, car valet and detailing service in Urmston — a professional hand car wash alternative that comes to your door. We offer same-day and next-day slots across M41 postcodes including Urmston town centre, Flixton Road, Stretford Road and all surrounding residential streets.",
    },
    {
      slug: "flixton",
      name: "Flixton",
      postcodes: ["M41"],
      description:
        "Adjacent to our base on Flixton Road, we serve Flixton regularly with rapid response times. Popular with local residents looking for a convenient mobile valet without leaving home.",
    },
    {
      slug: "stretford",
      name: "Stretford",
      postcodes: ["M32"],
      description:
        "Stretford is one of our most active service areas — a short drive from our Urmston base along the A56. We offer mobile car valet, full car detailing, ceramic coating and paint correction across all of M32, including Stretford town centre, Edge Lane and the residential streets off Chester Road.",
    },
    {
      slug: "davyhulme",
      name: "Davyhulme",
      postcodes: ["M41"],
      description:
        "Davyhulme sits directly adjacent to Urmston and benefits from the same rapid availability. We serve homes and businesses throughout Davyhulme, including Lostock Road and the estates off Princess Road.",
    },
    {
      slug: "sale",
      name: "Sale",
      postcodes: ["M33"],
      description:
        "Sale is a key coverage area for us in Trafford. Whether you're based near Sale town centre, Sale Moor or Ashton upon Mersey, we'll bring the full mobile detailing service to your door.",
    },
    {
      slug: "old-trafford",
      name: "Old Trafford",
      postcodes: ["M16", "M17"],
      description:
        "From the stadium precincts to the residential streets behind White City retail park, we cover Old Trafford and the M16/M17 postcode area with our full range of valeting and detailing services.",
    },
    {
      slug: "chorlton-cum-hardy",
      name: "Chorlton-cum-Hardy",
      postcodes: ["M21"],
      description:
        "Chorlton is one of Manchester's most popular suburban neighbourhoods and we're proud to serve it. Residents across M21 — from Barlow Moor Road to Wilbraham Road — can book our mobile detailing service for any driveway or on-street location.",
    },
    {
      slug: "eccles",
      name: "Eccles",
      postcodes: ["M30"],
      description:
        "Eccles and its surrounding streets in M30 are well within our service radius. We regularly carry out full details, ceramic coatings and mobile valets for customers across the Eccles area.",
    },
    {
      slug: "salford",
      name: "Salford",
      postcodes: ["M27", "M6", "M7"],
      description:
        "From Salford Quays to Pendleton and Swinton, we cover the wider Salford area including M5, M6, M27 and M7 postcodes. Our mobile setup means no need for you to travel to a car wash — we come to you.",
    },
    {
      slug: "altrincham",
      name: "Altrincham",
      postcodes: ["WA14", "WA15"],
      description:
        "Altrincham and the WA14/WA15 area is the southern extent of our service zone. We serve Altrincham town centre, Timperley, Bowdon and Hale with the full menu of detailing and protective coating services.",
    },
    {
      slug: "carrington",
      name: "Carrington",
      postcodes: ["M31"],
      description:
        "Carrington residents and businesses in M31 can book our mobile detailing service for any location. We cover Carrington village and the surrounding industrial and residential areas.",
    },
    {
      slug: "partington",
      name: "Partington",
      postcodes: ["M31"],
      description:
        "Partington is well within our coverage area. Customers in M31 can book a full mobile valet, paint correction or ceramic coating at their property without any travel required.",
    },
    {
      slug: "irlam",
      name: "Irlam",
      postcodes: ["M44"],
      description:
        "Irlam and Cadishead in M44 are covered by our mobile detailing team. We serve residential streets and commercial premises across the Irlam area, offering the full range of valeting and detailing services.",
    },
    {
      slug: "timperley",
      name: "Timperley",
      postcodes: ["WA15"],
      description:
        "Timperley is a popular booking location for us, with many customers in WA15 choosing our mobile ceramic coating and full detail packages. We cover all of Timperley including Park Road, Bloomsbury Lane and adjacent streets.",
    },
    {
      slug: "didsbury",
      name: "Didsbury",
      postcodes: ["M20"],
      description:
        "Didsbury's mix of high-value vehicles and discerning owners makes it a natural fit for our premium detailing service. We serve West Didsbury, East Didsbury and Withington across M20 postcodes.",
    },
    {
      slug: "manchester",
      name: "Manchester",
      postcodes: ["M1", "M2", "M3", "M4", "M8", "M13", "M14", "M15", "M16"],
      description:
        "Latin King Detailing serves Manchester city and the wider Greater Manchester area with fully mobile car detailing, ceramic coating, paint correction and valeting. From our Urmston base we cover all key Manchester postcodes — providing the same premium detailing standard at your door across the city.",
    },
  ],
} as const;

export type Service = (typeof BUSINESS.services)[number];
export type Area = {
  slug: string;
  name: string;
  postcodes: readonly string[];
  isHQ?: boolean;
  description: string;
};

// Utility: get a service by slug
export function getService(slug: string) {
  return BUSINESS.services.find((s) => s.slug === slug);
}

// Utility: get an area by slug
export function getArea(slug: string): Area | undefined {
  return BUSINESS.areas.find((a) => a.slug === slug) as Area | undefined;
}
