import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description, imgSrc, link }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center  rounded-lg transform transition-transform duration-300 hover:scale-100 group"
      style={{ height: "100%" }}
    >
      <div
        className="relative w-full h-64 rounded-lg overflow-hidden  group-hover:opacity-70 transition-all duration-300"
        style={{ position: "relative", borderRadius: "inherit" }}
      >
        <motion.img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="w-full p-4  text-center">
        <div className="flex items-center justify-center text-xl font-semibold text-gray-800">
          <span className="mr-2 text-purple-600">{icon}</span>
          <span>{title}</span>
        </div>

        <p className="text-gray-600 mt-2">{description}</p>

        <a href={link}>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300">
            Get this Service
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
