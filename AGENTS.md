<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Andigi Agency Website - Project Guidelines

## Project Scope
**Website loại:** Trang web doanh nghiệp cho Digital Agency
**Công ty:** Andigi
**Dịch vụ chính:** Web Design, Branding, Digital Marketing, Ecommerce
**Cấu trúc trang:** Home, Services, Portfolio, About, Blog, Contact
**Portfolio:** 6 dự án

## Design System (KHÔNG THAY ĐỔI)
Tuân thủ chính xác `DESIGN.md`:
- **Màu:** Đen (#09090B), Trắng (#FFFFFF), Xanh Primary (#2547D0), Hồng (#F91880), Xanh lá (#00BA7C), Xám borders
- **Font:** Geist duy nhất (không font khác)
- **Border Radius:** 0px (góc vuông sharp)
- **Button Height:** 48px
- **Spacing System:** 8px grid
- **Hero Padding:** 112px 64px

## Architecture
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Components:** Tổ chức theo `/components` folder
- **Pages:** Mỗi trang = 1 file trong `/app/(main)`
- **Database:** Supabase cho blog + contact form submissions
- **Animations:** Minimal, editorial-focused (không flashy)

## Development Rules

### 1. File Structure
```
/app
  /layout.tsx (root layout)
  /(main)
    /page.tsx (home)
    /services/page.tsx
    /portfolio/page.tsx
    /about/page.tsx
    /blog/[slug]/page.tsx
    /contact/page.tsx
/components
  /header.tsx
  /footer.tsx
  /sections/... (hero, services, portfolio, etc)
  /ui/ (shadcn components)
/lib
  /supabase.ts (client setup)
  /data.ts (portfolio, blog data)
```

### 2. Components
- Tất cả components phải là `.tsx` files
- Sử dụng shadcn/ui cho UI patterns (buttons, cards, inputs, forms)
- Tuân thủ design tokens từ globals.css
- Không tạo custom components khi shadcn/ui có sẵn

### 3. Content Management
- **Portfolio:** Static data trong `/lib/data.ts` (6 projects)
- **Blog:** Supabase table + markdown rendering
- **Contact Form:** Submit → Supabase + email notification

### 4. Performance
- Sử dụng Image component từ Next.js (optimized)
- Lazy load portfolio images
- Cache blog data với revalidatePath()

### 5. SEO
- Metadata cho mỗi page (title, description, OG tags)
- Semantic HTML (nav, main, section, article)
- Alt text cho tất cả images

### 6. NOT IN SCOPE
- Authentication/Login system
- E-commerce checkout (portfolio projects only)
- Real-time features
- Admin dashboard (content via Supabase manual edit)
- Multi-language support

## Workflow
1. Build static pages first (Home, About, Services structure)
2. Setup Supabase integration cho Blog + Contact
3. Populate portfolio data
4. Build remaining pages
5. Test & deploy to Vercel

## Cách Sửa Code
- Luôn đọc file trước khi edit (Edit tool)
- Chỉ sửa các phần cần thiết
- Giữ nguyên design system
- Commit với message rõ ràng
