import React, { useState } from "react";
import "./css/Gallery1.css";

const Gallery1 = () => {
  const images = [
    "https://dummyimage.com/600x400/000/fff&text=1",
    "https://dummyimage.com/600x400/000/fff&text=2",
    "https://dummyimage.com/600x400/000/fff&text=3",
    "https://dummyimage.com/600x400/000/fff&text=4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery1">
      <h2>Image Carousel</h2>
      <div className="carousel">
        <button className="nav-btn prev" onClick={handlePrev}>
          &#8249;
        </button>
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="carousel-item">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="nav-btn next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Gallery1;
