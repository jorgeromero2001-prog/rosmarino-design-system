/** Rosmarino logo assets */
export interface LogoAssets {
  /** Isotipo (icon mark) on transparent — use on light or dark backgrounds */
  isotipoTransparente: 'assets/logo-transparente.png';
  /** Wordmark "rosmarino" on transparent */
  wordmarkTransparente: 'assets/wordmark-transparente.png';
}

export interface LogoUsageRule {
  /** On light backgrounds (warm-white, cream): use logo as-is, black version */
  lightBackground: 'no filter';
  /** On dark backgrounds (charcoal, burgundy, cognac, forest): apply filter: invert(1) */
  darkBackground: 'filter: invert(1)';
}
