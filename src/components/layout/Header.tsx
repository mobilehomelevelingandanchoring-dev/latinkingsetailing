"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/lib/business";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const SERVICE_LINKS = [
  { label: "Mobile Valeting", href: "/services/mobile-valeting" },
  { label: "Car Detailing", href: "/services/car-detailing" },
  { label: "Paint Correction", href: "/services/paint-correction" },
  { label: "Ceramic Coating", href: "/services/ceramic-coating" },
  { label: "PPF", href: "/services/paint-protection-film" },
  { label: "Interior Detailing", href: "/services/interior-detailing" },
  { label: "Exterior Detailing", href: "/services/exterior-detailing" },
  { label: "Machine Polishing", href: "/services/machine-polishing" },
  { label: "Deep Cleaning", href: "/services/deep-cleaning" },
  { label: "Engine Bay Cleaning", href: "/services/engine-bay-cleaning" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0b]/95 backdrop-blur-md border-b border-white/[0.08]"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo size="sm" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key="services" className="relative group">
                    <button
                      className={cn(
                        "nav-link flex items-center gap-1 px-3 py-2 rounded-md",
                        pathname.startsWith("/services") && "text-accent-500"
                      )}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                    >
                      Services
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-2 z-50"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <div
                            className="card p-2 grid grid-cols-2 gap-0.5 min-w-[340px]"
                            style={{ background: "var(--color-base-900)" }}
                          >
                            {SERVICE_LINKS.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="px-3 py-2.5 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
                              >
                                {s.label}
                              </Link>
                            ))}
                            <Link
                              href="/services"
                              className="col-span-2 px-3 py-2.5 mt-1 rounded-md text-sm font-semibold text-accent-400 hover:bg-accent-950/60 transition-colors border-t border-white/[0.06]"
                              style={{ color: "var(--color-accent-400)" }}
                            >
                              View all services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link px-3 py-2 rounded-md",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-white"
                      : ""
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} />
              {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-primary text-sm py-2.5 px-5">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 text-white/70 hover:text-white transition-colors rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-16 z-40 overflow-y-auto"
            style={{ background: "var(--color-base-950)" }}
          >
            <nav className="section-container py-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3.5 px-4 rounded-lg text-lg font-semibold text-white/80 hover:text-white hover:bg-white/[0.05] transition-colors border-b border-white/[0.05]"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700 }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="btn btn-secondary justify-center text-base"
                >
                  <Phone size={16} />
                  Call {BUSINESS.phoneDisplay}
                </a>
                <Link href="/contact" className="btn btn-primary justify-center text-base">
                  Get Free Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
