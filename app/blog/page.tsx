import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BlogFilter } from "@/components/blog/blog-filter";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tips, and stories about digital design, branding, and marketing from the Andigi team.",
};

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
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
            <BlogFilter posts={blogPosts} />
          )}
        </Container>
      </Section>
    </>
  );
}
