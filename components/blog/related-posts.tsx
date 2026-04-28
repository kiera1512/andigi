import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featured_image: string | null;
  published_at: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <Section className="bg-secondary">
      <Container>
        <FadeIn direction="up">
          <h2 className="text-2xl font-semibold mb-8">Related Articles</h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 100} direction="up">
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="h-full overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                    <Image
                      src={post.featured_image || "/placeholder.svg?height=300&width=450"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(post.published_at)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold line-clamp-2 transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
