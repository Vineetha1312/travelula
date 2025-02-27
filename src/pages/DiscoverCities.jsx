import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";
import CityCard from "../components/CityCard"; // Adjust the import path if necessary
import { useToast } from "../components/ui/useToast"; // Adjust the import path if necessary
import Barcaleno_img from "../assets/Barcaleno.webp"
import amsterdam_img from "../assets/amsterdam.webp"
import paris_img from "../assets/paris.webp"
import india_img from "../assets/india.webp"
import Greece_img from "../assets/greece.webp"
import Italy_img from "../assets/italy.webp"
import Portugal_img from "../assets/portugal.webp"
import Tokyo_img from "../assets/tokyo-image.webp"
import Morocco_img from "../assets/morocco.webp"
import Kyoto_japan_img from "../assets/kyoto-japan.webp"
import Rome_img from "../assets/rome-italy.webp"
import Prague_img from "../assets/prague.webp"

// Sample city data
const allCities = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    description: "Experience the romantic atmosphere of the City of Lights with iconic landmarks and exquisite cuisine.",
    image: paris_img,
    rating: 4.8,
    price: "From $1,499"
  },
  {
    id: 2,
    name: "Amsterdam",
    country: "Netherlands",
    description: "Explore picturesque canals, historic architecture, and vibrant cultural scenes in this charming European city.",
    image:amsterdam_img,
    rating: 4.6,
    price: "From $1,299"
  },
  {
    id: 3,
    name: "Barcelona",
    country: "Spain",
    description: "Discover Gaudí's masterpieces, Mediterranean beaches, and a lively atmosphere in this Catalan gem.",
    image: Barcaleno_img,
    rating: 4.7,
    price: "From $1,399"
  },
  {
    id: 4,
    name: "New Delhi",
    country: "India",
    description: "Immerse yourself in rich history, vibrant markets, and incredible cuisine in India's diverse capital city.",
    image: india_img,
    rating: 4.4,
    price: "From $999"
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    description: "Experience breathtaking sunsets, white-washed buildings, and crystal-clear waters on this idyllic Greek island.",
    image: Greece_img,
    rating: 4.9,
    price: "From $1,699"
  },
  {
    id: 6,
    name: "Venice",
    country: "Italy",
    description: "Navigate the romantic canals, admire historic architecture, and experience the unique charm of this floating city.",
    image: Italy_img,
    rating: 4.7,
    price: "From $1,599"
  },
  {
    id: 7,
    name: "Lisbon",
    country: "Portugal",
    description: "Explore colorful neighborhoods, enjoy delicious seafood, and soak in the relaxed atmosphere of Portugal's capital.",
    image: Portugal_img,
    rating: 4.6,
    price: "From $1,199"
  },
  {
    id: 8,
    name: "Tokyo",
    country: "Japan",
    description: "Experience the perfect blend of traditional culture and futuristic innovation in Japan's vibrant capital.",
    image: Tokyo_img,
    rating: 4.8,
    price: "From $1,899"
  },
  {
    id: 9,
    name: "Marrakech",
    country: "Morocco",
    description: "Get lost in the magical medinas, vibrant souks, and experience the rich culture of this North African gem.",
    image: Morocco_img,
    rating: 4.5,
    price: "From $1,099"
  },
  {
    id: 10,
    name: "Kyoto",
    country: "Japan",
    description: "Discover serene temples, traditional gardens, and experience Japan's rich cultural heritage in this historic city.",
    image: Kyoto_japan_img,
    rating: 4.7,
    price: "From $1,799"
  },
  {
    id: 11,
    name: "Rome",
    country: "Italy",
    description: "Walk through ancient history, enjoy world-class cuisine, and experience the vibrant culture of Italy's eternal city.",
    image: Rome_img,
    rating: 4.6,
    price: "From $1,499"
  },
  {
    id: 12,
    name: "Prague",
    country: "Czech Republic",
    description: "Explore fairytale architecture, historic bridges, and a vibrant cultural scene in the heart of Europe.",
    image: Prague_img,
    rating: 4.7,
    price: "From $1,299"
  }
];

const regions = [
  "All Regions", "Europe", "Asia", "Americas", "Africa", "Oceania"
];

const DiscoverCities = () => {
  const [cities, setCities] = useState(allCities);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("All Regions");
  const [currentPage, setCurrentPage] = useState(1);
  const { toast, toasts } = useToast();
  const itemsPerPage = 8;
  
  useEffect(() => {
    let filtered = allCities;
    
    if (searchTerm) {
      filtered = filtered.filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (activeRegion !== "All Regions") {
      const regionMapping = {
        "Europe": ["France", "Netherlands", "Spain", "Greece", "Italy", "Portugal", "Czech Republic"],
        "Asia": ["India", "Japan"],
        "Americas": ["United States", "Canada", "Brazil", "Mexico"],
        "Africa": ["Morocco", "Egypt", "South Africa"],
        "Oceania": ["Australia", "New Zealand"]
      };
      
      filtered = filtered.filter(city => 
        regionMapping[activeRegion]?.includes(city.country)
      );
    }
    
    setCities(filtered);
    setCurrentPage(1); 
  }, [searchTerm, activeRegion]);
  
  const totalPages = Math.ceil(cities.length / itemsPerPage);
  const currentCities = cities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  useEffect(() => {
    toast({
      title: "Welcome to our City Directory",
      description: "Discover beautiful destinations from around the world",
    });
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-travel-dark mb-4">
            Discover Incredible Cities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked collection of the world's most fascinating cities and start planning your next adventure.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by city or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-primary/50"
            />
          </div>
          
          <div className="flex items-center gap-2 md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Filter className="text-gray-500 h-5 w-5 flex-shrink-0" />
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeRegion === region
                    ? "bg-travel-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <p className="text-gray-600">
            Showing <span className="font-semibold">{cities.length}</span> cities
          </p>
        </div>
        
        {currentCities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {currentCities.map((city) => (
              <CityCard key={city.id} {...city} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl text-gray-600">No cities found matching your criteria</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setActiveRegion("All Regions");
              }}
              className="mt-4 px-6 py-2 bg-travel-primary text-white rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
        
        {cities.length > 0 && (
          <div className="flex justify-center mt-10 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <span className="text-gray-700 font-medium">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverCities;