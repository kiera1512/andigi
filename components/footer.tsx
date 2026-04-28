import Link from "next/link";
import { Container } from "@/components/ui/container";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Design", href: "/services#web-design" },
    { name: "Branding", href: "/services#branding" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
    { name: "Ecommerce", href: "/services#ecommerce" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Andigi
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              We craft digital experiences that drive results. Your partner in
              Web Design, Branding, and Digital Growth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>hello@andigi.agency</li>
              <li>Ho Chi Minh City, Vietnam</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Andigi. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
