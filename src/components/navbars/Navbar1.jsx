import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar1.css";

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar1;
