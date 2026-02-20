import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import plants, { CATEGORIES } from "../data/plants.js";
import Navbar from "./Navbar";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div style={{ minHeight: "100vh", background: "hsl(var(--background))" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {CATEGORIES.map((category) => {
          const categoryPlants = plants.filter((p) => p.category === category);
          return (
            <section key={category} style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  borderBottom: "2px solid hsl(var(--foreground))",
                  paddingBottom: "0.4rem",
                  marginBottom: "1.25rem",
                  color: "hsl(var(--foreground))",
                }}
              >
                {category}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {categoryPlants.map((plant) => {
                  const inCart = isInCart(plant.id);
                  return (
                    <div key={plant.id} className="plant-card">
                      <span className="sale-badge">SALE</span>
                      <h3
                        style={{
                          margin: "0 0 0.5rem",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          border: "1.5px solid hsl(0 75% 55%)",
                          borderRadius: 4,
                          padding: "2px 10px",
                          color: "hsl(0 0% 10%)",
                          alignSelf: "stretch",
                          textAlign: "center",
                        }}
                      >
                        {plant.name}
                      </h3>
                      <img
                        src={plant.thumbnail}
                        alt={plant.name}
                        style={{
                          width: "100%",
                          height: 160,
                          objectFit: "cover",
                          borderRadius: 6,
                          marginBottom: "0.6rem",
                        }}
                        loading="lazy"
                      />
                      <p
                        style={{
                          margin: "0 0 0.25rem",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "hsl(var(--price))",
                        }}
                      >
                        ${plant.price}
                      </p>
                      <p
                        style={{
                          margin: "0 0 0.75rem",
                          fontSize: "0.8rem",
                          fontStyle: "italic",
                          color: "hsl(0 0% 35%)",
                          lineHeight: 1.4,
                          flexGrow: 1,
                        }}
                      >
                        {plant.description}
                      </p>
                      <button
                        className="btn-nursery"
                        onClick={() => dispatch(addToCart(plant))}
                        disabled={inCart}
                        style={{ width: "100%" }}
                      >
                        {inCart ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
