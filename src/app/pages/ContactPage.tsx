import { motion } from "motion/react";
import { Container } from "../components/primitives";
import { useMotionPreset } from "../components/motion";
import { ArrowUpRightIcon } from "../components/icons";

const CONTACT_LINKS = [
  { label: "hello@forgenutrition.com", href: "mailto:hello@forgenutrition.com" },
  { label: "Instagram", href: "https://instagram.com/forgenutrition" },
];

export function ContactPage() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    <section className="flex min-h-[70vh] w-full items-center bg-white">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition()}
          className="mx-auto flex w-full max-w-[420px] flex-col items-center py-[64px] text-center lg:py-[96px]"
        >
          <h1 className="font-['Archivo',sans-serif] text-[36px] font-bold tracking-[-0.7px] text-[#14171a] lg:text-[48px] lg:tracking-[-1px]">
            Get in touch.
          </h1>

          <div className="mt-[32px] w-full border-t border-[#e5e5de] lg:mt-[40px]" />

          <div className="flex w-full flex-col items-center">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-[6px] border-b border-transparent py-[16px] font-['Inter',sans-serif] text-[15px] font-semibold text-[#14171a] transition-colors duration-200 ease-out hover:text-[#32523d] lg:text-[16px]"
              >
                {link.label}
                <ArrowUpRightIcon className="size-[14px] text-[#737870] transition-colors duration-200 ease-out group-hover:text-[#32523d] lg:size-[15px]" />
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
