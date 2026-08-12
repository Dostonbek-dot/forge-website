import type { Product } from "./products";

export type OrderLineItem = Product & { productId: string; quantity: number };

export type ShippingDetails = {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};

export type OrderTotals = {
  subtotal: number;
  tax: number;
  total: number;
};

export type OrderSnapshot = {
  orderNumber: string;
  placedAt: string;
  items: OrderLineItem[];
  totals: OrderTotals;
  shipping: ShippingDetails;
  deliveryRange: string;
};

const ORDER_NUMBER_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const TAX_RATE = 0.08;

export function generateOrderNumber(date = new Date()): string {
  const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += ORDER_NUMBER_ALPHABET[Math.floor(Math.random() * ORDER_NUMBER_ALPHABET.length)];
  }
  return `FRG-${datePart}-${suffix}`;
}

export function estimateDeliveryRange(from = new Date()): string {
  const format = (d: Date) => d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  const start = new Date(from);
  start.setDate(start.getDate() + 5);
  const end = new Date(from);
  end.setDate(end.getDate() + 7);
  return `${format(start)} – ${format(end)}`;
}

export function computeOrderTotals(subtotal: number): OrderTotals {
  const tax = subtotal * TAX_RATE;
  return { subtotal, tax, total: subtotal + tax };
}
