import React from "react";
import { motion } from "framer-motion";

const LocationCard = ({ location }) => {
  return (
    <motion.div
      className="relative w-72 h-80 rounded-xl  group cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={location.image}
        alt={`Beautiful view of ${location.country}`}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40  transition-all duration-300 rounded-xl"></div>

      <div className="absolute bottom-0 w-full bg-white p-4 text-center group-hover:bg-orange-500">
        <h3 className="text-xl font-semibold text-gray-900">
          {location.country}
        </h3>
        <p className="text-sm text-gray-600">
          {location.places} Visited Places
        </p>
        <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full group-hover:bg-white group-hover:text-orange-500">
          →
        </button>
      </div>
    </motion.div>
  );
};

export default LocationCard;
