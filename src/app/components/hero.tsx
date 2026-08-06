import heroImage from "../../imports/HomeDesktopWeb/de613366d5c3e23d19342f4ebad7e64694c33ecb.webp";
import { Container, PrimaryButton, SecondaryButton, fluid } from "./primitives";

export function Hero() {
  return (
    <section className="w-full bg-[#fafaf8] lg:bg-white">
      <Container>
        {/* At 1440 the row resolves to the Figma composition: 560 + 130 gap + 480. */}
        <div className="flex flex-col items-start gap-[24px] pb-[40px] pt-[32px] lg:flex-row lg:items-center lg:justify-between lg:gap-[40px] lg:pb-[120px] lg:pt-[72px] xl:w-[min(1170px,100%)]">
          <div className="flex w-full min-w-0 flex-col items-start gap-[24px] lg:max-w-[560px] lg:gap-[26px]">
            <h1
              className="w-full font-['Archivo',sans-serif] font-bold leading-[1.06] tracking-[-0.36px] text-[#14171a] lg:leading-[0.98] lg:tracking-[-1.02px]"
              style={{ fontSize: fluid(36, 68) }}
            >
              Supplements built for training.
            </h1>
            <p className="w-full font-['Inter',sans-serif] text-[14.5px] leading-[1.5] text-[#666b66] lg:max-w-[440px] lg:text-[16.5px] lg:leading-[1.55]">
              Clean-label protein, creatine and pre-workout, formulated with clinical doses and verified by independent labs — not just on the
              label.
            </p>
            <div className="flex w-full flex-col items-stretch gap-[10px] sm:w-auto sm:flex-row sm:items-center sm:gap-[16px] lg:pt-[10px]">
              <PrimaryButton className="w-full sm:w-auto">Shop Bestsellers</PrimaryButton>
              <SecondaryButton className="w-full sm:w-auto">See the Science</SecondaryButton>
            </div>
          </div>

          <div className="h-[300px] w-full overflow-hidden rounded-[24px] lg:h-[448px] lg:w-[clamp(340px,33.4vw,480px)] lg:shrink-0 lg:rounded-[32px]">
            <img
              src={heroImage}
              alt="Scoop of protein powder being lifted from a black shaker cup on a dark countertop."
              className="size-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
