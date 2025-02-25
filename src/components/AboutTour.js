import React from "react";

const AboutTour = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About the Tour</h2>
        <p className="text-gray-700 mb-8">
          Embark on a journey to Maasai Mara, where the wild roams free and the landscapes take your breath away. Our tour offers a perfect blend of adventure, luxury, and cultural immersion.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Guided Safari Drives", "Cultural Visits", "Luxury Accommodations", "Expert Guides"].map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTour;