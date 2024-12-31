import React from "react";
import "./css/Gallery2.css";

const Gallery2 = () => {
  const images = [
    "https://dummyimage.com/200x200/000/fff",
    "https://dummyimage.com/200x200/000/fff",
    "https://dummyimage.com/200x200/000/fff",
    "https://dummyimage.com/200x200/000/fff",
  ];

  return (
    <div className="gallery2">
      <h2>Image Grid</h2>
      <div className="grid">
        {images.map((img, index) => (
          <div key={index} className="grid-item">
            <img src={img} alt={`Grid ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
