import { motion } from "motion/react";
import { Container, fluid } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

export function AboutManifesto() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    <section className="w-full bg-white">
      <Container>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={transition()}
          className="py-[64px] font-['Archivo',sans-serif] font-bold leading-[1.12] tracking-[-0.6px] text-[#14171a] lg:mx-auto lg:max-w-[1000px] lg:py-[90px] lg:text-center lg:leading-[1.08] lg:tracking-[-0.9px]"
          style={{ fontSize: fluid(28, 60) }}
        >
          No proprietary blends.
          <br />
          No shortcuts.
          <br />
          No guessing what's inside.
        </motion.p>
      </Container>
    </section>
  );
}
