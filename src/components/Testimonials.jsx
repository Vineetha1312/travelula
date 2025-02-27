import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Review_1_img from "../assets/review-1.webp";
import Review_2_img from "../assets/review-2.webp";
import Review_3_img from "../assets/review-3.webp";
import Review_4_img from "../assets/review-4.webp";
import Review_5_img from "../assets/review-5.webp";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Travel Enthusiast",
    image: Review_1_img,
    quote:
      "The Big Cats Week at Maasai Mara was an unforgettable experience. The landscapes were breathtaking, and the game drives were thrilling. Highly recommend this trip!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Adventure Seeker",
    image: Review_2_img,
    quote:
      "The itinerary was perfectly planned. The sunrise and sunsets at Maasai Mara were simply breathtaking. The team provided excellent service throughout the trip.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Nature Lover",
    image: Review_3_img,
    quote:
      "The game drives were amazing. We saw lions, zebras, and even a leopard! The guides were knowledgeable and made the experience even more special.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Smith",
    position: "Family Traveler",
    image: Review_4_img,
    quote:
      "A fantastic trip for the whole family. The accommodations were comfortable, and the activities were well-organized. Great value for the price.",
    rating: 5,
  },
  {
    id: 5,
    name: "Anna Martinez",
    position: "Travel Blogger",
    image: Review_5_img,
    quote:
      "The Big Cats Week at Maasai Mara exceeded all expectations. The team was professional and attentive. The itinerary was well thought out and the experiences were unforgettable.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    position: "Photographer",
    image: Review_2_img,
    quote:
      "The landscapes and wildlife were perfect for my photography. The guides were very helpful in finding the best spots for capturing the Big Cats. Highly recommend!",
    rating: 4,
  },
  {
    id: 7,
    name: "Lisa Thompson",
    position: "Traveler",
    image: Review_1_img,
    quote:
      "The trip was well-organized and the guides were knowledgeable. The game drives were exciting and the accommodations were comfortable. A great experience overall.",
    rating: 5,
  },
  {
    id: 8,
    name: "Robert Kim",
    position: "Traveler",
    image: Review_5_img,
    quote:
      "The Big Cats Week at Maasai Mara was an incredible experience. The team was professional and the itinerary was well-planned. I would highly recommend this trip to anyone.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    animate: {
      x: ["-100%", "0%"],
      transition: {
        x: {
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          times: [0, 0.5, 0.5, 1],
        },
      },
    },
  };

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why businesses trust us for their success
            </p>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate="animate"
              variants={cardVariants}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-full md:w-[500px] bg-white rounded-xl  p-8 border"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1511367461989-f85a21fda167";
                      }}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <FaQuoteLeft className="text-2xl text-blue-500 mb-2" />
                    <p className="text-gray-700">{testimonial.quote}</p>
                  </div>

                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`${
                          index < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } w-5 h-5`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
