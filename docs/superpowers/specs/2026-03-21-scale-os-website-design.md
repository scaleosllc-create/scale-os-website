# Scale OS Website — Design Specification

## Overview

Premium digital marketing agency website for Scale OS LLC. The site serves as a professional web presence for an e-commerce-focused agency that combines digital marketing with AI automation services. Built with Next.js (App Router), Tailwind CSS, and Framer Motion, deployed on Vercel.

## Business Context

- **Company:** Scale OS LLC
- **Address:** 1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801
- **Niche:** E-commerce / Shopify brands doing $50K–$5M/month in revenue
- **Positioning:** Premium agency — "Human-Led, AI-Executed"
- **Two service pillars:** Revenue Engineering (paid ads, brand/creative strategy) + AI Commerce Operations (workflow automation, AI ad generation, store optimization)

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (moderate level — fade-ins, count-ups, hover effects, parallax)
- **Deployment:** Vercel
- **Form handling:** Next.js API route or third-party (Formspree/Resend) — TBD at implementation
- **No CMS** — content lives in code for launch

## Design System

### Color Palette — "Ink + Forest"

| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#111111` | Primary text, dark sections, buttons |
| `forest` | `#2D6A4F` | Accent color, labels, highlights, secondary CTAs |
| `white` | `#FFFFFF` | Page background |
| `off-white` | `#FAFAF8` | Section backgrounds (social proof, stats, alternating) |
| `gray-700` | `#555555` | Secondary text |
| `gray-500` | `#777777` | Body text |
| `gray-400` | `#999999` | Muted text, labels |
| `gray-300` | `#BBBBBB` | Subtle text |
| `border` | `#E0E0E0` | Borders, dividers |
| `surface` | `#F0F0EC` | Image placeholder backgrounds, card backgrounds |
| `forest-light` | `#E8F0EC` | Icon backgrounds |

### Typography

- **Headlines (H1, H2):** Serif font — Georgia or a premium serif (PP Editorial New, Ogg) if available. Font-weight 300 (light).
- **Body / UI:** Neo-grotesque sans-serif — Inter (primary), fallback to system-ui.
- **Labels / Eyebrows:** Sans-serif, 11px, letter-spacing 2-3px, uppercase, font-weight 600, forest green color.
- **Scale:** H1: 36px, H2: 24-28px, H3: 16-18px, Body: 14-15px, Labels: 11px, Small: 12px

### Animations (Moderate)

- **Scroll fade-ins:** Elements fade in + slide up slightly when entering viewport
- **Count-up numbers:** Stats section numbers animate from 0 to final value on scroll
- **Hover effects:** Cards lift slightly with shadow on hover, buttons darken
- **Parallax:** Subtle parallax on hero section images
- **Page transitions:** Smooth fade between pages
- **No:** particles, 3D, WebGL, floating orbs, gradient animations

### Component Patterns

- **Buttons:** Primary (ink bg, white text), Secondary (outline, ink border), Accent (forest bg, white text). Border-radius: 3px. Padding: 14px 28px. Font-size: 13px. Letter-spacing: 1px. Uppercase.
- **Cards:** White bg, 1px border (#E0E0E0), border-radius 8px, padding 24px
- **Dark sections:** #111 background, white/gray text, used for problem statement and CTAs
- **Image placeholders:** #F0F0EC bg, 2px dashed #CCC border, centered placeholder text. To be replaced with generated images post-build.
- **Section spacing:** Generous whitespace between sections. Padding 36-48px per section.

## Site Structure

### Navigation (all pages)

- **Desktop:** Fixed top bar. Logo "SCALE OS" (left, 700 weight, letter-spacing 2px) → "Services" | "About" (center-right, 13px) → "Apply" button (right, forest green bg, white text, rounded 3px)
- **Mobile:** Hamburger menu with slide-out drawer
- **Active state:** Current page link in forest green, font-weight 600

### Footer (all pages)

- Left: Logo, tagline "Human strategy. AI infrastructure.", "Scale OS LLC"
- Right: Two columns — Pages (Services, About, Apply) + Contact (address only: 1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801)
- Bottom: © 2026 Scale OS LLC. All rights reserved.
- No social media links

---

## Page Designs

### 1. Home (`/`)

**Section order:**

1. **Hero** (split layout)
   - Left: Eyebrow "E-COMMERCE GROWTH PARTNER" → H1 serif "Human strategy. AI infrastructure. Shopify brands that scale." → Subtext → Two CTAs: "BOOK A STRATEGY AUDIT" (primary dark) + "See Our Work →" (outline)
   - Right: Image placeholder (dashboard mockup / Shopify analytics)

2. **Platforms We Build On** (off-white bg)
   - Label: "PLATFORMS WE BUILD ON"
   - Row of platform logos: Shopify, Meta Ads, Google Ads, Klaviyo
   - Use actual SVG logos for each platform

3. **The Problem** (dark bg #111)
   - Split layout: copy left, image right
   - Eyebrow: "THE OLD MODEL IS BROKEN"
   - H2: "Ad costs keep climbing. Your agency keeps hiring. Meanwhile, your margins keep shrinking."
   - Body copy about the new model

4. **Two Pillars** (side-by-side cards)
   - Left card: Image placeholder + "PILLAR ONE" + "Revenue Engineering" + description + bullet list (Meta & Google Ads, Brand positioning, Creative & ad production, Social media advertising strategy)
   - Right card: Image placeholder + "PILLAR TWO" + "AI Commerce Operations" + description + bullet list (AI ad & listicle generation, E-commerce workflow automation, AI-built Shopify store optimization, Operational AI integration)

5. **Stats** (off-white bg)
   - Label: "THE NUMBERS THAT MATTER"
   - 4 stats in a row with dividers: +32% AVG MARGIN LIFT | 40hrs SAVED WEEKLY | 3.2x AVG MER | -41% CAC REDUCTION
   - Numbers animate (count up) on scroll

6. **How We Work** (white bg)
   - H2: "How we work" + subtitle "From audit to execution in 14 days."
   - 3 step cards: 01 Strategy Audit → 02 Custom Roadmap → 03 Execute & Scale
   - Each card has: image placeholder, step number (forest green), title, description

7. **Testimonial** (white bg)
   - Photo placeholder (circular) + italic serif quote + "Client Name · Founder, Brand Name"

8. **Final CTA** (dark bg #111)
   - H2: "Ready to stop scaling the hard way?"
   - Subtext about limited partnerships per quarter
   - "APPLY FOR PARTNERSHIP" button (forest green)

9. **Footer**

### 2. Services (`/services`)

**Section order:**

1. **Hero**
   - Eyebrow: "WHAT WE DO"
   - H1: "Two systems. One growth engine."
   - Subtext about pairing media buying with AI automation

2. **Pillar 1: Revenue Engineering** (white bg)
   - Header: split layout with image placeholder right
   - Eyebrow "PILLAR ONE" + H2 + description about unit economics focus
   - 2x2 grid of service cards below:
     - Meta Ads Management
     - Google Ads Management
     - Brand Strategy
     - Creative Strategy
   - Each card: icon placeholder, title, description

3. **Pillar 2: AI Commerce Operations** (dark bg header, white cards)
   - Header: dark bg, split layout with image placeholder right
   - Eyebrow "PILLAR TWO" + H2 + description
   - 2x2 grid of service cards below:
     - AI Ad & Content Generation
     - E-Commerce Workflow Automation
     - AI-Built Store Optimization
     - Operational AI Integration
   - Each card: icon placeholder, title, description

4. **Why Both Pillars** (off-white bg)
   - H2: "Why this combination wins"
   - Description of the dual advantage
   - 3 stats: 10x faster creative iteration | 60% less operational overhead | 1 unified growth partner

5. **CTA** (dark bg)
   - "See what both pillars could do for your brand."
   - "BOOK A STRATEGY AUDIT" button

6. **Footer**

### 3. About (`/about`)

**Section order:**

1. **Hero**
   - Eyebrow: "ABOUT SCALE OS"
   - H1: "Human-led. AI-executed."
   - Origin story intro

2. **Why We Exist** (white bg, split layout)
   - H2 + two paragraphs about the founding story
   - Image placeholder right (founder photo or team visual)

3. **Our Principles** (dark bg #111)
   - H2: "How we think"
   - 3 principle cards on dark bg:
     - 01 Margins over metrics
     - 02 AI as leverage, not gimmick
     - 03 Fewer clients, deeper work

4. **The Team** (white bg)
   - H2: "The team" + subtitle
   - 3 team member cards: circular photo placeholder, name, title (forest green), bio
   - Roles: Founder & CEO, Head of Growth, AI Operations Lead

5. **CTA** (dark bg)
   - "Want to work with us?" + apply button

6. **Footer**

### 4. Apply (`/apply`)

**Section order:**

1. **Hero** (centered text)
   - Eyebrow: "APPLY FOR PARTNERSHIP"
   - H1: "Tell us about your brand."
   - Subtext about limited slots and 48-hour response time

2. **Intake Form** (white bg, card style)
   - Fields:
     - Row 1: Your Name (text) + Email Address (email) — side by side
     - Row 2: Business Name (text) + Shopify Store URL (url) — side by side
     - Row 3: Monthly Revenue (select dropdown) — $50K–$100K, $100K–$500K, $500K–$1M, $1M–$5M, $5M+
     - Row 4: What are you looking for? (multi-select toggle pills) — Meta Ads, Google Ads, Brand Strategy, Creative Strategy, AI Automation, Store Optimization, Full Partnership. Selected state: forest green border + light forest fill.
     - Row 5: Biggest growth challenge (textarea)
     - Row 6: How did you hear about us? (select dropdown) — Referral, Google, Social Media, Other
   - Submit button: "SUBMIT APPLICATION" (dark bg, centered)
   - Below button: "We'll review your application and respond within 48 hours."

3. **What Happens Next** (off-white bg)
   - H3: "After you apply"
   - 3 horizontal steps: 1 We review → 2 Strategy call → 3 Custom proposal

4. **Footer**

## Image Placeholders

All image slots use a consistent placeholder pattern:
- Background: `#F0F0EC`
- Border: `2px dashed #CCC` (or `#333` on dark backgrounds)
- Centered label describing what image should go there
- To be replaced with AI-generated or stock images after build

**Image slots needed:**
- Homepage hero (dashboard/analytics mockup)
- Problem section visual (cost graph or old vs new model diagram)
- Pillar 1 card image (ad dashboard)
- Pillar 2 card image (AI workflow)
- How It Works — 3 step illustrations
- Testimonial — 1 headshot (circular)
- Services — Pillar 1 header image (campaign dashboard)
- Services — Pillar 2 header image (AI workflow diagram)
- Services — 8 service card icons
- About — founder/team photo
- About — 3 team headshots (circular)

## Responsive Behavior

- **Desktop (1024px+):** Full layouts as designed — side-by-side heroes, 2x2 grids, horizontal stats
- **Tablet (768-1023px):** Side-by-side layouts stack to single column, 2x2 grids become 2x1
- **Mobile (< 768px):** Everything single column, hamburger nav, full-width cards, stats stack 2x2

## Form Handling

The Apply page form submits to a Next.js API route (`/api/apply`). Implementation options:
- Send email via Resend API
- Store in a simple database (Supabase/Airtable)
- Forward to a webhook

Show a success state after submission: "Application received. We'll be in touch within 48 hours."

## SEO

- Unique meta title + description per page
- Semantic HTML (proper heading hierarchy, landmark elements)
- Schema markup for LocalBusiness
- Open Graph + Twitter Card meta tags
- Sitemap.xml generated by Next.js
