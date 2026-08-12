import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { BagIcon, CloseIcon, MinusIcon, PlusIcon } from "./icons";
import { PrimaryButton, focusRing, iconButtonClass } from "./primitives";
import { DURATION, EASE, useMotionPreset } from "./motion";

export function CartDrawer() {
  const { isOpen, closeCart, items, itemCount, subtotal, updateQuantity, removeItem } = useCart();
  const { reduced } = useMotionPreset();
  const transition = reduced ? { duration: 0 } : { duration: DURATION, ease: EASE };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay forceMount asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="fixed inset-0 z-[99] bg-black/30"
              />
            </Dialog.Overlay>
            <Dialog.Content forceMount asChild aria-describedby={undefined}>
              <motion.div
                initial={{ x: reduced ? 0 : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: reduced ? 0 : "100%" }}
                transition={transition}
                className="fixed inset-y-0 right-0 z-[100] flex h-full w-full max-w-[420px] flex-col bg-white"
              >
                <div className="flex items-center justify-between border-b border-[#e5e5de] px-[20px] py-[16px]">
                  <Dialog.Title className="font-['Archivo',sans-serif] text-[18px] font-bold text-[#14171a]">
                    Your Cart {itemCount > 0 ? `(${itemCount})` : ""}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button type="button" aria-label="Close cart" className={iconButtonClass}>
                      <CloseIcon />
                    </button>
                  </Dialog.Close>
                </div>

                {items.length === 0 ? (
                  <div className="flex flex-1 flex-col items-center justify-center gap-[16px] px-[20px] text-center">
                    <BagIcon className="size-[40px] text-[#737870]" />
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#737870]">Your cart is empty</p>
                    <Dialog.Close asChild>
                      <PrimaryButton asChild>
                        <Link to="/shop">Shop All</Link>
                      </PrimaryButton>
                    </Dialog.Close>
                  </div>
                ) : (
                  <ul className="flex-1 overflow-y-auto px-[20px] py-[16px]">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.li
                          key={item.productId}
                          layout={!reduced}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={transition}
                          className="flex gap-[12px] border-b border-[#e5e5de] py-[16px] first:pt-0 last:border-b-0"
                        >
                          <img src={item.image} alt={item.alt} className="size-[64px] shrink-0 rounded-[10px] object-cover lg:size-[72px]" />
                          <div className="flex flex-1 flex-col gap-[4px]">
                            <div className="flex items-start justify-between gap-[8px]">
                              <div>
                                <h3 className="font-['Inter',sans-serif] text-[13.5px] font-semibold text-[#14171a]">{item.name}</h3>
                                <p className="font-['Inter',sans-serif] text-[11.5px] text-[#737870]">{item.variant}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeItem(item.productId)}
                                aria-label={`Remove ${item.name}`}
                                className={`shrink-0 text-[#737870] transition-colors duration-200 ease-out hover:text-[#14171a] ${focusRing}`}
                              >
                                <CloseIcon className="size-[16px]" />
                              </button>
                            </div>
                            <div className="mt-auto flex items-center justify-between pt-[8px]">
                              <div className="flex items-center gap-[10px] rounded-[100px] border border-[#e5e5de] px-[6px] py-[4px]">
                                <button
                                  type="button"
                                  aria-label={`Decrease quantity of ${item.name}`}
                                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                  className={`flex size-[22px] items-center justify-center rounded-full text-[#14171a] transition duration-200 ease-out hover:bg-black/5 ${focusRing}`}
                                >
                                  <MinusIcon />
                                </button>
                                <span className="min-w-[14px] text-center font-['Inter',sans-serif] text-[12.5px] font-semibold text-[#14171a]">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  aria-label={`Increase quantity of ${item.name}`}
                                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                  className={`flex size-[22px] items-center justify-center rounded-full text-[#14171a] transition duration-200 ease-out hover:bg-black/5 ${focusRing}`}
                                >
                                  <PlusIcon />
                                </button>
                              </div>
                              <span className="font-['Inter',sans-serif] text-[13.5px] font-bold text-[#14171a]">
                                ${(item.priceValue * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}

                {items.length > 0 ? (
                  <div className="border-t border-[#e5e5de] px-[20px] py-[16px]">
                    <div className="mb-[12px] flex items-center justify-between font-['Inter',sans-serif] text-[14.5px] font-semibold text-[#14171a]">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <Dialog.Close asChild>
                      <PrimaryButton asChild className="w-full">
                        <Link to="/checkout">Checkout</Link>
                      </PrimaryButton>
                    </Dialog.Close>
                  </div>
                ) : null}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
