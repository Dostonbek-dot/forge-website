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

export function PrimaryButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      className={`inline-flex min-h-[44px] items-center justify-center rounded-[100px] bg-[#32523d] px-[30px] py-[15px] font-['Inter',sans-serif] text-[14.5px] font-semibold text-white transition-colors hover:bg-[#294231] ${focusRing} ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      className={`inline-flex min-h-[44px] items-center justify-center rounded-[100px] border border-[#bfbfb8] px-[26px] py-[15px] font-['Inter',sans-serif] text-[14.5px] font-semibold text-[#14171a] transition-colors hover:bg-[#f0f0ea] ${focusRing} ${className}`}
    >
      {children}
    </button>
  );
}

/** Display is intentionally left to the caller so responsive `hidden`/`flex` variants win. */
export const iconButtonClass = `size-[44px] items-center justify-center rounded-full text-[#14171a] transition-colors hover:bg-black/5 ${focusRing}`;

export const linkClass = `rounded-[4px] ${focusRing}`;
