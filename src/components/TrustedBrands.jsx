import React from "react";
import { motion } from "framer-motion";
import Brand_1_svg from "../assets/Brand-1.svg";
import Brand_2_svg from "../assets/Brand-2.svg";
import Brand_3_svg from "../assets/Brand-3.svg";
import Brand_4_svg from "../assets/Brand-4.svg";
import Brand_5_svg from "../assets/Brand-5.svg";
import Brand_6_svg from "../assets/Brand-6.svg";
import Brand_7_svg from "../assets/Brand-7.svg";
import Brand_8_svg from "../assets/Brand-8.svg";
import Brand_9_svg from "../assets/Brand-9.svg";

const logos = [
  Brand_1_svg,
  Brand_2_svg,
  Brand_3_svg,
  Brand_4_svg,
  Brand_5_svg,
  Brand_6_svg,
  Brand_7_svg,
  Brand_8_svg,
  Brand_9_svg,
];

const TrustedBrands = () => {
  return (
    <section className="bg-white py-4 overflow-hidden my-5">
      <h2 className="text-center text-xl font-semibold mb-6">
        In Collaboration with Travel Pioneers
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-16 min-w-max mt-4"
          animate={{ x: ["0%", "-9%"] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Brand logo"
              className="h-10 grayscale opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;
