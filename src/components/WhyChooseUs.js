import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Personalized Experiences", "Sustainable Tourism", "Expert Guides"].map((item, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg">
              <h3 className="font-semibold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;