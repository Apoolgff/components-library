import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbars from "./components/Navbars"
import Heros from "./components/Heros"
import Services from './components/Services'
import Contacts from './components/Contacts'
import Cards from './components/Cards'
import Galeries from './components/Galeries'
import Buttons from './components/Buttons'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <nav>
            <ul className="navigation">
              <li>
                <Link to="/navbars">Ver Navbars</Link>
              </li>
              <li>
                <Link to="/heros">Ver Heros</Link>
              </li>
              <li>
                <Link to="/services">Ver Servicios</Link>
              </li>
              <li>
                <Link to="/contacts">Ver Contactos</Link>
              </li>
              <li>
                <Link to="/cards">Ver Cards</Link>
              </li>
              <li>
                <Link to="/galeries">Ver Galerias</Link>
              </li>
              <li>
                <Link to="/buttons">Ver Botones</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/navbars" element={<Navbars />} />
            <Route path="/heros" element={<Heros />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/galeries" element={<Galeries />} />
            <Route path="/buttons" element={<Buttons />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
