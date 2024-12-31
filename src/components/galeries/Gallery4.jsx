import React from "react";
import "./css/Gallery4.css";

const Gallery4 = () => {
  const images = [
    "https://dummyimage.com/300x400/000/fff",
    "https://dummyimage.com/300x200/000/fff",
    "https://dummyimage.com/300x300/000/fff",
    "https://dummyimage.com/300x250/000/fff",
  ];

  return (
    <div className="gallery4">
      <h2>Masonry Gallery</h2>
      <div className="masonry">
        {images.map((img, index) => (
          <div key={index} className="masonry-item">
            <img src={img} alt={`Masonry ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery4;
