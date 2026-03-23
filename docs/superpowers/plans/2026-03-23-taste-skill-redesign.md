# Scale OS Taste-Skill Redesign Plan

**Goal:** Upgrade the Scale OS website from a clean but generic design to a premium, modern, slightly futuristic aesthetic using taste-skill principles.

**Settings:** DESIGN_VARIANCE: 6, MOTION_INTENSITY: 7, VISUAL_DENSITY: 3

**Approach:** Targeted upgrades to existing components — not a rewrite. Work through the taste-skill's redesign audit systematically.

---

## Redesign Tasks

### Task 1: Typography & Font Upgrade

**Files:** `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/globals.css`

- Replace Inter with **Geist Sans** (body) + keep Georgia serif for headlines
- Install `geist` font package
- Add tabular-nums for stats/numbers
- Tighten headline letter-spacing (`tracking-tighter` on h1/h2)
- Add `text-wrap: balance` on headlines

### Task 2: Color & Surface Refinement

**Files:** `tailwind.config.ts`, `src/app/globals.css`

- Add subtle noise/grain texture overlay to dark sections (CSS pseudo-element, `pointer-events-none`)
- Tint shadows to match background hue instead of generic black
- Add subtle gradient mesh or radial gradient to hero section background
- Replace pure `bg-white` sections with very subtle warm tint
- Add colored shadows on cards (tinted to forest-light)

### Task 3: Animation Overhaul — Spring Physics & Stagger

**Files:** `src/components/shared/FadeIn.tsx` (upgrade), new `src/components/shared/StaggerContainer.tsx`, `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`

- Replace easeOut with spring physics on FadeIn (`type: "spring", stiffness: 100, damping: 20`)
- Add StaggerContainer component for list/grid reveals (`staggerChildren: 0.1`)
- Add tactile button feedback: `scale(0.98)` on `:active` / whileTap
- Add magnetic hover micro-effect on CTA buttons (subtle pull toward cursor using useMotionValue)
- Card hover: replace simple translate with spring-based lift + tinted shadow

### Task 4: Homepage Section Upgrades

**Files:** All `src/components/home/*.tsx`

**Hero.tsx:**
- Add subtle radial gradient behind the hero content
- Stagger the headline words/lines on load
- Add floating subtle accent shape (CSS, not 3D) for visual interest

**PlatformLogos.tsx:**
- Add infinite slow scroll marquee effect instead of static row
- Remove grayscale, use opacity only

**Problem.tsx:**
- Add noise texture to dark bg
- Animate the image placeholder with a subtle pulse/glow

**Stats.tsx:**
- Make numbers much larger (48-56px)
- Add a subtle background accent behind each stat
- Use tabular-nums font feature

**HowWeWork.tsx:**
- Add a connecting line between steps (horizontal on desktop, vertical on mobile)
- Stagger step card reveals

**Testimonial.tsx:**
- Add oversized quotation mark as decorative element
- Larger quote text

**FinalCTA.tsx:**
- Add subtle animated gradient or shimmer on the CTA button
- Noise texture on dark bg

### Task 5: Navbar & Footer Polish

**Files:** `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`

**Navbar:**
- Add scroll-based background opacity (transparent at top, solid on scroll)
- Smooth transition between states

**Footer:**
- Simplify — remove the "Pages" column header, just list links
- Add subtle top border gradient instead of solid line

### Task 6: Services & About Page Upgrades

**Files:** `src/components/services/*.tsx`, `src/components/about/*.tsx`

- Apply stagger reveals to all grids
- Replace generic card icons with Phosphor icons (install `@phosphor-icons/react`)
- Add tinted shadows on service cards
- Principles section: add subtle glow/accent on principle numbers
- Team section: upgrade photo placeholders with subtle ring/border accent

### Task 7: Apply Page Form Polish

**Files:** `src/components/apply/ApplyForm.tsx`

- Add spring animation on toggle pill selection
- Smooth form field focus transitions
- Add subtle success animation (checkmark draws in)
- Better input styling with consistent focus ring

### Task 8: ImagePlaceholder Upgrade

**Files:** `src/components/ui/ImagePlaceholder.tsx`

- Remove emoji (taste-skill ANTI-EMOJI policy)
- Replace with clean SVG icon or just text label
- Add subtle shimmer/pulse animation to suggest "image coming soon"
- More premium look — remove dashed border, use solid subtle border + gradient bg
