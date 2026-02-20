import React from "react";
import { Plant } from "../data/plants";
import { useCart } from "../context/CartContext";

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const { isInCart, dispatch } = useCart();
  const inCart = isInCart(plant.id);

  const handleAdd = () => {
    dispatch({ type: "ADD", plant });
  };

  return (
    <div className="plant-card">
      {/* SALE badge */}
      <span className="sale-badge">SALE</span>

      {/* Plant name */}
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

      {/* Image */}
      <img
        src={plant.image}
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

      {/* Price */}
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

      {/* Description */}
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

      {/* Add to cart button */}
      <button
        className="btn-nursery"
        onClick={handleAdd}
        disabled={inCart}
        style={{ width: "100%" }}
      >
        {inCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
