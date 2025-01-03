import React, { useRef } from "react";
import "./css/Gallery5.css";

const Gallery5 = () => {
  const images = [
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x200/000/fff",
  ];

  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeft = slider.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    const slider = sliderRef.current;
    slider.isDown = false;
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    slider.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!slider.isDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 2; // Controla la velocidad del scroll
    slider.scrollLeft -= walk;
  };

  return (
    <div className="gallery5">
      <h2>Slider Gallery</h2>
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery5;
