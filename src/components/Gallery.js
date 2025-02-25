import React from "react";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400",
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 1}`} className="rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;