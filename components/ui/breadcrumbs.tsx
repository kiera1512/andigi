"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .slice(0, 2); // Only show up to 2 levels

  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  if (segments.length === 0) return breadcrumbs;

  if (segments[0] === "blog" || segments[0] === "portfolio") {
    breadcrumbs.push({
      label: segments[0].charAt(0).toUpperCase() + segments[0].slice(1),
      href: `/${segments[0]}`,
    });

    if (segments[1]) {
      const label = segments[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      breadcrumbs.push({ label, href: undefined });
    }
  }

  return breadcrumbs;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const pathname = usePathname();
  const breadcrumbs = items || generateBreadcrumbsFromPath(pathname);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav
      className={cn("flex items-center gap-2 text-sm", className)}
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-foreground font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
