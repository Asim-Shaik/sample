import React from "react";
import "./hero.css";

function Hero() {
  const handleSubmit = () => {};
  return (
    <div className="hero" id="home">
      <div className="hero-top">
        <div className="hero-title">
          <h2>Neowise Business Solutions</h2>
        </div>
        <div className="hero-desc">
          <p>
            A Complete Business & HR Platform for Startups and Established firms
          </p>
        </div>
      </div>
      <div className="form-control">
        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="email" className="form-input" />
          <input
            type="text"
            placeholder="phone number"
            className="form-input"
          />
          <button className="form-btn" type="submit">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
