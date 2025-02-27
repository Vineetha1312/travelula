import React from "react";
import { motion } from "framer-motion";
import Luggagesvg from "../assets/luggage.svg";

const TravelTicker = () => {
  const items = [
    "Travel anywhere and anytime with Tripset",
    "Explore the world with us",
    "Your next adventure is waiting!",
    "Book your trip today",
  ];

  return (
    <section className="w-full overflow-hidden my-16">
      <motion.div
        className="flex items-center justify-start space-x-10"
        animate={{ x: "-100%" }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="flex items-center justify-center gap-4 whitespace-nowrap">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-500 font-bold mx-4">
            {items[0]}
          </h1>
          <img
            src={Luggagesvg}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 my-4 "
          />
        </div>

        {items.slice(1).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-4 whitespace-nowrap"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-500 font-bold mx-4">
              {item}
            </h1>
            <img
              src={Luggagesvg}
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 "
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TravelTicker;
