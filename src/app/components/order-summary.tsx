import type { OrderLineItem, OrderTotals } from "../data/order";

export function OrderSummary({ items, totals }: { items: OrderLineItem[]; totals: OrderTotals }) {
  return (
    <div className="flex flex-col rounded-[16px] border border-[#e5e5de] p-[20px] lg:rounded-[20px] lg:p-[24px]">
      <h2 className="font-['Archivo',sans-serif] text-[16px] font-bold text-[#14171a]">Order Summary</h2>

      <ul className="mt-[16px] flex flex-col">
        {items.map((item) => (
          <li key={item.productId} className="flex gap-[12px] border-b border-[#e5e5de] py-[14px] first:pt-0 last:border-b-0">
            <img src={item.image} alt={item.alt} className="size-[56px] shrink-0 rounded-[10px] object-cover" />
            <div className="flex flex-1 flex-col gap-[2px]">
              <h3 className="font-['Inter',sans-serif] text-[13px] font-semibold text-[#14171a]">{item.name}</h3>
              <p className="font-['Inter',sans-serif] text-[11.5px] text-[#737870]">
                {item.variant} · Qty {item.quantity}
              </p>
            </div>
            <span className="shrink-0 font-['Inter',sans-serif] text-[13px] font-bold text-[#14171a]">
              ${(item.priceValue * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-[16px] flex flex-col gap-[8px] border-t border-[#e5e5de] pt-[16px] font-['Inter',sans-serif] text-[13.5px] text-[#3a3d3a]">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>${totals.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax</span>
          <span>${totals.tax.toFixed(2)}</span>
        </div>
        <div className="mt-[4px] flex items-center justify-between border-t border-[#e5e5de] pt-[12px] font-bold text-[#14171a]">
          <span>Total</span>
          <span>${totals.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
