# ColorPalette — Rosmarino

All colors are CSS custom properties declared in `styles.css`. Always use `var(--token)`, never hardcode hex values.

## Primary palette

| Token | Hex | Use |
|---|---|---|
| `--cognac` | #A0673C | ★ Main accent — CTAs, links, highlights |
| `--cognac-light` | #C4854E | Hover states, secondary accent |
| `--burgundy` | #6B2D3E | Alternative CTA, dark accents |
| `--forest` | #2E4A3A | Nature/origin sections |

## Neutrals

| Token | Use |
|---|---|
| `--warm-white` | Page/layout background |
| `--cream` | Card, surface background |
| `--cream-dark` | Borders, dividers, subtle separators |
| `--charcoal` | Primary text, hero backgrounds |
| `--stone` | Secondary text, labels, metadata |
| `--stone-light` | Placeholder, hint text |

## Rules
- Never use pure black or white — use `--charcoal` and `--warm-white`.
- The accent is `--cognac`, NOT `#c4a87a` or any golden yellow.
- For hover on cards, change `border-color` to `--cognac-light`. No box-shadow elevation.
