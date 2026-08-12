import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Container, linkClass } from "../components/primitives";
import { OrderSummary } from "../components/order-summary";
import { useMotionPreset } from "../components/motion";
import { clearOrderHistory, getOrderHistory } from "../data/order";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" });
}

export function AdminPage() {
  const [orders, setOrders] = useState(getOrderHistory);
  const { fadeUp, transition } = useMotionPreset();

  return (
    <section className="w-full bg-white">
      <Container>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={transition()} className="py-[32px] lg:py-[48px]">
          <div className="flex items-center justify-between gap-[16px]">
            <div>
              <h1 className="font-['Archivo',sans-serif] text-[28px] font-bold tracking-[-0.5px] text-[#14171a] lg:text-[36px]">
                Order History
              </h1>
              <p className="mt-[4px] font-['Inter',sans-serif] text-[13.5px] text-[#737870]">
                {orders.length} order{orders.length === 1 ? "" : "s"} — stored locally in this browser only.
              </p>
            </div>
            {orders.length > 0 ? (
              <button
                type="button"
                onClick={() => {
                  clearOrderHistory();
                  setOrders([]);
                }}
                className="shrink-0 font-['Inter',sans-serif] text-[13px] font-semibold text-[#737870] transition-colors duration-200 ease-out hover:text-[#14171a]"
              >
                Clear order history
              </button>
            ) : null}
          </div>

          {orders.length === 0 ? (
            <div className="mt-[48px] flex flex-col items-center gap-[12px] text-center">
              <p className="font-['Inter',sans-serif] text-[14px] text-[#737870]">No orders yet.</p>
              <Link
                to="/shop"
                className={`font-['Inter',sans-serif] text-[13.5px] font-semibold text-[#32523d] hover:underline ${linkClass}`}
              >
                Go to Shop
              </Link>
            </div>
          ) : (
            <ul className="mt-[24px] flex flex-col gap-[12px]">
              {orders.map((order) => (
                <li key={order.orderNumber} className="rounded-[16px] border border-[#e5e5de] lg:rounded-[20px]">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-[8px] px-[20px] py-[16px] lg:px-[24px]">
                      <div className="flex flex-col gap-[2px]">
                        <span className="font-['Inter',sans-serif] text-[13.5px] font-semibold text-[#14171a]">
                          #{order.orderNumber}
                        </span>
                        <span className="font-['Inter',sans-serif] text-[11.5px] text-[#737870]">
                          {formatDate(order.placedAt)} · {order.shipping.fullName}
                        </span>
                      </div>
                      <div className="flex items-center gap-[16px]">
                        <span className="font-['Inter',sans-serif] text-[12.5px] text-[#737870]">
                          {order.items.length} item{order.items.length === 1 ? "" : "s"}
                        </span>
                        <span className="font-['Inter',sans-serif] text-[14px] font-bold text-[#14171a]">
                          ${order.totals.total.toFixed(2)}
                        </span>
                      </div>
                    </summary>
                    <div className="flex flex-col gap-[16px] border-t border-[#e5e5de] p-[20px] lg:p-[24px]">
                      <OrderSummary items={order.items} totals={order.totals} />
                      <div>
                        <h2 className="font-['Archivo',sans-serif] text-[14px] font-bold text-[#14171a]">Shipping To</h2>
                        <p className="mt-[8px] font-['Inter',sans-serif] text-[13px] leading-[1.6] text-[#3a3d3a]">
                          {order.shipping.fullName}
                          <br />
                          {order.shipping.addressLine1}
                          {order.shipping.addressLine2 ? <> {order.shipping.addressLine2}</> : null}
                          <br />
                          {order.shipping.city}, {order.shipping.region} {order.shipping.postalCode}
                          <br />
                          {order.shipping.country}
                        </p>
                      </div>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
