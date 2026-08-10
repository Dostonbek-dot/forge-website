import { motion } from "motion/react";
import mayaImage from "../../imports/AboutDesktopWeb/about-team-maya.webp";
import danielImage from "../../imports/AboutDesktopWeb/about-team-daniel.webp";
import priyaImage from "../../imports/AboutDesktopWeb/about-team-priya.webp";
import { Container } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

const TEAM = [
  { name: "Maya Ellison", role: "Founder & Formulator", image: mayaImage, alt: "Maya Ellison, Founder & Formulator, arms crossed against a sage-green backdrop." },
  { name: "Daniel Osei", role: "Head of Quality", image: danielImage, alt: "Daniel Osei, Head of Quality, wearing a lab coat against a sage-green backdrop." },
  { name: "Priya Nakamura", role: "Sports Science Lead", image: priyaImage, alt: "Priya Nakamura, Sports Science Lead, against a sage-green backdrop." },
];

export function AboutTeam() {
  const { fadeUp, fadeUpItem, staggerContainer, transition } = useMotionPreset();

  return (
    <section className="w-full bg-[#fafaf8]">
      <Container>
        <div className="flex flex-col gap-[32px] py-[48px] lg:gap-[40px] lg:py-[80px]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={transition()}
            className="font-['Archivo',sans-serif] text-[22px] font-bold text-[#14171a] lg:text-[28px]"
          >
            The people behind it
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}
            className="grid gap-[32px] lg:grid-cols-[minmax(0,420fr)_minmax(0,340fr)_minmax(0,340fr)] lg:gap-[40px]"
          >
            {TEAM.map((member, index) => (
              <li key={member.name} className={index === 1 ? "lg:translate-y-[40px]" : undefined}>
                <motion.div variants={fadeUpItem} className="group flex flex-col gap-[16px]">
                  <div className={`overflow-hidden rounded-[16px] ${index === 0 ? "aspect-[7/8] lg:aspect-auto lg:h-[460px]" : "aspect-[4/3] lg:aspect-auto lg:h-[320px]"}`}>
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="font-['Archivo',sans-serif] text-[17px] font-bold text-[#14171a] lg:text-[18px]">{member.name}</p>
                    <p className="font-['Inter',sans-serif] text-[13px] text-[#737870] lg:text-[13.5px]">{member.role}</p>
                  </div>
                </motion.div>
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
