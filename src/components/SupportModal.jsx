import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaComments,
  FaPlane,
  FaHotel,
  FaCar,
  FaUtensils,
  FaMapMarkerAlt,
  FaPassport,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const travelServices = [
  {
    id: 1,
    title: "Flight Booking",
    description: "Search and book international flights",
    icon: FaPlane,
    link: "/flights",
  },
  {
    id: 2,
    title: "Hotels",
    description: "Find perfect accommodations worldwide",
    icon: FaHotel,
    link: "/hotels",
  },
  {
    id: 3,
    title: "Car Rentals",
    description: "Rent vehicles for your journey",
    icon: FaCar,
    link: "/cars",
  },
  {
    id: 4,
    title: "Restaurants",
    description: "Discover local dining experiences",
    icon: FaUtensils,
    link: "/dining",
  },
  {
    id: 5,
    title: "Tourist Spots",
    description: "Explore popular attractions",
    icon: FaMapMarkerAlt,
    link: "/attractions",
  },
  {
    id: 6,
    title: "Visa Services",
    description: "Hassle-free visa processing",
    icon: FaPassport,
    link: "/visa",
  },
];

const tripData = [
  {
    day: 1,
    description:
      "City Tour - Visit main attractions and landmarks. Start your day with a guided tour of the city's historic center, followed by a visit to the iconic cathedral and bustling market square. End the day with a sunset view from the city's highest observation deck.",
  },
  {
    day: 2,
    description:
      "Beach Day - Relax at the famous beaches. Spend the morning sunbathing and swimming at the pristine Blue Bay Beach. In the afternoon, enjoy water sports like snorkeling and jet skiing. Wrap up the day with a beachside barbecue dinner.",
  },
  {
    day: 3,
    description:
      "Mountain Excursion - Hiking and nature exploration. Embark on a guided hike through the lush Green Valley National Park. Discover hidden waterfalls, exotic wildlife, and breathtaking viewpoints. Enjoy a picnic lunch amidst nature.",
  },
  {
    day: 4,
    description:
      "Cultural Experience - Local museums and art galleries. Explore the city's rich cultural heritage with visits to the National Museum and Contemporary Art Gallery. Attend a traditional dance performance in the evening and savor local delicacies at a heritage restaurant.",
  },
];

const TravelChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => setSelectedService(service);
  const handleBack = () => setSelectedService(null);

  return (
    <div className="sticky bottom-0 z-[1000]">
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 bg-orange-600 text-white p-4 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaComments className="text-2xl" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg w-4/5 max-w-4xl h-[80vh] flex flex-col overflow-hidden relative"
              layout
            >
              <div className="p-6 border-b shadow-sm bg-white sticky top-0 z-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    {selectedService && (
                      <motion.button
                        onClick={handleBack}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaArrowLeft className="text-xl" />
                      </motion.button>
                    )}
                    <div>
                      <motion.h2
                        layout
                        className="text-2xl font-bold text-gray-800"
                      >
                        {selectedService
                          ? selectedService.title
                          : "Travel Services"}
                      </motion.h2>
                      <motion.p layout className="text-gray-600">
                        {selectedService
                          ? selectedService.description
                          : "Select a service to continue"}
                      </motion.p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/contact-form"
                      onClick={() => setIsOpen(false)}
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Book Now & Save Big!
                    </Link>
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTimes className="text-2xl" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                <motion.div layout>
                  {!selectedService ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                      {travelServices.map((service) => {
                        const Icon = service.icon;
                        return (
                          <motion.div
                            key={service.id}
                            className="cursor-pointer"
                            onClick={() => handleCardClick(service)}
                            whileHover={{
                              scale: 1.03,
                              transition: { duration: 0.2 },
                            }}
                            layout
                          >
                            <div className="mt-4 bg-white rounded-lg p-6 border shadow-sm transition-all duration-300 flex flex-col items-center text-center border border-gray-100">
                              <Icon className="text-4xl text-orange-600 mb-4" />
                              <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                {service.description}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    <motion.div
                      className="space-y-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex justify-center">
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="bg-white rounded-lg p-8 w-full max-w-md border border-gray-100"
                          layout
                        >
                          <div className="flex flex-col items-center text-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <selectedService.icon className="text-6xl text-orange-600 mb-4" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold mb-2">
                              {selectedService.title}
                            </h3>
                            <p className="text-gray-600">
                              {selectedService.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">
                          Trip Schedule
                        </h3>
                        <div className="space-y-4">
                          {tripData.map((trip, index) => (
                            <motion.div
                              key={trip.day}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gray-50 rounded-lg p-6 duration-300 border border-gray-100"
                            >
                              <h4 className="font-semibold text-lg mb-2">
                                Day {trip.day}
                              </h4>
                              <p className="text-gray-600">
                                {trip.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelChatInterface;
