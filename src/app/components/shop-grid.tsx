import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PRODUCTS, type ProductCategory } from "../data/products";
import { ProductCard } from "./product-card";
import { Container, focusRing } from "./primitives";
import { EASE, useMotionPreset, viewportOnce } from "./motion";
import { useCart } from "../context/CartContext";

type Filter = "all" | ProductCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "protein", label: "Protein" },
  { id: "pre-workout", label: "Pre-Workout" },
  { id: "recovery", label: "Recovery" },
];

export function ShopGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const { reduced, fadeUp, transition } = useMotionPreset();
  const { quantityOf, updateQuantity } = useCart();

  const filtered = activeFilter === "all" ? PRODUCTS : PRODUCTS.filter((product) => product.category === activeFilter);

  return (
    <section id="shop-grid" className="w-full bg-white">
      <Container>
        <div className="flex flex-col gap-[24px] py-[32px] lg:gap-[32px] lg:py-[48px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={transition()}
            className="flex flex-wrap gap-[10px]"
            role="group"
            aria-label="Filter by category"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`min-h-[40px] rounded-[100px] border px-[18px] font-['Inter',sans-serif] text-[13px] font-semibold transition duration-200 ease-out ${focusRing} ${
                    isActive ? "border-[#32523d] bg-[#32523d] text-white" : "border-[#e5e5de] bg-white text-[#14171a] hover:border-[#32523d]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </motion.div>

          {filtered.length === 0 ? (
            <p className="py-[40px] text-center font-['Inter',sans-serif] text-[14px] text-[#737870]">No products in this category yet.</p>
          ) : (
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp} transition={transition(0.08)}>
              <ul className="grid grid-cols-2 gap-[14px] lg:grid-cols-4 lg:gap-[24px] lg:pb-[40px]">
                <AnimatePresence initial={false}>
                  {filtered.map((product, index) => (
                    <motion.li
                      key={product.id}
                      layout={!reduced}
                      initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
                      transition={{ duration: reduced ? 0 : 0.22, ease: EASE, delay: reduced ? 0 : index * 0.035 }}
                    >
                      {/*
                        The offset lives on this nested div, not the `motion.li` above, for two reasons:
                        Motion's `layout` prop already animates the li's own `transform` for the filter
                        reflow, so a transform utility on that same element would fight it — and `margin`
                        was tried instead, but margin affects the grid row's stretched height, which
                        visually elongated the *other* cards in the row to match. A transform on this
                        inner element is purely a paint-time shift: no layout impact on the row at all.
                      */}
                      <div className={index % 2 === 1 ? "lg:translate-y-[40px]" : undefined}>
                        <ProductCard
                          product={product}
                          quantity={quantityOf(product.id)}
                          onQuantityChange={(next) => updateQuantity(product.id, next)}
                        />
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
