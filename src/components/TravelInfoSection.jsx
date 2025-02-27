import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  PhoneCall,
  Briefcase,
  Map,
  Users,
  Hotel,
} from "lucide-react";
import Posterimg from "../assets/poster-img.webp";
import { Link } from "react-router-dom";

const stats = [
  {
    id: 1,
    icon: <Briefcase size={22} className="text-orange-500" />,
    number: "500+",
    text: "Adventure Packages",
  },
  {
    id: 2,
    icon: <Map size={22} className="text-orange-500" />,
    number: "100+",
    text: "Exotic Destinations",
  },
  {
    id: 3,
    icon: <Users size={22} className="text-orange-500" />,
    number: "10K+",
    text: "Happy Travelers",
  },
  {
    id: 4,
    icon: <Hotel size={22} className="text-orange-500" />,
    number: "50+",
    text: "Luxury Stays",
  },
];

const TravelInfoSection = () => {
  return (
    <section 
      id="travel-info"
      className="relative w-full py-12 px-6 md:px-12 lg:px-20 bg-white my-14"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <motion.div
          className="flex flex-col gap-6 w-full md:w-1/4 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="flex items-center p-4 border border-gray-300 rounded-lg w-full"
              whileHover={{ scale: 1.01 }}
            >
              <div className="p-3 bg-orange-200 rounded-lg">{stat.icon}</div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {stat.number}
                </h3>
                <p className="text-gray-500">{stat.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Posterimg}
            alt="Travel Enthusiast"
            className="w-full h-auto min-w-[300px] max-w-[400px] md:min-w-[400px] md:max-w-[500px] lg:min-w-[500px] lg:max-w-[600px] rounded-lg object-cover z-0"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-5/12 z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-orange-500 text-sm font-semibold uppercase">
            Why Choose Us?
          </h4>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
            Your Gateway to <br /> Unforgettable Journeys
          </h2>

          {/* Highlights */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center p-4 bg-orange-100 rounded-lg shadow-md">
              <ShieldCheck className="text-orange-500 mr-3" size={24} />
              <p className="text-gray-700 font-medium">
                Trusted by 10,000+ Travelers
              </p>
            </div>
            <div className="flex items-center p-4 bg-orange-100 rounded-lg shadow-md">
              <PhoneCall className="text-orange-500 mr-3" size={24} />
              <p className="text-gray-700 font-medium">
                24/7 Dedicated Support
              </p>
            </div>
          </div>

          <p className="text-gray-500 mt-4">
            At Travor, we believe every journey should be extraordinary. From
            breathtaking landscapes to luxurious stays, we craft experiences
            that leave you with memories to cherish forever. Let us take you on
            an adventure of a lifetime!
          </p>

          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/contact-form"
              className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all"
            >
              Start Your Adventure Today!
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelInfoSection;
