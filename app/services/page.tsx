import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services - Andigi",
  description: "Web Design, Branding, Digital Marketing, and Ecommerce solutions. We help businesses grow with strategic digital services tailored to your needs.",
  keywords: ["web design", "branding", "digital marketing", "ecommerce", "agency"],
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="End-to-end digital solutions tailored to your business needs. We combine strategy, design, and technology to deliver results."
      />

      <ServicesGrid
        showAll
        title="What We Do"
        subtitle="From concept to launch, we handle every aspect of your digital presence."
      />

      <ProcessSection />

      <CtaSection
        title="Let's discuss your project"
        subtitle="Ready to take your digital presence to the next level? We'd love to hear from you."
      />
    </>
  );
}
