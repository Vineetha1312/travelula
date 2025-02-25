import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Experience the Wild Heart of Kenya</h1>
        <p className="text-xl mb-8">Join us for an unforgettable safari adventure in Maasai Mara.</p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300">
          Reserve Your Spot Now!
        </button>
      </motion.div>
    </div>
  );
};

export default Header;