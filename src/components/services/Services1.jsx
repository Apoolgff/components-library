import React from "react";
import "./css/Services1.css";

const Services1 = () => {
  const services = [
    { icon: "🌐", title: "Web Development", description: "Create modern and responsive websites tailored to your needs." },
    { icon: "📱", title: "App Development", description: "Build mobile apps for iOS and Android platforms." },
    { icon: "⚙️", title: "API Integration", description: "Seamless integration of APIs for your projects." },
  ];

  return (
    <section className="services1">
      <h2>Our Services</h2>
      <div className="services1-grid">
        {services.map((service, index) => (
          <div key={index} className="services1-card">
            <div className="services1-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services1;
