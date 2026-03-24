# Scale OS Website — Development Guidelines

@AGENTS.md

## Project Overview
Premium Shopify agency website for Scale OS LLC. Next.js 16 App Router, Tailwind CSS v3, Framer Motion, deployed on Vercel.

## Tech Stack
- **Framework:** Next.js 16 (App Router, Server Components by default)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Font:** Geist Sans (body), Georgia (serif headlines)
- **Icons:** @phosphor-icons/react (weight="light", consistent size)
- **Deployment:** Vercel

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
- Custom design tokens defined in `tailwind.config.ts` (ink, forest, off-white, surface, etc.)
- Never use Tailwind v4 syntax (this is a v3 project)
- Use `max-w-container` (1200px) for content width
- Responsive: mobile-first with `md:` and `lg:` breakpoints

### Typography
- Headlines (h1, h2): `font-serif font-light tracking-tighter` (Georgia)
- Body: `font-sans` (Geist Sans via CSS variable)
- Eyebrows/Labels: `text-eyebrow uppercase text-forest` (11px, 600 weight, 2px letter-spacing)
- Use `text-wrap: balance` on headlines (set globally in globals.css)
- Use `tabular-nums` class for numerical data

### Color Palette — "Ink + Forest"
- Primary: ink (#111111), forest (#2D6A4F)
- Backgrounds: white, off-white (#FAFAF8), surface (#F0F0EC)
- Dark sections: ink bg, text white, body #AAAAAA, muted #666666
- Accent light: forest-light (#E8F0EC)
- Shadows: forest-tinted (shadow-card, shadow-card-hover, shadow-btn)
- NEVER use purple, neon, or oversaturated colors

### Animations
- Use Framer Motion with spring physics: `type: "spring", stiffness: 100, damping: 20`
- FadeIn component for scroll-triggered reveals (supports direction prop)
- StaggerContainer for grid/list sequential reveals
- Button tactile feedback: `whileTap={{ scale: 0.97 }}`
- NEVER animate `top`, `left`, `width`, `height` — use `transform` and `opacity` only
- NEVER use `window.addEventListener('scroll')` — use Framer Motion hooks

### Performance
- Optimize images with `next/image`
- Use `next/font` for font loading (Geist Sans loaded via `geist/font/sans`)
- Keep component files focused and small (< 150 lines ideally)
- Use `will-change: transform` sparingly
- Noise textures on fixed pseudo-elements only (`pointer-events-none`)
- No arbitrary z-index values — use z-10, z-20, z-30, z-40, z-50 scale

### Anti-Patterns (NEVER DO)
- No emojis in code, markup, or alt text — use Phosphor icons or SVG
- No Inter font — we use Geist Sans
- No purple/blue AI gradient aesthetic
- No generic card overuse — cards only when elevation communicates hierarchy
- No Lorem Ipsum — write real copy
- No `h-screen` for hero sections — use `min-h-[100dvh]` if needed
- No complex flexbox percentage math — use CSS Grid
- No `useState` for continuous animations — use Framer Motion's `useMotionValue`

### Form Handling
- Validation logic in `src/lib/validation.ts`
- API route at `src/app/api/apply/route.ts`
- Client-side validation on submit, server-side validation in API route
- Error display: inline below fields, red (#DC2626)
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
