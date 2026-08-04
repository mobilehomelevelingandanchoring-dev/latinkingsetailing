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
  title: "Car Detailing Manchester & Urmston | Ceramic Coating, Paint Correction & Mobile Valeting | Latin King Detailing",
  description:
    "Professional mobile car detailing in Manchester & Urmston — ceramic coating, paint correction, machine polishing, interior detailing & car valeting at your door. 5★ rated. From £40. Call 07482 225323.",
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
