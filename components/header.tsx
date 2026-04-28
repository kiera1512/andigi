"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Detect scroll for header shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 h-20 border-b border-border bg-background transition-shadow duration-200",
          scrolled && "shadow-sm"
        )}
      >
        <Container className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            Andigi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="mt-0.5 block h-px w-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-primary md:hidden"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={cn(
                "absolute transition-all duration-200",
                mobileMenuOpen ? "rotate-90 opacity-100" : "rotate-0 opacity-0"
              )}
            >
              <X className="h-6 w-6" />
            </span>
            <span
              className={cn(
                "absolute transition-all duration-200",
                mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              )}
            >
              <Menu className="h-6 w-6" />
            </span>
          </button>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "transition-opacity duration-300",
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/20"
          onClick={toggleMenu}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <div
          className={cn(
            "absolute right-0 top-20 h-[calc(100vh-5rem)] w-full max-w-sm border-l border-border bg-background",
            "flex flex-col",
            "transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Nav Links */}
          <nav className="flex flex-col p-8" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center justify-between border-b border-border py-5",
                  "text-lg font-medium transition-colors",
                  "transition-all duration-200",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(16px)",
                }}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span>{item.name}</span>
                <span
                  className={cn(
                    "h-px w-6 bg-current transition-all duration-200",
                    "group-hover:w-10",
                    isActive(item.href) && "w-10"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div
            className={cn(
              "mt-auto p-8",
              "transition-all duration-300",
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: mobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button asChild size="lg" className="w-full">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              hello@andigi.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
