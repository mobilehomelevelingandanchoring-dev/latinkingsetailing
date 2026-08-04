import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Latin King Detailing",
  description:
    "Privacy Policy for Latin King Detailing. Learn how we collect, use and protect your personal information in accordance with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Privacy Policy", url: `${BUSINESS.url}/privacy-policy` },
  ]);

  const lastUpdated = "1 August 2025";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="section-pad pt-32 md:pt-40">
        <div className="section-container max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
          />

          <h1 className="mb-3">Privacy Policy</h1>
          <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-10 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                1. Who we are
              </h2>
              <p>
                This website is operated by <strong>Latin King Detailing</strong>, a mobile car detailing
                business based at {BUSINESS.address.full}. We are the data controller for personal
                information collected through this website.
              </p>
              <p className="mt-3">
                You can contact us about data matters at:{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="underline"
                  style={{ color: "var(--color-accent-400)" }}
                >
                  {BUSINESS.email}
                </a>{" "}
                or by calling{" "}
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="underline"
                  style={{ color: "var(--color-accent-400)" }}
                >
                  {BUSINESS.phoneDisplay}
                </a>
                .
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                2. What information we collect
              </h2>
              <p>We collect the following types of personal information:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside" style={{ color: "rgba(255,255,255,0.68)" }}>
                <li>
                  <strong>Contact and booking enquiry data</strong>: name, phone number, email address,
                  vehicle details, preferred service, preferred date/time, and any notes you include when
                  submitting a booking enquiry or contact form.
                </li>
                <li>
                  <strong>Technical data</strong>: IP address, browser type, referring page, and pages
                  visited — collected automatically by our hosting provider (Vercel) for security and
                  performance purposes.
                </li>
                <li>
                  <strong>Communication data</strong>: any messages you send us by email, phone, WhatsApp
                  or through social media platforms.
                </li>
              </ul>
              <p className="mt-3">
                We do not collect payment card details directly. If payment processing is introduced in
                future, it will be handled by a PCI-DSS compliant third-party provider.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                3. How we use your information
              </h2>
              <p>We use your personal information to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside" style={{ color: "rgba(255,255,255,0.68)" }}>
                <li>Respond to booking enquiries and confirm service appointments.</li>
                <li>Communicate with you about your booking before, during and after the service.</li>
                <li>Maintain records of services provided for our business administration.</li>
                <li>Improve our website and services based on how visitors use them.</li>
                <li>Comply with any legal obligations we may have.</li>
              </ul>
              <p className="mt-3">
                We do not use your information for automated decision-making or profiling, and we do not
                send unsolicited marketing communications.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                4. Legal basis for processing
              </h2>
              <p>Under UK GDPR, we rely on the following lawful bases:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside" style={{ color: "rgba(255,255,255,0.68)" }}>
                <li>
                  <strong>Contract performance</strong>: processing your booking enquiry and delivering
                  the service you have requested.
                </li>
                <li>
                  <strong>Legitimate interests</strong>: improving our website experience, responding to
                  enquiries, and maintaining business records — where these interests are not overridden
                  by your rights.
                </li>
                <li>
                  <strong>Legal obligation</strong>: retaining certain records as required by law.
                </li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                5. How long we keep your data
              </h2>
              <p>
                We retain booking enquiry and customer records for up to 3 years after your last contact
                with us, after which they are securely deleted. Technical log data is typically retained
                for up to 90 days by our hosting provider. You can request deletion of your data at any
                time (see Section 7).
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                6. Who we share your data with
              </h2>
              <p>
                We do not sell or rent your personal data to third parties. We may share data with:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside" style={{ color: "rgba(255,255,255,0.68)" }}>
                <li>
                  <strong>Vercel</strong> (hosting provider) — for website delivery and security. Vercel
                  operates data centres in the EU and US with appropriate data transfer safeguards.
                </li>
                <li>
                  <strong>Supabase</strong> (database provider) — for storing booking enquiry data
                  securely. Supabase stores data in the EU.
                </li>
                <li>
                  <strong>Law enforcement or regulators</strong> — if required to do so by law.
                </li>
              </ul>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                7. Your rights under UK GDPR
              </h2>
              <p>You have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside" style={{ color: "rgba(255,255,255,0.68)" }}>
                <li><strong>Access</strong>: request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification</strong>: ask us to correct inaccurate data.</li>
                <li><strong>Erasure</strong>: ask us to delete your data where we no longer have a lawful basis to hold it.</li>
                <li><strong>Restriction</strong>: ask us to stop processing your data in certain circumstances.</li>
                <li><strong>Portability</strong>: receive your data in a structured, machine-readable format.</li>
                <li><strong>Object</strong>: object to processing based on legitimate interests.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="underline"
                  style={{ color: "var(--color-accent-400)" }}
                >
                  {BUSINESS.email}
                </a>
                . We will respond within 30 days.
              </p>
              <p className="mt-3">
                If you are unhappy with how we handle your data, you have the right to complain to the
                Information Commissioner&apos;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--color-accent-400)" }}
                >
                  ico.org.uk
                </a>
                .
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                8. Cookies
              </h2>
              <p>
                This website uses only essential cookies required for the site to function — for example,
                session security for the admin area. We do not use advertising cookies, tracking pixels,
                or third-party analytics cookies. No cookie consent banner is currently required as we do
                not place non-essential cookies.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                9. Security
              </h2>
              <p>
                We take reasonable technical measures to protect your data, including HTTPS encryption for
                all data in transit, security headers on our web server, and access controls for any
                stored data. No method of transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                10. Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated &ldquo;last updated&rdquo; date. We encourage you to review this
                page periodically.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 800, color: "#fff" }}
              >
                11. Contact us
              </h2>
              <p>
                For any questions about this Privacy Policy or your personal data, contact us:
              </p>
              <address className="mt-3 not-italic space-y-1" style={{ color: "rgba(255,255,255,0.68)" }}>
                <p><strong style={{ color: "#fff" }}>{BUSINESS.name}</strong></p>
                <p>{BUSINESS.address.full}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="underline"
                    style={{ color: "var(--color-accent-400)" }}
                  >
                    {BUSINESS.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="underline"
                    style={{ color: "var(--color-accent-400)" }}
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
              </address>
            </section>

          </div>

          <div className="mt-14">
            <Link href="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
