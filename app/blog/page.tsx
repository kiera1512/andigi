import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tips, and stories about digital design, branding, and marketing from the Andigi team.",
};

// Placeholder blog posts until Supabase is connected
const blogPosts = [
  {
    id: "1",
    slug: "importance-of-branding",
    title: "The Importance of Consistent Branding in 2024",
    excerpt: "Why brand consistency matters more than ever in the digital age, and how to achieve it across all touchpoints.",
    category: "Branding",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishedAt: "2024-03-15",
  },
  {
    id: "2",
    slug: "web-design-trends",
    title: "Web Design Trends That Will Dominate This Year",
    excerpt: "From AI-powered interfaces to sustainable design, here are the trends shaping the future of web design.",
    category: "Web Design",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishedAt: "2024-03-10",
  },
  {
    id: "3",
    slug: "ecommerce-conversion",
    title: "10 Ways to Boost Your Ecommerce Conversion Rate",
    excerpt: "Practical strategies to turn more visitors into customers and increase your online store revenue.",
    category: "Ecommerce",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publishedAt: "2024-03-05",
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog"
        subtitle="Insights, tips, and stories from our team. We share what we learn about design, branding, and digital growth."
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="overflow-hidden border border-border transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
