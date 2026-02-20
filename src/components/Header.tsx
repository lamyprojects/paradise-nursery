import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Leaf } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <header className="nursery-header" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0.65rem 1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left: Logo + Name */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "inherit",
            textAlign: "left",
          }}
          aria-label="Go to home"
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "hsl(122 50% 28%)",
              border: "2px solid hsl(0 0% 100% / 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Leaf size={22} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1rem", lineHeight: 1.2, color: "white" }}>
              Paradise Nursery
            </div>
            <div style={{ fontSize: "0.7rem", color: "hsl(0 0% 100% / 0.85)", lineHeight: 1 }}>
              Where Green Meets Serenity
            </div>
          </div>
        </button>

        {/* Center: Page title */}
        <h1
          style={{
            margin: 0,
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "white",
            textAlign: "center",
          }}
        >
          Plants
        </h1>

        {/* Right: Cart icon */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => navigate("/cart")}
            aria-label={`Shopping cart with ${totalItems} items`}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "white",
              padding: "4px",
            }}
          >
            <ShoppingCart size={28} />
            <span
              style={{
                position: "absolute",
                top: -6,
                right: -8,
                background: "hsl(0 0% 100%)",
                color: "hsl(122 39% 37%)",
                fontSize: "0.7rem",
                fontWeight: 700,
                minWidth: 20,
                height: 20,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              {totalItems}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
