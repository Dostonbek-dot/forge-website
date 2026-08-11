import { motion } from "motion/react";
import specimenImage from "../../imports/ProteinDesktopWeb/protein-close-specimen.webp";
import { Container, PrimaryButton, fluid } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

export function ProteinClose() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    // Deliberately no `overflow-hidden` here — the tub image is taller than the text column, so
    // centering it against the text (see `top-1/2 -translate-y-1/2` below) naturally lets it bleed
    // past this section's top edge into Label, echoing About's own CTA-close bleed treatment.
    <section className="relative w-full bg-white">
      <Container>
        <div className="relative py-[64px] lg:py-[96px]">
          <motion.div
            aria-hidden
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={transition(0.12)}
            className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block lg:h-[300px] lg:w-[300px] xl:h-[388px] xl:w-[388px]"
          >
            <img src={specimenImage} alt="" className="size-full object-contain" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={transition()}
            className="flex flex-col items-start gap-[20px] lg:gap-[28px]"
          >
            <span className="font-['Archivo',sans-serif] font-bold leading-none tracking-[-1px] text-[#32523d]" style={{ fontSize: fluid(48, 88) }}>
              25g
            </span>
            <h2 className="max-w-[560px] font-['Archivo',sans-serif] text-[24px] font-bold leading-[1.18] tracking-[-0.24px] text-[#14171a] lg:text-[32px]">
              Verified. No exceptions.
            </h2>
            <PrimaryButton asChild>
              <a href="#">Shop the Lineup</a>
            </PrimaryButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
