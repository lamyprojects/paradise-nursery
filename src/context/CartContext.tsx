import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Plant } from "../data/plants";

// ── Types ────────────────────────────────────────────────────────────────────
export interface CartItem {
  plant: Plant;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD"; plant: Plant }
  | { type: "INC"; plantId: string }
  | { type: "DEC"; plantId: string }
  | { type: "REMOVE"; plantId: string };

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalCost: number;
  isInCart: (plantId: string) => boolean;
  dispatch: React.Dispatch<CartAction>;
}

// ── Reducer ───────────────────────────────────────────────────────────────────
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.plant.id === action.plant.id);
      if (existing) return state; // already in cart
      return { items: [...state.items, { plant: action.plant, quantity: 1 }] };
    }
    case "INC": {
      return {
        items: state.items.map((i) =>
          i.plant.id === action.plantId ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    }
    case "DEC": {
      return {
        items: state.items
          .map((i) =>
            i.plant.id === action.plantId ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      };
    }
    case "REMOVE": {
      return { items: state.items.filter((i) => i.plant.id !== action.plantId) };
    }
    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────────────────────────────
const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = state.items.reduce(
    (sum, i) => sum + i.plant.price * i.quantity,
    0
  );
  const isInCart = (plantId: string) =>
    state.items.some((i) => i.plant.id === plantId);

  return (
    <CartContext.Provider
      value={{ items: state.items, totalItems, totalCost, isInCart, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
