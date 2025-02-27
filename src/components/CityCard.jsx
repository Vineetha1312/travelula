import { useState } from "react";
import { ChevronRight } from "lucide-react";

// Utility function to concatenate class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

const CityCard = ({ 
  id,
  name,
  country,
  description,
  image,
  rating = 4.5,
  price = "From $1,299"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl animate-fade-in opacity-0" style={{ animationDelay: `${id * 0.1}s` }}>
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${country}`}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            "group-hover:scale-110",
            isLoaded ? "blur-0" : "blur-lg"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        
        {/* Rating badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-medium text-gray-800">{rating}</span>
        </div>
        
        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 transform transition-all duration-300 group-hover:translate-y-[-8px] group-hover:bg-travel-primary group-hover:text-white">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-white text-gray-900 transition-colors">
                  {name}
                </h3>
                <p className="text-sm group-hover:text-white/90 text-gray-600 transition-colors">
                  {country}
                </p>
              </div>
              <span className="text-sm font-bold group-hover:text-white/90 text-travel-primary transition-colors">
                {price}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 group-hover:text-white/80 line-clamp-2 mb-4 transition-colors">
              {description}
            </p>
            
            <div className="flex justify-between items-center">
              <button className="text-sm font-medium text-travel-primary group-hover:text-white transition-colors">
                View Details
              </button>
              
              <div className="w-8 h-8 bg-travel-primary group-hover:bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                <ChevronRight className="w-5 h-5 text-white group-hover:text-travel-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityCard;