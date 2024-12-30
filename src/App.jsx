import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbars from "./components/Navbars"
import Heros from "./components/Heros"
import Services from './components/Services'
import Contacts from './components/Contacts'
import Cards from './components/Cards'
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
              <li>
                <Link to="/services">View Services</Link>
              </li>
              <li>
                <Link to="/contacts">View Contacts</Link>
              </li>
              <li>
                <Link to="/cards">View Cards</Link>
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
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
