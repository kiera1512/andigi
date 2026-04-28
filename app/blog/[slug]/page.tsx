import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Placeholder blog posts until Supabase is connected
const blogPosts = [
  {
    id: "1",
    slug: "importance-of-branding",
    title: "The Importance of Consistent Branding in 2024",
    excerpt: "Why brand consistency matters more than ever in the digital age, and how to achieve it across all touchpoints.",
    content: `
Brand consistency is more than just using the same logo everywhere. It's about creating a cohesive experience that builds trust and recognition with your audience.

## Why Consistency Matters

In today's crowded digital landscape, consumers are bombarded with thousands of brand messages daily. A consistent brand helps you cut through the noise and create lasting impressions.

### Key Benefits

1. **Builds Trust**: When your brand looks and feels the same everywhere, it signals professionalism and reliability.

2. **Increases Recognition**: Consistent visual elements make your brand instantly recognizable.

3. **Strengthens Emotional Connection**: A unified brand voice creates deeper connections with your audience.

## How to Achieve Brand Consistency

Start with comprehensive brand guidelines that cover:

- Logo usage and variations
- Color palette with specific codes
- Typography hierarchy
- Voice and tone guidelines
- Photography style

Remember, consistency doesn't mean rigidity. Your brand should be adaptable while maintaining its core identity.
    `,
    category: "Branding",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2024-03-15",
    author: "Minh Nguyen",
  },
  {
    id: "2",
    slug: "web-design-trends",
    title: "Web Design Trends That Will Dominate This Year",
    excerpt: "From AI-powered interfaces to sustainable design, here are the trends shaping the future of web design.",
    content: `
The web design landscape continues to evolve rapidly. Here are the key trends we're seeing and implementing in our projects.

## 1. AI-Powered Personalization

Websites are becoming smarter, adapting content and layouts based on user behavior and preferences.

## 2. Minimalist Navigation

Complex menus are giving way to simpler, more intuitive navigation patterns that prioritize user experience.

## 3. Dark Mode as Standard

Dark mode is no longer optional. Users expect the ability to switch between light and dark themes.

## 4. Sustainable Web Design

Performance optimization isn't just about speed—it's about reducing the environmental impact of websites.

## 5. Micro-Interactions

Subtle animations and feedback mechanisms that make interfaces feel more alive and responsive.

The best designs combine these trends thoughtfully, always keeping the user's needs at the center.
    `,
    category: "Web Design",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2024-03-10",
    author: "Hoa Le",
  },
  {
    id: "3",
    slug: "ecommerce-conversion",
    title: "10 Ways to Boost Your Ecommerce Conversion Rate",
    excerpt: "Practical strategies to turn more visitors into customers and increase your online store revenue.",
    content: `
Conversion rate optimization is crucial for ecommerce success. Here are ten proven strategies to improve your store's performance.

## 1. Simplify Your Checkout

Every additional step in checkout costs you sales. Aim for a streamlined, distraction-free process.

## 2. Use High-Quality Product Images

Invest in professional photography. Multiple angles and zoom functionality help customers make confident decisions.

## 3. Display Social Proof

Reviews, ratings, and testimonials build trust and reduce purchase anxiety.

## 4. Offer Free Shipping

If possible, include shipping in your product prices. "Free shipping" is a powerful motivator.

## 5. Optimize for Mobile

More than half of ecommerce traffic comes from mobile devices. Your mobile experience must be flawless.

## 6. Create Urgency

Limited-time offers and low-stock notifications encourage quick decisions.

## 7. Simplify Returns

A generous return policy reduces risk and increases confidence.

## 8. Use Exit-Intent Popups

Capture leaving visitors with targeted offers or email signup incentives.

## 9. Improve Site Speed

Every second of load time costs conversions. Optimize images, leverage caching, and use a CDN.

## 10. A/B Test Everything

Never assume—test headlines, images, CTAs, and layouts to find what works best for your audience.
    `,
    category: "Ecommerce",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    publishedAt: "2024-03-05",
    author: "Linh Tran",
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24">
        <Container>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="outline">{post.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {formatDate(post.publishedAt)}
            </span>
            <span className="text-sm text-muted-foreground">
              By {post.author}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            {post.title}
          </h1>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <Container>
          <div className="relative aspect-[2/1] overflow-hidden bg-secondary">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Content */}
      <Section>
        <Container>
          <article className="prose prose-lg mx-auto max-w-3xl">
            <div
              className="space-y-6 text-muted-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_ol]:ml-6 [&_ol]:list-decimal [&_p]:leading-relaxed [&_strong]:text-foreground [&_ul]:ml-6 [&_ul]:list-disc"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/## /g, "<h2>")
                  .replace(/### /g, "<h3>")
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/^\d\. /gm, "<li>")
                  .split("</h2>")
                  .join("</h2><p>")
                  .split("</h3>")
                  .join("</h3><p>"),
              }}
            />
          </article>
        </Container>
      </Section>
    </>
  );
}
