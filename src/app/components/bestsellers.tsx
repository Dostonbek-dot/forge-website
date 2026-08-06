import creatineImage from "../../imports/HomeDesktopWeb/ffb81ecd9f77384609096d5f5789d0ed4790fcb3.webp";
import vitalityImage from "../../imports/HomeDesktopWeb/c2ca437d27f4f830ffdede88eec53b2ae6abb28e.webp";
import preWorkoutImage from "../../imports/HomeDesktopWeb/a8bc9982346d4c2fce4fcf9eded71f8615318efb.webp";
import wheyImage from "../../imports/HomeDesktopWeb/b9035de166f8ff41e807a93a3552d179cd53f6fa.webp";
import { ProductCard, type Product } from "./product-card";
import { Container, linkClass } from "./primitives";

const PRODUCTS: Product[] = [
  {
    id: "whey-isolate-pro",
    name: "Whey Isolate Pro",
    variant: "Chocolate · 2 lb",
    price: "$34.99",
    rating: "4.8",
    image: wheyImage,
    alt: "Whey Isolate Pro tub against a dark green backdrop.",
    badge: "BESTSELLER",
  },
  {
    id: "creatine-monohydrate",
    name: "Creatine Monohydrate",
    variant: "Unflavored · 300g",
    price: "$19.99",
    rating: "4.9",
    image: creatineImage,
    alt: "Creatine Monohydrate jar on a neutral beige background.",
    badge: "BESTSELLER",
  },
  {
    id: "pre-workout-ignite",
    name: "Pre-Workout Ignite",
    variant: "Citrus · 30 srv",
    price: "$29.99",
    rating: "4.7",
    image: preWorkoutImage,
    alt: "Pre-Workout Ignite tub on a bright orange background.",
  },
  {
    id: "daily-vitality-pack",
    name: "Daily Vitality Pack",
    variant: "30-day supply",
    price: "$24.99",
    rating: "4.6",
    image: vitalityImage,
    alt: "Daily Vitality Pack supplement bottle on a light background.",
  },
];

export function Bestsellers() {
  return (
    <section className="w-full bg-[#fafaf8]">
      <Container>
        <div className="flex flex-col gap-[20px] pb-[24px] pt-[48px] lg:gap-[28px] lg:pb-[32px] lg:pt-[64px]">
          <div className="flex items-center justify-between gap-[16px]">
            <h2 className="font-['Archivo',sans-serif] text-[22px] font-bold text-[#14171a] lg:text-[28px]">Bestsellers</h2>
            <a href="#" className={`font-['Inter',sans-serif] text-[12.5px] font-semibold text-[#32523d] hover:underline lg:text-[14px] ${linkClass}`}>
              <span className="lg:hidden">View all →</span>
              <span className="hidden lg:inline">View all products →</span>
            </a>
          </div>

          <ul className="grid grid-cols-2 gap-[14px] lg:grid-cols-4 lg:gap-[24px] lg:pb-[40px]">
            {PRODUCTS.map((product, index) => (
              <li key={product.id} className={index % 2 === 1 ? "lg:translate-y-[40px]" : undefined}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
