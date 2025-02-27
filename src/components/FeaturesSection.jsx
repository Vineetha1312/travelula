import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlane, FaWallet, FaMapMarkerAlt, FaUserFriends, } from "react-icons/fa";
import Section1_img from "../assets/section-1-img.webp";
import Section2_img from "../assets/section-2-img.webp";
import Section3_img from "../assets/section-3-img.webp";
import Section4_img from "../assets/section-4-img.webp";

const featureData = [
    {
      id: 1,
      title: "Unforgettable Safari Experience",
      description: "Join us for an unforgettable journey to Maasai Mara during the best time to visit. Witness the dramatic landscapes and the Big Cats hunting their prey. Enjoy the lush green plains and breathtaking sunrises and sunsets.",
      image: Section1_img,
      icon: FaPlane
    },
    {
      id: 2,
      title: "Affordable Luxury",
      description: "Experience luxury at an affordable cost. Our special Diwali 2023 package commemorates our first-year anniversary in Nairobi. Enjoy top-notch services without breaking the bank.",
      image: Section2_img,
      icon: FaWallet
    },
    {
      id: 3,
      title: "Comprehensive Itinerary",
      description: "Our 4-day itinerary includes game drives, bush breakfasts, and stays at top camps. Explore the Talek and Topi plains, witness the Topi Pride, and enjoy the beauty of the Great Rift Valley.",
      image: Section3_img,
      icon: FaMapMarkerAlt
    },
    {
      id: 4,
      title: "Special Offers and Inclusions",
      description: "Book by August 14th to avail our Independence Day offer. The package includes internal transfers, twin-sharing stays, game drives, meals, park fees, and English-speaking guides.",
      image: Section4_img,
      icon: FaUserFriends
    }
  ];

const FeatureAccordion = () => {
  const [selectedId, setSelectedId] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.95, rotate: -2 },
    center: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 1.05, rotate: 2 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-left ">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover Your <span className="text-orange-600">Next Adventure</span>        </h1>
          <p className="text-xl text-gray-600 max-w-2xl ">
          Explore the world with our curated travel experiences designed to make your journey unforgettable.          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {featureData.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  onClick={() => setSelectedId(feature.id)}
                  className={`cursor-pointer border-b-2 border-gray-200 pb-4 ${
                    selectedId === feature.id
                      ? "bg-gray-50  p-6 "
                      : "hover:bg-gray-50 p-6  transition-all duration-300 "
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setSelectedId(feature.id);
                  }}
                  aria-expanded={selectedId === feature.id}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-6 h-6 ${selectedId === feature.id ? "text-orange-600" : "text-gray-400"}`} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <AnimatePresence>
                    {selectedId === feature.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto", transition: { duration: 0.3 } }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-600"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="relative h-[500px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedId}
                src={featureData.find((f) => f.id === selectedId)?.image}
                alt={featureData.find((f) => f.id === selectedId)?.title}
                className="w-full h-full object-cover"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead";
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAccordion;