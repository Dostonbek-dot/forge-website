import { motion } from "motion/react";
import { Container } from "../components/primitives";
import { useMotionPreset } from "../components/motion";

const CONTACT_ROWS = [
  { label: "Email", value: "hello@forgenutrition.com", href: "mailto:hello@forgenutrition.com" },
  { label: "Instagram", value: "@forgenutrition", href: "https://instagram.com/forgenutrition" },
  { label: "Support hours", value: "Mon–Fri, 9am–5pm ET" },
];

export function ContactPage() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    <section className="w-full bg-white">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition()}
          className="flex flex-col items-start gap-[32px] py-[48px] lg:gap-[48px] lg:py-[96px]"
        >
          <div className="flex flex-col items-start gap-[12px] lg:gap-[16px]">
            <h1 className="font-['Archivo',sans-serif] text-[32px] font-bold tracking-[-0.6px] text-[#14171a] lg:text-[48px] lg:tracking-[-1px]">
              Get in Touch
            </h1>
            <p className="max-w-[480px] font-['Inter',sans-serif] text-[14.5px] leading-[1.55] text-[#737870] lg:text-[16px]">
              Questions about a product, an order, or the label itself — we're glad to answer.
            </p>
          </div>

          <div className="flex w-full max-w-[480px] flex-col">
            {CONTACT_ROWS.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-[16px] border-b border-[#e5e5de] py-[18px] first:pt-0 lg:py-[22px]">
                <span className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#737870] lg:text-[14px]">{row.label}</span>
                {row.href ? (
                  <a
                    href={row.href}
                    className="font-['Inter',sans-serif] text-[14.5px] font-semibold text-[#14171a] transition-colors duration-200 ease-out hover:text-[#32523d] lg:text-[16px]"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="font-['Inter',sans-serif] text-[14.5px] font-semibold text-[#14171a] lg:text-[16px]">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
