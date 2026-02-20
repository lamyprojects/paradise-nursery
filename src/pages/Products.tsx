import React from "react";
import Header from "../components/Header";
import PlantCard from "../components/PlantCard";
import { plants, CATEGORIES } from "../data/plants";

export default function Products() {
  return (
    <div style={{ minHeight: "100vh", background: "hsl(var(--background))" }}>
      <Header />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {CATEGORIES.map((category) => {
          const categoryPlants = plants.filter((p) =>
            p.categories.includes(category)
          );
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
                {categoryPlants.map((plant) => (
                  <PlantCard key={`${category}-${plant.id}`} plant={plant} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
