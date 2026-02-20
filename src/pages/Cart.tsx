import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { items, totalItems, totalCost, dispatch } = useCart();

  return (
    <div style={{ minHeight: "100vh", background: "hsl(var(--background))" }}>
      <Header />

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Summary */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
            Total Number of Plants: {totalItems}
          </p>
          <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.25rem" }}>
            Total Cart Amount: ${totalCost}
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
            <button
              className="btn-nursery"
              onClick={() => navigate("/products")}
              style={{ minWidth: 200, fontSize: "0.95rem", padding: "0.6rem 1.5rem" }}
            >
              Continue Shopping
            </button>
            <button
              className="btn-nursery"
              onClick={() => alert("Thank you for your purchase!")}
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
              <div key={item.plant.id} className="cart-item-card">
                {/* Thumbnail */}
                <img
                  src={item.plant.image}
                  alt={item.plant.name}
                  style={{
                    width: "100%",
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />

                {/* Details */}
                <div>
                  <h3 style={{ margin: "0 0 0.25rem", fontSize: "1.05rem", fontWeight: 700 }}>
                    {item.plant.name}
                  </h3>
                  <p style={{ margin: "0 0 0.5rem", fontSize: "0.9rem", color: "hsl(0 0% 35%)" }}>
                    ${item.plant.price}
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
                      onClick={() => dispatch({ type: "DEC", plantId: item.plant.id })}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span style={{ minWidth: 24, textAlign: "center", fontWeight: 600 }}>
                      {item.quantity}
                    </span>
                    <button
                      className="btn-qty"
                      onClick={() => dispatch({ type: "INC", plantId: item.plant.id })}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <p style={{ margin: "0 0 0.6rem", fontSize: "0.9rem", fontWeight: 600 }}>
                    Total: ${item.plant.price * item.quantity}
                  </p>

                  <button
                    className="btn-delete"
                    onClick={() => dispatch({ type: "REMOVE", plantId: item.plant.id })}
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
            <button
              className="btn-nursery"
              onClick={() => navigate("/products")}
              style={{ minWidth: 200, fontSize: "0.95rem", padding: "0.6rem 1.5rem" }}
            >
              Continue Shopping
            </button>
            <button
              className="btn-nursery"
              onClick={() => alert("Thank you for your purchase!")}
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
