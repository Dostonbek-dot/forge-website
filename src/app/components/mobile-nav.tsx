import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { CloseIcon } from "./icons";
import { PrimaryButton, iconButtonClass, linkClass } from "./primitives";
import { DURATION, EASE, useMotionPreset } from "./motion";
import { NAV_HREFS } from "./nav-links";

export function MobileNav({
  links,
  open,
  onOpenChange,
}: {
  links: readonly string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { reduced } = useMotionPreset();
  const transition = reduced ? { duration: 0 } : { duration: DURATION, ease: EASE };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Invisible — the panel itself is fully opaque — but this is what actually engages
                Radix's body-scroll lock (`RemoveScroll` lives on Overlay, not Content). */}
            <Dialog.Overlay forceMount className="fixed inset-0 z-[99]" />
            <Dialog.Content forceMount asChild aria-describedby={undefined}>
              <motion.div
                initial={{ opacity: 0, y: reduced ? 0 : -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -12 }}
                transition={transition}
                className="fixed inset-0 z-[100] flex flex-col bg-[#fafaf8] lg:hidden"
              >
                <Dialog.Title className="sr-only">Main menu</Dialog.Title>

                <div className="flex items-center justify-between px-[20px] py-[12px] md:px-[40px]">
                  <span className="font-['Archivo',sans-serif] text-[18px] font-bold tracking-[0.54px] text-[#14171a]">FORGE</span>
                  <Dialog.Close asChild>
                    <button type="button" aria-label="Close menu" className={iconButtonClass}>
                      <CloseIcon />
                    </button>
                  </Dialog.Close>
                </div>

                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={reduced ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
                  className="flex flex-1 flex-col items-center justify-center gap-[28px]"
                >
                  {links.map((label) => {
                    const href = NAV_HREFS[label as keyof typeof NAV_HREFS];
                    const linkClassName = `font-['Archivo',sans-serif] text-[28px] font-bold text-[#14171a] hover:text-[#32523d] ${linkClass}`;
                    return (
                      <motion.li
                        key={label}
                        variants={
                          reduced
                            ? undefined
                            : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } } }
                        }
                      >
                        <Dialog.Close asChild>
                          {href ? (
                            <Link to={href} className={linkClassName}>
                              {label}
                            </Link>
                          ) : (
                            <a href="#" className={linkClassName}>
                              {label}
                            </a>
                          )}
                        </Dialog.Close>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                <div className="px-[20px] pb-[32px] md:px-[40px]">
                  <Dialog.Close asChild>
                    <PrimaryButton className="w-full">Shop Now</PrimaryButton>
                  </Dialog.Close>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
