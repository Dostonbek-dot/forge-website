import type { Product } from "../data/products";
import { MinusIcon, PlusIcon, StarIcon } from "./icons";
import { focusRing } from "./primitives";

export type { Product };

export function ProductCard({
  product,
  quantity = 0,
  onQuantityChange,
}: {
  product: Product;
  /** Current quantity of this product already in the cart — 0 means "not added yet." */
  quantity?: number;
  onQuantityChange?: (nextQuantity: number) => void;
}) {
  return (
    <article className="flex h-full flex-col gap-[8px] rounded-[16px] border border-[#e5e5de] bg-white px-[10px] pb-[12px] pt-[10px] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:shadow-md lg:gap-[14px] lg:rounded-[20px] lg:px-[16px] lg:pb-[20px] lg:pt-[16px]">
      {/* 5:4 resolves to the Figma sizes at both ends: 148x120 at 390px, 250x200 at 1440px. */}
      <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[10px] lg:rounded-[14px]">
        <img src={product.image} alt={product.alt} className="size-full object-cover" />
        {product.badge ? (
          <span className="absolute left-[8px] top-[8px] rounded-[5px] bg-[#e7eee6] px-[6px] py-[4px] font-['Inter',sans-serif] text-[7.5px] font-semibold tracking-[0.1125px] text-[#32523d] lg:left-[12px] lg:top-[12px]">
            {product.badge}
          </span>
        ) : null}
      </div>

      <h3 className="font-['Inter',sans-serif] text-[12.5px] font-semibold text-[#14171a] lg:text-[15px]">{product.name}</h3>
      <p className="font-['Inter',sans-serif] text-[10.5px] text-[#737870] lg:text-[12.5px]">{product.variant}</p>

      <div className="mt-auto flex items-center justify-between lg:pt-[4px]">
        <span className="font-['Inter',sans-serif] text-[13px] font-bold text-[#14171a] lg:text-[15.5px]">{product.price}</span>
        <span className="flex items-center gap-[3px] lg:gap-[4px]">
          <StarIcon />
          <span className="font-['Inter',sans-serif] text-[10.5px] text-[#737870] lg:text-[12.5px]">
            <span className="sr-only">Rated </span>
            {product.rating}
            <span className="sr-only"> out of 5</span>
          </span>
        </span>
      </div>

      {onQuantityChange ? (
        quantity > 0 ? (
          <div className="flex min-h-[36px] items-center justify-between rounded-[100px] bg-[#32523d] px-[4px] lg:min-h-[40px]">
            <button
              type="button"
              aria-label={`Decrease quantity of ${product.name}`}
              onClick={() => onQuantityChange(quantity - 1)}
              className={`flex size-[28px] items-center justify-center rounded-full text-white transition duration-200 ease-out hover:bg-white/15 active:scale-[0.95] lg:size-[32px] ${focusRing}`}
            >
              <MinusIcon />
            </button>
            <span className="font-['Inter',sans-serif] text-[12.5px] font-semibold text-white lg:text-[13.5px]">{quantity}</span>
            <button
              type="button"
              aria-label={`Increase quantity of ${product.name}`}
              onClick={() => onQuantityChange(quantity + 1)}
              className={`flex size-[28px] items-center justify-center rounded-full text-white transition duration-200 ease-out hover:bg-white/15 active:scale-[0.95] lg:size-[32px] ${focusRing}`}
            >
              <PlusIcon />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => onQuantityChange(1)}
            className="min-h-[36px] w-full rounded-[100px] bg-[#32523d] font-['Inter',sans-serif] text-[11.5px] font-semibold text-white outline-none transition duration-200 ease-out hover:bg-[#5B7564] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#32523d] focus-visible:ring-offset-2 lg:min-h-[40px] lg:text-[12.5px]"
          >
            Add to Cart
          </button>
        )
      ) : null}
    </article>
  );
}
