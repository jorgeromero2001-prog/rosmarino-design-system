/** Rosmarino typography scale */
export type FontWeight = 300 | 400 | 500 | 600;

export interface TypographyScale {
  /** Display: weight 300, clamp(2.5rem,6vw,4rem), letter-spacing -0.02em */
  display: { fontWeight: 300; fontSize: string; letterSpacing: '-0.02em' };
  /** Title: weight 300, clamp(1.5rem,3vw,2rem), letter-spacing -0.01em */
  title: { fontWeight: 300; fontSize: string; letterSpacing: '-0.01em' };
  /** Subtitle: weight 400, 1.25rem */
  subtitle: { fontWeight: 400; fontSize: '1.25rem' };
  /** Body: weight 400, 1rem, line-height 1.7 */
  body: { fontWeight: 400; fontSize: '1rem'; lineHeight: 1.7 };
  /** Caption/Italic: weight 300 italic, 0.875rem */
  caption: { fontWeight: 300; fontStyle: 'italic'; fontSize: '0.875rem' };
  /** DemiBold: weight 600 — prices, emphasis */
  demibold: { fontWeight: 600 };
  /** Label/Eyebrow: weight 400, 0.65rem, letter-spacing 0.35em, uppercase */
  label: { fontWeight: 400; fontSize: '0.65rem'; letterSpacing: '0.35em'; textTransform: 'uppercase' };
}
