import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Contactus_banner from "../assets/contact-us-banner.webp";

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [loading, setLoading] = useState(false); // Track form submission state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Disable button

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage("Your inquiry has been submitted successfully! 🎉");
          setMessageType("success");
          form.current.reset();
        },
        () => {
          setMessage("Oops! Something went wrong. Please try again.");
          setMessageType("error");
        }
      )
      .finally(() => {
        setLoading(false); // Enable button again
      });
  };

  return (
    <div className="flex justify-center items-center p-6 mt-20 max-sm:p-2 bg-gray-100">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden max-w-7xl w-full border border-gray-300 max-h-[700px]">
        
        {/* Left Section - Inquiry Form */}
        <div className="w-full md:w-1/2 bg-white p-8 max-sm:p-4 flex justify-center items-center">
          <div className="p-8 max-sm:p-0 max-w-xl w-full">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Plan Your <span className="text-orange-600">Trip</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the details below and our team will assist you in planning your perfect Swiss getaway!
            </p>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none bg-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none bg-transparent"
              />
              <input
                type="text"
                name="destination"
                placeholder="Preferred Destination (e.g., Zermatt, Interlaken)"
                required
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none bg-transparent"
              />
              <input
                type="date"
                name="travel_date"
                required
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none bg-transparent"
              />
              <textarea
                name="message"
                rows="3"
                placeholder="Special Requests or Additional Info"
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none bg-transparent"
              />
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-300 font-semi-bold disabled:bg-gray-400"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>

              {/* Display success/error message below button */}
              {message && (
                <p className={`mt-3 text-lg text-center ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Right Section - Responsive Image (Hidden on Mobile) */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src={Contactus_banner}
            alt="Luxury Swiss Chalet with Mountain View"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default ContactForm;