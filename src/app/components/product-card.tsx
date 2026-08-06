import { StarIcon } from "./icons";

export type Product = {
  id: string;
  name: string;
  variant: string;
  price: string;
  rating: string;
  image: string;
  alt: string;
  badge?: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col gap-[8px] rounded-[16px] border border-[#e5e5de] bg-white px-[10px] pb-[12px] pt-[10px] lg:gap-[14px] lg:rounded-[20px] lg:px-[16px] lg:pb-[20px] lg:pt-[16px]">
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
    </article>
  );
}
