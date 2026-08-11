import { createContext, useContext, useEffect, useMemo, useReducer, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "../data/products";

type CartLine = { productId: string; quantity: number };

type CartAction =
  | { type: "ADD"; productId: string; quantity: number }
  | { type: "REMOVE"; productId: string }
  | { type: "UPDATE_QTY"; productId: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "SET"; lines: CartLine[] };

const STORAGE_KEY = "forge-cart-v1";

function isCartLine(value: unknown): value is CartLine {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as CartLine).productId === "string" &&
    typeof (value as CartLine).quantity === "number"
  );
}

function readStoredLines(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.every(isCartLine)) return [];
    const validIds = new Set(PRODUCTS.map((p) => p.id));
    return parsed.filter((line) => validIds.has(line.productId));
  } catch {
    return [];
  }
}

function reducer(state: CartLine[], action: CartAction): CartLine[] {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((line) => line.productId === action.productId);
      if (existing) {
        return state.map((line) =>
          line.productId === action.productId ? { ...line, quantity: line.quantity + action.quantity } : line,
        );
      }
      return [...state, { productId: action.productId, quantity: action.quantity }];
    }
    case "REMOVE":
      return state.filter((line) => line.productId !== action.productId);
    case "UPDATE_QTY": {
      if (action.quantity <= 0) return state.filter((line) => line.productId !== action.productId);
      const existing = state.find((line) => line.productId === action.productId);
      if (!existing) return [...state, { productId: action.productId, quantity: action.quantity }];
      return state.map((line) => (line.productId === action.productId ? { ...line, quantity: action.quantity } : line));
    }
    case "CLEAR":
      return [];
    case "SET":
      return action.lines;
    default:
      return state;
  }
}

type CartContextValue = {
  items: (CartLine & Product)[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  quantityOf: (productId: string) => number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, dispatch] = useReducer(reducer, undefined, readStoredLines);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const items = useMemo(() => {
    const byId = new Map(PRODUCTS.map((product) => [product.id, product]));
    return lines
      .map((line) => {
        const product = byId.get(line.productId);
        return product ? { ...product, ...line } : null;
      })
      .filter((item): item is CartLine & Product => item !== null);
  }, [lines]);

  const itemCount = useMemo(() => lines.reduce((sum, line) => sum + line.quantity, 0), [lines]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.priceValue * item.quantity, 0), [items]);

  const value: CartContextValue = {
    items,
    itemCount,
    subtotal,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem: (productId, quantity = 1) => dispatch({ type: "ADD", productId, quantity }),
    removeItem: (productId) => dispatch({ type: "REMOVE", productId }),
    updateQuantity: (productId, quantity) => dispatch({ type: "UPDATE_QTY", productId, quantity }),
    quantityOf: (productId) => lines.find((line) => line.productId === productId)?.quantity ?? 0,
    clearCart: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
