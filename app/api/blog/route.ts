import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    console.log("[v0] Fetching blog posts from Supabase...");

    // Get all published blog posts, sorted by published_at descending
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, content, category, featured_image, published_at, author')
      .eq('published', true)
      .order('published_at', { ascending: false })

    console.log("[v0] Supabase response - data:", data?.length, "error:", error);

    if (error) {
      console.error('[v0] Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch blog posts' },
        { status: 500 }
      )
    }

    console.log("[v0] Successfully fetched", data?.length || 0, "blog posts");
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('[v0] Request error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
