import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <Button asChild size="lg">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
