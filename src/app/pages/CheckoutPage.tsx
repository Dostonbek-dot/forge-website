import { forwardRef, useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { Container, PrimaryButton, focusRing, linkClass } from "../components/primitives";
import { OrderSummary } from "../components/order-summary";
import { useMotionPreset } from "../components/motion";
import { computeOrderTotals, estimateDeliveryRange, generateOrderNumber, saveOrder, type OrderSnapshot } from "../data/order";

type CheckoutFormValues = {
  email: string;
  phone: string;
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  country: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  nameOnCard: string;
};

type FieldProps = { label: string; error?: string } & ComponentPropsWithoutRef<"input">;

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field({ label, error, className = "", ...inputProps }, ref) {
  return (
    <label className={`flex flex-col gap-[6px] ${className}`}>
      <span className="font-['Inter',sans-serif] text-[12.5px] font-semibold text-[#14171a]">{label}</span>
      <input
        ref={ref}
        className={`h-[44px] rounded-[10px] border bg-white px-[14px] font-['Inter',sans-serif] text-[14px] text-[#14171a] placeholder:text-[#a3a89f] ${
          error ? "border-red-500" : "border-[#e5e5de]"
        } ${focusRing}`}
        {...inputProps}
      />
      {error ? <span className="font-['Inter',sans-serif] text-[11.5px] text-red-600">{error}</span> : null}
    </label>
  );
});

type Step = "shipping" | "payment";

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { fadeUp, transition } = useMotionPreset();
  const [step, setStep] = useState<Step>("shipping");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAddressLine2, setShowAddressLine2] = useState(false);
  const orderPlacedRef = useRef(false);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    defaultValues: { country: "Uzbekistan" },
  });

  useEffect(() => {
    if (showAddressLine2) setFocus("addressLine2");
  }, [showAddressLine2, setFocus]);

  useEffect(() => {
    if (items.length === 0 && !orderPlacedRef.current) navigate("/shop", { replace: true });
  }, [items.length, navigate]);

  if (items.length === 0 && !orderPlacedRef.current) return null;

  const totals = computeOrderTotals(subtotal);

  const onFormSubmit: SubmitHandler<CheckoutFormValues> = async (values) => {
    if (step === "shipping") {
      setStep("payment");
      return;
    }

    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      const snapshot: OrderSnapshot = {
        orderNumber: generateOrderNumber(),
        placedAt: new Date().toISOString(),
        items,
        totals,
        shipping: {
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          addressLine1: values.addressLine1,
          addressLine2: values.addressLine2 ?? "",
          city: values.city,
          region: values.region,
          country: values.country,
        },
        deliveryRange: estimateDeliveryRange(),
      };
      orderPlacedRef.current = true;
      saveOrder(snapshot);
      clearCart();
      navigate("/order-confirmation", { state: { order: snapshot } });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="w-full bg-white">
      <Container>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={transition()} className="py-[32px] lg:py-[48px]">
          <h1 className="font-['Archivo',sans-serif] text-[28px] font-bold tracking-[-0.5px] text-[#14171a] lg:text-[36px]">Checkout</h1>
          <p className="mt-[4px] font-['Inter',sans-serif] text-[13px] text-[#737870]">
            Step {step === "shipping" ? "1" : "2"} of 2 — {step === "shipping" ? "Shipping" : "Payment"}
          </p>

          <form onSubmit={handleSubmit(onFormSubmit)} className="mt-[24px] grid grid-cols-1 gap-[32px] lg:grid-cols-[1fr_380px] lg:gap-[40px]">
            <div className="flex flex-col gap-[28px]">
              {step === "shipping" ? (
                <>
                  <fieldset className="flex flex-col gap-[14px]">
                    <legend className="font-['Archivo',sans-serif] text-[15px] font-bold text-[#14171a]">Contact</legend>
                    <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                      <Field
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        error={errors.email?.message}
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                        })}
                      />
                      <Field label="Phone (optional)" type="tel" placeholder="+998 90 123 45 67" {...register("phone")} />
                    </div>
                  </fieldset>

                  <fieldset className="flex flex-col gap-[14px]">
                    <legend className="font-['Archivo',sans-serif] text-[15px] font-bold text-[#14171a]">Shipping Address</legend>
                    <Field
                      label="Full name"
                      placeholder="Jane Doe"
                      error={errors.fullName?.message}
                      {...register("fullName", { required: "Full name is required" })}
                    />
                    <Field
                      label="Address"
                      placeholder="123 Main St"
                      error={errors.addressLine1?.message}
                      {...register("addressLine1", { required: "Address is required" })}
                    />
                    {showAddressLine2 ? (
                      <Field label="Apartment, suite, etc." placeholder="Apt, suite, etc." {...register("addressLine2")} />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setShowAddressLine2(true)}
                        className={`self-start font-['Inter',sans-serif] text-[13px] font-semibold text-[#32523d] hover:underline ${linkClass}`}
                      >
                        + Add apartment, suite, etc.
                      </button>
                    )}
                    <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                      <Field label="City" error={errors.city?.message} {...register("city", { required: "Required" })} />
                      <Field label="Region" error={errors.region?.message} {...register("region", { required: "Required" })} />
                    </div>
                    <Field label="Country" readOnly {...register("country")} />
                  </fieldset>
                </>
              ) : (
                <fieldset className="flex flex-col gap-[14px]">
                  <legend className="font-['Archivo',sans-serif] text-[15px] font-bold text-[#14171a]">Payment</legend>
                  <p className="font-['Inter',sans-serif] text-[12px] text-[#737870]">
                    This is a demo checkout — payments are simulated and no card data is collected or charged.
                  </p>
                  <Field
                    label="Name on card"
                    placeholder="Jane Doe"
                    error={errors.nameOnCard?.message}
                    {...register("nameOnCard", { required: "Required" })}
                  />
                  <Field
                    label="Card number"
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    error={errors.cardNumber?.message}
                    {...register("cardNumber", {
                      required: "Required",
                      pattern: { value: /^[\d\s]{13,19}$/, message: "Invalid card number" },
                    })}
                  />
                  <div className="grid grid-cols-2 gap-[14px]">
                    <Field
                      label="Expiry (MM/YY)"
                      placeholder="12/28"
                      error={errors.expiry?.message}
                      {...register("expiry", {
                        required: "Required",
                        pattern: { value: /^(0[1-9]|1[0-2])\/\d{2}$/, message: "Use MM/YY" },
                      })}
                    />
                    <Field
                      label="CVC"
                      inputMode="numeric"
                      placeholder="123"
                      error={errors.cvc?.message}
                      {...register("cvc", {
                        required: "Required",
                        pattern: { value: /^\d{3,4}$/, message: "Invalid CVC" },
                      })}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep("shipping")}
                    className={`self-start font-['Inter',sans-serif] text-[13px] font-semibold text-[#32523d] hover:underline ${linkClass}`}
                  >
                    ← Back to shipping
                  </button>
                </fieldset>
              )}
            </div>

            <div className="flex flex-col gap-[16px]">
              <OrderSummary items={items} totals={totals} />
              <PrimaryButton type="submit" disabled={isProcessing} className="w-full">
                {step === "shipping" ? "Continue to Payment" : isProcessing ? "Placing order…" : "Place Order"}
              </PrimaryButton>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
