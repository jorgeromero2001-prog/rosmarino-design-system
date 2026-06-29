# Typography — Rosmarino

**Única fuente: TT Hoves Pro** (Trial). Loaded via `styles.css`. Fallback: `DM Sans`.

Always declare: `font-family: var(--font-brand);` — never reference the font name directly.

## Scale

| Role | Weight | Size | Notes |
|---|---|---|---|
| Display | 300 | `clamp(2.5rem, 6vw, 4rem)` | `letter-spacing: -0.02em` |
| Title | 300 | `clamp(1.5rem, 3vw, 2rem)` | `letter-spacing: -0.01em` |
| Subtitle | 400 | `1.25rem` | — |
| Body | 400 | `1rem` | `line-height: 1.7` |
| Caption | 300 italic | `0.875rem` | color `--stone` |
| DemiBold | 600 | inherited | Prices, emphasis only |
| Label/Eyebrow | 400 | `0.65rem` | `letter-spacing: 0.35em; text-transform: uppercase; color: var(--stone)` |

## Rules
- Display and Title are always weight **300** (Light) — never Bold for headlines.
- DemiBold (600) is reserved for prices and key emphasis. Don't use for headings.
- Italic is weight 300 or 400 only — loaded as separate font files.
- No font size below `0.55rem`.
