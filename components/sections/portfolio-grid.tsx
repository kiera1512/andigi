import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolioProjects } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface PortfolioGridProps {
  showAll?: boolean;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export function PortfolioGrid({ showAll = false, title, subtitle, limit }: PortfolioGridProps) {
  const projects = limit ? portfolioProjects.slice(0, limit) : portfolioProjects;

  return (
    <Section>
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="font-semibold">{title}</h2>}
            {subtitle && (
              <p className="mt-4 text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100} direction="up">
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block h-full"
              >
                <article className="h-full overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <Image
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {project.client}
                    </p>
                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                      {project.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
