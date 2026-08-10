import { motion } from "motion/react";
import { Link } from "react-router-dom";
import productImage from "../../imports/AboutDesktopWeb/about-cta-product.webp";
import { Container, PrimaryButton } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

export function AboutCtaClose() {
  const { fadeUp, transition } = useMotionPreset();

  return (
    // Deliberately no `overflow-hidden` here — the product image bleeds upward past this
    // section's top edge into Team, on purpose (see comment below).
    <section className="relative w-full bg-[#32523d]">
      {/*
        Image and text share this 1440px-capped, centred box (matching Intro's wrapper) so the
        image anchors to the content column's edge, not the raw viewport — confirmed against the
        Figma frame, which insets the image within the padded column rather than bleeding it to
        the true canvas edge. Right inset (64px lg / 120px xl) matches `Container`'s own gutter
        scale so the image sits at the same edge as the text below it, not flush with the column
        boundary. Fixed height (240 mobile / 252 desktop) matches the Figma frame exactly, rather
        than being derived from content padding.
      */}
      <div className="relative mx-auto h-[240px] max-w-[1440px] lg:h-[252px]">
        {/*
          Desktop-only: the product floats up over the section boundary into Team's cream
          background above, echoing the Intro section's image-bleed treatment as a bookend for
          the page. Bottom-anchored (not a hand-tuned top offset) so it always sits flush with
          this section's bottom edge regardless of how tall the text content above it is. Skipped
          on mobile — there's no "off to the side" in a single stacked column, so it would either
          need to shrink to illegibility or become its own full section, which undercuts this
          section's job as a quiet, fast final beat before the footer. Background actually
          removed from the source asset (real alpha transparency), not faded via a CSS mask — a
          rectangular photo bleeding across two different section colors always needs a mask to
          hide its background regardless of what color that background is, where a
          background-removed cutout doesn't.
        */}
        <motion.div
          aria-hidden
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={transition(0.12)}
          className="pointer-events-none absolute bottom-0 right-[64px] hidden h-[320px] w-[480px] lg:block xl:right-[120px] xl:h-[398px] xl:w-[597px]"
        >
          <img src={productImage} alt="" className="size-full object-cover object-bottom" />
        </motion.div>

        <Container className="relative flex h-full items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={transition()}
            className="flex flex-col items-start gap-[24px] lg:gap-[45px]"
          >
            <h2 className="max-w-[600px] font-['Archivo',sans-serif] text-[24px] font-bold leading-[1.15] tracking-[-0.24px] text-[#f8f8f6] lg:text-[32px] lg:tracking-[-0.32px]">
              Ready to see what's actually inside?
            </h2>
            <PrimaryButton asChild variant="inverted">
              <Link to="/">Shop Bestsellers</Link>
            </PrimaryButton>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
