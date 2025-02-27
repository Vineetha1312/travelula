import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.webp";

const footerLinks = [
  {
    title: "Travel Resources",
    links: [
      { name: "Destinations", href: "#" },
      { name: "Travel Guides", href: "#" },
      { name: "Flight Booking", href: "#" },
      { name: "Hotel Reservations", href: "#" },
      { name: "Travel Insurance", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
];

const FooterLinkGroup = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:text-black transition"
              aria-label={link.name}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <img src={logo} className="h-20 w-40 " alt="Travel Logo" />
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-700 hover:text-black transition"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((group, index) => (
            <FooterLinkGroup
              key={index}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>

        <div className="text-center text-gray-600 text-sm mt-4 border-t pt-4">
          <p>
            Copyright ©2025. All trademarks and copyrights belong to{" "}
            <span className=" text-orange-600 font-semibold">
              {" "}
              Travel-unbounded
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
