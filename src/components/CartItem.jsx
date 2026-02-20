import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ minHeight: "100vh", background: "hsl(var(--background))" }}>
      <Navbar />

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Summary */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
            Total Number of Plants: {totalItems}
          </p>
          <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.25rem" }}>
            Total Cart Amount: ${totalCost.toFixed(2)}
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <Link to="/plants">
              <button
                className="btn-nursery"
                style={{ minWidth: 200, fontSize: "0.95rem", padding: "0.6rem 1.5rem" }}
              >
                Continue Shopping
              </button>
            </Link>
            <button
              className="btn-nursery"
              onClick={() => alert("Coming Soon")}
              style={{ minWidth: 200, fontSize: "0.95rem", padding: "0.6rem 1.5rem" }}
            >
              Checkout
            </button>
          </div>
        </div>

        {/* Cart items */}
        {items.length === 0 ? (
          <p style={{ textAlign: "center", color: "hsl(var(--muted-foreground))", marginTop: "2rem" }}>
            Your cart is empty.
          </p>
        ) : (
          <div>
            {items.map((item) => (
              <div key={item.id} className="cart-item-card">
                {/* Thumbnail */}
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6 }}
                />

                {/* Details */}
                <div>
                  <h3 style={{ margin: "0 0 0.25rem", fontSize: "1.05rem", fontWeight: 700 }}>
                    {item.name}
                  </h3>
                  <p style={{ margin: "0 0 0.5rem", fontSize: "0.9rem", color: "hsl(0 0% 35%)" }}>
                    ${item.price}
                  </p>

                  {/* Qty controls */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <button
                      className="btn-qty"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span style={{ minWidth: 24, textAlign: "center", fontWeight: 600 }}>
                      {item.quantity}
                    </span>
                    <button
                      className="btn-qty"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <p style={{ margin: "0 0 0.6rem", fontSize: "0.9rem", fontWeight: 600 }}>
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="btn-delete"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom actions */}
        {items.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            <Link to="/plants">
              <button
                className="btn-nursery"
                style={{ minWidth: 200, fontSize: "0.95rem", padding: "0.6rem 1.5rem" }}
              >
                Continue Shopping
              </button>
            </Link>
            <button
              className="btn-nursery"
              onClick={() => alert("Coming Soon")}
              style={{ minWidth: 200, fontSize: "0.95rem", padding: "0.6rem 1.5rem" }}
            >
              Checkout
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
