import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Itinerary from "./Itinerary";

const TravelDestination = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    specialRequests: "",
  });

  const destinationData = {
    title: "Big Cats Week at Maasai Mara - Diwali 2023 Special",
    description:
      "Experience the enchanting beauty of Maasai Mara, where the big cats venture long distances to hunt their prey. November is the perfect time to witness dramatic skies and breathtaking sunrises and sunsets.",
    price: 1582,
    availableDates: [
      "14 Nov 2025",
      "15 Nov 2025",
      "16 Nov 2025",
      "17 Nov 2025",
    ],
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    ],
    itinerary: [
      {
        day: "Day 1 - Nov 14th 2025",
        details: [
          "Pickup from JKIA airport at 7AM.",
          "Board 4x4 Landcruisers for the journey to Maasai Mara (5-6 hours).",
          "See Nairobi National Park and The Great Rift Valley en route.",
          "Arrive at Maasai Mara by noon, check-in, and have lunch.",
          "First game drive on the great plains of Maasai Mara.",
        ],
      },
      {
        day: "Day 2 - Nov 15th 2025",
        details: [
          "Wake up early, have coffee/tea, and wear a fleece jacket.",
          "Morning game drive with packed breakfast.",
          "Bush breakfast under a tree.",
          "Game drive to spot cheetahs and witness Topi births.",
          "Return to camp around 11:30 AM, rest, and have lunch.",
          "Afternoon game drive starting at 3 PM to locate a leopard.",
        ],
      },
      {
        day: "Day 3 - Nov 16th 2023",
        details: [
          "Early wake-up, hot beverage, and jump into vehicles.",
          "Full day game drive towards the border of Maasai Mara.",
          "Packed breakfast and lunch.",
          "Return to camp in the evening, enjoy campfire, and have dinner.",
        ],
      },
      {
        day: "Day 4 - Nov 17th 2023",
        details: [
          "Wake up at leisure, have breakfast, and discuss experiences.",
          "Journey back to Nairobi and drop-off at JKIA airport.",
        ],
      },
    ],
    costs: {
      adult: 1582,
      child: 1400,
      specialAdult: 1322,
      specialChild: 1127,
    },
    termsAndConditions: [
      "Costs are based at 4 pax per vehicle for game drives and 5 per vehicle for internal transfers.",
      "Stay at Mara would be at Zebra plains or Loyk camp or Julia river camp.",
      "Last day to confirm the tour is August 14th 2023.",
      "Guests traveling should process valid passports with a minimum of 6 months validity from the date of return.",
      "Guests traveling should be administered with Yellow fever vaccination and Oral polio vaccination. The vaccines should be taken at least 15 days prior to travel. The certificates have to be shared for us to send you the invite letter for VISA application.",
      "Guests should intimate us on any medical ailment and Travel Unbounded World Pvt Ltd is not liable for any loss or damage to the guests during the tour.",
      "Guests should provide International travel insurance 15 days prior to travel.",
      "Guests staying at Nairobi one day prior to the travel dates have to reach JKIA airport at 7AM on Nov 14th.",
      "Guests staying at Nairobi on Nov 17th would have to arrange their transport from JKIA airport after we drop you.",
      "Lunch on the return on Nov 17th is not a part of the package.",
      "Meals are mentioned in brackets at the end of the Day’s itinerary.",
      "Groups above 5 can avail special discounts.",
      "Vehicles are provided only for internal transfers and game drives, they are not for other purposes or use.",
      "Please refer to all the terms and conditions on www.travelunbounded.com.",
    ],
    paymentTerms: [
      "100% of the tour cost at the time of booking.",
      "50% of the tour cost would be given back as credit if the tour is cancelled 60 days before the travel dates.",
      "No refund is provided if tour is cancelled within thirty days of the travel dates.",
    ],
    inclusions: [
      "Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared basis.",
      "Stay on twin sharing basis at Maasai Mara either at Zebra plains or Loyk camp or Julia river camp.",
      "Game drives in Landcruisers in shared basis - minimum 4 pax per vehicle.",
      "Water during game drives.",
      "All meals as mentioned in the itinerary.",
      "Park Fees.",
      "Guide Fees.",
      "English speaking guides/drivers.",
    ],
    exclusions: [
      "Any airfare or VISA charges.",
      "Personal and medical expenses during the tour.",
      "Tips and gratitude.",
      "Anything other than mentioned in the Inclusions section.",
    ],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === destinationData.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === destinationData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? destinationData.images.length - 1 : prevIndex - 1
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setShowBookingForm(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelers: 1,
      specialRequests: "",
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-white text-white py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Destination Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-left mb-8 text-gray-800">
          {destinationData.title}
        </h1>

        {/* Image Slider */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-8">
          {destinationData.images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Destination ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e";
                }}
              />
            </div>
          ))}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Destination Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">
                {destinationData.description}
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Price</h2>
              <p className="text-4xl font-bold text-blue-400">
                ${destinationData.price}
                <span className="text-lg text-gray-400 ml-2">per person</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Available Dates</h2>
            <div className="flex flex-wrap gap-3">
              {destinationData.availableDates.map((date, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full font-medium"
                >
                  {date}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Itinerary />
        <div className="text-center">
          <button
            onClick={() => setShowBookingForm(true)}
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-300 rounded-xl text-xl font-bold hover:from-orange-600 hover:to-orange-700 transform hover:scale-102 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-4"
            aria-label="Book Now"
          >
            Book Now
          </button>
        </div>

        {showBookingForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gray-800 rounded-xl p-6 w-full max-w-md relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setShowBookingForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                aria-label="Close form"
              >
                <FaTimes size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-6">Book Your Trip</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="travelers"
                  >
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    id="travelers"
                    name="travelers"
                    min="1"
                    required
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="specialRequests"
                  >
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white h-24 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors"
                >
                  Submit Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TravelDestination;
