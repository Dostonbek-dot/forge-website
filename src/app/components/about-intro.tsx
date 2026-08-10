import { motion } from "motion/react";
import labImage from "../../imports/AboutDesktopWeb/about-intro-lab.webp";
import { Container, fluid } from "./primitives";
import { useMotionPreset } from "./motion";

export function AboutIntro() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative flex min-h-[calc(100dvh-69px)] flex-col justify-center lg:block lg:min-h-[calc(100dvh-92px)]">
        {/* Positioned relative to the full-width section (not the 1440-capped column below), so
            it bleeds to the true viewport edge at lg+ instead of stopping at the content cap. */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition(0.12)}
          className="relative aspect-[3/2] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:h-auto lg:w-[560px] xl:w-[680px] 2xl:w-[45%]"
        >
          <img
            src={labImage}
            alt="A lab technician pipetting a sample into a vial next to a protein powder tub, for third-party testing."
            className="size-full object-cover"
          />
        </motion.div>

        <div className="lg:absolute lg:inset-0 lg:mx-auto lg:flex lg:w-full lg:max-w-[1440px] lg:flex-col lg:justify-center">
          <Container className="relative py-[32px] lg:py-0">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={transition(0)}
              className="max-w-[560px] font-['Archivo',sans-serif] font-bold leading-[1.06] tracking-[-0.36px] text-[#14171a] lg:max-w-[calc(100%-620px)] lg:leading-[1.04] lg:tracking-[-0.69px] xl:max-w-[calc(100%-780px)]"
              style={{ fontSize: fluid(30, 46) }}
            >
              Built by people done trusting labels.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={transition(0.08)}
              className="mt-[24px] max-w-[350px] font-['Inter',sans-serif] text-[14.5px] leading-[1.5] text-[#737870] lg:mt-[32px] lg:max-w-[min(480px,calc(100%-620px))] lg:text-[16px] xl:max-w-[min(480px,calc(100%-780px))]"
            >
              Every tub on the shelf claims clinical dosing. Almost none of them will show you the lab report. So we built the brand that would.
            </motion.p>
          </Container>
        </div>
      </div>
    </section>
  );
}
