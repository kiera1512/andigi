import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects in Web Design, Branding, Digital Marketing, and Ecommerce.",
};

export default function PortfolioPage() {
  return (
    <>
      <Hero
        title="Our Work"
        subtitle="A selection of projects that showcase our expertise and creative approach. Each project represents a unique challenge and solution."
      />

      <PortfolioGrid showAll />

      <CtaSection
        title="Have a project in mind?"
        subtitle="Let's create something amazing together."
      />
    </>
  );
}
