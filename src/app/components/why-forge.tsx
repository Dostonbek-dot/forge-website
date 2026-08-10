import { motion } from "motion/react";
import { Container, fluid } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

const PILLARS = [
  { number: "01", title: "Clinically Dosed", body: "Every gram matches the research, not the marketing." },
  { number: "02", title: "Third-Party Tested", body: "Every batch verified by an independent lab before it ships." },
  { number: "03", title: "Clean Label", body: "No proprietary blends, no artificial fillers, no guessing what's inside." },
];

export function WhyForge() {
  const { fadeUp, fadeUpItem, staggerContainer, transition } = useMotionPreset();

  return (
    <section className="w-full bg-[#32523d]">
      <Container>
        <div className="grid gap-[32px] py-[48px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-[40px] lg:pb-[110px] lg:pt-[90px] xl:grid-cols-[minmax(0,1fr)_minmax(0,600px)]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={transition()}
            className="font-['Archivo',sans-serif] font-bold leading-[1.08] tracking-[-0.15px] text-[#f8f8f6] lg:max-w-[360px] lg:leading-[1.04] lg:tracking-[-0.44px]"
            style={{ fontSize: fluid(30, 44) }}
          >
            {/* Figma breaks this heading over three lines from 1024px up. */}
            <span className="lg:block">Built on</span> <span className="lg:block">evidence,</span> <span className="lg:block">not hype.</span>
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}
            className="flex flex-col gap-[32px] lg:gap-0 lg:pt-[4px]"
          >
            {PILLARS.map((pillar, index) => (
              <motion.li
                key={pillar.number}
                variants={fadeUpItem}
                className={`border-t pt-[20px] lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-x-[22px] lg:py-[22px] ${
                  index === 0 ? "border-[#4f6a58]" : "border-white/[0.14]"
                }`}
              >
                <span aria-hidden className="hidden font-['Archivo',sans-serif] text-[15px] font-bold text-[#cfff3d] lg:block">
                  {pillar.number}
                </span>
                <div className="flex flex-col gap-[6px]">
                  <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#f8f8f6] lg:text-[17px]">
                    <span aria-hidden className="mr-[10px] font-['Archivo',sans-serif] text-[13px] font-bold text-[#cfff3d] lg:hidden">
                      {pillar.number}
                    </span>
                    {pillar.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[13px] leading-[1.45] text-[#d9ded6] lg:text-[13.5px]">{pillar.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
