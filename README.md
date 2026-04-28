# Andigi - Digital Agency Website

A modern, high-performance digital agency website built with Next.js 16, Tailwind CSS, and shadcn/ui. Features a sophisticated design system, dark mode, animations, and Supabase integration for blog and contact management.

## Features

### Core Pages
- **Home** - Hero section, services overview, featured portfolio projects, team preview, CTA section
- **Services** - Detailed service offerings (Web Design, Branding, Digital Marketing, Ecommerce) with process workflow
- **Portfolio** - Showcase of 6 completed projects with detailed case studies and filtering
- **About** - Company mission, stats, team members, and company values
- **Blog** - Article management via Supabase with markdown support
- **Contact** - Integrated contact form with Supabase submissions and validation

### Design System
- Minimalist, editorial-first aesthetic with sharp corners (0px border radius)
- Premium color palette: Deep Black (#09090B), Primary Blue (#2547D0), Accent Pink (#F91880), Success Green (#00BA7C)
- Responsive typography with Geist font family
- Consistent 8px spacing grid across all components
- Design tokens via CSS variables for easy theming

### UX Features
- **Dark Mode** - Full light/dark theme support with next-themes
- **Page Loading Bar** - Progress indicator for route transitions using next-nprogress-bar
- **Back to Top Button** - Fixed position scroll utility with smooth animation
- **Breadcrumbs Navigation** - Semantic navigation for detail pages (blog posts, portfolio projects)
- **Mobile Navigation** - Slide-in drawer menu with staggered animations
- **Scroll Animations** - Fade-in effects for sections and components using Intersection Observer
- **Toast Notifications** - Success/error feedback for form submissions
- **Accessibility** - Skip to content link, proper ARIA labels, semantic HTML, focus management

### Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Database**: Supabase (PostgreSQL) for blog posts and contact submissions
- **Icons**: Lucide React
- **Animations**: Custom CSS animations with Tailwind
- **Themes**: next-themes for dark mode
- **Monitoring**: next-nprogress-bar for page transitions

## Project Structure

```
/app
  /layout.tsx              # Root layout with providers
  /page.tsx                # Home page
  /globals.css             # Global CSS with design tokens
  /(main)
    /services/page.tsx     # Services page
    /portfolio/page.tsx    # Portfolio listing
    /portfolio/[slug]/page.tsx  # Portfolio detail
    /about/page.tsx        # About page
    /blog/page.tsx         # Blog listing
    /blog/[slug]/page.tsx  # Blog detail with markdown rendering
    /contact/page.tsx      # Contact page
    /api
      /contact/route.ts    # Contact form submission API
      /blog/route.ts       # Blog listing API
      /blog/[slug]/route.ts # Blog detail API

/components
  /header.tsx              # Navigation header
  /footer.tsx              # Footer
  /sections/               # Page sections
    /hero.tsx              # Hero section with animations
    /services-grid.tsx     # Services showcase
    /portfolio-grid.tsx    # Portfolio grid with animations
    /team-grid.tsx         # Team members showcase
    /contact-form.tsx      # Contact form with validation
    /process-section.tsx   # Service process steps
    /stats-section.tsx     # Company statistics
    /about-preview.tsx     # About section preview
    /cta-section.tsx       # Call-to-action section
  /ui/                     # Reusable UI components
    /button.tsx            # Button with variants
    /card.tsx              # Card component
    /input.tsx             # Form input
    /textarea.tsx          # Form textarea
    /label.tsx             # Form label
    /form.tsx              # Form wrapper
    /container.tsx         # Layout container
    /section.tsx           # Section wrapper
    /badge.tsx             # Badge component
    /fade-in.tsx           # Scroll animation component
    /toast.tsx             # Toast notification system
    /theme-toggle.tsx      # Dark mode toggle
    /breadcrumbs.tsx       # Breadcrumb navigation
    /back-to-top.tsx       # Back to top button
    /nprogress-bar.tsx     # Page loading indicator
  /providers/
    /theme-provider.tsx    # Next-themes provider setup

/lib
  /data.ts                 # Static data (services, portfolio, team)
  /supabase/
    /client.ts             # Supabase client setup
    /server.ts             # Supabase server setup
  /utils.ts                # Utility functions

/public
  /robots.txt              # SEO robots file

/scripts
  /001_create_blog_tables.sql  # Database migration
```

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm/pnpm/yarn/bun

### Installation

1. Clone the repository
```bash
git clone https://github.com/kiera1512/andigi.git
cd andigi
```

2. Install dependencies
```bash
npm install
```

3. Set up Supabase
- Create a Supabase project
- Run the migration script in `scripts/001_create_blog_tables.sql` in Supabase SQL editor
- Add environment variables to `.env.local`

4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Building for Production

```bash
npm run build
npm run start
```

## Database Setup

Run the SQL migration to create blog_posts and contact_submissions tables:

1. Go to Supabase SQL Editor
2. Create a new query
3. Paste contents of `scripts/001_create_blog_tables.sql`
4. Execute the query

The tables are configured with Row Level Security (RLS) policies. Blog posts are publicly readable, contact submissions are write-only.

## API Routes

### Contact Form
**POST** `/api/contact`
- Body: `{ name, email, phone?, company?, message }`
- Response: `{ success: true, id: string }` or `{ error: string }`

### Blog Posts
**GET** `/api/blog`
- Response: `{ data: BlogPost[] }`

**GET** `/api/blog/[slug]`
- Response: `{ data: BlogPost }`

## Configuration

### Customizing Colors
Edit CSS variables in `app/globals.css`:
- Light mode: `:root` selector
- Dark mode: `.dark` selector

### Adding Services
Update `lib/data.ts` in the `services` array

### Adding Portfolio Projects
Update `lib/data.ts` in the `portfolioProjects` array

### Adding Team Members
Update `lib/data.ts` in the `teamMembers` array

## Performance

- Image optimization with Next.js Image component
- CSS-in-JS for minimal bundle size
- Automatic code splitting
- Static generation for fast load times
- Revalidation on-demand for dynamic content

## SEO

- Metadata configured for all pages
- Sitemap auto-generated
- Robots.txt configured
- Semantic HTML structure
- Open Graph tags for social sharing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Andigi. All rights reserved.

## Support

For issues or questions, please open an issue on GitHub or contact us via the contact form on the website.

---

Built with ❤️ by the Andigi team. Deployed on Vercel.
