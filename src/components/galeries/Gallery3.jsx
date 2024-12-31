import React from "react";
import "./css/Gallery3.css";

const Gallery3 = () => {
  const images = [
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x200/000/fff",
  ];

  return (
    <div className="gallery3">
      <h2>Flip Gallery</h2>
      <div className="flip-container">
        {images.map((img, index) => (
          <div key={index} className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <img src={img} alt={`Front ${index + 1}`} />
              </div>
              <div className="flip-back">
                <p>Image {index + 1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery3;
