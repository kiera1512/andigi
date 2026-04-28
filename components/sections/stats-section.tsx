import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <Section className="bg-foreground text-background">
      <Container>
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-bold">{stat.value}</div>
              <div className="mt-2 text-background/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
