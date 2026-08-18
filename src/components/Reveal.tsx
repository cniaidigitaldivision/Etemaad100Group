import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from "@/lib/motion";

/**
 * Reveal — scroll-triggered fade-up animation wrapper.
 * @param delay     Extra delay in seconds before the animation starts (additive with stagger)
 * @param stagger   If true, wraps children in a staggered container (use on grids)
 * @param amount    IntersectionObserver threshold (0–1). Default 0.12.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  amount = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  amount?: number;
}) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewportOnce, amount }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * RevealChild — use inside a <Reveal stagger> container.
 * Each child animates in sequence with the stagger timing.
 */
export function RevealChild({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}
