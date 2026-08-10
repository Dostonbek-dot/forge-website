import { motion } from "motion/react";
import founderImage from "../../imports/AboutDesktopWeb/about-story-founder.webp";
import { Container } from "./primitives";
import { useMotionPreset } from "./motion";

export function AboutStory() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    // Mount-triggered (`animate`), not `whileInView` — this section sits directly below the short
    // Intro section, so it's already inside the viewport on load at most screen heights. Motion's
    // `whileInView` (with `once: true`) skips the transition entirely when an element is already
    // intersecting on its first observer check, snapping straight to the end state — invisible to
    // the user. Same reasoning as Hero and Intro, which are also above-the-fold and use `animate`.
    <section className="w-full bg-[#32523d]">
      <Container>
        <div className="grid gap-[32px] py-[48px] lg:grid-cols-[minmax(0,520fr)_minmax(0,460fr)] lg:gap-[60px] lg:py-[80px] xl:gap-[100px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={transition()}
            className="aspect-[4/3] w-full overflow-hidden rounded-[16px] lg:aspect-auto lg:h-[400px] lg:rounded-[20px]"
          >
            <img
              src={founderImage}
              alt="A founder in a lab coat reviewing a printed certificate of analysis at a lab bench."
              className="size-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={transition(0.08)}
            className="flex flex-col justify-center gap-[24px] lg:gap-[32px]"
          >
            <h2 className="font-['Archivo',sans-serif] text-[24px] font-bold leading-[1.2] tracking-[-0.24px] text-[#f8f8f6] lg:text-[32px] lg:leading-[1.18] lg:tracking-[-0.32px]">
              We got tired of tubs that wouldn't show their work.
            </h2>
            <p className="font-['Inter',sans-serif] text-[14px] leading-[1.58] text-[#d9ded6] lg:text-[15px] lg:leading-[1.6]">
              Forge started in a rented lab after our founder spent a year sending competitor products out for independent testing — and watching most
              of them fail their own label claims. Every Forge formula ships with a public certificate of analysis. If we won't publish it, we don't
              sell it.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
