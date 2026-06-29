# Logo — Rosmarino

Two logo assets available (transparent PNG):
- `assets/logo-transparente.png` — isotipo (leaf/oval icon mark)
- `assets/wordmark-transparente.png` — wordmark "rosmarino" in lowercase

## Usage

```html
<!-- Light background (warm-white, cream) — logo as-is -->
<img src="assets/logo-transparente.png" alt="Rosmarino" style="height: 48px;">

<!-- Dark background (charcoal, burgundy, cognac, forest) — invert -->
<img src="assets/logo-transparente.png" alt="Rosmarino" style="height: 48px; filter: invert(1);">
```

## Rules
- Never modify the logo color directly — use `filter: invert(1)` on dark backgrounds only.
- Minimum clear space: equal to the height of the isotipo's oval.
- Do not add drop-shadow, glow, or outline effects.
- Do not place on low-contrast photographic backgrounds without a solid color overlay.
