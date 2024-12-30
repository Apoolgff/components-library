import React from "react";
import "./css/Contact4.css";

const Contact4 = () => {
  return (
    <section className="contact4">
      <form>
        <h2>Reach Out</h2>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact4;
