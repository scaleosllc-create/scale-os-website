# Single-Page Site + Creative Slider + Blog — Design Spec

## Goal
Convert the multi-page site into a single scrolling homepage with anchor navigation, add a creative examples slider with 10 AI-generated product ad images, and add a blog with 6 articles.

## Architecture Changes

### Navigation
- Remove `/services` and `/about` as separate routes (delete page files, keep components)
- Navbar links become anchor scrolls: Services → `#services`, About → `#about`, Blog → `#blog`
- "Apply" remains a separate route (`/apply`)
- Smooth scroll behavior already enabled in globals.css

### Homepage Section Order (9 sections)
1. **Hero** — existing, no changes
2. **Platforms** — existing, no changes
3. **Services** (id="services") — merge homepage Services overview + full ServiceGrid
4. **Creative Examples** (id="work") — NEW: horizontal slider of 10 square AI creatives
5. **Results** — existing case studies, no changes
6. **Timeline** — existing 90-day process, no changes
7. **About** (id="about") — merge Team + Principles into one flowing section
8. **Blog** (id="blog") — NEW: 6 article cards linking to `/blog/[slug]`
9. **CTA** — existing final CTA, no changes

### Creative Examples Slider
- 10 square (1:1) images in `/public/images/creatives/`
- Horizontal scroll with CSS snap (`overflow-x: auto`, `scroll-snap-type: x mandatory`)
- Each card: image + product name + brand below
- 5 of 10 have CSS text overlays (headline baked into the component, not the image)
- No external carousel library

### Blog
- Route: `/blog/[slug]/page.tsx` with dynamic routing
- Blog data: array of article objects in `src/lib/blog.ts` (title, slug, excerpt, content, date, readTime, category)
- 6 articles, each ~800-1000 words, written in agency voice
- Blog section on homepage: 6 cards in a 3x2 grid
- Each card: title, excerpt, category tag, read time, link to full post
- No blog images needed (typography-driven cards)

## Products & Creatives

| # | Image File | Brand | Product | Text Overlay |
|---|-----------|-------|---------|-------------|
| 1 | creative-01-weekender.jpg | DRIFT CO. | Leather weekender bag | None |
| 2 | creative-02-serum.jpg | AURORA SKINCARE | Vitamin C serum | "Your skin, upgraded." |
| 3 | creative-03-earbuds.jpg | KINETIC AUDIO | Wireless earbuds | None |
| 4 | creative-04-matcha.jpg | SOLACE LIVING | Organic matcha set | "Ritual, refined." |
| 5 | creative-05-shoes.jpg | VELTA FITNESS | Running shoes | None |
| 6 | creative-06-candles.jpg | MAISON HOME | Scented candle trio | "Set the mood." |
| 7 | creative-07-protein.jpg | NOVA NUTRITION | Protein powder | "Fuel the grind." |
| 8 | creative-08-bedding.jpg | MERIDIAN GOODS | Linen bedding set | None |
| 9 | creative-09-bottle.jpg | DRIFT CO. | Smart water bottle | "Stay ahead." |
| 10 | creative-10-moisturizer.jpg | AURORA SKINCARE | Face moisturizer | "48hr hydration." |

## Blog Articles

| # | Slug | Title | Category |
|---|------|-------|----------|
| 1 | why-your-cac-is-rising | Why Your Shopify Store's CAC Is Rising (And How AI Fixes It) | Paid Ads |
| 2 | advertorial-playbook | The Advertorial Playbook: How DTC Brands Are Scaling Cold Traffic | Strategy |
| 3 | ai-image-generation-ecommerce | AI Image Generation for E-Commerce: A Practical Guide | AI Tools |
| 4 | shopify-automations | 5 Shopify Automations That Save 20+ Hours Per Week | Automation |
| 5 | meta-ads-creative-testing | Meta Ads Creative Testing at Scale: Our Framework | Paid Ads |
| 6 | ecommerce-tech-stack-2026 | Building Your E-Commerce Tech Stack in 2026 | Strategy |

## Files to Create
- `src/components/home/CreativeSlider.tsx` — creative examples slider
- `src/components/home/BlogSection.tsx` — blog cards for homepage
- `src/lib/blog.ts` — blog data (articles array)
- `src/app/blog/[slug]/page.tsx` — individual blog post page
- `public/images/creatives/` — 10 square creative images

## Files to Modify
- `src/app/page.tsx` — add new sections, merge services/about content
- `src/components/layout/Navbar.tsx` — anchor links instead of page routes
- `src/components/layout/Footer.tsx` — update links

## Files to Delete
- `src/app/services/page.tsx` — merged into homepage
- `src/app/about/page.tsx` — merged into homepage

## Files to Keep
- `src/components/services/ServiceGrid.tsx` — reused on homepage
- `src/components/about/Team.tsx` — reused on homepage
- `src/components/about/Principles.tsx` — reused on homepage
- All existing homepage components
