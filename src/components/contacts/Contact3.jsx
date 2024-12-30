import React from "react";
import "./css/Contact3.css";

const Contact3 = () => {
  return (
    <section className="contact3">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact3;
