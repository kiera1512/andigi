import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <Section className="bg-secondary">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Andigi team at work"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-semibold">
              We are a team of digital craftspeople
            </h2>
            <p className="mt-6 text-muted-foreground">
              At Andigi, we believe in the power of thoughtful design and
              strategic thinking. We partner with ambitious brands to create
              digital experiences that matter.
            </p>
            <p className="mt-4 text-muted-foreground">
              From startups to established enterprises, we bring the same level
              of dedication, creativity, and attention to detail to every
              project.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild variant="outline">
                <Link href="/about">
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
