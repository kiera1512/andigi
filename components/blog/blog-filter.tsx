"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { calculateReadingTime, formatReadingTime, getUniqueCategories } from "@/lib/blog-utils";
import { Search, X } from "lucide-react";

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

interface BlogFilterProps {
  posts: BlogPost[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogFilter({ posts }: BlogFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => getUniqueCategories(posts), [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== null;

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Filter by:</span>
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="ml-2 text-muted-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              Clear filters
            </Button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground">
        {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
      </p>

      {/* Blog Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles match your search criteria.</p>
          <Button variant="outline" onClick={clearFilters} className="mt-4">
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => {
            const readingTime = calculateReadingTime(post.content);
            return (
              <FadeIn key={post.id} delay={index * 50} direction="up">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="h-full overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                      <Image
                        src={post.featured_image || "/placeholder.svg?height=400&width=600"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(post.published_at)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          • {formatReadingTime(readingTime)}
                        </span>
                      </div>
                      <h2 className="mt-4 text-xl font-semibold line-clamp-2 transition-colors group-hover:text-primary">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      )}
    </div>
  );
}
