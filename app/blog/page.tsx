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

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featured_image: string | null;
  published_at: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/blog`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      console.error("Failed to fetch blog posts");
      return [];
    }

    const { data } = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <Hero
        title="Blog"
        subtitle="Insights, tips, and stories from our team. We share what we learn about design, branding, and digital growth."
      />

      <Section>
        <Container>
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts published yet. Check back soon!</p>
            </div>
          ) : (
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
                        src={post.featured_image || "/placeholder.svg?height=400&width=600"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(post.published_at)}
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
          )}
        </Container>
      </Section>
    </>
  );
}
