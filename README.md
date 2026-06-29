# Rosmarino — Brand Pack

Rosmarino es una marca mexicana de artículos de piel de cabrito hechos a mano, con 4 generaciones de historia. El estilo visual es artesanal, cálido, con carácter italiano pero raíces mexicanas. Elegante sin ser frío. Cercano sin ser casual.

## 1. Wrapping & Setup

Import `styles.css` first — it loads TT Hoves via `@font-face` and declares all CSS tokens in `:root`. No JavaScript setup required.

```html
<link rel="stylesheet" href="styles.css">
```

Then always set on `body`:
```css
body {
  font-family: var(--font-brand); /* 'TT Hoves', 'DM Sans', sans-serif */
  background: var(--warm-white);
  color: var(--charcoal);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
```

## 2. Styling Idiom — CSS Custom Properties

This system uses CSS custom properties (no utility classes, no component framework). Style everything via `var(--token)`.

**Color tokens** (most-used):
| Token | Value | Use |
|---|---|---|
| `--warm-white` | #FDFBF7 | Page background |
| `--cream` | #F5F0E8 | Card/surface background |
| `--cream-dark` | #E8E0D4 | Borders, dividers |
| `--charcoal` | #1A1A18 | Primary text, dark backgrounds |
| `--stone` | #8A8680 | Secondary text, labels |
| `--cognac` | #A0673C | ★ Main accent (CTAs, highlights) |
| `--cognac-light` | #C4854E | Hover, secondary accent |
| `--burgundy` | #6B2D3E | Alternate CTA, dark accent |
| `--forest` | #2E4A3A | Nature/origin sections |

**Typography token:** `--font-brand: 'TT Hoves', 'DM Sans', sans-serif;`

**Spacing:** `--space-xs` `--space-sm` `--space-md` `--space-lg` `--space-xl` (0.5–6rem)

**Radius:** `--radius-sm: 8px` `--radius-md: 12px` `--radius-lg: 16px`

## 3. Typography Scale

| Role | CSS | Notes |
|---|---|---|
| Display | `font-weight:300; font-size:clamp(2.5rem,6vw,4rem); letter-spacing:-0.02em` | Hero headlines |
| Title | `font-weight:300; font-size:clamp(1.5rem,3vw,2rem); letter-spacing:-0.01em` | Section titles |
| Body | `font-weight:400; font-size:1rem; line-height:1.7` | Paragraphs |
| Label | `font-weight:400; font-size:0.65rem; letter-spacing:0.35em; text-transform:uppercase; color:var(--stone)` | Eyebrows |
| Price | `font-weight:600` | Prices and key emphasis only |
| Caption | `font-weight:300; font-style:italic; font-size:0.875rem; color:var(--stone)` | Product subtitles |

**Rule:** Titles are always weight 300 (Light). Never Bold for headings.

## 4. Logo Usage

```html
<!-- Light background: no filter -->
<img src="assets/logo-transparente.png" style="height:48px;">
<!-- Dark background (charcoal / burgundy / forest): -->
<img src="assets/logo-transparente.png" style="height:48px; filter:invert(1);">
```

## 5. Approved Color Combinations

| Name | Background | Text | CTA |
|---|---|---|---|
| Hero | `--charcoal` | `--cream` | `--cognac` bg / `--cream` text |
| Card | `--cream` | `--charcoal` | `--burgundy` bg / `--cream` text |
| CTA | `--burgundy` | `--cream` | `--cream` bg / `--burgundy` text |
| Nature | `--forest` | `--cream` | `--cognac-light` bg / `--cream` text |

## 6. Components

| Component | Group | Description |
|---|---|---|
| ColorPalette | Brand | Full color palette with hex values |
| Typography | Brand | Type scale — all weights and roles |
| Logo | Brand | Isotipo + wordmark, all background variants |
| Combinations | Brand | 4 approved color layouts with examples |
