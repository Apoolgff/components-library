import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar2.css";

const Navbar2 = () => {
  return (
    <nav className="navbar2">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar2;
