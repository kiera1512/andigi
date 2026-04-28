import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { TeamGrid } from "@/components/sections/team-grid";
import { StatsSection } from "@/components/sections/stats-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Andigi - a digital agency crafting exceptional digital experiences since 2017.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Andigi"
        subtitle="We are a team of designers, developers, and strategists passionate about creating digital experiences that make a difference."
      />

      {/* Story Section */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-semibold">Our Story</h2>
              <p className="mt-6 text-muted-foreground">
                Founded in 2017 in Ho Chi Minh City, Andigi started with a simple
                belief: that thoughtful design and strategic thinking can transform
                businesses.
              </p>
              <p className="mt-4 text-muted-foreground">
                What began as a small team of three has grown into a full-service
                digital agency, but our core values remain the same. We believe in
                close collaboration, transparent communication, and delivering work
                that exceeds expectations.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, we partner with startups and established brands across
                Southeast Asia, helping them build meaningful digital presence that
                drives real business results.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Andigi office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-secondary">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold">Our Values</h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Quality Over Quantity</h3>
              <p className="mt-4 text-muted-foreground">
                We take on fewer projects to ensure each one receives the attention
                and dedication it deserves.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Honest Partnership</h3>
              <p className="mt-4 text-muted-foreground">
                We believe in transparent communication and treating every client
                as a true partner in the process.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Results Matter</h3>
              <p className="mt-4 text-muted-foreground">
                Beautiful design is meaningless without impact. We measure success
                by the results we deliver.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <TeamGrid />

      <StatsSection />

      <CtaSection
        title="Want to work with us?"
        subtitle="We are always looking for new challenges and interesting projects."
      />
    </>
  );
}
