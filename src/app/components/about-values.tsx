import { motion } from "motion/react";
import { Container } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

const VALUES = [
  {
    number: "01",
    title: "Third-Party Tested",
    body: "Every batch goes to an independent lab before it ships — no exceptions, no self-certified claims.",
  },
  {
    number: "02",
    title: "Clinically Dosed",
    body: "If the research says 5g, the label says 5g. No proprietary blends hiding the real numbers.",
  },
  {
    number: "03",
    title: "Clean Label",
    body: "No artificial fillers, no unnecessary additives — if it's not doing something for you, it's not in the tub.",
  },
];

export function AboutValues() {
  const { fadeUp, fadeUpItem, staggerContainer, transition } = useMotionPreset();

  return (
    <section className="w-full bg-white">
      <Container>
        <div className="flex flex-col gap-[32px] py-[48px] lg:gap-[48px] lg:py-[76px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={transition()}
            className="font-['Archivo',sans-serif] text-[22px] font-bold text-[#14171a] lg:text-[28px]"
          >
            What we won't compromise on
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}
            className="grid gap-[32px] lg:grid-cols-3 lg:gap-[40px]"
          >
            {VALUES.map((value) => (
              <motion.li key={value.number} variants={fadeUpItem} className="flex flex-col">
                <span aria-hidden className="font-['Archivo',sans-serif] text-[48px] font-bold leading-none text-[#cce0d1] lg:text-[72px]">
                  {value.number}
                </span>
                <h3 className="mt-[12px] font-['Inter',sans-serif] text-[16px] font-semibold text-[#14171a] lg:mt-[16px] lg:text-[18px]">
                  {value.title}
                </h3>
                <p className="mt-[8px] font-['Inter',sans-serif] text-[13px] leading-[1.5] text-[#737870] lg:text-[13.5px]">{value.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
