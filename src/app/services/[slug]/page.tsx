import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { BUSINESS, getService } from "@/lib/business";
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

// Per-service SEO metadata
const SERVICE_META: Record<string, { title: string; description: string }> = {
  "mobile-valeting": {
    title: "Car Valet Urmston | Mini Valet Near Me | Mobile Car Wash Manchester",
    description:
      "Professional mobile car valet in Urmston & Manchester — mini valet, full valet & hand car wash alternative. We come to you. 5★ rated. From £40. Call 07482 225323.",
  },
  "car-detailing": {
    title: "Car Detailing Manchester & Urmston | Full Car Detail Near Me",
    description:
      "Professional car detailing in Manchester & Urmston. Full car detail, decontamination, machine polishing & protection at your door. 5★ rated. From £120. Call 07482 225323.",
  },
  "paint-correction": {
    title: "Paint Correction Manchester & Urmston | Swirl Mark Removal Near Me",
    description:
      "Machine paint correction in Manchester & Urmston — permanently remove swirl marks, scratches & oxidation. Mobile service at your door. From £150. Call 07482 225323.",
  },
  "machine-polishing": {
    title: "Machine Polishing Manchester | Car Polish Near Me | Latin King Detailing",
    description:
      "Professional machine polishing in Manchester & Urmston. Restore gloss, remove mild swirl marks and prep paint for ceramic coating. Mobile service. From £80. Call 07482 225323.",
  },
  "ceramic-coating": {
    title: "Ceramic Coating Manchester | Best Ceramic Coating UK | Latin King Detailing",
    description:
      "Best ceramic coating for cars in Manchester & Urmston — professional SiO₂ nano-coating lasts 2–3 years, hydrophobic & UV-resistant. Includes paint correction prep. From £350. Book now.",
  },
  "interior-detailing": {
    title: "Interior Car Detailing Manchester | Car Seat Wash & Upholstery Clean Near Me",
    description:
      "Deep interior car detailing in Manchester & Urmston — car seat shampoo, upholstery steam clean & odour elimination at your door. 5★ rated. From £80. Call 07482 225323.",
  },
  "exterior-detailing": {
    title: "Car Cleaning Manchester & Urmston | Exterior Car Detailing Near Me",
    description:
      "Professional car cleaning in Manchester & Urmston. Clay bar decontamination, machine polish & wax or sealant protection — fully mobile exterior detailing. From £80. Book now.",
  },
  "deep-cleaning": {
    title: "Full Car Detail Manchester | Deep Car Clean Near Me | Latin King Detailing",
    description:
      "Complete full car detail in Manchester & Urmston — exterior wash, machine polish, interior hot water extraction, engine bay tidy & finishing protection in one visit. From £200.",
  },
  "engine-bay-cleaning": {
    title: "Engine Bay Steam Clean Near Me | Manchester & Urmston | Latin King Detailing",
    description:
      "Car engine steam cleaning in Manchester & Urmston. Safe degreaser & steam clean at your location — no garage needed. Electronics protected throughout. From £50. Call 07482 225323.",
  },
};

// Per-service CTA copy
const SERVICE_CTA: Record<
  string,
  { headline: string; description: string; heroBtn: string; cardBtn: string }
> = {
  "mobile-valeting": {
    headline: "Book Your Mobile Valet — We Come to You",
    description: "Fixed price confirmed before we start. Fully self-equipped — own water, power and professional products. No travel required.",
    heroBtn: "Book This Valet",
    cardBtn: "Get My Valet Quote",
  },
  "car-detailing": {
    headline: "Book a Full Car Detail at Your Door",
    description: "Thorough decontamination, machine polishing and durable protection at your home or workplace across Greater Manchester.",
    heroBtn: "Book This Detail",
    cardBtn: "Get My Detail Quote",
  },
  "paint-correction": {
    headline: "Restore Your Paint's True Gloss",
    description: "Machine correction permanently removes swirl marks and scratches. Protective finish included. Fully mobile across Manchester.",
    heroBtn: "Book Paint Correction",
    cardBtn: "Get Correction Quote",
  },
  "machine-polishing": {
    headline: "Bring Back That Showroom Shine",
    description: "Professional machine polishing removes mild swirls and enhances gloss — a key step before any protective coating application.",
    heroBtn: "Book Machine Polish",
    cardBtn: "Get Polish Quote",
  },
  "ceramic-coating": {
    headline: "Protect Your Paint for Years — Book Ceramic Coating",
    description: "Professional SiO₂ ceramic coating lasts 2–3 years. Full decontamination and polish prep always included. Applied mobile at your location.",
    heroBtn: "Book Ceramic Coating",
    cardBtn: "Get Coating Quote",
  },
  "interior-detailing": {
    headline: "Transform Your Interior — Deep Clean at Your Door",
    description: "Hot water extraction, steam cleaning and odour elimination for every surface. A genuinely fresh interior — not a spray-and-wipe.",
    heroBtn: "Book Interior Detail",
    cardBtn: "Get Interior Quote",
  },
  "exterior-detailing": {
    headline: "Showroom-Grade Exterior — Fully Mobile",
    description: "Foam cannon pre-wash, clay bar decontamination, machine polish and wax or sealant protection — all performed at your location.",
    heroBtn: "Book Exterior Detail",
    cardBtn: "Get Exterior Quote",
  },
  "deep-cleaning": {
    headline: "Total Vehicle Reset — Inside & Out",
    description: "Full exterior detail, complete interior deep clean, engine bay tidy and finishing protection in a single visit.",
    heroBtn: "Book Deep Clean",
    cardBtn: "Get Deep Clean Quote",
  },
  "engine-bay-cleaning": {
    headline: "A Clean Engine Bay, Without the Hassle",
    description: "Safe steam and degreaser cleaning at your location — no garage visit needed. Sensitive electronics protected throughout.",
    heroBtn: "Book Engine Bay Clean",
    cardBtn: "Get Engine Bay Quote",
  },
};

// Per-service extended content
const SERVICE_CONTENT: Record<
  string,
  {
    longDescription: string[];
    includes: string[];
    notIncludes: string[];
    faqs: Array<{ question: string; answer: string }>;
    relatedAreas: string[];
    relatedServices: string[];
  }
> = {
  "mobile-valeting": {
    longDescription: [
      "Latin King Detailing is Urmston and Manchester's professional mobile car valet service — a true alternative to a hand car wash, bringing expert-grade cleaning directly to your home, workplace or any convenient location. You never need to leave your property or wait in a queue: we arrive fully equipped with our own water, power and professional-grade products.",
      "A mobile valet from Latin King Detailing is far removed from a forecourt wash-and-vac or automated car wash. We use pH-neutral shampoos, high-quality microfibre towels and the correct interior product for each surface — leather, fabric, hard plastic and glass — eliminating the risk of swirl marks or paint damage that brush-based car washes cause.",
      "We offer both mini valet and full valet options across Urmston, Stretford, Sale, Manchester and all covered areas. A mini valet covers a safe exterior wash, wheel and tyre clean, window clean and a thorough vacuum and wipe-down of the interior. A full valet extends to hand-polish, seat shampoo or leather conditioning, door shuts, boot area and all interior trim surfaces.",
    ],
    includes: [
      "Safe two-bucket or foam-cannon exterior wash",
      "Wheel and tyre cleaning and dressing",
      "Exterior glass clean (streak-free)",
      "Interior vacuum — carpets, seats, boot",
      "Interior wipe-down — dashboard, doors, console",
      "Door shut and sill cleaning",
      "Window clean interior",
      "Air freshener finish",
    ],
    notIncludes: [
      "Paint correction or scratch removal",
      "Ceramic or wax protection (available as add-on)",
      "Deep steam cleaning (available as add-on)",
    ],
    faqs: [
      {
        question: "Do you offer car valeting near M41 9PQ?",
        answer:
          "Yes — Latin King Detailing is based on Flixton Road in Urmston, which covers M41 postcodes including M41 9PQ. We offer mobile valeting at your door, so there is no need to travel. Message or call us to book.",
      },
      {
        question: "How long does a mobile valet take?",
        answer:
          "A mini valet typically takes 1.5–2 hours. A full valet takes 2.5–3.5 hours depending on vehicle size. SUVs and MPVs take slightly longer than standard hatchbacks.",
      },
      {
        question: "Do I need to provide water or electricity?",
        answer:
          "No. Latin King Detailing arrives fully self-sufficient with its own water supply and power. You simply need to provide a safe outdoor space to work around the vehicle.",
      },
      {
        question: "What is the difference between a valet and a detail?",
        answer:
          "A valet focuses on cleaning — washing, vacuuming and wiping down surfaces to remove everyday dirt. A detail goes further: it corrects paintwork imperfections, decontaminates the paint using clay bar and iron remover, and applies long-term protection such as wax, sealant or ceramic coating.",
      },
    ],
    relatedAreas: ["urmston", "flixton", "stretford", "davyhulme", "sale"],
    relatedServices: ["car-detailing", "exterior-detailing", "interior-detailing"],
  },
  "car-detailing": {
    longDescription: [
      "Car detailing is a step above valeting — it combines thorough deep cleaning with paint decontamination, enhancement polishing and protective coating application to return a vehicle to the closest possible condition to factory new.",
      "Latin King Detailing's car detailing service covers every surface and system of the vehicle: paintwork is washed, decontaminated with iron fallout remover and clay bar, enhanced with machine polish if required, and sealed with wax, sealant or ceramic coating. The interior receives hot water extraction, steam cleaning and dedicated product care for each material type.",
      "We operate across Urmston, Trafford and Greater Manchester as a fully mobile service — every detail is performed at your location without any need to travel to a premises.",
    ],
    includes: [
      "Pre-rinse and foam cannon pre-wash",
      "Two-bucket safe wash method",
      "Iron fallout remover and clay bar decontamination",
      "Machine polish or hand enhancement",
      "Wax, sealant or ceramic coating (specified at booking)",
      "Full interior vacuum and hot water extraction",
      "Leather or fabric conditioning",
      "Glass treatment inside and out",
      "Tyre dressing",
    ],
    notIncludes: [
      "Paint correction (swirl/scratch removal) — available as separate service",
      "Engine bay cleaning — available as add-on",
    ],
    faqs: [
      {
        question: "What does car detailing include?",
        answer:
          "Car detailing covers the thorough cleaning, decontamination, polishing and protection of a vehicle — both inside and out. It goes significantly further than a valet by addressing paint contamination, restoring gloss and applying durable protection against future soiling.",
      },
      {
        question: "How long does a full car detail take?",
        answer:
          "A comprehensive car detail typically takes 4–8 hours depending on vehicle size and condition. Vehicles with heavily contaminated paint or interiors requiring deep cleaning take longer.",
      },
      {
        question: "How often should I have my car detailed?",
        answer:
          "For most vehicles, a full detail once or twice a year is sufficient, supported by regular maintenance washes in between. Vehicles that are driven frequently in harsh conditions or parked outdoors benefit from more frequent attention.",
      },
    ],
    relatedAreas: ["urmston", "stretford", "sale", "altrincham", "didsbury"],
    relatedServices: ["paint-correction", "ceramic-coating", "interior-detailing"],
  },
  "paint-correction": {
    longDescription: [
      "Paint correction is the process of removing imperfections from a vehicle's clear coat — swirl marks, light scratches, water spots, oxidation and buffer trails — using machine polishing techniques. The result is a dramatically improved surface clarity and gloss that cannot be achieved by washing alone.",
      "At Latin King Detailing we offer one-stage and two-stage paint correction. A one-stage correction removes the majority of light defects and significantly enhances gloss — ideal for vehicles in reasonably good condition that need a refresh. A two-stage correction uses a more aggressive cutting compound followed by a finer finishing polish to achieve maximum clarity and depth.",
      "Paint correction is always followed by a protective coating — wax, sealant or ceramic — to preserve the freshly corrected surface. All correction work is performed as a mobile service across Urmston, Trafford and Greater Manchester.",
    ],
    includes: [
      "Full pre-wash and decontamination",
      "Paint depth gauge assessment",
      "Machine correction (one or two stage)",
      "Panel-wipe to remove oils after polishing",
      "Finishing wax, sealant or ceramic coating application",
      "Final inspection under dual-beam lighting",
    ],
    notIncludes: [
      "Deep scratches or stone chips that penetrate to primer (these cannot be removed by polishing)",
      "Interior cleaning (available as add-on)",
    ],
    faqs: [
      {
        question: "What is paint correction?",
        answer:
          "Paint correction is the machine-polishing process that removes defects from the clear coat layer of a vehicle's paintwork — including swirl marks, fine scratches, water spots and oxidation — to restore the paint's true gloss and clarity.",
      },
      {
        question: "Can paint correction remove deep scratches?",
        answer:
          "Paint correction can only remove defects that sit within the clear coat layer. Scratches that penetrate through the clear coat into the base coat or primer cannot be polished out and require touch-up paint or respray.",
      },
      {
        question: "How long does paint correction last?",
        answer:
          "The correction itself is permanent — the defects are physically removed from the clear coat and do not return. However, the paint will develop new swirls over time if washed incorrectly. A ceramic coating applied after correction provides durable protection and makes the paint significantly easier to maintain.",
      },
    ],
    relatedAreas: ["urmston", "stretford", "sale", "chorlton-cum-hardy"],
    relatedServices: ["ceramic-coating", "machine-polishing", "exterior-detailing"],
  },
  "machine-polishing": {
    longDescription: [
      "Machine polishing uses a rotary or dual-action polishing machine with compounds and pads to enhance paintwork clarity, gloss and smoothness. It is suitable for vehicles showing minor surface dullness, mild swirl marks or oxidation and is a key step in any detailing package before protection application.",
      "Latin King Detailing uses professional-grade dual-action and rotary machines, selecting the correct compound, pad and machine speed combination for each vehicle's paint type, thickness and condition. This ensures effective results without risk to delicate or thin paint systems.",
    ],
    includes: [
      "Pre-wash and decontamination",
      "Machine polish with selected compound and pad",
      "Panel-wipe IPA inspection",
      "Finishing protection (wax or sealant)",
    ],
    notIncludes: [
      "Multi-stage correction for heavily swirled paint (see paint correction service)",
    ],
    faqs: [
      {
        question: "What is machine polishing?",
        answer:
          "Machine polishing is the use of a motorised polishing machine, pad and compound to refine the surface of a vehicle's clear coat. It removes mild defects and significantly improves gloss compared to hand polishing.",
      },
      {
        question: "Is machine polishing safe on all paint types?",
        answer:
          "When performed correctly with the right machine speed, compound and pad combination, machine polishing is safe on virtually all paint types — including single-stage, water-based and even delicate finishes. It is not suitable for raw carbon fibre or bare metal surfaces.",
      },
    ],
    relatedAreas: ["urmston", "stretford", "eccles", "salford"],
    relatedServices: ["paint-correction", "car-detailing", "ceramic-coating"],
  },
  "ceramic-coating": {
    longDescription: [
      "Ceramic coating is the most durable paint protection available for consumer vehicles. A professional-grade SiO₂ (silicon dioxide) ceramic coating bonds permanently to the clear coat, creating a hydrophobic, UV-resistant, scratch-resistant layer that keeps the car cleaner for longer and dramatically enhances gloss and depth.",
      "Latin King Detailing has real experience applying ceramic coatings to a wide range of vehicles — from everyday hatchbacks and SUVs to prestige and exotic cars, including the Ferrari Purosangue. This breadth of experience means we understand how to work with different paint sensitivities, application temperatures and curing conditions to achieve a flawless result every time.",
      "A ceramic coating from Latin King Detailing lasts up to 2–3 years with correct maintenance wash technique. The coating makes the paint surface significantly easier to clean — water beads and sheets off, and road grime releases more readily — reducing the frequency and effort of washing.",
      "All ceramic coating packages include a full paint decontamination and machine polishing stage before application to ensure the coating bonds to the cleanest possible surface. We do not apply ceramic coatings over contaminated or swirled paint.",
    ],
    includes: [
      "Full wash and iron fallout decontamination",
      "Clay bar treatment",
      "Machine polish / paint correction stage",
      "IPA panel-wipe for maximum bonding",
      "Professional-grade SiO₂ ceramic coating application",
      "Controlled cure time",
      "Post-cure inspection",
    ],
    notIncludes: [
      "Maintenance washes (customer responsibility)",
      "Paintwork damage requiring body repair",
    ],
    faqs: [
      {
        question: "How long does ceramic coating last?",
        answer:
          "A professionally applied ceramic coating typically lasts 2–3 years with correct maintenance — meaning touchless or two-bucket hand wash technique, avoiding automated car washes with brushes. Some premium coatings offer 5+ year protection with annual maintenance top-ups.",
      },
      {
        question: "What is the difference between ceramic coating and wax?",
        answer:
          "Wax sits on top of the clear coat and lasts 2–4 months before it needs reapplication. Ceramic coating bonds permanently to the clear coat at a molecular level and lasts 2–3 years. Ceramic coating also provides significantly better hydrophobic performance, UV protection and resistance to light chemical damage.",
      },
      {
        question: "Can any car have ceramic coating applied?",
        answer:
          "Yes — ceramic coating is suitable for any vehicle with intact clear coat paintwork in clean, decontaminated condition. The coating must be applied to paint that has been polished and decontaminated, which is why a full preparation stage is always included in our ceramic coating packages.",
      },
      {
        question: "Do you apply ceramic coating to exotic cars?",
        answer:
          "Yes. Latin King Detailing has applied ceramic coatings to high-value and exotic vehicles including the Ferrari Purosangue. We understand the additional care required when working with these vehicles and their typically thinner, more sensitive paint systems.",
      },
    ],
    relatedAreas: ["urmston", "altrincham", "sale", "didsbury", "chorlton-cum-hardy"],
    relatedServices: ["paint-correction", "machine-polishing", "exterior-detailing"],
  },
  "interior-detailing": {
    longDescription: [
      "A full interior detail from Latin King Detailing addresses every surface inside the vehicle — from the headlining and sun visors to the carpet fibres and door pockets. We use professional steam cleaners, hot water extraction machines and dedicated product lines for each material type: leather, alcantara, fabric, rubber and hard plastic.",
      "Our interior detail eliminates ingrained grime, bacteria, allergens and odours that a standard valet cannot reach. The process includes hot water extraction of carpets and upholstery, which removes moisture and bacteria rather than just masking them with fragrance. Glass is polished streak-free on all interior surfaces including the windscreen.",
    ],
    includes: [
      "Hot water extraction — carpets and upholstery",
      "Steam cleaning — all hard surfaces, vents, trim gaps",
      "Leather cleaning and conditioning (where applicable)",
      "Fabric seat treatment",
      "Dashboard, door card and console dressing",
      "Full glass clean interior (including windscreen)",
      "Roof lining spot-clean",
      "Odour elimination treatment",
    ],
    notIncludes: [
      "Exterior washing (available as add-on)",
      "Paint correction or protection",
    ],
    faqs: [
      {
        question: "What is interior car detailing?",
        answer:
          "Interior car detailing is a deep-clean process that addresses every surface inside the vehicle including carpets, upholstery, leather, dashboard, door cards, glass and vents — using professional equipment including steam cleaners and hot water extractors to remove ingrained grime, bacteria and odours.",
      },
      {
        question: "Can interior detailing remove bad smells from a car?",
        answer:
          "Yes. Interior detailing addresses the source of odours rather than masking them. Hot water extraction removes moisture and bacteria from carpets and seats. Steam cleaning sanitises hard surfaces. Odour-eliminating treatments are applied where required. For severe smoke or pet odours, an ozone treatment may be recommended as an add-on.",
      },
    ],
    relatedAreas: ["urmston", "stretford", "sale", "eccles"],
    relatedServices: ["car-detailing", "deep-cleaning", "mobile-valeting"],
  },
  "exterior-detailing": {
    longDescription: [
      "Latin King Detailing's exterior detail takes the vehicle beyond a standard wash to deliver a fully decontaminated, polished and protected finish. The process begins with a foam-cannon pre-wash to loosen surface dirt before contact, followed by a safe two-bucket hand wash, iron fallout treatment, clay bar decontamination and a finishing polish.",
      "Protection is applied at the final stage — wax, carnauba sealant or a light ceramic topper depending on the package selected. The result is paintwork that is genuinely cleaner at a microscopic level, more glossy and significantly more resistant to soiling between washes.",
    ],
    includes: [
      "Foam cannon pre-wash",
      "Two-bucket safe wash method",
      "Wheel and arch cleaning",
      "Iron fallout remover treatment",
      "Clay bar decontamination",
      "Machine enhancement polish",
      "Wax or sealant protection",
      "Tyre dressing",
      "Exterior glass clean",
    ],
    notIncludes: [
      "Interior cleaning (available as add-on)",
      "Paint correction (available as upgrade)",
    ],
    faqs: [
      {
        question: "What is exterior car detailing?",
        answer:
          "Exterior car detailing goes beyond washing to include paint decontamination (iron fallout removal and clay bar treatment), machine polishing to enhance gloss, and durable wax, sealant or ceramic protection application. The result is cleaner, glossier and better-protected paintwork.",
      },
    ],
    relatedAreas: ["urmston", "stretford", "sale", "chorlton-cum-hardy"],
    relatedServices: ["paint-correction", "ceramic-coating", "mobile-valeting"],
  },
  "deep-cleaning": {
    longDescription: [
      "Latin King Detailing's deep cleaning package is our most comprehensive all-inclusive service — combining a full exterior detail, complete interior deep clean, engine bay tidy, glass treatment and finishing protection. It is designed for vehicles that need a total reset: pre-sale preparation, post-winter recovery, return from storage or simply a vehicle that has not received professional attention for an extended period.",
      "Every surface inside and outside the vehicle is addressed using the correct professional product for each material. The result is a vehicle that looks, smells and feels as close to new as its condition allows.",
    ],
    includes: [
      "Full exterior wash, decontamination and polish",
      "Wax or sealant protection",
      "Full interior hot water extraction",
      "Steam cleaning all surfaces",
      "Leather or fabric conditioning",
      "Engine bay tidy and degrease",
      "Full glass treatment inside and out",
      "Tyre dressing",
      "Odour elimination",
    ],
    notIncludes: [
      "Paint correction (multi-stage scratch removal) — available as upgrade",
      "Ceramic coating — available as upgrade",
    ],
    faqs: [
      {
        question: "What is included in a deep clean car service?",
        answer:
          "A deep car clean covers the complete interior and exterior of the vehicle — full exterior wash and decontamination, machine polish, interior hot water extraction, steam cleaning, engine bay tidy, full glass treatment and finishing protection. It is the most thorough single-visit service available.",
      },
    ],
    relatedAreas: ["urmston", "stretford", "sale", "altrincham"],
    relatedServices: ["car-detailing", "interior-detailing", "exterior-detailing"],
  },
  "engine-bay-cleaning": {
    longDescription: [
      "A clean engine bay is not just aesthetic — it makes fault diagnosis significantly easier, removes potentially flammable grease and oil accumulation, and preserves rubber hoses and plastic components that degrade under years of grime and heat cycling.",
      "Latin King Detailing cleans engine bays using a combination of degreaser and careful steam application, protecting sensitive electronic components throughout the process. The result is a bay that looks presentable and is significantly cleaner without any risk to modern engine management systems.",
    ],
    includes: [
      "Engine bay degreaser application",
      "Careful steam or low-pressure rinse",
      "Electronic component protection during process",
      "Plastic trim and rubber dressing",
    ],
    notIncludes: [
      "Mechanical repairs or fluid changes",
    ],
    faqs: [
      {
        question: "Is engine bay cleaning safe for modern cars?",
        answer:
          "Yes, when performed correctly. Latin King Detailing uses careful technique — protecting sensitive electronics, avoiding direct water pressure on connectors and modules, and using steam rather than high-pressure water where appropriate. Modern engines are built to tolerate moisture; the risk lies in using incorrect pressure or technique.",
      },
      {
        question: "Can you steam clean a car engine near me?",
        answer:
          "Yes. Latin King Detailing offers mobile engine bay steam cleaning across Urmston, Trafford and Greater Manchester. We bring everything needed to your location — no need to travel to a garage.",
      },
    ],
    relatedAreas: ["urmston", "stretford", "eccles", "salford"],
    relatedServices: ["car-detailing", "deep-cleaning", "exterior-detailing"],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BUSINESS.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const meta = SERVICE_META[slug];
  return {
    title: meta?.title ?? `${service.name} in Urmston & Manchester | Latin King Detailing`,
    description: meta?.description ?? `${service.tagline}. Professional mobile ${service.name.toLowerCase()} across Urmston, Trafford and Greater Manchester. From £${service.priceFrom}. Call 07482 225323.`,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[slug];
  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
    { name: service.name, url: `${BUSINESS.url}/services/${slug}` },
  ]);
  const faqSchema = content?.faqs ? buildFAQSchema(content.faqs) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">Mobile service</p>
              <h1 className="mb-5">{service.name}</h1>
              <p className="text-xl mb-3 font-semibold" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: "1.3rem" }}>
                {service.tagline}
              </p>

              {content?.longDescription.map((para, i) => (
                <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {para}
                </p>
              )) ?? (
                <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {service.description}
                </p>
              )}

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/contact" className="btn btn-primary">
                  {SERVICE_CTA[slug]?.heroBtn ?? "Book This Service"}
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary">
                  <Phone size={16} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                No payment required — we&apos;ll confirm your quote before any work starts.
              </p>
            </div>

            {/* Pricing card */}
            <div
              className="card gloss-sheen p-8 sticky top-24"
              style={{ background: "var(--color-base-900)" }}
            >
              <div className="mb-6">
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>Starting from</p>
                <div
                  className="text-5xl font-black"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 900, color: "white" }}
                >
                  £{service.priceFrom}
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <Clock size={13} />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <MapPin size={13} />
                    Mobile — we come to you
                  </div>
                </div>
              </div>

              {content?.includes && (
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                    What&apos;s included
                  </p>
                  <ul className="space-y-2">
                    {content.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.68)" }}>
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link href="/contact" className="btn btn-primary w-full justify-center">
                {SERVICE_CTA[slug]?.cardBtn ?? "Get Free Quote"}
              </Link>
              <p className="mt-3 text-xs text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
                No upfront payment · Fixed quote before we start
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {content?.faqs && content.faqs.length > 0 && (
        <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
          <div className="section-container max-w-3xl">
            <h2 className="mb-10">Common questions</h2>
            <div className="space-y-6">
              {content.faqs.map((faq, i) => (
                <div key={i} className="card p-6">
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.1rem" }}>
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related areas */}
      {content?.relatedAreas && (
        <section className="section-pad">
          <div className="section-container">
            <h2 className="mb-6 text-2xl">
              {service.name} across Greater Manchester
            </h2>
            <div className="flex flex-wrap gap-3">
              {content.relatedAreas.map((areaSlug) => {
                const area = BUSINESS.areas.find((a) => a.slug === areaSlug);
                if (!area) return null;
                return (
                  <Link
                    key={areaSlug}
                    href={`/areas/${areaSlug}`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                    style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)", color: "rgba(255,255,255,0.7)" }}
                  >
                    <MapPin size={13} style={{ color: "var(--color-accent-500)" }} />
                    {service.name} in {area.name}
                    <ArrowRight size={12} style={{ color: "rgba(255,255,255,0.5)" }} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <TestimonialsSection />
      <CTASection
        eyebrow="Book this service"
        title={SERVICE_CTA[slug]?.headline ?? `Book ${service.name} in Manchester`}
        description={SERVICE_CTA[slug]?.description ?? `Get a no-obligation quote for ${service.name.toLowerCase()} at your location. We serve Urmston, Trafford and across Greater Manchester.`}
        primaryCTA={SERVICE_CTA[slug]?.heroBtn ?? "Get My Free Quote"}
      />
    </>
  );
}
