import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Andigi",
  description: "Get in touch with Andigi. We would love to hear about your project. Contact us to start your digital transformation.",
  keywords: ["contact", "inquiry", "quote", "digital services"],
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="Have a project in mind? We would love to hear from you. Fill out the form below and we will get back to you within 24 hours."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a 
                      href="mailto:hello@andigi.agency" 
                      className="text-muted-foreground hover:text-foreground"
                    >
                      hello@andigi.agency
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Office</div>
                    <p className="text-muted-foreground">
                      Ho Chi Minh City, Vietnam
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium">Working Hours</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)
                </p>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
