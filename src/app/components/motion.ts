import { useReducedMotion, type Variants } from "motion/react";

const DISTANCE = 12;
export const DURATION = 0.42;
export const EASE = [0.16, 1, 0.3, 1] as const;

// Bottom margin (-80px) delays the trigger slightly until a section is nearly
// in view, for a natural "reveal as you scroll to it" feel. Top margin
// (2000px) is a safety net, not a timing choice: it guarantees a section that
// gets skipped over by a fast/instant jump (keyboard End, scrollbar drag,
// scroll restoration) is still treated as "seen" once it's above the
// viewport, so content can never end up permanently stuck at opacity 0.
export const viewportOnce = { once: true, margin: "2000px 0px -80px 0px" } as const;

// Bare variant with no `transition` of its own — for single instances where
// the caller always passes an explicit `transition` prop, so there's no
// ambiguity between a variant-level and prop-level transition.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: { opacity: 1, y: 0 },
};

// Same motion, but with the transition baked into the variant — for children
// of a `staggerContainer` parent, which never receive their own `transition`
// prop and instead rely on standard Framer/Motion variant propagation.
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

export function fadeUpTransition(delay = 0) {
  return { duration: DURATION, ease: EASE, delay };
}

export function staggerContainer(staggerChildren = 0.05, delayChildren = 0): Variants {
  return { hidden: {}, visible: { transition: { staggerChildren, delayChildren } } };
}

const still: Variants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };

export function useMotionPreset() {
  const reduced = useReducedMotion();
  return {
    reduced,
    fadeUp: reduced ? still : fadeUp,
    fadeUpItem: reduced ? still : fadeUpItem,
    staggerContainer: (staggerChildren = 0.05, delayChildren = 0) =>
      reduced ? staggerContainer(0, 0) : staggerContainer(staggerChildren, delayChildren),
    transition: (delay = 0) => (reduced ? { duration: 0 } : fadeUpTransition(delay)),
  };
}
