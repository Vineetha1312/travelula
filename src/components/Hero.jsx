// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import hero1 from "../assets/hero1.webp";
// import hero2 from "../assets/hero2.webp";
// import hero3 from "../assets/hero3.webp";
// import hero4 from "../assets/hero4.webp";

// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return isMobile;
// };

// // Placeholder for cn function
// const cn = (...classes) => classes.filter(Boolean).join(" ");

// const images = [
//   {
//     src: hero1,
//     alt: "Luxury hotel with mountain view",
//   },
//   {
//     src: hero2,
//     alt: "Elegant resort swimming pool at sunset",
//   },
//   {
//     src: hero3,
//     alt: "Magnificent coastal line view from luxury resort",
//   },
//   {
//     src: hero4,
//     alt: "Scenic sunset view of a luxury beachfront resort",
//   },
// ];

// export function HeroSection({ className }) {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeIndicator, setActiveIndicator] = useState(0);
//   const isMobile = useIsMobile();
//   const parallaxRef = useRef(null);

//   useEffect(() => {
//     if (!isMobile) {
//       const handleScroll = () => {
//         if (parallaxRef.current) {
//           const scrollTop = window.scrollY;
//           parallaxRef.current.style.transform = `translateY(${
//             scrollTop * 0.3
//           }px)`;
//         }
//       };

//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, [isMobile]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => {
//         const nextImage = (prev + 1) % images.length;
//         setActiveIndicator(nextImage);
//         return nextImage;
//       });
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const preloadImages = () => {
//       images.forEach((image) => {
//         const img = new Image();
//         img.src = image.src;
//         img.onload = () => {
//           setIsLoaded(true);
//         };
//       });
//     };

//     preloadImages();
//   }, []);

//   const handleImageChange = (index) => {
//     setCurrentImage(index);
//     setActiveIndicator(index);
//   };

//   return (
//     <div className={cn("relative h-screen w-full overflow-hidden", className)}>
//       <div className="absolute inset-0 z-0">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={cn(
//               "absolute inset-0 h-full w-full transition-opacity duration-2000 ease-in-out",
//               index === currentImage ? "opacity-100" : "opacity-0"
//             )}
//           >
//             <div
//               ref={index === currentImage ? parallaxRef : null}
//               className={cn(
//                 "absolute inset-0 w-full h-[120%] bg-cover bg-center transform scale-105 transition-transform duration-10000",
//                 index === currentImage && "animate-bg-pan"
//               )}
//               style={{
//                 backgroundImage: `url(${image.src})`,
//                 backgroundPosition: "center center",
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
//           </div>
//         ))}
//       </div>

//       <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-10">
//         <div className="max-w-5xl grid md:grid-cols-2 gap-6 items-center">
//           <div className="text-left md:pr-10">
//             <div
//               className="inline-block px-4 py-1.5 mb-6 rounded-sm bg-white/5 backdrop-blur-md border-l-2 border-[#f97316] animate-fade-in opacity-0"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <p className="text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase">
//                 Refined Travel Experiences
//               </p>
//             </div>
//             <h1
//               className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white opacity-0 animate-fade-in mb-6"
//               style={{ animationDelay: "0.4s" }}
//             >
//               <span className="block">Discover the Art</span>
//               <span className="block mt-1 text-[#f97316]">
//                 of Luxury Travel
//               </span>
//             </h1>
//             <p
//               className="text-base md:text-lg text-white max-w-xl mb-10 opacity-0 animate-slide-up font-light leading-relaxed"
//               style={{ animationDelay: "0.6s" }}
//             >
//               Embark on a journey of unparalleled elegance and sophistication,
//               where every destination is curated to perfection.
//             </p>
//             <div
//               className="opacity-0 animate-scale-in flex flex-wrap gap-4"
//               style={{ animationDelay: "0.8s" }}
//             >
//               <Link
//                 to="/discover-cities"
//                 className="px-8 py-3.5 rounded-sm bg-[#f97316] text-white font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-travel-secondary/10"
//               >
//                 Explore Places
//               </Link>
//               <Link to="#" className="px-8 py-3.5 rounded-sm bg-transparent border border-white/20 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-white/10">
//                 Get Started
//               </Link>

//             </div>
//           </div>

//           <div className="hidden md:flex items-center justify-center relative">
//             <div
//               className="opacity-0 animate-scale-in absolute w-72 h-96 rounded-md overflow-hidden shadow-2xl"
//               style={{ animationDelay: "1s" }}
//             >
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${
//                     images[(currentImage + 1) % images.length].src
//                   })`,
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               <div className="absolute bottom-4 left-4 right-4">
//                 <div className="h-1 w-1/3 bg-travel-secondary rounded-full mb-2" />
//                 <h3 className="text-white font-display text-lg">
//                   Exclusive Destinations
//                 </h3>
//                 <p className="text-white/80 text-sm">
//                   Handpicked for the discerning traveler
//                 </p>
//               </div>
//             </div>

//             <div
//               className="opacity-0 animate-scale-in absolute w-56 h-72 rounded-md overflow-hidden shadow-2xl -bottom-8 -right-4"
//               style={{ animationDelay: "1.2s" }}
//             >
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${
//                     images[(currentImage + 2) % images.length].src
//                   })`,
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               <div className="absolute bottom-4 left-4 right-4">
//                 <div className="h-1 w-1/3 bg-travel-primary rounded-full mb-2" />
//                 <h3 className="text-white font-display text-base">
//                   Luxury Accommodations
//                 </h3>
//                 <p className="text-white/80 text-xs">Uncompromising comfort</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-10 left-6 md:left-10 z-10 flex space-x-3">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleImageChange(index)}
//             className={cn(
//               "h-1 transition-all duration-300 rounded-full",
//               index === activeIndicator
//                 ? "w-10 bg-[#f97316]"
//                 : "w-6 bg-white/30"
//             )}
//             aria-label={`View image ${index + 1}`}
//           />
//         ))}
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10 flex justify-center items-end pb-2">
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <div className="text-white/70 text-xs flex items-center">
//             <span className="hidden sm:inline-block pr-6 border-r border-white/10">
//               EST. 2023
//             </span>
//             <span className="pl-6 hidden sm:inline-block">
//               Luxury travel redefined
//             </span>
//           </div>
//           <div className="flex space-x-5">
//             {["facebook", "twitter", "instagram"].map((social) => (
//               <a
//                 key={social}
//                 href="#"
//                 className="text-white/70 hover:text-travel-secondary transition-colors"
//                 aria-label={social}
//               >
//                 <div className="w-4 h-4" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;


import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

// Placeholder for cn function
const cn = (...classes) => classes.filter(Boolean).join(" ");

const images = [
  {
    src: hero1,
    alt: "Luxury hotel with mountain view",
  },
  {
    src: hero2,
    alt: "Elegant resort swimming pool at sunset",
  },
  {
    src: hero3,
    alt: "Magnificent coastal line view from luxury resort",
  },
  {
    src: hero4,
    alt: "Scenic sunset view of a luxury beachfront resort",
  },
];

export function HeroSection({ className }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const isMobile = useIsMobile();
  const parallaxRef = useRef(null);

  // Smooth scroll to the "travel-info" section
  const handleScroll = () => {
    const section = document.getElementById("travel-info");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!isMobile) {
      const handleScrollEffect = () => {
        if (parallaxRef.current) {
          const scrollTop = window.scrollY;
          parallaxRef.current.style.transform = `translateY(${
            scrollTop * 0.3
          }px)`;
        }
      };

      window.addEventListener("scroll", handleScrollEffect);
      return () => {
        window.removeEventListener("scroll", handleScrollEffect);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const nextImage = (prev + 1) % images.length;
        setActiveIndicator(nextImage);
        return nextImage;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          setIsLoaded(true);
        };
      });
    };

    preloadImages();
  }, []);

  const handleImageChange = (index) => {
    setCurrentImage(index);
    setActiveIndicator(index);
  };

  return (
    <div className={cn("relative h-screen w-full overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-2000 ease-in-out",
              index === currentImage ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              ref={index === currentImage ? parallaxRef : null}
              className={cn(
                "absolute inset-0 w-full h-[120%] bg-cover bg-center transform scale-105 transition-transform duration-10000",
                index === currentImage && "animate-bg-pan"
              )}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundPosition: "center center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-10">
        <div className="max-w-5xl grid md:grid-cols-2 gap-6 items-center">
          <div className="text-left md:pr-10">
            <div
              className="inline-block px-4 py-1.5 mb-6 rounded-sm bg-white/5 backdrop-blur-md border-l-2 border-[#f97316] animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase">
                Refined Travel Experiences
              </p>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white opacity-0 animate-fade-in mb-6"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="block">Discover the Art</span>
              <span className="block mt-1 text-[#f97316]">
                of Luxury Travel
              </span>
            </h1>
            <p
              className="text-base md:text-lg text-white max-w-xl mb-10 opacity-0 animate-slide-up font-light leading-relaxed"
              style={{ animationDelay: "0.6s" }}
            >
              Embark on a journey of unparalleled elegance and sophistication,
              where every destination is curated to perfection.
            </p>
            <div
              className="opacity-0 animate-scale-in flex flex-wrap gap-4"
              style={{ animationDelay: "0.8s" }}
            >
              <Link
                to="/discover-cities"
                className="px-8 py-3.5 rounded-sm bg-[#f97316] text-white font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-travel-secondary/10"
              >
                Explore Places
              </Link>
              <button
                onClick={handleScroll}
                className="px-8 py-3.5 rounded-sm bg-transparent border border-white/20 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-white/10"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center relative">
            <div
              className="opacity-0 animate-scale-in absolute w-72 h-96 rounded-md overflow-hidden shadow-2xl"
              style={{ animationDelay: "1s" }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    images[(currentImage + 1) % images.length].src
                  })`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 w-1/3 bg-travel-secondary rounded-full mb-2" />
                <h3 className="text-white font-display text-lg">
                  Exclusive Destinations
                </h3>
                <p className="text-white/80 text-sm">
                  Handpicked for the discerning traveler
                </p>
              </div>
            </div>

            <div
              className="opacity-0 animate-scale-in absolute w-56 h-72 rounded-md overflow-hidden shadow-2xl -bottom-8 -right-4"
              style={{ animationDelay: "1.2s" }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    images[(currentImage + 2) % images.length].src
                  })`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 w-1/3 bg-travel-primary rounded-full mb-2" />
                <h3 className="text-white font-display text-base">
                  Luxury Accommodations
                </h3>
                <p className="text-white/80 text-xs">Uncompromising comfort</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 md:left-10 z-10 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={cn(
              "h-1 transition-all duration-300 rounded-full",
              index === activeIndicator
                ? "w-10 bg-[#f97316]"
                : "w-6 bg-white/30"
            )}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10 flex justify-center items-end pb-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-white/70 text-xs flex items-center">
            <span className="hidden sm:inline-block pr-6 border-r border-white/10">
              EST. 2023
            </span>
            <span className="pl-6 hidden sm:inline-block">
              Luxury travel redefined
            </span>
          </div>
          <div className="flex space-x-5">
            {["facebook", "twitter", "instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/70 hover:text-travel-secondary transition-colors"
                aria-label={social}
              >
                <div className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
