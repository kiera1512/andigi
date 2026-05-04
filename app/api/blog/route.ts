import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get all published blog posts, sorted by published_at descending
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, content, category, featured_image, published_at, author')
      .eq('published', true)
      .order('published_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch blog posts' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Request error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
