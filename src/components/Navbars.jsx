import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar1 from "./navbars/Navbar1";
import Navbar2 from "./navbars/Navbar2";
import Navbar3 from "./navbars/Navbar3";
import Navbar4 from "./navbars/Navbar4";
import Navbar5 from "./navbars/Navbar5";


const Navbars = () => {
  return (

      <div className="app-container">
        <h1>Library of Navbars</h1>

        <section>
          <h2>Navbar 1</h2>
          <Navbar1 />
        </section>

        <section>
          <h2>Navbar 2</h2>
          <Navbar2 />
        </section>

        <section>
          <h2>Navbar 3</h2>
          <Navbar3 />
        </section>

        <section>
          <h2>Navbar 4</h2>
          <Navbar4 />
        </section>

        <section>
          <h2>Navbar 5</h2>
          <Navbar5 />
        </section>
      </div>

  );
};

export default Navbars;
