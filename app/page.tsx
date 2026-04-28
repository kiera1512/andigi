import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { AboutPreview } from "@/components/sections/about-preview";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero
        title="We craft digital experiences that drive results"
        subtitle="Andigi is a digital agency specializing in Web Design, Branding, Digital Marketing, and Ecommerce. We help ambitious brands stand out and grow."
        primaryCta={{ label: "View Our Work", href: "/portfolio" }}
        secondaryCta={{ label: "Get In Touch", href: "/contact" }}
      />

      <ServicesGrid
        title="Our Services"
        subtitle="We offer end-to-end digital solutions to help your business thrive online."
      />

      <PortfolioGrid
        title="Featured Work"
        subtitle="A selection of projects we are proud of."
        limit={3}
      />

      <AboutPreview />

      <CtaSection />
    </>
  );
}
