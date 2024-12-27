import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar3.css";

const Navbar3 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar3">
            <div className="menu">
                <div className="logo">Logo</div>
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar3;
