import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import featuredImage from "../../imports/HomeDesktopWeb/94a28b97f9f6b69556b262fe1ae5ee38b825c96a.webp";
import { ArrowRightIcon } from "./icons";
import { Container, linkClass } from "./primitives";
import { Accordion } from "./ui/accordion";
import { useMotionPreset, viewportOnce } from "./motion";

const CATEGORIES = [
  {
    id: "protein",
    label: "Protein",
    blurb: "Complete amino profiles at clinical doses — verified by third-party labs, not just the label.",
  },
  {
    id: "pre-workout",
    label: "Pre-Workout",
    blurb: "Dosed for real output: focus, pump and endurance, without the crash or the jitters.",
  },
  {
    id: "recovery",
    label: "Recovery",
    blurb: "Electrolytes, creatine and sleep support built to close the gap between sessions.",
  },
];

/** True only for mice/trackpads (`hover: hover` + `pointer: fine`) — never touch, so tap remains the sole trigger on mobile. */
function useHoverCapable() {
  const [hoverCapable, setHoverCapable] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHoverCapable(query.matches);
    const onChange = (event: MediaQueryListEvent) => setHoverCapable(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return hoverCapable;
}

export function Categories() {
  const { fadeUp, transition } = useMotionPreset();
  const hoverCapable = useHoverCapable();
  const [openCategory, setOpenCategory] = useState<string | undefined>(undefined);

  return (
    <section className="w-full bg-white">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={transition()}
          className="flex flex-col gap-[24px] pb-[8px] pt-[48px] lg:gap-[40px] lg:pb-[76px] lg:pt-[72px]"
        >
          <h2 className="font-['Archivo',sans-serif] text-[22px] font-bold text-[#14171a] lg:text-[24px]">Shop by goal</h2>

          <div className="grid gap-[24px] lg:grid-cols-[minmax(0,467fr)_minmax(0,600fr)] lg:gap-[60px] xl:gap-[133px]">
            <a href="#" className={`relative block h-[220px] overflow-hidden rounded-[20px] lg:h-[284px] lg:rounded-[24px] ${linkClass}`}>
              {/*
                Reproduces the Figma crop: the source photo is placed at 186.5% x 172.5%
                of the frame, offset so only the powder-and-scoop area is visible.
              */}
              <img
                src={featuredImage}
                alt="Creatine monohydrate powder with a measuring scoop on a dark slate surface."
                className="absolute left-[-83.1%] top-[-72.5%] h-[172.5%] w-[186.5%] max-w-none object-cover"
              />
              <span className="absolute bottom-[16px] left-[20px] font-['Archivo',sans-serif] text-[24px] font-bold text-white lg:bottom-[20px] lg:left-[22px] lg:text-[22px]">
                Creatine
              </span>
            </a>

            {/*
              lg:min-h reserves space for the tallest open state (measured ~365.5px for
              Protein's blurb) so an item opening — via hover on desktop, not even a deliberate
              click — pushes the other category rows down within the accordion, same as mobile,
              without growing the accordion's own box and shifting Bestsellers or anything below
              Categories. Below `lg` the accordion just hugs its content normally.
            */}
            <Accordion
              type="single"
              collapsible
              value={openCategory ?? ""}
              onValueChange={(value) => setOpenCategory(value || undefined)}
              onMouseLeave={() => hoverCapable && setOpenCategory(undefined)}
              className="flex flex-col lg:-mt-[8px] lg:min-h-[370px] lg:gap-[20px]"
            >
              {CATEGORIES.map((category) => (
                <AccordionPrimitive.Item
                  key={category.id}
                  value={category.id}
                  className="border-b border-[#e5e5de]"
                  onMouseEnter={() => hoverCapable && setOpenCategory(category.id)}
                >
                  <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger
                      className={`group flex min-h-[44px] w-full items-center justify-between py-[20px] text-[#14171a] transition-colors hover:text-[#32523d] lg:py-[26px] ${linkClass}`}
                    >
                      <span className="font-['Archivo',sans-serif] text-[19px] font-bold lg:text-[22px]">{category.label}</span>
                      <ArrowRightIcon className="size-[18px] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90 lg:size-[20px]" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
                    <p className="px-0 pb-[20px] pt-[4px] font-['Inter',sans-serif] text-[13.5px] leading-[1.5] text-[#737870] lg:text-[14.5px]">
                      {category.blurb}
                    </p>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
