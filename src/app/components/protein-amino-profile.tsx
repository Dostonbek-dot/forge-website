import { motion } from "motion/react";
import { Container } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

const ESSENTIAL_AMINOS = ["Leucine", "Isoleucine", "Valine", "Lysine", "Threonine", "Methionine", "Phenylalanine", "Tryptophan", "Histidine"];

export function ProteinAminoProfile() {
  const { fadeUpItem, staggerContainer } = useMotionPreset();

  return (
    <section className="w-full bg-[#32523d]">
      <Container>
        <div className="flex flex-col gap-[24px] py-[56px] lg:gap-[32px] lg:py-[80px]">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}
            className="flex flex-wrap items-baseline gap-x-[6px] gap-y-[4px]"
            aria-label="Nine essential amino acids"
          >
            {ESSENTIAL_AMINOS.map((amino, index) => (
              <motion.li
                key={amino}
                variants={fadeUpItem}
                className="flex items-baseline font-['Archivo',sans-serif] font-bold text-[#f8f8f6]"
                style={{ fontSize: "clamp(20px, 3.2vw, 28px)" }}
              >
                {amino}
                {index < ESSENTIAL_AMINOS.length - 1 ? <span className="ml-[6px] text-[#5B7564]">·</span> : null}
              </motion.li>
            ))}
          </motion.ul>

          <p className="max-w-[480px] font-['Inter',sans-serif] text-[14px] leading-[1.6] text-[#d9ded6] lg:text-[15px]">
            Nine essential amino acids. Every one accounted for on the certificate of analysis — not just the ones a cheap test happens to catch.
          </p>
        </div>
      </Container>
    </section>
  );
}
