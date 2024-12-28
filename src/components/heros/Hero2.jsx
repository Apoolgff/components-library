import React from "react";
import "./css/Hero2.css";

const Hero2 = () => {
  return (
    <section className="hero2">
      <div className="hero2-text">
        <h1>Build Your Future</h1>
        <p>
          We provide the tools and expertise you need to take your business to
          the next level.
        </p>
        <button>Get Started</button>
      </div>
      <div className="hero2-image">
        <img src="https://dummyimage.com/700x500/000/fff" alt="Future" />
      </div>
    </section>
  );
};

export default Hero2;
