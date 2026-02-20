import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Leaf } from "lucide-react";

export default function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

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
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
            color: "inherit",
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
        </Link>

        {/* Center: Nav links */}
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}
          >
            Home
          </Link>
          <Link
            to="/plants"
            style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}
          >
            Plants
          </Link>
          <Link
            to="/cart"
            style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}
          >
            Cart
          </Link>
        </nav>

        {/* Right: Cart icon */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link
            to="/cart"
            aria-label={`Shopping cart with ${totalItems} items`}
            style={{
              position: "relative",
              color: "white",
              padding: "4px",
              display: "inline-flex",
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
          </Link>
        </div>
      </div>
    </header>
  );
}
