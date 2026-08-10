import { motion } from "motion/react";
import { CheckIcon } from "./icons";
import { Container } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

const TRUST_ITEMS = ["NSF Certified for Sport", "Third-Party Lab Tested", "No Artificial Fillers", "Made in the USA"];

export function TrustBand() {
  const { fadeUpItem, staggerContainer } = useMotionPreset();

  return (
    <section aria-label="Product guarantees" className="w-full bg-[#32523d]">
      <Container>
        {/* Desktop column ratios mirror the uneven Figma divider positions (287/345/301/233). */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer()}
          className="grid grid-cols-2 gap-x-[16px] gap-y-[16px] py-[24px] lg:grid-cols-[287fr_345fr_301fr_233fr] lg:gap-0 lg:py-[40px]"
        >
          {TRUST_ITEMS.map((item, index) => (
            <motion.li
              key={item}
              variants={fadeUpItem}
              className={`flex items-center gap-[8px] lg:gap-[10px] lg:px-[40px] ${
                index === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/[0.18]"
              } ${index === TRUST_ITEMS.length - 1 ? "lg:pr-0" : ""}`}
            >
              <CheckIcon />
              <span className="font-['Inter',sans-serif] text-[12.5px] font-medium leading-[1.3] text-white lg:text-[13.5px]">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
