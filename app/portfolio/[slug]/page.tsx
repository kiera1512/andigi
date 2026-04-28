import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { portfolioProjects } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.excerpt,
  };
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = portfolioProjects.findIndex((p) => p.slug === slug);
  const nextProject = portfolioProjects[currentIndex + 1] || portfolioProjects[0];
  const prevProject = portfolioProjects[currentIndex - 1] || portfolioProjects[portfolioProjects.length - 1];

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: project.title },
            ]}
            className="mb-8"
          />

          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="outline">{project.category}</Badge>
            <span className="text-sm text-muted-foreground">{project.client}</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {project.excerpt}
          </p>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <Container>
          <div className="relative aspect-video overflow-hidden bg-secondary">
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="mt-4 text-muted-foreground">{project.description}</p>

              <h3 className="mt-10 text-xl font-semibold">The Challenge</h3>
              <p className="mt-4 text-muted-foreground">{project.challenge}</p>

              <h3 className="mt-10 text-xl font-semibold">The Solution</h3>
              <p className="mt-4 text-muted-foreground">{project.solution}</p>
            </div>

            <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h3 className="text-xl font-semibold">Results</h3>
              <p className="mt-4 text-muted-foreground">{project.results}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section className="bg-secondary">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold">Gallery</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section>
        <Container>
          <div className="flex flex-col justify-between gap-6 border-t border-border pt-8 sm:flex-row">
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group flex items-center gap-4"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <div>
                <div className="text-sm text-muted-foreground">Previous</div>
                <div className="font-medium group-hover:text-primary">
                  {prevProject.title}
                </div>
              </div>
            </Link>

            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex items-center gap-4 text-right sm:flex-row-reverse"
            >
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div>
                <div className="text-sm text-muted-foreground">Next</div>
                <div className="font-medium group-hover:text-primary">
                  {nextProject.title}
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
