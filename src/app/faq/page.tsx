import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { buildFAQSchema } from "@/lib/schema";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Car Detailing FAQ — Common Questions Answered | Latin King Detailing",
  description:
    "Frequently asked questions about mobile car detailing, ceramic coating, paint correction and valeting in Urmston and Greater Manchester. Answered directly and clearly.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    category: "General",
    items: [
      {
        question: "What is mobile car detailing?",
        answer:
          "Mobile car detailing is a professional cleaning, correction and protection service for vehicles where the detailer comes to your location — home, workplace or any suitable outdoor space — rather than requiring you to visit a fixed premises. Latin King Detailing arrives fully equipped with its own water, power and all necessary products.",
      },
      {
        question: "What areas do you cover?",
        answer: `Latin King Detailing is based in Urmston (M41) and covers Urmston, Flixton, Stretford, Davyhulme, Sale, Old Trafford, Chorlton-cum-Hardy, Eccles, Salford, Altrincham, Carrington, Partington, Irlam, Timperley, Didsbury, Manchester and surrounding Greater Manchester postcodes. Message us with your postcode to confirm availability.`,
      },
      {
        question: "How do I book?",
        answer:
          "The easiest way is to use our contact form or call 07482 225323. Tell us your location, vehicle make and model, and the service you're interested in. We'll provide a fixed quote and agree a convenient time.",
      },
      {
        question: "Do I need to be home while the car is being detailed?",
        answer:
          "No. As long as the vehicle is accessible and parked safely, you don't need to be present throughout. Many customers leave us working while they get on with their day.",
      },
      {
        question: "What if it rains on my booking day?",
        answer:
          "Light rain generally isn't a problem for valeting, but paint correction, ceramic coating application and wax/sealant work requires dry conditions. If the forecast is unsuitable for your specific service, we'll rearrange to a better day without any penalty.",
      },
      {
        question: "Do you need power or water at my location?",
        answer:
          "No. Latin King Detailing is entirely self-sufficient — we carry our own water supply, generator and all professional-grade products. The only thing you need to provide is a safe outdoor space to work around the vehicle.",
      },
    ],
  },
  {
    category: "Car Detailing",
    items: [
      {
        question: "What is the difference between car detailing and car valeting?",
        answer:
          "A valet focuses on cleaning — washing and vacuuming to remove everyday dirt. Car detailing goes significantly further: it decontaminates the paint using iron fallout remover and clay bar, corrects surface defects through machine polishing, and applies durable protection such as ceramic coating or sealant. Detailing produces a higher-quality, longer-lasting result.",
      },
      {
        question: "How often should I get my car detailed?",
        answer:
          "For most vehicles, a full detail once or twice a year maintains excellent condition when supported by regular maintenance washes. Cars driven frequently, parked outdoors or used in harsh conditions benefit from more frequent attention. A ceramic-coated car requires significantly less upkeep between details.",
      },
      {
        question: "Can I get car detailing in winter in Manchester?",
        answer:
          "Yes — many services including interior detailing, engine bay cleaning and maintenance valets are suitable year-round. Paint correction and ceramic coating application require dry, mild conditions. In winter we work around suitable weather windows; if conditions are unfavourable we rearrange at no cost.",
      },
      {
        question: "Do you detail vans, SUVs and large vehicles in Manchester?",
        answer:
          "Yes. Latin King Detailing works on all vehicle types — hatchbacks, saloons, estates, SUVs, MPVs, vans, luxury and prestige vehicles, and exotic sports cars. Pricing for larger vehicles is adjusted to reflect the additional time required. Contact us with your vehicle details for an accurate quote.",
      },
      {
        question: "Do you offer pre-sale car preparation?",
        answer:
          "Yes. A pre-sale detail is one of the most effective ways to maximise your car's resale value. We offer tailored pre-sale packages combining interior deep clean, exterior polish and protection. A professionally detailed car presents better to buyers and typically achieves a higher sale price.",
      },
    ],
  },
  {
    category: "Valeting",
    items: [
      {
        question: "What is the difference between a mini valet and a full valet?",
        answer:
          "A mini valet covers the core cleaning tasks: exterior wash, wheel clean, windows, interior vacuum and wipe-down. A full valet adds hand polish, deep cleaning of door shuts, boot area, seat shampoo or leather conditioning, and comprehensive trim and glass work inside.",
      },
      {
        question: "What is a maintenance valet?",
        answer:
          "A maintenance valet is a regular light-clean service designed to keep a detailed or ceramic-coated car in top condition between full details. It typically includes a safe foam-cannon wash, wheel clean, glass clean, interior wipe-down and a spray sealant or ceramic topper to refresh paint protection.",
      },
      {
        question: "Do you offer hand car wash services in Urmston?",
        answer:
          "Yes. Our mobile valeting service is a premium alternative to hand car wash facilities. We use the correct two-bucket or foam-cannon method to avoid swirl marks, and we come to you rather than requiring you to travel.",
      },
      {
        question: "Do you offer car valeting near M41 9PQ?",
        answer:
          "Yes. Latin King Detailing is based on Flixton Road in Urmston, covering all M41 postcodes including M41 9PQ and surrounding streets. We come to your door — call 07482 225323 or message to book.",
      },
    ],
  },
  {
    category: "Ceramic Coating",
    items: [
      {
        question: "What is a ceramic coating?",
        answer:
          "Ceramic coating is a liquid polymer applied to a vehicle's paintwork that bonds permanently to the clear coat. It creates a hydrophobic, UV-resistant, scratch-resistant surface that repels water, road grime and contaminants more effectively than wax or sealant. A professional ceramic coating from Latin King Detailing lasts up to 2–3 years.",
      },
      {
        question: "How long does ceramic coating last?",
        answer:
          "A professionally applied ceramic coating lasts 2–3 years with correct maintenance — specifically, using touchless or two-bucket hand wash technique and avoiding automated brush car washes. Premium coatings with annual maintenance top-ups can last 5+ years.",
      },
      {
        question: "Is ceramic coating worth it in Manchester?",
        answer:
          "Yes — particularly in Manchester's climate. The city's frequent rainfall and road salt in winter make a hydrophobic ceramic coating especially valuable: water and grime sheet off the paint rather than bonding to it. A professionally applied coating keeps your car visibly cleaner with far less effort for 2–3 years, making it highly cost-effective compared to repeated wax applications.",
      },
      {
        question: "How much does ceramic coating cost in Manchester?",
        answer:
          "Professional ceramic coating in Manchester starts from £350 at Latin King Detailing. The exact price depends on vehicle size and paint condition. Paint correction is recommended before coating application to ensure the best possible result — this is always included in our coating packages.",
      },
      {
        question: "What is the difference between ceramic coating and wax?",
        answer:
          "Wax sits on the surface and typically lasts 2–4 months. Ceramic coating bonds at a molecular level to the clear coat and lasts 2–3 years. Ceramic coating is significantly more hydrophobic, more heat and UV resistant, and provides better protection against light chemical damage.",
      },
      {
        question: "Does ceramic coating prevent scratches?",
        answer:
          "Ceramic coating adds scratch resistance to the paint surface but does not make it scratch-proof. It significantly reduces the likelihood of light swirl marks from washing and minor surface contact, but deep scratches and stone chips can still penetrate through.",
      },
    ],
  },
  {
    category: "Paint Correction",
    items: [
      {
        question: "What defects can paint correction remove?",
        answer:
          "Paint correction removes defects that sit within the clear coat layer: swirl marks from automated car washes or incorrect washing, light scratches, water spots, bird dropping etching, oxidation and haze. It cannot remove deep scratches or stone chips that penetrate to the base coat or primer.",
      },
      {
        question: "What is the difference between paint correction and machine polishing?",
        answer:
          "Machine polishing is a broad term for using a powered polishing machine. Paint correction is a specific, multi-stage machine polishing process aimed at removing significant defects like swirl marks, scratches and oxidation from the clear coat. Correction typically uses more aggressive compounds and more passes than a standard enhancement polish.",
      },
      {
        question: "How do I know if my car needs paint correction?",
        answer:
          "Look at your paintwork under direct sunlight or bright artificial light from a low angle. If you see circular swirl marks, fine scratches, haze or dull areas that don't clean off, your paint has clear coat defects that correction can remove. Common causes are automated car washes and incorrect hand washing technique.",
      },
      {
        question: "Will paint correction damage my car's paint?",
        answer:
          "When performed by a trained professional using the correct machine, pad and compound combination for the specific paint, correction removes a controlled and minimal amount of clear coat. Modern clear coat panels are typically 50–100 microns thick; a one-stage correction removes approximately 1–3 microns. Latin King Detailing measures paint depth before starting to ensure correction is performed safely.",
      },
    ],
  },
  {
    category: "Pricing & Booking",
    items: [
      {
        question: "How much does mobile car valeting in Manchester cost?",
        answer:
          "A mobile mini valet starts from £40. A full valet starts from £80–£100 depending on vehicle size. Full car detailing packages start from £120. Paint correction starts from £200. Ceramic coating packages start from £350. All prices are confirmed as a fixed quote before any work begins.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Payment is due on completion of the service. We accept bank transfer and cash. For large packages such as full paint correction with ceramic coating, a deposit may be requested at booking.",
      },
      {
        question: "What vehicle types do you work on?",
        answer:
          "Latin King Detailing works on all vehicle types — hatchbacks, saloons, estates, SUVs, MPVs, luxury and prestige vehicles, commercial vans and motorbikes. We have experience with everyday cars through to exotic vehicles including the Ferrari Purosangue.",
      },
    ],
  },
];

export default function FAQPage() {
  const flatFaqs = FAQS.flatMap((cat) =>
    cat.items.map((item) => ({ question: item.question, answer: item.answer }))
  );
  const faqSchema = buildFAQSchema(flatFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40">
        <div className="section-container">
          <p className="eyebrow">Got a question?</p>
          <h1 className="mb-5">
            Frequently asked{" "}
            <span className="gradient-text-red">questions</span>
          </h1>
          <p className="text-lg mb-12" style={{ color: "rgba(255,255,255,0.62)", maxWidth: "52ch" }}>
            Everything you need to know about mobile car detailing, ceramic coating, paint correction and booking with Latin King Detailing.
          </p>

          {FAQS.map((category) => (
            <div key={category.category} className="mb-14">
              <h2
                className="mb-6 pb-4 border-b"
                style={{
                  borderColor: "var(--color-border)",
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 800,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                }}
              >
                {category.category}
              </h2>
              <div className="space-y-5">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="card p-7"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.1rem" }}
                      itemProp="name"
                    >
                      {item.question}
                    </h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                        itemProp="text"
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div
            className="p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{ background: "var(--color-base-900)", border: "1px solid var(--color-border)" }}
          >
            <div className="flex-1">
              <p className="font-bold text-white text-lg mb-1">Still have a question?</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                Call or message us directly — we&apos;re happy to answer anything about your specific vehicle and situation.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary whitespace-nowrap">
                Call {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="btn btn-primary whitespace-nowrap">
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
