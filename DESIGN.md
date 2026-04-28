# Design System

## 1. Visual Theme & Atmosphere

Andigi Agency's design system embodies a clean, editorial-first aesthetic that prioritizes content and performance above ornament. The visual language is minimalist yet sophisticated, featuring a stark black-and-white palette punctuated by vibrant accent colors that signal interactivity and brand personality. The design embraces generous whitespace, bold typography, and subtle geometric patterns (vertical line motifs) that evoke precision and technical excellence. This is a system built for agencies that build at scale—it conveys professionalism, reliability, and cutting-edge web technology while remaining accessible and unfussy.

**Key Characteristics**

- Minimal, content-first aesthetic with strong editorial hierarchy
- High contrast black-and-white foundation with strategic color accents
- Bold, geometric sans-serif typography (Geist) at large scales
- Generous whitespace and breathing room between elements
- Subtle, refined shadows for depth without heaviness
- Sharp, square-cornered components (zero border radius)
- Subtle vertical line patterns as decorative texture
- Mobile-first responsive approach with flat component surfaces

## 2. Color Palette & Roles

### Primary

- **Primary Black** (`#09090B`): Primary text, headings, dominant UI surface. Used for 394 instances across the design system.
- **Deep Black** (`#000000`): Maximum contrast text and critical UI elements. Reserved for highest-emphasis content.

### Accent Colors

- **Primary Blue** (`#2547D0`): Primary call-to-action buttons and interactive highlights.
- **Bright Blue** (`#476CFF`): Secondary interactive accents and hover states.
- **Electric Blue** (`#335CFF`): Tertiary accent and badge highlights.
- **Magenta** (`#F91880`): Status alerts, special emphasis, and brand accent.
- **Emerald Green** (`#00BA7C`): Success states, positive indicators, and tertiary CTAs.

### Interactive

- **Dark Navy** (`#15202B`): Hover states and interactive depth.
- **Slate** (`#1E2732`): Button and form field active states.

### Neutral Scale

- **Light Gray** (`#E4E4E7`): Primary border color and light divider lines. Used for 474 instances.
- **Subtle Gray** (`#EBEBEB`): Secondary borders and faint separators.
- **Medium Gray** (`#E6E6E6`): Tertiary borders and disabled states.
- **Dark Gray** (`#5C5C5C`): Secondary body text and muted labels.
- **Charcoal** (`#333333`): Dark-mode compatible text alternatives.
- **Near Black** (`#171717`): High-contrast secondary content.

### Surface & Borders

- **Pure White** (`#FFFFFF`): Card backgrounds, input fields, and primary surfaces. Used for 19 instances.
- **Light Border** (`#E4E4E7`): Default border color for cards, inputs, and separators.

## 3. Typography Rules

### Font Family

- **Primary**: Geist, ui-sans-serif, system-ui, -apple-system, sans-serif
- **Secondary**: Geist (monospace fallback for code), Monaco, Courier New, monospace

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / H1 | Geist | 80px | 700 | 79.2px | 0px | Hero headlines and page titles |
| Heading 2 | Geist | 30px | 400 | 36px | 0px | Section headers and large subheads |
| Heading 3 | Geist | 24px | 500 | 32px | 0px | Subsection titles and card headers |
| Heading 4 / Label | Geist | 16px | 600 | 24px | 0px | Form labels and small headers |
| Body | Geist | 18px | 400 | 28px | 0px | Paragraph text and body copy |
| Emphasis / Span | Geist | 16px | 500 | 24px | 0px | Highlighted text, badges, and accent spans |
| Link | Geist | 16px | 400 | 24px | 0px | Hyperlinks and navigation text |
| Button | Geist | 14px | 500 | 20px | 0px | Button labels and small interactive text |
| Caption / Helper | Geist | 12px | 400 | 18px | 0px | Captions, helper text, and footnotes |

### Principles

- **Scale with intent**: Typography sizes correspond directly to semantic hierarchy and visual weight.
- **Generous line height**: Extra whitespace in line height (exceeding 1.5x multiplier) ensures readability at large sizes and breathing room in compact layouts.
- **Weight variation**: Use 400 for body and neutral text, 500 for emphasis and UI labels, 600 for dense headers, 700 only for hero display.
- **No letter spacing**: Rely on weight and size for hierarchy rather than artificial spacing.
- **Single typeface**: Geist throughout ensures cohesion and reduces rendering complexity; no serif or script faces.

## 4. Component Stylings

### Buttons

**Primary Button (CTA)**

- **Background**: `#09090B`
- **Text Color**: `#FFFFFF`
- **Font Size**: `14px`
- **Font Weight**: `500`
- **Padding**: `12px 24px 12px 24px`
- **Height**: `48px`
- **Border**: `1px solid #E4E4E7`
- **Border Radius**: `0px`
- **Box Shadow**: none
- **Hover**: Background `#1E2732`, Text `#FFFFFF`
- **Active**: Background `#15202B`, Text `#FFFFFF`

**Secondary Button (Ghost / Border)**

- **Background**: transparent
- **Text Color**: `#09090B`
- **Font Size**: `14px`
- **Font Weight**: `500`
- **Padding**: `12px 24px 12px 24px`
- **Height**: `48px`
- **Border**: `1px solid #E4E4E7`
- **Border Radius**: `0px`
- **Box Shadow**: none
- **Hover**: Background `#EBEBEB`, Text `#09090B`, Border `#EBEBEB`
- **Active**: Background `#E4E4E7`, Border `#E4E4E7`

**Tertiary Button (Text Link)**

- **Background**: transparent
- **Text Color**: `#09090B`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Padding**: `0px 0px 0px 0px`
- **Height**: auto
- **Border**: none
- **Border Radius**: `0px`
- **Box Shadow**: none
- **Hover**: Text Color `#5C5C5C`
- **Active**: Text Color `#09090B`

**Button with Icon Suffix**

- **Background**: `#09090B`
- **Text Color**: `#FFFFFF`
- **Font Size**: `14px`
- **Font Weight**: `500`
- **Padding**: `8px 20px 8px 20px`
- **Height**: `48px`
- **Gap between text and icon**: `8px`
- **Border**: none
- **Border Radius**: `0px`
- **Box Shadow**: none

### Cards & Containers

**Service Card**

- **Background**: `#FFFFFF`
- **Border**: `1px solid #E4E4E7`
- **Border Radius**: `0px`
- **Padding**: `48px 32px 48px 32px`
- **Box Shadow**: `rgba(14, 18, 27, 0.1) 0px 16px 32px -12px`
- **Heading Font Size**: `24px`
- **Heading Weight**: `500`
- **Body Font Size**: `18px`
- **Body Weight**: `400`
- **Body Color**: `#5C5C5C`
- **Hover State**: Shadow increases to `rgba(14, 18, 27, 0.15) 0px 20px 40px -16px`

**Feature Container**

- **Background**: `#FFFFFF`
- **Border**: `1px solid #E4E4E7`
- **Border Radius**: `0px`
- **Padding**: `32px 24px 32px 24px`
- **Box Shadow**: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Icon Container**: Square `120px × 120px`, background `#EBEBEB`, centered, border-radius `0px`

**Hero Section**

- **Background**: `#FFFFFF` with optional subtle vertical line pattern overlay (`#E4E4E7` at 2–3px opacity)
- **Padding**: `112px 64px 112px 64px` (top, sides, bottom)
- **Text Alignment**: Center or left-aligned depending on context
- **Heading (H1)**: `80px`, weight `700`, color `#09090B`, line-height `79.2px`

### Inputs & Forms

**Text Input (Default)**

- **Background**: `#FFFFFF`
- **Text Color**: `#09090B`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Padding**: `0px 0px 0px 0px`
- **Height**: `24px`
- **Border**: none
- **Border Radius**: `0px`
- **Box Shadow**: none
- **Placeholder Color**: `#EBEBEB`

**Text Input (with Border)**

- **Background**: `#FFFFFF`
- **Text Color**: `#09090B`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Padding**: `4px 12px 4px 12px`
- **Height**: `48px`
- **Border**: `1px solid #E4E4E7`
- **Border Radius**: `0px`
- **Box Shadow**: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Focus**: Border `#335CFF`, Background `#FFFFFF`, Box Shadow `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Disabled**: Background `#EBEBEB`, Text Color `#5C5C5C`, Border `#E6E6E6`

**Form Label**

- **Font Size**: `16px`
- **Font Weight**: `600`
- **Color**: `#09090B`
- **Margin Bottom**: `8px`
- **Line Height**: `24px`

**Form Helper Text**

- **Font Size**: `12px`
- **Font Weight**: `400`
- **Color**: `#5C5C5C`
- **Margin Top**: `4px`

### Navigation

**Header Navigation**

- **Background**: `#FFFFFF`
- **Height**: `64px`
- **Padding**: `16px 64px 16px 64px`
- **Border Bottom**: `1px solid #E4E4E7`
- **Logo Font Size**: `14px`
- **Logo Font Weight**: `600`
- **Logo Color**: `#09090B`

**Navigation Link**

- **Font Size**: `16px`
- **Font Weight**: `400`
- **Color**: `#09090B`
- **Padding**: `8px 8px 8px 8px`
- **Border Bottom**: `2px solid transparent`
- **Hover State**: Border Bottom `2px solid #09090B`
- **Active State**: Border Bottom `2px solid #09090B`, Font Weight `500`

**Dropdown Menu**

- **Background**: `#FFFFFF`
- **Border**: `1px solid #E4E4E7`
- **Border Radius**: `0px`
- **Box Shadow**: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Menu Item Padding**: `8px 16px 8px 16px`
- **Menu Item Font Size**: `16px`
- **Menu Item Color**: `#09090B`
- **Menu Item Hover**: Background `#EBEBEB`

### Links

**Inline Link**

- **Font Size**: `16px`
- **Font Weight**: `400`
- **Color**: `#09090B`
- **Text Decoration**: underline
- **Hover**: Color `#5C5C5C`, Text Decoration underline
- **Active**: Color `#09090B`

**Link with Icon (Arrow)**

- **Font Size**: `16px`
- **Font Weight**: `400`
- **Color**: `#09090B`
- **Gap**: `8px`
- **Icon**: `↗` or chevron, `16px × 16px`
- **Hover**: Color `#5C5C5C`, Icon transform translate `2px -2px`

## 5. Layout Principles

### Spacing System

**Base Unit**: `8px`

**Scale**:
- `8px` – Tight spacing (gaps, micro-padding)
- `16px` – Compact padding (form elements, list items)
- `20px` – Standard margin (between inline elements)
- `24px` – Comfortable margin (section spacing)
- `32px` – Card padding and contained sections
- `48px` – Component padding and large sections
- `64px` – Page/container padding and main horizontal margins
- `112px` – Large vertical section spacing
- `128px` – Hero and full-section vertical breaks

**Usage Context**:
- **8px**: Input gaps, icon-text spacing, button icon gaps
- **16px**: Form field padding, list item padding, sub-section padding
- **20px**: Inline element margins, link padding
- **24px**: Section headings margin, moderate spacing between groups
- **32px**: Card internal padding, component sections
- **48px**: Service card padding, moderate section spacing
- **64px**: Hero padding (horizontal), main layout padding, page margins
- **112px**: Full-page section breaks, hero vertical spacing
- **128px**: Maximum vertical breaks between major content areas

### Grid & Container

- **Maximum Width**: `1440px` (content width for desktop)
- **Side Padding**: `64px` (left and right margins on desktop)
- **Column Strategy**: 12-column grid, flexbox-friendly. Components use 1, 2, 3, 4, or full-width layouts depending on breakpoint.
- **Card Grid**: 2-column on desktop, 1-column on tablet, full-width on mobile. Gap `24px`.
- **Hero Container**: Full-width with centered content. Internal max-width `1200px`.
- **Section Pattern**: Alternating full-width colored sections (white, light gray) with padding `112px 64px`.

### Whitespace Philosophy

Andigi Agency's design prioritizes "air" around content. Large heading text sits alone with significant vertical margins (`112px` between sections). Body text breathes at `18px` size with `28px` line height. Cards and containers maintain internal padding of at least `32px`. This creates a sense of premium, editorial quality—each piece of content feels intentional and spaced for easy scanning.

### Border Radius Scale

- **Sharp Corners**: `0px` – All components, cards, inputs, buttons, and containers. No rounding anywhere.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow, `0px 0px 0px 0px` | Body text, links, inline elements |
| Subtle | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | Form inputs, small interactive elements |
| Card | `rgba(14, 18, 27, 0.1) 0px 16px 32px -12px` | Service cards, featured containers, lifted components |
| Hover | `rgba(14, 18, 27, 0.15) 0px 20px 40px -16px` | Card hover state, elevated modals |
| Custom Light | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | Layered shadow stacks for micro-interactions |
| Custom Medium | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | Dropdowns, popovers, depth stacking |

**Shadow Philosophy**

Shadows are minimal and refined. The design avoids harsh drop shadows, instead using subtle, dark-tinted shadows with negative Y-offset for card elevation. The approach is deliberately flat—shadows are reserved for layered UI elements (cards, modals, dropdowns) rather than used liberally on every component. This maintains the clean, editorial aesthetic while providing just enough depth to signal interactivity and hierarchy.

## 7. Do's and Don'ts

### Do

- **Do use bold, large typography** for headlines. Leverage `80px` at weight `700` for hero statements to create visual impact and editorial presence.
- **Do embrace whitespace aggressively**. Leave `112px` vertical margins between major sections and `64px` horizontal padding on desktop.
- **Do prioritize black and white** as the primary color palette. Use accent colors (`#2547D0`, `#F91880`, `#00BA7C`) sparingly for CTAs and status only.
- **Do use the Geist typeface exclusively**. No secondary fonts, no serif alternates. Consistency reinforces the technical, editorial brand.
- **Do apply zero border radius** to all components for a sharp, geometric, and modern aesthetic.
- **Do use subtle shadows** only on cards and layered elements. Avoid drop shadows on buttons or inline components.
- **Do provide ample padding** inside cards (`48px`) and containers (`32px`) to maintain breathing room.
- **Do use `16px` and `14px` button fonts** with `500` weight for clear, action-oriented CTA text.
- **Do include icon spacing** of `8px` between text and icons in buttons and links.
- **Do test interactive elements** at `48px` minimum height for touch targets on mobile.

### Don't

- **Don't round corners**. All components use `0px` border radius—no exceptions. Rounding softens the brand and breaks the geometric precision.
- **Don't mix typefaces.** Geist is the only font. No transitional serifs, no script faces, no system fallbacks beyond the Geist stack.
- **Don't use color indiscriminately**. Limit accent colors to CTAs, badges, and status. White, black, and grays are dominant.
- **Don't create thick or opaque shadows**. Shadows should be subtle and dark-tinted, not harsh blacks or blurs exceeding `12px`.
- **Don't crowd components**. Use spacing scales (`8px`, `16px`, `24px`, etc.) consistently; avoid ad-hoc spacing or tight layouts.
- **Don't apply effects or gradients**. No gradients, no overlays, no transparency blurs. The design is flat and direct.
- **Don't make buttons smaller than `48px` in height** on touchable interfaces; maintain minimum `44px` for mobile accessibility.
- **Don't use light gray text** on white backgrounds below `5C5C5C`; ensure sufficient contrast (WCAG AA minimum 4.5:1).
- **Don't create unlabeled interactive elements.** Buttons and links must have explicit, scannable text.
- **Don't use more than three accent colors** in a single view. Reserve `#2547D0` for primary CTAs, `#F91880` for alerts, `#00BA7C` for success.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | `320px` – `639px` | Single-column layout, `16px` side padding, font sizes scale down 10%, `24px` spacing, `56px` button height |
| Tablet | `640px` – `1023px` | 2-column grid, `32px` side padding, `80px` section spacing, `64px` button height |
| Desktop | `1024px` – `1440px` | 3+ columns, `64px` side padding, `112px` section spacing, `48px` button height |
| Large Desktop | `1441px` and above | Fixed max-width container `1440px` centered, same padding and spacing as desktop |

### Touch Targets

- **Minimum interactive element size**: `44px × 44px` (buttons, links, form inputs)
- **Comfortable target size**: `48px × 48px` (default for buttons, menu items)
- **Spacing between targets**: Minimum `8px` gap to prevent accidental adjacent taps
- **Text link size**: Minimum `16px` font with `24px` line height plus `8px` padding around text
- **Icon buttons**: `48px × 48px` minimum for touch, centered icon `24px × 24px`

### Collapsing Strategy

- **Header Navigation**: Full horizontal nav on desktop → hamburger menu on tablet/mobile with slide-out drawer
- **Card Grid**: 3 columns desktop → 2 columns tablet → 1 column mobile
- **Hero Text**: Center-aligned on mobile (reduces to 1 column), left-aligned or centered on desktop
- **Hero Heading**: `80px` desktop → `48px` tablet → `32px` mobile (maintain `700` weight)
- **Spacing Reduction**: `112px` sections collapse to `64px` on tablet, `48px` on mobile
- **Side Padding**: `64px` desktop → `32px` tablet → `16px` mobile
- **Button Width**: Full-width on mobile (except in inline groups), fixed width on desktop

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Primary Black (`#09090B`)
- **Background**: Pure White (`#FFFFFF`)
- **Heading text**: Primary Black (`#09090B`)
- **Body text**: Primary Black (`#09090B`)
- **Muted text**: Dark Gray (`#5C5C5C`)
- **Borders**: Light Gray (`#E4E4E7`)
- **Accent (interactive)**: Primary Blue (`#2547D0`)
- **Alert / Status**: Magenta (`#F91880`)
- **Success**: Emerald Green (`#00BA7C`)
- **Hover overlay**: Dark Navy (`#15202B`)

### Iteration Guide

1. **All components use zero border radius** (`0px`). No rounded corners under any circumstance. This defines the geometric, sharp aesthetic.

2. **Typography is exclusively Geist** with a 1.5× multiplier on line height (minimum). Use weight `700` only for `80px` display, `600` for `16px` labels, `500` for buttons and emphasis, `400` for body and links.

3. **Spacing follows the `8px` grid scale** (`8, 16, 20, 24, 32, 48, 64, 112, 128px`). Never use arbitrary values. Use `64px` for horizontal page padding on desktop, `112px` for vertical section spacing.

4. **Cards and containers have minimal shadows** — only `rgba(14, 18, 27, 0.1) 0px 16px 32px -12px` for elevated cards. Flat elements have no shadow.

5. **Color palette is 90% black, white, and grays**. Reserve accent colors (`#2547D0`, `#F91880`, `#00BA7C`) exclusively for CTAs, badges, and status indicators. No gradients, no overlays, no color combinations.

6. **Buttons are always `48px` tall on desktop** with `12px 24px` padding and `14px` font weight `500`. Secondary/ghost buttons have `1px solid #E4E4E7` border and transparent background.

7. **Form inputs use `16px` font with `1px solid #E4E4E7` border** and `4px 12px` padding. Height `48px`. Focus state: border `#335CFF` with shadow `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`.

8. **Hero sections feature `80px` display text** (weight `700`, color `#09090B`) with `112px` vertical margins and optional subtle vertical line pattern overlay.

9. **Navigation links are `16px` weight `400`** with `2px solid transparent` bottom border. Hover/active states: border becomes `2px solid #09090B`. No background changes.

10. **Mobile breakpoint collapses to single column**, reduces padding to `16px`, font sizes by ~10%, and button height to `56px`. Use hamburger menu at `640px` breakpoint. Maintain `8px` grid spacing throughout.