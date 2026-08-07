# DermicIQ™ Brand Aesthetics

Shareable brand card for marketing site, product code, and blog repos.  
Source of truth on the marketing site: `client/src/config/brand.ts` + `client/src/styles/brand-tokens.css`.

## Direction

Clinical-calm mint and deep sea teal. Clean, trustworthy, light surfaces.

Not purple/indigo gradients. Not cream + serif + terracotta. Not dark-mode-first.

## Colors

| Role | Name | Hex | Use |
|------|------|-----|-----|
| Recognition | Vibrant Turquoise | `#6AEEE8` | Logo highlight, accent chips |
| Background | Minty Off-White | `#F8FFFE` | Page canvas |
| Primary | Deep Sea Teal | `#005F5B` | CTAs, headings, links, theme-color |
| Secondary | Soft Mint | `#C8F2EB` | Soft fills, section washes |
| Text | Deep Charcoal Teal | `#223331` | Body copy |
| Alert | Soft Coral | `#FF9E9E` | Errors / warnings |

- **Theme / PWA chrome:** `#005F5B`
- **Footer background:** deeper teal `hsl(177 100% 16%)`
- **Footer foreground:** `#F8FFFE`

## Typography

| Token | Value |
|-------|--------|
| Family | Montserrat |
| Weights | 400, 600, 700 |
| Stack | `"Montserrat", system-ui, sans-serif` |
| Google Fonts | `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap` |

### Type scale

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero (mobile) | `2.5rem` | 700 | line-height 1.12, letter-spacing `-0.02em` |
| Hero | `3.25rem` | 700 | line-height 1.1, letter-spacing `-0.02em` |
| Hero (lg) | `3.75rem` | 700 | line-height 1.08, letter-spacing `-0.02em` |
| Section | `2.25rem` | 600 | letter-spacing `-0.01em` |
| Section (lg) | `2.75rem` | 600 | letter-spacing `-0.01em` |
| Body large | `1.125rem` | 400 | line-height 1.7 |
| Body | `1rem` | 400 | line-height 1.6 |
| Caption | `0.875rem` | 500 | line-height 1.5 |
| Nav caption | `0.625rem` | 600 | letter-spacing `0.14em` |

## Shape & elevation

- **Radius base:** `0.5rem`
  - sm: base − 4px · md: base − 2px · lg: base · xl: base + 4px · 2xl: base + 0.5rem
- **Shadows:** soft charcoal-teal tint, low opacity — no heavy glow
- **Motion:** `fade-up` 0.55s ease-out (subtle presence)

## Semantic UI mapping

Prefer semantic tokens in components — not raw hex.

| Token | Maps to |
|-------|---------|
| `primary` | Deep Sea Teal `#005F5B` |
| `primary-foreground` | Minty Off-White `#F8FFFE` |
| `accent` | Vibrant Turquoise `#6AEEE8` |
| `secondary` | Soft Mint `#C8F2EB` |
| `destructive` | Soft Coral `#FF9E9E` |
| `background` | Minty Off-White `#F8FFFE` |
| `foreground` | Deep Charcoal Teal `#223331` |

## Drop-in CSS primitives

```css
:root {
  --brand-turquoise: #6AEEE8;
  --brand-mint-bg: #F8FFFE;
  --brand-teal: #005F5B;
  --brand-soft-mint: #C8F2EB;
  --brand-charcoal: #223331;
  --brand-coral: #FF9E9E;
  --brand-font-sans: "Montserrat", system-ui, sans-serif;
  --radius: 0.5rem;
  --theme-color: #005F5B;
}
```

## Do / don’t

**Do**

- Mint washes and soft secondary fills
- Teal for primary CTAs, headings, and links
- Turquoise sparingly for brand recognition
- Left-border accents in primary teal
- Light, airy layouts with calm hierarchy

**Don’t**

- Purple / indigo gradient themes
- Cream background + high-contrast serif + terracotta
- Dark mode as the default brand surface
- Heavy glow effects or neon accents
- Emoji decoration as brand language
- Card-heavy heroes or dashboard clutter on marketing surfaces

## Logo assets

| Size | Files | Typical use |
|------|-------|-------------|
| 96px | `logo-96.png` / `logo-96.webp` | Nav (~44px), footer (~48px) |
| 192px | `logo-192.png` / `logo-192.webp` | OG / PWA / larger marks |

Display treatment: `rounded-2xl`, light shadow.

## Keeping repos in sync

1. Treat this file as the portable brand card for the marketing site.
2. Keep `client/src/config/brand.ts` and `client/src/styles/brand-tokens.css` aligned with the hex values above.
3. Platform (`dermiciq_code`) mirrors these hexes in `lib/design-system.ts` and its root `BRAND.md` — do not invent alternate teals.
4. Product exception: the app keeps **near-black primary CTAs**; teal is accent-only there. Marketing CTAs stay Deep Sea Teal.
