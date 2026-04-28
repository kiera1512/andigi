import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaSection({
  title = "Ready to start your project?",
  subtitle = "Let's work together to create something extraordinary.",
  ctaLabel = "Get In Touch",
  ctaHref = "/contact",
}: CtaSectionProps) {
  return (
    <Section className="bg-foreground text-background">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-4 text-background/80">{subtitle}</p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
