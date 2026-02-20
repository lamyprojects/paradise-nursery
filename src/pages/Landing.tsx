import React from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "hsl(0 0% 0% / 0.55)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left: branding */}
        <div style={{ color: "white" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 0 0.5rem",
            }}
          >
            Welcome To
            <br />
            Paradise Nursery
          </h1>
          <hr
            style={{
              border: "none",
              borderTop: "2px solid hsl(0 0% 100% / 0.5)",
              marginBottom: "0.75rem",
              width: 120,
            }}
          />
          <p
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              margin: "0 0 1.5rem",
              opacity: 0.9,
            }}
          >
            Where Green Meets Serenity
          </p>
          <button
            className="btn-nursery"
            onClick={() => navigate("/products")}
            style={{ fontSize: "1rem", padding: "0.65rem 2rem" }}
          >
            Get Started
          </button>
        </div>

        {/* Right: company description */}
        <div
          style={{
            color: "white",
            lineHeight: 1.75,
            fontSize: "0.95rem",
          }}
        >
          <p
            style={{
              fontWeight: 600,
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          >
            Welcome to Paradise Nursery, where green meets serenity!
          </p>
          <p style={{ marginBottom: "1rem" }}>
            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission
            is to provide a wide range of high-quality plants that not only enhance the beauty of
            your surroundings but also contribute to a healthier and more sustainable lifestyle.
            From air-purifying plants to aromatic fragrant ones, we have something for every plant
            enthusiast.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Our team of experts is dedicated to ensuring that each plant meets our strict standards
            of quality and care. Whether you're a seasoned gardener or just starting your green
            journey, we're here to support you every step of the way. Feel free to explore our
            collection, ask questions, and let us help you find the perfect plant for your home or
            office.
          </p>
          <p>
            Join us in our mission to create a greener, healthier world. Visit Paradise Nursery
            today and experience the beauty of nature right at your doorstep.
          </p>
        </div>
      </div>
    </main>
  );
}
