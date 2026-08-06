import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";
import { BUSINESS } from "@/lib/business";

const SERVICE_LINKS = [
  { label: "Mobile Valeting", href: "/services/mobile-valeting" },
  { label: "Car Detailing", href: "/services/car-detailing" },
  { label: "Paint Correction", href: "/services/paint-correction" },
  { label: "Ceramic Coating", href: "/services/ceramic-coating" },
{ label: "Machine Polishing", href: "/services/machine-polishing" },
  { label: "Interior Detailing", href: "/services/interior-detailing" },
  { label: "Exterior Detailing", href: "/services/exterior-detailing" },
  { label: "Deep Cleaning", href: "/services/deep-cleaning" },
  { label: "Engine Bay Cleaning", href: "/services/engine-bay-cleaning" },
];

const AREA_LINKS = [
  { label: "Urmston", href: "/areas/urmston" },
  { label: "Stretford", href: "/areas/stretford" },
  { label: "Sale", href: "/areas/sale" },
  { label: "Altrincham", href: "/areas/altrincham" },
  { label: "Chorlton", href: "/areas/chorlton-cum-hardy" },
  { label: "Salford", href: "/areas/salford" },
  { label: "Eccles", href: "/areas/eccles" },
  { label: "Didsbury", href: "/areas/didsbury" },
  { label: "All areas →", href: "/areas", isAccent: true },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "var(--color-border)", background: "var(--color-base-900)" }}
    >
      {/* Top section */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo size="md" />
            </div>
            <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
              Premium mobile car detailing, ceramic coating and paint correction across Urmston and Greater Manchester.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
              Trusted mobile car wash and valet alternative for Urmston, Trafford and beyond — we come to you.
            </p>
            <div className="flex gap-3">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center footer-link transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center footer-link transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={BUSINESS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center footer-link transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-barlow)", fontWeight: 600 }}>
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-barlow)", fontWeight: 600 }}>
              Areas We Cover
            </h3>
            <ul className="space-y-2">
              {AREA_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={link.isAccent ? "footer-link-accent text-sm font-semibold" : "footer-link text-sm"}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-barlow)", fontWeight: 600 }}>
              Contact
            </h3>
            <ul className="space-y-4 mb-6">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 text-sm footer-link min-h-[44px]">
                  <Phone size={14} className="flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-sm footer-link min-h-[44px]">
                  <Mail size={14} className="flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                  <span className="break-all">{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-accent-500)" }} />
                  <address className="not-italic">
                    {BUSINESS.address.street},<br />
                    {BUSINESS.address.city}, {BUSINESS.address.postcode}
                  </address>
                </div>
              </li>
            </ul>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. Mobile car detailing in Urmston, Manchester.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              {BUSINESS.address.full}
            </p>
            <Link
              href="/admin/login"
              className="text-xs text-white/20 hover:text-white/45 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
