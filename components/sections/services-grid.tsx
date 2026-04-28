import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface ServicesGridProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
}

export function ServicesGrid({ showAll = false, title, subtitle }: ServicesGridProps) {
  return (
    <Section className="bg-secondary">
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="font-semibold">{title}</h2>}
            {subtitle && (
              <p className="mt-4 text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="group transition-shadow hover:shadow-lg">
                <CardHeader className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-foreground text-background">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {showAll ? service.fullDesc : service.shortDesc}
                  </CardDescription>
                  {showAll && (
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
