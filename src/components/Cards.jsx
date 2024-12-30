import React from "react";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import Card5 from "./cards/Card5";
import "./css/Cards.css";

const Cards = () => {
  return (
    <section className="cards-container">
      <h1>Our Cards Showcase</h1>
      <div className="cards-grid">
        <h2>Card 1</h2>
        <Card1 />
        <h2>Card 2</h2>
        <Card2 />
        <h2>Card 3</h2>
        <Card3 />
        <h2>Card 4</h2>
        <Card4 />
        <h2>Card 5</h2>
        <Card5 />
      </div>
    </section>
  );
};

export default Cards;
