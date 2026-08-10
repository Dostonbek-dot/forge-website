import { Slot } from "@radix-ui/react-slot";
import type { ReactNode } from "react";

/**
 * Page gutter matching Figma: 20px at 390px, growing to 120px at 1440px.
 * Content is capped at 1200px (1440 - 2 x 120) and centred.
 */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-[20px] md:px-[40px] lg:px-[64px] xl:px-[120px] ${className}`}>{children}</div>;
}

/**
 * Linear interpolation between the 390px and 1440px Figma frames, so display
 * type scales smoothly instead of jumping at a breakpoint.
 */
export function fluid(minPx: number, maxPx: number, minVw = 390, maxVw = 1440) {
  const slope = (maxPx - minPx) / (maxVw - minVw);
  const intercept = minPx - slope * minVw;
  return `clamp(${minPx}px, ${(slope * 100).toFixed(4)}vw + ${intercept.toFixed(3)}px, ${maxPx}px)`;
}

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#32523d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf8]";

// For use on the brand-green (#32523d) background itself, where the default
// dark-on-transparent styling is invisible against its own backdrop.
const focusRingInverted =
  "outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#32523d]";

export function PrimaryButton({
  children,
  className = "",
  asChild = false,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  /** Render as the child element (e.g. a router `Link`) instead of a `<button>` — for real navigation, not a button wrapping an anchor. */
  asChild?: boolean;
  /** "inverted" is for placement directly on the brand-green (#32523d) background — default is invisible there. */
  variant?: "default" | "inverted";
}) {
  const Comp = asChild ? Slot : "button";
  // "inverted" values match Figma's export for the About page's CTA button exactly:
  // bg #5B7564, text #F8F8F6, font-weight 400 — a lighter weight than the default variant.
  const variantClass =
    variant === "inverted"
      ? `bg-[#5B7564] text-[#F8F8F6] font-normal hover:bg-[#47614F] ${focusRingInverted}`
      : `bg-[#32523d] text-white font-semibold hover:bg-[#5B7564] ${focusRing}`;
  return (
    <Comp
      type={asChild ? undefined : "button"}
      className={`inline-flex min-h-[44px] items-center justify-center rounded-[100px] px-[30px] py-[15px] font-['Inter',sans-serif] text-[14.5px] transition duration-200 ease-out active:scale-[0.97] ${variantClass} ${className}`}
    >
      {children}
    </Comp>
  );
}

/** Display is intentionally left to the caller so responsive `hidden`/`flex` variants win. */
export const iconButtonClass = `size-[44px] items-center justify-center rounded-full text-[#14171a] transition duration-200 ease-out hover:bg-black/5 active:scale-[0.95] ${focusRing}`;

export const linkClass = `rounded-[4px] transition-colors duration-200 ease-out ${focusRing}`;
