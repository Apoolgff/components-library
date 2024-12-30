import React from "react";
import "./css/Contact5.css";

const Contact5 = () => {
  return (
    <section className="contact5">
      <form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="map">
        <p>Map Placeholder</p>
      </div>
    </section>
  );
};

export default Contact5;
