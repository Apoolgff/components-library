import React from "react";
import Gallery1 from "./galeries/Gallery1";
import Gallery2 from "./galeries/Gallery2";
import Gallery3 from "./galeries/Gallery3";
import Gallery4 from "./galeries/Gallery4";
import Gallery5 from "./galeries/Gallery5";

const Galeries = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>All Galleries</h1>
      <div style={{ marginBottom: "2rem" }}>
        <Gallery1 />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <Gallery2 />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <Gallery3 />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <Gallery4 />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <Gallery5 />
      </div>
    </div>
  );
};

export default Galeries;
