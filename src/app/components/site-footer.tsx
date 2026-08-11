import { Link } from "react-router-dom";
import { Container, fluid, linkClass } from "./primitives";

const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Protein", href: "/protein" },
      { label: "Creatine" },
      { label: "Pre-Workout" },
      { label: "Recovery" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "About", href: "/about" }, { label: "Blog", href: "/blog" }, { label: "Sustainability" }, { label: "Careers" }],
  },
  {
    title: "Support",
    links: [{ label: "Contact", href: "/contact" }, { label: "Shipping" }, { label: "FAQ" }, { label: "Track Order" }],
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full overflow-hidden bg-white">
      <Container>
        <div className="flex flex-col gap-[32px] pb-[32px] pt-[48px] lg:gap-[40px] lg:pb-[40px] lg:pt-[56px]">
          <div className="flex flex-col gap-[32px] lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-[8px] lg:gap-[10px]">
              <p className="font-['Archivo',sans-serif] text-[18px] font-bold tracking-[0.54px] text-[#14171a]">FORGE</p>
              <p className="font-['Inter',sans-serif] text-[13px] text-[#737870]">Performance nutrition, verified.</p>
            </div>

            <div className="flex gap-[20px] lg:gap-[64px]">
              {FOOTER_COLUMNS.map((column) => (
                <nav key={column.title} aria-label={column.title} className="flex flex-1 flex-col gap-[10px] lg:flex-none lg:gap-[12px]">
                  <h2 className="font-['Inter',sans-serif] text-[12px] font-semibold text-[#14171a] lg:text-[13px]">{column.title}</h2>
                  {column.links.map((link) => {
                    const className = `font-['Inter',sans-serif] text-[11.5px] text-[#737870] hover:text-[#32523d] lg:text-[13px] ${linkClass}`;
                    return link.href ? (
                      <Link key={link.label} to={link.href} className={className}>
                        {link.label}
                      </Link>
                    ) : (
                      <a key={link.label} href="#" className={className}>
                        {link.label}
                      </a>
                    );
                  })}
                </nav>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-[#e5e5de]" />

          <p className="font-['Inter',sans-serif] text-[11.5px] text-[#737870] lg:text-[12.5px]">© 2026 Forge Nutrition. All rights reserved.</p>
        </div>
      </Container>

      <div aria-hidden className="overflow-hidden" style={{ height: fluid(90, 170) }}>
        <Container>
          <p
            className="whitespace-nowrap font-['Archivo',sans-serif] font-bold leading-[1] text-[#32523d]/[0.06] lg:-ml-[17px]"
            style={{ fontSize: fluid(96, 220), letterSpacing: fluid(1.92, 4.4) }}
          >
            FORGE
          </p>
        </Container>
      </div>
    </footer>
  );
}
