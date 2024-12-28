import React from "react";
import "./css/Services3.css";

const Services3 = () => {
  const cards = [
    { title: "E-commerce Solutions", img: "https://via.placeholder.com/150", desc: "Build your online store easily." },
    { title: "SEO Optimization", img: "https://via.placeholder.com/150", desc: "Increase your website's visibility." },
    { title: "Custom Design", img: "https://via.placeholder.com/150", desc: "Unique designs for your brand." },
  ];

  return (
    <section className="services3">
      <h2>Our Expertise</h2>
      <div className="services3-cards">
        {cards.map((card, index) => (
          <div key={index} className="services3-card">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services3;
