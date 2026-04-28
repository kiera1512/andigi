-- Create blog_posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  featured_image text,
  category text,
  author text default 'Andigi Team',
  published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create contact_submissions table
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  subject text not null,
  message text not null,
  status text default 'new',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.blog_posts enable row level security;
alter table public.contact_submissions enable row level security;

-- RLS Policies for blog_posts (public read-only)
create policy "Anyone can view published blog posts" on public.blog_posts
  for select
  using (published = true);

-- RLS Policies for contact_submissions (anyone can insert, no select)
create policy "Anyone can submit contact form" on public.contact_submissions
  for insert
  with check (true);

-- Create indexes
create index idx_blog_posts_slug on public.blog_posts(slug);
create index idx_blog_posts_published_at on public.blog_posts(published_at desc);
create index idx_contact_submissions_created_at on public.contact_submissions(created_at desc);
