import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { teamMembers } from "@/lib/data";

export function TeamGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-12 text-center">
          <h2 className="font-semibold">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground">
            The talented people behind our work.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.id} delay={index * 100} direction="up">
              <div className="group text-center">
                <div className="relative mx-auto aspect-square w-48 overflow-hidden bg-secondary">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
