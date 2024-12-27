import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar5.css";

const Navbar5 = () => {
  return (
    <nav className="navbar5">
      <ul className="nav-links-left">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
      <div className="logo">Brand</div>
      <ul className="nav-links-right">
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar5;
