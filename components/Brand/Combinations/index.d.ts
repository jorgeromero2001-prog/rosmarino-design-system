/** Rosmarino approved color combinations */
export type CombinationName = 'hero' | 'card' | 'cta' | 'nature';

export interface Combination {
  name: CombinationName;
  background: string;
  text: string;
  textMuted: string;
  accent: string;
  ctaBackground: string;
  ctaText: string;
  /** Use for hero sections and full-bleed dark areas */
  hero: { bg: '--charcoal'; text: '--cream'; accent: '--cognac' };
  /** Use for product cards and content surfaces */
  card: { bg: '--cream'; text: '--charcoal'; cta: '--burgundy' };
  /** Use for promotional banners and call-to-action blocks */
  cta: { bg: '--burgundy'; text: '--cream'; cta: '--cream' };
  /** Use for origin/sustainability/story sections */
  nature: { bg: '--forest'; text: '--cream'; cta: '--cognac-light' };
}
