import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar4.css";

const Navbar4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar4">
      <div className="logo">Brand</div>
      <button 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar4;
