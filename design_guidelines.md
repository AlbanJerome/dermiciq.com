# Dermiciq Technologies - Design Guidelines

## Design Approach
**Reference-Based Strategy**: Draw inspiration from health-tech leaders like Headspace (clinical trust + approachability) and Stripe (technical sophistication + clarity). Combine with the precision of Linear for typography and the trust-building patterns of Apple's healthcare initiatives.

## Core Design Principles
1. **Clinical Authority**: Professional, scientific credibility through precise typography and structured layouts
2. **Approachable Expertise**: Balance technical depth with human-centered warmth
3. **Regulatory Confidence**: Emphasize timeliness and compliance through strategic content hierarchy
4. **Sovereign Neutrality**: Visual reinforcement of independence and objectivity

---

## Typography System

### Font Families
- **Primary (Headings)**: Inter (600, 700, 800 weights) - Technical precision and readability
- **Secondary (Body)**: Inter (400, 500 weights) - Consistency and clarity
- **Accent (Stats/Callouts)**: Inter (700 weight, tabular numbers)

### Hierarchy
- **H1 (Hero)**: 48px (mobile) / 72px (desktop), weight 800, tracking -0.02em, line-height 1.1
- **H2 (Section Headers)**: 36px (mobile) / 56px (desktop), weight 700, tracking -0.01em, line-height 1.2
- **H3 (Subsections)**: 24px (mobile) / 32px (desktop), weight 600, line-height 1.3
- **Body Large**: 18px, weight 400, line-height 1.7, max-width 65ch
- **Body Regular**: 16px, weight 400, line-height 1.6, max-width 70ch
- **Caption/Microcopy**: 14px, weight 500, line-height 1.5

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 24, 32** for consistent rhythm

- Component padding: p-6 (mobile) / p-8 (desktop)
- Section vertical spacing: py-16 (mobile) / py-24 (desktop)
- Card gaps: gap-6 (mobile) / gap-8 (desktop)
- Content max-width: max-w-7xl (1280px) with px-6 (mobile) / px-8 (desktop) gutters

### Grid System
- **Bento Grid**: 1 column (mobile) / 2 columns (tablet) / 3 columns (desktop)
- **Content Grid**: Single column with max-w-4xl for readability
- **Partner Cards**: 1 column (mobile) / 2 columns (tablet) / 3 columns (desktop)

---

## Component Library

### Navigation
**Desktop**: Horizontal nav with logo left, links center, "Login" button right
**Mobile**: Hamburger menu (top-right) with slide-in drawer, full-screen overlay
- Nav height: 72px (desktop) / 64px (mobile)
- Sticky position with subtle shadow on scroll
- Links: 16px, weight 500, spacing gap-8

### Hero Section (Home Page)
**Layout**: Z-pattern, full viewport height (90vh)
- Left 50%: Headline + subhead + dual CTA buttons (primary + secondary)
- Right 50%: High-resolution clinical photography (dermatologist hands examining skin texture)
- Mobile: Stacked layout, image 40vh, content below

**CTAs**: 
- Primary: "Get Started" (prominent, 48px height, 18px text)
- Secondary: "Learn How It Works" (outline style, same size)
- Buttons with backdrop blur when over images

### Bento Grid (Service Pillars)
**3-column grid** (desktop) with alternating card heights for visual interest
- Each card: 280px min-height, p-8, rounded-2xl, subtle shadow
- Icon: 48px SVG, positioned top-left with mb-6
- Title: H3 size, mb-4
- Description: Body regular, 3-4 lines max

### Regulatory Wedge Section
**Full-width banner** with urgency signaling
- Timeline visualization: Horizontal progress bar showing "Now → 2026 Deadline"
- Split layout: Left 60% (explanation), Right 40% (countdown or urgency CTA)
- Icon: Shield + Calendar SVG combination

### Trust Indicators
**Sovereign Neutrality Badge**: Custom SVG badge (120px × 120px) with shield iconography
- Positioned prominently on Neutrality page hero
- Microcopy: "Zero brand payments. Pure science."

**Stats Section**: 3-column animated counters
- Each stat: Large number (56px, weight 700, tabular-nums) + label below (14px)
- Animate on scroll into view using Framer Motion

### FAQ Accordion
**Single-column layout**, max-w-3xl centered
- Each item: Question (18px, weight 600) + chevron icon
- Expanded answer: Body regular with 16px top padding
- Smooth height transition (300ms ease-in-out)

### Forms (Contact Page)
**2-column layout** (desktop): Left 60% (form), Right 40% (contact info + office hours)
- Form fields: Full-width, 48px height, 16px text, 12px labels
- Integrate Formspree action attribute
- Submit button: Primary style, full-width mobile

### Footer
**4-column grid** (desktop) / stacked (mobile)
- Column 1: Logo + tagline
- Column 2: Product links (Science, Neutrality, Partners)
- Column 3: Legal (Privacy, Terms placeholders)
- Column 4: Newsletter signup (email input + submit)
- Footer height: 320px (desktop) / auto (mobile)

---

## Images

### Hero Image (Home Page)
**Description**: Close-up photograph of dermatologist's gloved hands gently examining a patient's forearm skin under clinical lighting. Focus on professional medical setting with subtle bokeh background. Image should convey expertise, care, and scientific precision.
**Placement**: Right 50% of hero section (desktop), 40vh height on mobile stacked above headline
**Format**: WebP with JPEG fallback, lazy-loaded

### Science Page Header
**Description**: Macro photography of molecular structure visualization or laboratory equipment (microscope, petri dish with skincare formulation). Abstract yet scientific.
**Placement**: Full-width banner (30vh height) above page content

### Neutrality Page Visual
**Description**: Conceptual photography of balanced scales or hands holding a transparent shield, symbolizing protection and objectivity. Clean, minimalist composition.
**Placement**: Left 40% of hero section, alongside "Sovereign Neutrality" badge

### Partners Page
**Description**: Professional office environment showing healthcare practitioner using tablet/laptop for skincare consultation. Bright, modern clinic setting.
**Placement**: Right 50% of introductory section

---

## Animations

**Sparingly Used**:
- Stat counters: Animate from 0 to target value on scroll (500ms duration)
- Accordion expand/collapse: Height transition (300ms)
- Navigation: Fade-in on scroll past hero (200ms)
- Scroll-triggered fade-up: Section headings only (not body text)

**No Animations**:
- Hover effects on buttons (rely on native Button component states)
- Parallax scrolling
- Complex transitions between pages

---

## Page-Specific Guidelines

### /science
- Lead with HDM diagram (SVG infographic showing ingredient → derivative mapping)
- Use step-by-step visual process (numbered circles 1-4)
- Include comparison table: "Binary Apps vs. Dermiciq" (2-column side-by-side)

### /neutrality
- Prominent "No Pay-to-Play" badge hero
- Include testimonial-style quote: "We refuse..." (24px, italic, centered)
- Visual checklist of neutrality commitments (checkmark icons + text)

### /partners
- B2B-focused tone with ROI stats (3-stat counter section)
- CTA: "Schedule Demo" (prominent, tracked separately from consumer CTAs)
- Logo grid placeholder for future clinic/retailer partnerships

### /login
- Centered card (max-w-md), minimal chrome
- Google OAuth button: Full-width, branded (Google logo + "Continue with Google")
- Email fallback below with divider ("or continue with email")
- Redirect to /dashboard (placeholder "Coming Soon" screen post-login)

---

## Accessibility
- Maintain 4.5:1 contrast for all body text
- Interactive elements: 44×44px minimum touch target
- Keyboard navigation: Visible focus states on all interactive elements
- ARIA labels on icon-only buttons
- Skip-to-content link for screen readers