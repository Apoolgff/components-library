import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbars from "./components/Navbars"; // Componente con todos los Navbars
import Heros from "./components/Heros";     // Componente con todos los Heros
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <nav>
            <ul className="navigation">
              <li>
                <Link to="/navbars">View Navbars</Link>
              </li>
              <li>
                <Link to="/heros">View Heros</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/navbars" element={<Navbars />} />
            <Route path="/heros" element={<Heros />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
