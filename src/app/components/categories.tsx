import featuredImage from "../../imports/HomeDesktopWeb/94a28b97f9f6b69556b262fe1ae5ee38b825c96a.webp";
import { ArrowRightIcon } from "./icons";
import { Container, linkClass } from "./primitives";

const CATEGORIES = ["Protein", "Pre-Workout", "Recovery"];

export function Categories() {
  return (
    <section className="w-full bg-[#fafaf8]">
      <Container>
        <div className="flex flex-col gap-[24px] pb-[8px] pt-[48px] lg:gap-[40px] lg:pb-[76px] lg:pt-[72px]">
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
              <span className="absolute bottom-[16px] left-[20px] font-['Archivo',sans-serif] text-[24px] font-bold text-[#fafaf8] lg:bottom-[20px] lg:left-[22px] lg:text-[22px]">
                Creatine
              </span>
            </a>

            <ul className="flex flex-col lg:gap-[20px]">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className={`flex min-h-[44px] items-center justify-between border-b border-[#e5e5de] py-[20px] text-[#14171a] transition-colors hover:text-[#32523d] lg:py-[26px] ${linkClass}`}
                  >
                    <span className="font-['Archivo',sans-serif] text-[19px] font-bold lg:text-[22px]">{category}</span>
                    <ArrowRightIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
