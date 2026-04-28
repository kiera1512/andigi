import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <div className="mb-12 text-center">
          <h2 className="font-semibold">How We Work</h2>
          <p className="mt-4 text-muted-foreground">
            A proven process that delivers consistent results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line for desktop */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-full top-8 hidden h-px w-full bg-border lg:block" />
              )}
              
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-16 w-16 items-center justify-center bg-foreground text-2xl font-bold text-background">
                  {step.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
