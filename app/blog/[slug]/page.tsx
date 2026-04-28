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

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featured_image: string | null;
  published_at: string;
  author: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/blog/${slug}`, {
      cache: 'revalidate',
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const { data } = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [post.featured_image] : [],
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderMarkdown(markdown: string) {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*?)$/gm, "<h3 className=\"text-lg font-semibold mt-6 mb-3\">$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2 className=\"text-2xl font-semibold mt-8 mb-4\">$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1 className=\"text-3xl font-bold mt-10 mb-5\">$1</h1>");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Lists
  html = html.replace(/^\d+\. (.*?)$/gm, "<li className=\"ml-6\">$1</li>");
  html = html.replace(/(<li[^>]*>.*?<\/li>)/s, "<ol className=\"list-decimal ml-6 my-4\">$1</ol>");

  // Paragraphs
  html = html
    .split("\n\n")
    .map((p) => (p.trim() ? `<p className="mb-4 leading-relaxed">${p}</p>` : ""))
    .join("");

  return html;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="bg-secondary py-12">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {formatDate(post.published_at)}
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{post.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </div>
        </Container>
      </Section>

      {post.featured_image && (
        <Section>
          <Container>
            <div className="max-w-4xl">
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <div className="max-w-4xl prose prose-lg">
            <div className="space-y-4 text-lg leading-relaxed">
              {post.content.split("\n").map((line, idx) => {
                if (line.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-lg font-semibold mt-6 mb-3">
                      {line.replace("### ", "")}
                    </h3>
                  );
                } else if (line.startsWith("## ")) {
                  return (
                    <h2 key={idx} className="text-2xl font-semibold mt-8 mb-4">
                      {line.replace("## ", "")}
                    </h2>
                  );
                } else if (line.startsWith("- ")) {
                  return (
                    <li key={idx} className="ml-6">
                      {line.replace("- ", "")}
                    </li>
                  );
                } else if (line.startsWith("1. ") || line.match(/^\d+\. /)) {
                  return (
                    <li key={idx} className="ml-6 list-decimal">
                      {line.replace(/^\d+\. /, "")}
                    </li>
                  );
                } else if (line.trim()) {
                  return (
                    <p key={idx} className="mb-4">
                      {line}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
