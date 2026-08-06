import { Container, fluid } from "./primitives";

const COMPACT_QUOTES = [
  {
    id: "jordan",
    quote: "“First pre-workout that doesn't give me the crash. I can actually read the label and understand it.”",
    author: "Jordan M. — CrossFit Coach",
  },
  {
    id: "priya",
    quote: "“The lab reports sold me. Finally a brand that shows the receipts instead of just claiming it.”",
    author: "Priya K. — Marathon Runner",
  },
];

export function Testimonials() {
  return (
    <section aria-label="Customer testimonials" className="w-full bg-[#fafaf8]">
      <Container>
        <div className="grid gap-[20px] pb-[24px] pt-[48px] lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-x-[64px] lg:pb-[56px] lg:pt-[53px] xl:grid-cols-[minmax(0,560px)_minmax(0,420px)] xl:gap-x-[160px]">
          <figure className="flex flex-col items-start gap-[20px] lg:max-w-[560px] lg:gap-0">
            <span
              aria-hidden
              className="block font-['Archivo',sans-serif] font-bold leading-[0.8] text-[#e7eee6] lg:-ml-[9px] lg:leading-[0.7] lg:text-[#eef0ed]"
              style={{ fontSize: fluid(80, 160) }}
            >
              “
            </span>
            <blockquote
              className="font-['Archivo',sans-serif] font-bold leading-[1.25] text-[#14171a] lg:mt-[24px] lg:leading-[1.22] lg:tracking-[-0.15px]"
              style={{ fontSize: fluid(22, 30) }}
            >
              Switched to Forge creatine three months ago — no bloating, no filler taste, just consistent strength gains.
            </blockquote>
            <figcaption className="font-['Inter',sans-serif] text-[12.5px] font-semibold text-[#32523d] lg:mt-[20px] lg:text-[13.5px]">
              Sam R. — Powerlifter
            </figcaption>
          </figure>

          <div className="flex flex-col gap-[20px] lg:mt-[43px] lg:gap-0">
            {COMPACT_QUOTES.map((item, index) => (
              <figure
                key={item.id}
                className={`flex flex-col gap-[10px] border-t border-[#e5e5de] pt-[20px] lg:gap-[12px] lg:pb-[28px] ${
                  index === 0 ? "lg:border-t-0 lg:pt-0" : "lg:pt-[28px]"
                }`}
              >
                <blockquote className="font-['Inter',sans-serif] text-[14px] leading-[1.5] text-[#14171a] lg:text-[15px] lg:leading-[1.55]">
                  {item.quote}
                </blockquote>
                <figcaption className="font-['Inter',sans-serif] text-[12px] font-semibold text-[#737870] lg:text-[12.5px]">
                  {item.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
