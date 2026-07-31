import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { HomeFAQSection } from "@/components/sections/HomeFAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";

export const metadata: Metadata = {
  title: "Mobile Car Wash, Valet & Detailing Urmston | Latin King Detailing",
  description:
    "5★ rated mobile car wash, valeting, paint correction & ceramic coating in Urmston, Manchester. We come to you — hand car wash quality, showroom-grade results. Covering Trafford, Sale, Altrincham & across Greater Manchester.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesGrid limit={6} />
      <GalleryPreview />
      <TestimonialsSection />
      <AreasSection />
      <HomeFAQSection />
      <CTASection />
    </>
  );
}
