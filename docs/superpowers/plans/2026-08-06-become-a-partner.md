# Become a Partner Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `/become-a-partner` marketing page with nav + footer links, matching existing content-page aesthetics.

**Architecture:** Content in `siteContent.ts`; presentational page mirrors About / How it works (`ContentPageHeader`, `ContentPageBody`, Cards, pill CTAs). Nav and Footer already consume config arrays.

**Tech Stack:** React, wouter, Tailwind, Lucide, existing Layout/SEO/Button/Card.

**Spec:** `docs/superpowers/specs/2026-08-06-become-a-partner-design.md`

## Global Constraints

- Preserve existing design system (no new color themes)
- External Apply URL: `https://app.dermiciq.com/partner` with `target="_blank"` + `rel="noopener noreferrer"`
- Secondary “Learn How It Works” is visible but non-navigating (`aria-disabled`)
- Nav link after Contact; footer Company link after Contact
- Do not commit unless the user asks

---

### Task 1: Add partner content + nav/footer links

**Files:**
- Modify: `client/src/config/siteContent.ts`

- [ ] **Step 1: Insert nav link after Contact**

In `navigation.links`, after Contact:

```ts
{ label: "Contact", href: "/contact" },
{ label: "Become a Partner", href: "/become-a-partner" },
```

- [ ] **Step 2: Insert footer Company link after Contact**

```ts
{ label: "Contact", href: "/contact" },
{ label: "Become a Partner", href: "/become-a-partner" },
```

- [ ] **Step 3: Add `pages.becomeAPartner` object**

Add after `pages.contact` (before closing of `pages`), with all copy from the design spec: metaTitle, metaDescription, headline, intro, primaryCta, secondaryCta (label only), overview section, eligibility section, benefits (4), steps (4), closingCta.

Apply href constant: `https://app.dermiciq.com/partner`.

---

### Task 2: Create page component

**Files:**
- Create: `client/src/pages/become-a-partner.tsx`

- [ ] **Step 1: Create page using Layout + ContentPageHeader/Body + SEO**

Structure:
1. Header with intro + Apply pill link + disabled secondary button/text
2. Overview section (h2 + paragraphs)
3. Eligibility section (h2 + intro + Check list + closing)
4. Benefits grid (4 Cards with Lucide icons: Banknote/HandCoins, GraduationCap, Megaphone, ChartLine)
5. Steps grid (4 numbered Cards like how-it-works)
6. Closing CTA gradient band with Apply Now

Icons array local to file (like `how-it-works.tsx`). Secondary CTA: `<Button type="button" variant="ghost" disabled aria-disabled="true">` or equivalent styled span/button — not an `<a>`.

---

### Task 3: Register route

**Files:**
- Modify: `client/src/App.tsx`

- [ ] **Step 1: Lazy import + Route**

```ts
const BecomeAPartner = lazy(() => import("@/pages/become-a-partner"));
// ...
<Route path="/become-a-partner" component={BecomeAPartner} />
```

Place near other content routes (after contact is fine).

---

### Task 4: Verify

- [ ] **Step 1: Typecheck / lint touched files if available**
- [ ] **Step 2: Confirm nav order, footer link, page sections, disabled secondary CTA, external Apply links**

---

## Spec coverage checklist

| Spec requirement | Task |
|------------------|------|
| Route `/become-a-partner` | 3 |
| All copy sections | 1–2 |
| Nav after Contact | 1 |
| Footer after Contact | 1 |
| Apply → app URL | 1–2 |
| Disabled Learn How It Works | 2 |
| Match About/How it works visuals | 2 |
