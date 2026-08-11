import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "./product-card";
import { Container, linkClass } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";
import { useCart } from "../context/CartContext";

// Homepage teaser stays a curated 4, not the full catalog — see ShopGrid for the full list.
const FEATURED_PRODUCTS = PRODUCTS.slice(0, 4);

export function Bestsellers() {
  const { fadeUpItem, staggerContainer } = useMotionPreset();
  const { quantityOf, updateQuantity } = useCart();

  return (
    <section className="w-full bg-white">
      <Container>
        <div className="flex flex-col gap-[20px] pb-[24px] pt-[48px] lg:gap-[28px] lg:pb-[32px] lg:pt-[64px]">
          <div className="flex items-center justify-between gap-[16px]">
            <h2 className="font-['Archivo',sans-serif] text-[22px] font-bold text-[#14171a] lg:text-[28px]">Bestsellers</h2>
            <Link to="/shop" className={`font-['Inter',sans-serif] text-[12.5px] font-semibold text-[#32523d] hover:underline lg:text-[14px] ${linkClass}`}>
              <span className="lg:hidden">View all →</span>
              <span className="hidden lg:inline">View all products →</span>
            </Link>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}
            className="grid grid-cols-2 gap-[14px] lg:grid-cols-4 lg:gap-[24px] lg:pb-[40px]"
          >
            {FEATURED_PRODUCTS.map((product, index) => (
              <li key={product.id} className={index % 2 === 1 ? "lg:translate-y-[40px]" : undefined}>
                <motion.div variants={fadeUpItem} className="h-full">
                  <ProductCard
                    product={product}
                    quantity={quantityOf(product.id)}
                    onQuantityChange={(next) => updateQuantity(product.id, next)}
                  />
                </motion.div>
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
