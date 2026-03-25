# Scale OS Website — Development Guidelines

@AGENTS.md

## Project Overview
Premium Shopify agency website for Scale OS LLC. Next.js 16 App Router, Tailwind CSS v3, Framer Motion, deployed on Vercel.

## Tech Stack
- **Framework:** Next.js 16 (App Router, Server Components by default)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Fonts:** Space Grotesk (display headlines), Geist Sans (body)
- **Icons:** @phosphor-icons/react (weight="light", consistent size)
- **Deployment:** Vercel

## Design System: Kinetic Precision

### Color Palette
- **Primary:** #0058bc (use sparingly — accents, CTAs, interactive states)
- **Primary Container:** #0070eb (hover state for primary)
- **On Primary:** #ffffff
- **Background:** #f8f9fa (page background)
- **Surface Low:** #f3f4f5 (alternate sections)
- **Surface High:** #e1e3e4 (hover states, dividers)
- **Surface Card:** #ffffff (elevated cards)
- **On Surface:** #191c1d (primary text)
- **On Surface Variant:** #41484d (secondary text)
- **Error:** #ba1a1a
- NEVER use purple, neon, or oversaturated colors

### No-Line Rule
- NO 1px borders anywhere — use background color shifts to separate regions
- NO `border`, `ring-1`, `divide-y` — use spacing, opacity, and bg shifts instead
- Separation is communicated through elevation (shadow-ambient) or bg color change

## Architecture Rules

### Component Organization
- `src/components/ui/` — Reusable primitives (Button, Card, Section, Eyebrow, ImagePlaceholder, CountUp)
- `src/components/shared/` — Shared composed components (FadeIn, StaggerContainer, CTASection)
- `src/components/layout/` — Layout components (Navbar, Footer)
- `src/components/home/` — Homepage sections
- `src/components/services/` — Services page sections
- `src/components/about/` — About page sections
- `src/components/apply/` — Apply page form
- `src/lib/` — Constants, validation, utilities

### Server vs Client Components
- Default to Server Components (RSC)
- Use `"use client"` ONLY when interactivity is required (state, effects, event handlers, framer-motion animations)
- Isolate client components as leaf nodes — keep parent layouts as server components
- Never put `"use client"` on page.tsx files unless absolutely necessary

### Styling
- Tailwind CSS v3 exclusively — no inline styles except for computed values
- Custom design tokens defined in `tailwind.config.ts`
- Never use Tailwind v4 syntax (this is a v3 project)
- Use `max-w-container` (1280px) for content width
- Responsive: mobile-first with `md:` and `lg:` breakpoints

### Typography
- Headlines (h1, h2): `font-display tracking-tighter` (Space Grotesk via CSS variable)
- Display sizes: `text-display-lg` (3.5rem), `text-display-md` (2.75rem), `text-display-sm` (2rem)
- Body: `font-sans` (Geist Sans via CSS variable)
- Labels: `text-label-sm uppercase` (11px, 500 weight, 0.05em tracking)
- Use `text-wrap: balance` on headlines (set globally in globals.css)
- Use `tabular-nums` class for numerical data

### Animations
- Use Framer Motion with spring physics: `type: "spring", stiffness: 100, damping: 20`
- FadeIn component for scroll-triggered reveals (supports direction prop)
- StaggerContainer for grid/list sequential reveals
- Button tactile feedback: `whileTap={{ scale: 0.97 }}`
- Custom easing: `cubic-bezier(0.32, 0.72, 0, 1)` for all transitions
- NEVER animate `top`, `left`, `width`, `height` — use `transform` and `opacity` only
- NEVER use `window.addEventListener('scroll')` — use Framer Motion hooks (useScroll, useTransform)

### Component Patterns
- **Section:** Accepts `variant` prop — "background", "surface-low", "dark", "primary"
- **Card:** Accepts `elevated`, `hover`, `dark` props. Elevated = white + shadow-ambient. No borders.
- **Eyebrow:** `text-label-sm uppercase text-primary mb-5`
- **Button:** Rounded-md, three variants (primary, secondary, ghost). Optional `arrow` prop.
- **CTASection:** Shared CTA block with `variant` prop for dark/light backgrounds
- **Navbar:** Floating pill nav, centered, `backdrop-blur-xl`, scroll-reactive opacity via Framer Motion

### Performance
- Optimize images with `next/image`
- Use `next/font` for font loading (Geist Sans + Space Grotesk via CSS variables)
- Keep component files focused and small (< 150 lines ideally)
- Use `will-change: transform` sparingly
- No arbitrary z-index values — use z-10, z-20, z-30, z-40, z-50 scale

### Anti-Patterns (NEVER DO)
- No emojis in code, markup, or alt text — use Phosphor icons or SVG
- No Inter or Georgia fonts — we use Geist Sans + Space Grotesk
- No purple/blue AI gradient aesthetic
- No generic card overuse — cards only when elevation communicates hierarchy
- No Lorem Ipsum — write real copy
- No `h-screen` for hero sections — use `min-h-[100dvh]` if needed
- No complex flexbox percentage math — use CSS Grid
- No `useState` for continuous animations — use Framer Motion's `useMotionValue`
- No 1px borders — use background shifts and spacing (No-Line Rule)

### Form Handling
- Validation logic in `src/lib/validation.ts`
- API route at `src/app/api/apply/route.ts`
- Client-side validation on submit, server-side validation in API route
- Error display: inline below fields, error color (#ba1a1a)
- Form inputs: `bg-surface-low` default, `bg-surface-card` on focus with primary underline
- Toggle pills: `bg-surface-low` default, `bg-primary/10 text-primary` selected
- Loading state: button text changes, disabled state
- Success state: form replaced with confirmation message

### SEO
- Unique metadata per page via Next.js Metadata API
- LocalBusiness JSON-LD schema in root layout
- Sitemap at `src/app/sitemap.ts`
- Semantic HTML: `<nav>`, `<main>`, `<footer>`, `<section>`, proper heading hierarchy
- All images need descriptive alt text

### Git Conventions
- Commit messages: `feat:`, `fix:`, `refactor:`, `chore:` prefixes
- One logical change per commit
- Build must pass before committing

## Company Details
- **Company:** Scale OS LLC
- **Address:** 1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801
- **Domain:** scaleos.com (planned)
