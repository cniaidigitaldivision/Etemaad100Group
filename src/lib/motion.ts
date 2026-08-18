/**
 * Shared Framer Motion animation variants used across the site.
 * Centralised here so any tuning is applied everywhere consistently.
 */

/** Fade-up reveal – used for section headers, paragraphs, divider lines */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Container that staggers its direct children */
export const staggerContainer = (stagger = 0.15, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Child variant for staggered grids (amenities, shop cards, etc.) */
export const staggerChild = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Hero entrance – slide up from further down, longer duration */
export const heroSlideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  },
});

/** Viewport options shared across all scroll-triggered elements */
export const viewportOnce = { once: true, margin: "-80px" };
