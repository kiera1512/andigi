// Calculate reading time based on word count
export function calculateReadingTime(content: string): number {
  // Remove HTML tags
  const text = content.replace(/<[^>]*>/g, '');
  // Count words (roughly)
  const words = text.trim().split(/\s+/).length;
  // Average reading speed: 200 words per minute
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

// Format reading time display
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

// Get related posts by category
export function getRelatedPosts<T extends { id: string; category: string }>(
  currentPost: T,
  allPosts: T[],
  limit: number = 3
): T[] {
  return allPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
}

// Social share URLs
export function getShareUrls(url: string, title: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    copy: url,
  };
}

// Get unique categories from posts
export function getUniqueCategories<T extends { category: string }>(posts: T[]): string[] {
  const categories = posts.map(post => post.category);
  return [...new Set(categories)].sort();
}
