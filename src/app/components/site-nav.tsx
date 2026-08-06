import { BagIcon, MenuIcon, SearchIcon } from "./icons";
import { Container, iconButtonClass, linkClass } from "./primitives";

const NAV_LINKS = ["Shop", "Protein", "Performance", "Science", "About"];

export function SiteNav() {
  return (
    <header className="w-full border-b border-[#e5e5de] bg-[#fafaf8] lg:border-b-0 lg:bg-white">
      <Container>
        <nav aria-label="Main" className="flex items-center justify-between py-[12px] lg:py-[24px]">
          <a
            href="#"
            className={`font-['Archivo',sans-serif] text-[18px] font-bold tracking-[0.54px] text-[#14171a] lg:text-[20px] lg:tracking-[0.6px] ${linkClass}`}
          >
            FORGE
          </a>

          <ul className="hidden items-center gap-[40px] lg:flex">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a href="#" className={`font-['Inter',sans-serif] text-[14px] font-medium text-[#14171a] hover:text-[#32523d] ${linkClass}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-[4px] lg:gap-[8px]">
            <button type="button" aria-label="Search" className={`hidden lg:flex ${iconButtonClass}`}>
              <SearchIcon />
            </button>
            <button type="button" aria-label="Cart" className={`flex ${iconButtonClass}`}>
              <BagIcon />
            </button>
            <button type="button" aria-label="Open menu" className={`flex lg:hidden ${iconButtonClass}`}>
              <MenuIcon />
            </button>
            <button
              type="button"
              className="ml-[12px] hidden min-h-[44px] items-center rounded-[100px] bg-[#32523d] px-[22px] py-[10px] font-['Inter',sans-serif] text-[13.5px] font-semibold text-white outline-none transition-colors hover:bg-[#294231] focus-visible:ring-2 focus-visible:ring-[#32523d] focus-visible:ring-offset-2 lg:inline-flex"
            >
              Shop Now
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
