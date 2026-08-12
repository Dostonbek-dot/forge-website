import { motion } from "motion/react";
import { Container } from "./primitives";
import { useMotionPreset } from "./motion";

export function BlogHero() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    // Mount-triggered, not `whileInView` — above the fold on load, same reasoning as Hero/ShopHero.
    <section className="w-full bg-white">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition()}
          className="flex flex-col items-start gap-[12px] py-[32px] lg:gap-[16px] lg:py-[48px]"
        >
          <h1 className="font-['Archivo',sans-serif] text-[32px] font-bold tracking-[-0.6px] text-[#14171a] lg:text-[48px] lg:tracking-[-1px]">
            Inside the Formula
          </h1>
          <p className="max-w-[480px] font-['Inter',sans-serif] text-[14.5px] leading-[1.55] text-[#737870] lg:text-[16px]">
            A closer look at ingredients, dosages, claims, and the science behind them.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
