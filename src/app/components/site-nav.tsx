import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "./cart-drawer";
import { BagIcon, MenuIcon } from "./icons";
import { MobileNav } from "./mobile-nav";
import { NAV_HREFS, NAV_LINKS } from "./nav-links";
import { Container, iconButtonClass, linkClass } from "./primitives";

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e5de] bg-white lg:border-b-0">
      <Container>
        <nav aria-label="Main" className="flex items-center justify-between py-[12px] lg:py-[24px]">
          <Link
            to="/"
            className={`font-['Archivo',sans-serif] text-[18px] font-bold tracking-[0.54px] text-[#14171a] lg:text-[20px] lg:tracking-[0.6px] ${linkClass}`}
          >
            FORGE
          </Link>

          <div className="flex items-center lg:gap-[32px]">
            <ul className="hidden items-center gap-[40px] lg:flex">
              {NAV_LINKS.map((label) => {
                const href = NAV_HREFS[label];
                const className = `font-['Inter',sans-serif] text-[14px] font-medium text-[#14171a] hover:text-[#32523d] ${linkClass}`;
                return (
                  <li key={label}>
                    {href ? (
                      <Link to={href} className={className}>
                        {label}
                      </Link>
                    ) : (
                      <a href="#" className={className}>
                        {label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-[4px] lg:gap-[8px]">
              <button type="button" aria-label="Cart" onClick={openCart} className={`relative flex ${iconButtonClass}`}>
                <BagIcon />
                {itemCount > 0 ? (
                  <span className="absolute -right-[2px] -top-[2px] flex size-[16px] items-center justify-center rounded-full bg-[#32523d] font-['Inter',sans-serif] text-[9px] font-bold text-white">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
                className={`flex lg:hidden ${iconButtonClass}`}
              >
                <MenuIcon />
              </button>
              <Link
                to="/shop"
                className="ml-[12px] hidden min-h-[44px] items-center rounded-[100px] bg-[#32523d] px-[22px] py-[10px] font-['Inter',sans-serif] text-[13.5px] font-semibold text-white outline-none transition duration-200 ease-out hover:bg-[#5B7564] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#32523d] focus-visible:ring-offset-2 lg:inline-flex"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </nav>
      </Container>

      <MobileNav links={NAV_LINKS} open={menuOpen} onOpenChange={setMenuOpen} />
      <CartDrawer />
    </header>
  );
}
