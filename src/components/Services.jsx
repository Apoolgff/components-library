import React from "react";
import Services1 from "./services/Services1";
import Services2 from "./services/Services2";
import Services3 from "./services/Services3";
import Services4 from "./services/Services4";
import Services5 from "./services/Services5";

const Services = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Our Services</h1>
      <div>
        <h2 style={{ textAlign: "center" }}>Section 1</h2>
        <Services1 />
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Section 2</h2>
        <Services2 />
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Section 3</h2>
        <Services3 />
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Section 4</h2>
        <Services4 />
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Section 5</h2>
        <Services5 />
      </div>
    </div>
  );
};

export default Services;
