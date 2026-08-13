import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import { Container, PrimaryButton, linkClass } from "../components/primitives";
import { OrderSummary } from "../components/order-summary";
import { useMotionPreset } from "../components/motion";
import type { OrderSnapshot } from "../data/order";

export function OrderConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { fadeUp, transition, reduced } = useMotionPreset();
  const hasFiredConfetti = useRef(false);

  const order = (state as { order?: OrderSnapshot } | null)?.order;

  useEffect(() => {
    if (!order) navigate("/shop", { replace: true });
  }, [order, navigate]);

  useEffect(() => {
    if (!order || reduced || hasFiredConfetti.current) return;
    hasFiredConfetti.current = true;
    confetti({ particleCount: 70, spread: 65, origin: { y: 0.3 } });
  }, [order, reduced]);

  if (!order) return null;

  return (
    <section className="w-full bg-white">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition()}
          className="mx-auto flex max-w-[640px] flex-col items-center gap-[24px] py-[48px] text-center lg:py-[72px]"
        >
          <CheckCircle2 className="size-[48px] text-[#32523d]" strokeWidth={1.5} />

          <div className="flex flex-col gap-[8px]">
            <h1 className="font-['Archivo',sans-serif] text-[28px] font-bold tracking-[-0.5px] text-[#14171a] lg:text-[36px]">
              Order confirmed
            </h1>
            <p className="font-['Inter',sans-serif] text-[14.5px] text-[#737870]">
              Order <span className="font-semibold text-[#14171a]">#{order.orderNumber}</span>
            </p>
          </div>

          <div className="flex flex-col gap-[4px] font-['Inter',sans-serif] text-[14px] text-[#3a3d3a]">
            <p>Arriving {order.deliveryRange}</p>
            <p className="text-[#737870]">A confirmation email has been sent to {order.shipping.email}.</p>
          </div>

          <div className="w-full text-left">
            <OrderSummary items={order.items} totals={order.totals} />
          </div>

          <div className="w-full rounded-[16px] border border-[#e5e5de] p-[20px] text-left lg:rounded-[20px] lg:p-[24px]">
            <h2 className="font-['Archivo',sans-serif] text-[16px] font-bold text-[#14171a]">Shipping To</h2>
            <p className="mt-[10px] font-['Inter',sans-serif] text-[13.5px] leading-[1.6] text-[#3a3d3a]">
              {order.shipping.fullName}
              <br />
              {order.shipping.addressLine1}
              {order.shipping.addressLine2 ? <> {order.shipping.addressLine2}</> : null}
              <br />
              {order.shipping.city}, {order.shipping.region}
              <br />
              {order.shipping.country}
            </p>
          </div>

          <div className="flex flex-col items-center gap-[12px] sm:flex-row">
            <PrimaryButton asChild>
              <Link to="/shop">Continue Shopping</Link>
            </PrimaryButton>
            <Link to="/" className={`font-['Inter',sans-serif] text-[13.5px] font-semibold text-[#32523d] hover:underline ${linkClass}`}>
              Back to Home
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
