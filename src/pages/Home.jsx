import React, { useState } from 'react';
import LocationCard from '../components/LocationCard';
import { motion } from 'framer-motion';
import Indiaimg from "../assets/india.webp"
import Parisimg from "../assets/paris.webp"
import Spainimg from "../assets/spain.webp"
import Netherlandsimg from "../assets/netherlands.webp"

const locations = [
  { country: 'France', places: 10, image: Parisimg },
  { country: 'Netherlands', places: 8, image:Netherlandsimg },
  { country: 'Spain', places: 6, image: Spainimg },
  { country: 'India', places: 10, image: Indiaimg },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative py-12 px-6 bg-gray-100">
      {/* Main Heading and Arrows */}
      <div className="flex justify-evenly items-center mb-8">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900">Most Visited Locations</h2>
          <p className="text-xl text-gray-700">Choose Your Locations</p>
        </div>

        {/* Arrows for Carousel Navigation */}
        <div className="flex space-x-4">
          <button
            onClick={goLeft}
            className="bg-orange-500 text-white p-2 rounded-full"
          >
            &#60;
          </button>
          <button
            onClick={goRight}
            className="bg-orange-500 text-white p-2 rounded-full"
          >
            &#62;
          </button>
        </div>
      </div>

      {/* Carousel Container with Motion */}
      <motion.div
        className="flex justify-center space-x-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Adjust the number of cards per view based on screen size */}
        <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap">
          {locations.slice(currentIndex, currentIndex + 4).map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
      </motion.div>

      {/* Discover More Cities Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-400">
          Discover More Cities
        </button>
      </div>
    </div>
  );
};

export default HomePage;
