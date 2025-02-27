import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setIsSubscribed(true);
    setEmail("");
    setError("");
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <section className="bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="p-6 sm:p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Subscribe to our Newsletter
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Join our travel community to explore new destinations, exclusive
              offers, and unforgettable experiences.
            </p>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md sm:flex-1"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 sm:mt-0 sm:ml-3 w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                  >
                    Subscribe
                    <FaPaperPlane className="ml-2" />
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <div
                className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
                role="alert"
              >
                <p className="font-medium">Thank you for subscribing!</p>
                <p>You've successfully signed up for our newsletter.</p>
              </div>
            )}
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sm:px-10">
            <p className="text-xs leading-5 text-gray-500">
              By subscribing, you agree to our{" "}
              <a href="#" className="font-medium text-gray-900 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="font-medium text-gray-900 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
