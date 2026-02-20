import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <main className="landing">
      <div className="landing-overlay" />
      <div className="landing-content">
        {/* Left: branding */}
        <div className="landing-left">
          <h1 className="landing-title">
            Welcome To
            <br />
            Paradise Nursery
          </h1>
          <hr className="landing-divider" />
          <p className="landing-tagline">Where Green Meets Serenity</p>
          <button className="btn-nursery" onClick={() => navigate("/plants")}>
            Get Started
          </button>
        </div>

        {/* Right: About Us */}
        <div className="landing-right">
          <AboutUs />
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
