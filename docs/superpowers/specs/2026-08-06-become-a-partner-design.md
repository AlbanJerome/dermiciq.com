# Become a Partner Page — Design Spec

**Date:** 2026-08-06  
**Status:** Approved (conversation); awaiting final review of this file  
**Route:** `/become-a-partner`

## Goal

Add a marketing content page that explains the DermicIQ partner program, matches existing site aesthetics, and routes applicants to `https://app.dermiciq.com/partner`. Wire the page into primary navigation (after Contact) and the footer.

## Decisions

| Topic | Decision |
|-------|----------|
| Approach | Mirror How it works / About patterns (Approach A) |
| “Learn How It Works” | Visible secondary CTA, non-navigating until Affiliate Partner Agreement content exists |
| Content source | `client/src/config/siteContent.ts` (same as other pages) |
| Nav placement | After Contact |
| Footer placement | Company column, after Contact |

## Out of scope

- Affiliate Partner Agreement page/content (placeholder CTA only)
- Partner application form on this marketing site (lives at app.dermiciq.com)
- Changes to home page sections or CTAs beyond nav/footer links

## Information architecture

1. **Page header** — Headline, supporting text, primary Apply CTA, disabled secondary “Learn How It Works”
2. **Partner with DermicIQ** — Program overview + commission model
3. **Is This Program Right for Your Business?** — Eligibility intro + business-type list
4. **What Partners Receive** — Four icon benefit cards
5. **How the Partnership Works** — Four numbered steps
6. **Closing CTA** — Apply Now band (same visual treatment as About / How it works)

## Copy (canonical)

### Header

- **Headline:** Help Your Clients Make More Informed Beauty Decisions
- **Supporting text:** Become a DermicIQ Partner and give your clients access to a simpler way to understand cosmetic ingredients, explore products, and make more confident beauty and skincare choices.
- **Primary button:** Apply to Become a Partner → `https://app.dermiciq.com/partner` (external, new tab)
- **Secondary:** Learn How It Works — styled as a link/button, non-clickable (`aria-disabled`), no destination yet

### Partner with DermicIQ

DermicIQ partners with licensed businesses in the beauty and aesthetic industry that value education, transparency, and personalized client care.

Approved partners receive a unique discount code to share with their clients. When clients use that code to purchase an eligible annual DermicIQ membership, the partner receives a fixed commission for each successful membership signup.

### Is This Program Right for Your Business?

We are currently welcoming established, licensed businesses with an existing client base, including:

- Medical aesthetic clinics
- Aesthetics and skincare businesses
- Spas and wellness clinics
- Beauty salons and professional beauty studios
- Cosmetic retailers and beauty boutiques
- Other licensed businesses serving skincare, beauty, or aesthetic clients

Closing: If your business regularly helps clients make decisions about beauty or personal-care products, we would love to learn more about you.

### What Partners Receive (4 benefits)

1. **Earn commission** — Receive a fixed commission for each eligible annual membership purchased using your unique partner discount code.
2. **Receive training** — Learn how to introduce DermicIQ and explain its features to your team and clients.
3. **Access ready-to-use marketing materials** — Receive in-store promotional materials and prepared social media graphics to help you promote the app.
4. **Track your results** — Monitor membership signups and earned commissions through your partner portal.

### How the Partnership Works (4 steps)

1. **Apply** — Tell us about your licensed business, client base, and interest in DermicIQ.
2. **Get approved** — Our team reviews your application and contacts approved businesses with next steps.
3. **Receive your partner tools** — Approved partners receive a unique discount code, partner portal access, training, and promotional materials.
4. **Share DermicIQ with your clients** — Introduce your clients to DermicIQ through your business, in-store materials, social media, and other approved channels.

### Closing CTA

- **Heading:** Interested in Becoming a DermicIQ Partner?
- **Body:** Complete the application form and tell us about your business. We will review your information and contact you if your business is selected for the program.
- **Button:** Apply Now → `https://app.dermiciq.com/partner`

## Visual / UX

- Reuse `Layout`, `ContentPageHeader`, `ContentPageBody`, `SEO`, `Button`, `Card`
- Typography, spacing, mint washes, and CTA gradient band match About / How it works
- Benefits: icon + title + body in a responsive grid (Lucide icons)
- Steps: numbered cards consistent with How it works
- Business list: check-style bullets consistent with About
- No new design system tokens required

## Technical integration

| File | Change |
|------|--------|
| `client/src/config/siteContent.ts` | Add `pages.becomeAPartner` content; nav link after Contact; footer Company link after Contact |
| `client/src/pages/become-a-partner.tsx` | New page component |
| `client/src/App.tsx` | Lazy route for `/become-a-partner` |

Navigation and Footer already map over `siteContent` — no structural changes needed beyond config entries.

## Accessibility

- Secondary CTA: `aria-disabled="true"` (and preferably not a real link); do not use a misleading working URL
- External Apply links: `target="_blank"` + `rel="noopener noreferrer"`
- Benefit/step lists use semantic headings and lists where appropriate
- SEO title/description/path set via existing `SEO` component

## Success criteria

- [ ] Page renders at `/become-a-partner` with all sections and approved copy
- [ ] Nav shows Become a Partner after Contact (desktop + mobile)
- [ ] Footer Company column includes the same link after Contact
- [ ] Apply CTAs open `https://app.dermiciq.com/partner`
- [ ] Learn How It Works is visible but does not navigate
- [ ] Visual language matches existing content pages
