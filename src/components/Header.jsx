import { useState } from "react";
import { User, Mail } from "lucide-react";
import logo from "../assets/logo.webp";
import { SignedIn, SignedOut, useUser, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Popular Destinations",
      items: ["Paris", "Tokyo", "New York", "Bali"],
    },
    {
      title: "Travel Guides",
      items: ["City Guides", "Adventure Tours", "Cultural Experiences"],
    },
    {
      title: "Seasonal Trips",
      items: ["Summer Getaways", "Winter Escapes", "Spring Adventures"],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center p-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="text-[#F97316] font-bold text-2xl tracking-tight hover:text-[#EA580C] transition-colors"
              >
                <img src={logo} alt="Travelula" className="w-25 h-16" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-[#F97316] transition-colors text-sm font-medium tracking-wide"
              >
                Explore
              </button>
              <a
                href="#travel-info"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setTimeout(() => {
                    document
                      .getElementById("travel-info")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="block px-3 py-2 text-base  text-gray-700 hover:text-[#F97316] transition-colors"
              >
                About
              </a>
              <a
                href="/contact-form"
                className="text-gray-800 hover:text-[#F97316] transition-colors flex items-center space-x-1"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">
                  Contact
                </span>
              </a>

              <SignedIn>
                <div className="flex items-center space-x-4">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
              <SignedOut>
                <button
                  onClick={() => navigate("/signin")}
                  className="bg-[#F97316] text-white px-5 py-2.5 rounded-full flex items-center space-x-2 hover:bg-[#EA580C] transition-colors shadow-md hover:shadow-lg"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium tracking-wide">
                    Sign In
                  </span>
                </button>
              </SignedOut>
            </nav>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out shadow-lg",
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {menuItems.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#F97316] transition-colors block py-1 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out border-t border-gray-100",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white/95 backdrop-blur-lg">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F97316] transition-colors"
          >
            Explore
          </a>
          <a
            href="/about"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F97316] transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#F97316] transition-colors"
          >
            Contact
          </a>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <a
              href="/signin"
              className="w-full mt-2 bg-[#F97316] text-white px-4 py-2.5 rounded-full flex items-center justify-center space-x-2 hover:bg-[#EA580C] transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="font-medium">Sign In</span>
            </a>
          </SignedOut>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#F97316] transition-colors"
      >
        <span className="sr-only">Open menu</span>
        <div className="w-6 flex flex-col space-y-1">
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transform transition duration-300",
              isOpen ? "rotate-45 translate-y-1.5" : ""
            )}
          ></span>
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transition duration-300",
              isOpen ? "opacity-0" : ""
            )}
          ></span>
          <span
            className={cn(
              "block h-0.5 w-6 bg-current transform transition duration-300",
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            )}
          ></span>
        </div>
      </button>
    </header>
  );
};

export default Header;
