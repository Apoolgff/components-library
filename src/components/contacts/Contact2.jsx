import React from "react";
import "./css/Contact2.css";

const Contact2 = () => {
  return (
    <section className="contact2">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Email: contact@company.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact2;
