import { motion } from "motion/react";
import specimenImage from "../../imports/ProteinDesktopWeb/protein-hero-specimen.webp";
import { Container, PrimaryButton, fluid } from "./primitives";
import { useMotionPreset } from "./motion";

export function ProteinHero() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    // Mount-triggered (`animate`), not `whileInView` — above the fold on load, same reasoning
    // as Hero/AboutIntro.
    <section className="relative flex min-h-[calc(100dvh-69px)] w-full items-center overflow-hidden bg-white lg:min-h-[calc(100dvh-92px)]">
      <Container>
        <div className="grid gap-[32px] py-[48px] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-[60px] lg:py-[96px]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={transition()} className="flex flex-col items-start gap-[20px] lg:gap-[28px]">
            <h1 className="font-['Archivo',sans-serif] font-bold text-[#14171a]">
              <span className="block leading-[0.92] tracking-[-4px]" style={{ fontSize: fluid(75, 106) }}>
                25<span style={{ fontSize: fluid(30, 45) }}>g</span>
              </span>
              <span className="mt-[8px] block leading-[1.15] tracking-[-0.3px]" style={{ fontSize: fluid(22, 32) }}>
                of protein per scoop.
              </span>
            </h1>

            <p className="max-w-[420px] font-['Inter',sans-serif] text-[14.5px] leading-[1.55] text-[#737870] lg:text-[16px]">
              Verified aminos. No proprietary blends. Just what the label says — proven by a lab that isn't ours.
            </p>

            <PrimaryButton asChild>
              <a href="#">Shop the Lineup</a>
            </PrimaryButton>
          </motion.div>

          <motion.div
            aria-hidden
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={transition(0.18)}
            className="aspect-square w-[240px] shrink-0 -rotate-3 lg:w-[300px] xl:w-[380px]"
          >
            <img src={specimenImage} alt="" className="size-full object-contain" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
