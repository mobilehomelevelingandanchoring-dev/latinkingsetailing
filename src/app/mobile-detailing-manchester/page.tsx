import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle, Star, ArrowRight, Truck } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildLocalBusinessSchema, buildBreadcrumbSchema, buildFAQSchema, buildServiceLocationSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Manchester | We Come to You | Latin King Detailing",
  description:
    "Mobile car detailing in Manchester — we bring everything to your door. No garage visit needed. Ceramic coating, paint correction, valeting & interior detailing across Greater Manchester. 5★ rated. From £40. Call 07482 225323.",
  alternates: { canonical: "/mobile-detailing-manchester" },
  openGraph: {
    title: "Mobile Car Detailing Manchester | Latin King Detailing",
    description:
      "We come to you — own water, power and products. Ceramic coating, paint correction & valeting across Greater Manchester. 5★ rated. From £40.",
    type: "website",
    url: `${BUSINESS.url}/mobile-detailing-manchester`,
  },
};

const WHY_MOBILE = [
  {
    title: "No travel, no waiting",
    desc: "We come to you — at home, at work or any convenient outdoor location. No drop-off, no collection, no queue.",
  },
  {
    title: "Fully self-sufficient",
    desc: "We arrive with our own water supply, generator and all professional-grade products. You don't need to provide anything.",
  },
  {
    title: "Professional-grade, not forecourt-grade",
    desc: "Every job uses correct technique — foam-cannon pre-wash, two-bucket method, pH-neutral shampoos and dedicated interior products.",
  },
  {
    title: "Fixed price confirmed before we start",
    desc: "We quote based on your specific vehicle and service requirements. No surprises when the job is done.",
  },
  {
    title: "All vehicle types",
    desc: "Hatchbacks, SUVs, vans, prestige cars — we bring the right products and equipment for every type of vehicle.",
  },
  {
    title: "24/7 availability",
    desc: "Call or message any time to arrange a slot. We offer same-day and next-day appointments across Greater Manchester.",
  },
];

const SERVICES = [
  { name: "Mobile Mini Valet", href: "/services/mobile-valeting", price: 40, desc: "Exterior wash, wheel clean, interior vacuum & wipe-down. 1.5–2 hours." },
  { name: "Mobile Full Valet", href: "/services/mobile-valeting", price: 80, desc: "Full interior and exterior clean, hand polish, door shuts and boot. 2.5–3.5 hours." },
  { name: "Mobile Car Detail", href: "/services/car-detailing", price: 120, desc: "Full decontamination, machine polish, protection and interior deep clean. 4–8 hours." },
  { name: "Mobile Ceramic Coating", href: "/ceramic-coating-manchester", price: 350, desc: "SiO₂ coating lasting 2–3 years. Full paint prep always included. 1–2 days." },
  { name: "Mobile Paint Correction", href: "/services/paint-correction", price: 200, desc: "Machine removal of swirl marks, scratches & oxidation. 6–12 hours." },
  { name: "Mobile Interior Detail", href: "/services/interior-detailing", price: 80, desc: "Steam clean, hot water extraction, odour elimination. 2–4 hours." },
];

const FAQS = [
  {
    question: "Do you offer mobile car detailing in Manchester?",
    answer:
      "Yes. Latin King Detailing is a fully mobile car detailing service operating across Greater Manchester. We come to your home, workplace or any suitable outdoor location — bringing our own water, power and all professional-grade products. There is no need to travel to a premises.",
  },
  {
    question: "What does mobile car detailing include?",
    answer:
      "Mobile car detailing from Latin King Detailing covers the full range of professional detailing services — from mobile mini valets and full valets through to paint correction, ceramic coating and full interior deep cleans. We arrive fully self-sufficient and perform the same high-quality work at your location as any fixed-premises detailer.",
  },
  {
    question: "Do you need water or electricity at my location?",
    answer:
      "No. Latin King Detailing arrives entirely self-sufficient with our own water supply and generator. The only requirement is a safe outdoor space to work around the vehicle. This makes our mobile service suitable for any home, street parking, car park or workplace.",
  },
  {
    question: "How much does mobile car detailing cost in Manchester?",
    answer:
      "Mobile mini valeting in Manchester starts from £40. A mobile full valet starts from £80. Full car detailing packages start from £120. Paint correction from £200. Ceramic coating from £250. All prices are fixed and confirmed before any work begins.",
  },
  {
    question: "Is mobile car detailing as good as a garage service?",
    answer:
      "Yes — and in many cases better. Latin King Detailing uses the same professional-grade products, machines and techniques as any fixed-premises detailer. The only difference is that we work at your location. Many customers find that the personal, dedicated service from a mobile detailer — where your vehicle receives full individual attention — produces better results than a high-volume garage.",
  },
  {
    question: "What areas of Manchester do you cover for mobile detailing?",
    answer:
      "Latin King Detailing covers the full Greater Manchester area from our Urmston base — including Manchester city, Stretford, Sale, Didsbury, Salford, Eccles, Altrincham, Chorlton, Old Trafford, Partington and Timperley. Message us your postcode to confirm availability.",
  },
];

export default function MobileDetailingManchesterPage() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Car Detailing Manchester", url: `${BUSINESS.url}/car-detailing-manchester` },
    { name: "Mobile Detailing Manchester", url: `${BUSINESS.url}/mobile-detailing-manchester` },
  ]);
  const faqSchema = buildFAQSchema(FAQS);
  const serviceSchema = buildServiceLocationSchema({
    serviceName: "Mobile Car Detailing",
    serviceSlug: "mobile-detailing",
    serviceDescription:
      "Fully mobile car detailing in Manchester — we come to you with own water, power and professional products. Ceramic coating, paint correction, valeting and interior detailing at your door.",
    priceFrom: 40,
    locationName: "Manchester",
    locationSlug: "manchester",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section-pad pt-32 md:pt-40" style={{ background: "var(--color-base-950)" }}>
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Car Detailing Manchester", href: "/car-detailing-manchester" },
              { label: "Mobile Detailing Manchester" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow">
                <Truck size={12} aria-hidden="true" />
                We come to you — Greater Manchester
              </p>
              <h1 className="mb-5">
                Mobile Car Detailing{" "}
                <span className="gradient-text-red">Manchester</span>
              </h1>
              <p
                className="text-xl mb-4"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
              >
                Professional detailing at your door — no garage visit, no travel, no queue.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                Latin King Detailing is Manchester&apos;s mobile car detailing service — we bring everything to you. Our fully equipped mobile setup includes our own water supply, generator and a complete range of professional-grade products. You get showroom-quality detailing at your home, workplace or any convenient outdoor location.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
              >
                From a quick mobile mini valet to a multi-stage paint correction and ceramic coating — every service is available at your door across Greater Manchester. Based in Urmston, we cover the full region with same-day and next-day appointments available.
              </p>

              <div className="flex flex-wrap gap-5 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="currentColor" style={{ color: "var(--color-accent-500)" }} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white">5.0</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                    ({BUSINESS.rating.ratingCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <MapPin size={14} style={{ color: "var(--color-accent-500)" }} />
                  Own water &amp; power — no access needed
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Book Mobile Detailing
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-secondary">
                  <Phone size={16} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Services card */}
            <div className="card p-7" style={{ background: "var(--color-base-900)" }}>
              <h2
                className="mb-5"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.3rem" }}
              >
                Mobile services in Manchester
              </h2>
              <div className="space-y-4">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.name}
                    href={svc.href}
                    className="block group p-4 rounded-xl transition-all"
                    style={{ background: "var(--color-base-800)", border: "1px solid var(--color-border)" }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3
                        className="text-sm font-bold text-white group-hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800 }}
                      >
                        {svc.name}
                      </h3>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <span className="text-sm font-semibold" style={{ color: "var(--color-accent-500)" }}>
                          From £{svc.price}
                        </span>
                        <ArrowRight size={11} style={{ color: "rgba(255,255,255,0.35)" }} />
                      </div>
                    </div>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {svc.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why mobile */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container">
          <h2 className="mb-3">Why choose a mobile detailing service in Manchester?</h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}>
            Mobile detailing isn&apos;t a compromise — it&apos;s a better experience than the alternative.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_MOBILE.map((item) => (
              <div key={item.title} className="card p-6" style={{ background: "var(--color-base-800)" }}>
                <CheckCircle size={20} className="mb-3" style={{ color: "var(--color-accent-500)" }} />
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1rem" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="section-container max-w-3xl">
          <h2 className="mb-8">Mobile car detailing Manchester — common questions</h2>
          <div className="space-y-5">
            {FAQS.map((faq, i) => (
              <div key={i} className="card p-6">
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, fontSize: "1.05rem" }}
                >
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

      {/* Related */}
      <section className="section-pad" style={{ background: "var(--color-base-900)" }}>
        <div className="section-container">
          <h2 className="mb-6 text-2xl">Related pages</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/car-detailing-manchester" className="btn btn-secondary text-sm">
              Car Detailing Manchester
            </Link>
            <Link href="/ceramic-coating-manchester" className="btn btn-secondary text-sm">
              Ceramic Coating Manchester
            </Link>
            <Link href="/services/mobile-valeting" className="btn btn-secondary text-sm">
              Mobile Valeting Service
            </Link>
            <Link href="/blog/mobile-detailing-vs-car-wash" className="btn btn-secondary text-sm">
              Mobile Detailing vs Car Wash
            </Link>
            <Link href="/pricing" className="btn btn-secondary text-sm">
              View All Prices
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection
        eyebrow="Mobile Car Detailing — Greater Manchester"
        title="Book Mobile Detailing in Manchester Today"
        description="We come to your door — fully equipped with own water, power and professional products. Fixed quote confirmed before we start. Same-day and next-day slots available."
        primaryCTA="Book Mobile Detailing"
      />
    </>
  );
}
