import { motion } from "motion/react";
import { Container } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

const LABEL_ROWS = [
  { label: "Protein", value: "25g per scoop" },
  { label: "Amino Profile", value: "Complete (9/9 EAAs)" },
  { label: "Sourcing", value: "No proprietary blends" },
  { label: "Verification", value: "Third-party tested, every batch" },
];

export function ProteinLabel() {
  const { fadeUp, fadeUpItem, staggerContainer, transition } = useMotionPreset();

  return (
    <section className="w-full bg-[#32523d]">
      <Container>
        <div className="flex flex-col gap-[40px] py-[56px] lg:flex-row lg:items-center lg:justify-between lg:gap-[80px] lg:py-[96px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={transition()}
            className="flex flex-col gap-[16px] lg:max-w-[380px] lg:gap-[20px]"
          >
            <h2 className="font-['Archivo',sans-serif] text-[24px] font-bold leading-[1.18] tracking-[-0.24px] text-[#f8f8f6] lg:text-[30px]">
              What's actually on the label.
            </h2>
            <p className="font-['Inter',sans-serif] text-[14px] leading-[1.6] text-[#d9ded6] lg:text-[15px]">
              Every claim on this page traces back to a batch report — not marketing copy.
            </p>
          </motion.div>

          <div className="relative w-full max-w-[480px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={transition(0.08)}
              className="relative rounded-[16px] border border-white/15 bg-white px-[24px] py-[24px] lg:rounded-[20px] lg:px-[32px] lg:py-[32px]"
            >
              <h3 className="font-['Inter',sans-serif] text-[12px] font-semibold uppercase tracking-[1.5px] text-[#14171a]">Supplement Facts</h3>
              <div className="mt-[12px] h-[2px] w-full bg-[#14171a]" />

              <motion.dl
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer()}
                className="mt-[16px] flex flex-col divide-y divide-[#e5e5de]"
              >
                {LABEL_ROWS.map((row) => (
                  <motion.div key={row.label} variants={fadeUpItem} className="flex items-baseline justify-between gap-[16px] py-[12px] first:pt-0 last:pb-0">
                    <dt className="font-['Inter',sans-serif] text-[13.5px] font-semibold text-[#14171a] lg:text-[14.5px]">{row.label}</dt>
                    <dd className="text-right font-['Inter',sans-serif] text-[13.5px] text-[#737870] lg:text-[14.5px]">{row.value}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
