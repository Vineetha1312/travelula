import React from "react";

const Itinerary = () => {
  const days = [
    { day: "Day 1", activity: "Arrival and Welcome Dinner" },
    { day: "Day 2", activity: "Morning Safari Drive" },
    { day: "Day 3", activity: "Visit to Maasai Village" },
    { day: "Day 4", activity: "Hot Air Balloon Ride" },
    { day: "Day 5", activity: "Departure" },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Tour Itinerary</h2>
        <div className="space-y-4">
          {days.map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-xl">{item.day}</h3>
              <p className="text-gray-700">{item.activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;