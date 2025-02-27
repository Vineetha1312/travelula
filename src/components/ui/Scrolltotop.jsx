// import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from "react-icons/fa";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//     setIsHovered(false);
//   };

//   useEffect(() => {
//     const debounce = (func, delay) => {
//       let timeoutId;
//       return (...args) => {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => func(...args), delay);
//       };
//     };

//     const handleScroll = debounce(toggleVisibility, 100);

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 transition-all z-[1000px]"
//           aria-label="Scroll back to the top of the page"
//         >
//           <span className="text-2xl -mr-2"><FaArrowUp /></span>
//           <span
//             className={`ml-2 overflow-hidden whitespace-nowrap transition-all font-bold duration-300 ease-in-out ${
//               isHovered ? 'max-w-xs opacity-100 ml-4' : 'max-w-0 opacity-0'
//             }`}
//           >
//             Scroll to Top
//           </span>
//         </button>
//       )}
//     </div>
//   );
// };

// export default ScrollToTop;


import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to check scroll position and toggle visibility
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll back to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsHovered(false); // Hide text after clicking
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-8 z-[1000] right-6 bg-orange-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 transition-all"
          aria-label="Scroll to top"
        >
          {/* Arrow Icon */}
          <span className="text-2xl"><FaArrowUp /></span>
          
          {/* "Scroll to Top" text (only on hover) */}
          <span
            className={` overflow-hidden whitespace-nowrap transition-all font-bold duration-300 ease-in-out ${
              isHovered ? "max-w-xs opacity-100 ml-3" : "max-w-0 opacity-0"
            }`}
          >
            Scroll to Top
          </span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
