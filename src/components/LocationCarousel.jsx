import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Indiaimg from "../assets/india.webp";
import Parisimg from "../assets/paris.webp";
import Spainimg from "../assets/spain.webp";
import Netherlandsimg from "../assets/netherlands.webp";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const locations = [
  {
    id: 1,
    name: "France",
    visitedPlaces: 10,
    image: Indiaimg,
  },
  {
    id: 2,
    name: "Netherlands",
    visitedPlaces: 8,
    image: Netherlandsimg,
  },
  {
    id: 3,
    name: "Spain",
    visitedPlaces: 6,
    image: Spainimg,
  },
  {
    id: 4,
    name: "India",
    visitedPlaces: 10,
    image: Netherlandsimg,
  },
  {
    id: 5,
    name: "Greece",
    visitedPlaces: 12,
    image: Indiaimg,
  },
  {
    id: 6,
    name: "Italy",
    visitedPlaces: 15,
    image: Spainimg,
  },
  {
    id: 7,
    name: "Portugal",
    visitedPlaces: 7,
    image: Spainimg,
  },
  {
    id: 8,
    name: "Japan",
    visitedPlaces: 14,
    image: Parisimg,
  },
];

export const LocationCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState({});
  const navigate = useNavigate();

  const [visibleCount, setVisibleCount] = useState(4);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleLocations = locations.slice(
    activeIndex,
    activeIndex + visibleCount
  );

  const handlePrevious = () => {
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      Math.min(locations.length - visibleCount, current + 1)
    );
  };

  const handleImageLoad = (locationId) => {
    setIsLoading((prev) => ({ ...prev, [locationId]: false }));
  };

  const handleDiscoverMoreClick = () => {
    navigate("/discover-cities");
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mt-10">
      <div className="mb-2">
        <span className="text-[#FF5722] text-sm font-medium">
          Most Visited Locations
        </span>
      </div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
          Choose Your Locations
        </h2>
        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={activeIndex === 0}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
              "bg-orange-600 text-white hover:bg-[#F4511E]",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-orange-600 disabled:bg-orange-400"
            )}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex >= locations.length - visibleCount}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
              "bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white"
            )}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleLocations.map((location) => (
          <div
            key={location.id}
            className="group relative rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-700",
                  "group-hover:scale-110",
                  isLoading[location.id] ? "blur-lg" : "blur-0"
                )}
                onLoad={() => handleImageLoad(location.id)}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-300 group-hover:translate-y-[-4px] group-hover:bg-[#FF5722] group-hover:text-white">
                  <h3 className="text-xl font-semibold group-hover:text-white text-gray-900">
                    {location.name}
                  </h3>
                  <p className="text-sm group-hover:text-white/90 text-gray-600">
                    {location.visitedPlaces} Visited Place
                  </p>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-[#FF5722] group-hover:bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                      <ChevronRight className="w-5 h-5 text-white group-hover:text-[#FF5722]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleDiscoverMoreClick}
          className="px-6 py-3 border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300"
        >
          Discover More Cities
        </button>
      </div>
    </div>
  );
};
