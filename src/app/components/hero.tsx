import { motion } from "motion/react";
import productImage from "../../imports/HomeDesktopWeb/core-whey-isolate.webp";
import { Container, fluid } from "./primitives";
import { useMotionPreset } from "./motion";

export function Hero() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/*
        Below lg: image and headline stack normally — the desktop bleed treatment only
        works because there's a full 560px-safe column before the image starts; there's
        no room for that on narrow screens without the two colliding.
        At lg+: matches the Figma frame (1440x680) — image bled to the right edge and
        cropped by the frame height, headline bottom-anchored at left:120/bottom:72.
      */}
      <div className="relative mx-auto flex flex-col lg:block lg:h-[680px] lg:max-w-[1440px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition(0.12)}
          className="relative aspect-[6/5] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:h-auto lg:w-[493px] xl:w-[560px]"
        >
          <img
            src={productImage}
            alt="Core Whey Isolate — 900g, 30 servings, 25g protein per scoop."
            className="size-full object-cover object-top"
          />
        </motion.div>

        <Container className="relative py-[32px] lg:absolute lg:inset-0 lg:flex lg:items-end lg:py-0">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={transition(0)}
            className="max-w-[560px] font-['Archivo',sans-serif] font-bold leading-[1.06] tracking-[-0.36px] text-[#14171a] lg:pb-[72px] lg:leading-[0.98] lg:tracking-[-1.02px]"
            style={{ fontSize: fluid(36, 68) }}
          >
            Supplements built for training.
          </motion.h1>
        </Container>
      </div>
    </section>
  );
}
