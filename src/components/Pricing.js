import React from "react";

const Pricing = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">$1,500 per person</h3>
          <p className="text-gray-700 mb-6">Includes accommodations, meals, and all activities.</p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;