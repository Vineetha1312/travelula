import React, { useState } from "react";
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Basic",
    yearlyPrice: 2407,
    monthlyPrice: 1577,
    buttonText: "Get Started",
    buttonColor: "bg-gray-800 text-white hover:bg-gray-700",
    features: [
      { name: "Flight Booking System", available: true },
      { name: "No hidden fees", available: true },
      { name: "24/7 Customer Support", available: true },
      { name: "Priority Check-in", available: false },
      { name: "Hotel Booking Discounts", available: false },
      { name: "Lounge Access", available: false },
      { name: "Exclusive Travel Deals", available: false },
    ],
  },
  {
    name: "Premium",
    yearlyPrice: 16517,
    monthlyPrice: 13197,
    buttonText: "Upgrade Now",
    buttonColor: "bg-orange-600 text-white hover:bg-orange-500",
    features: [
      { name: "Flight Booking System", available: true },
      { name: "No hidden fees", available: true },
      { name: "24/7 Customer Support", available: true },
      { name: "Priority Check-in", available: true },
      { name: "Hotel Booking Discounts", available: true },
      { name: "Lounge Access", available: false },
      { name: "Exclusive Travel Deals", available: false },
    ],
  },
  {
    name: "Enterprise",
    yearlyPrice: 49717,
    monthlyPrice: 41417,
    buttonText: "Contact Us",
    buttonColor: "bg-gray-800 text-white hover:bg-gray-700",
    features: [
      { name: "Flight Booking System", available: true },
      { name: "No hidden fees", available: true },
      { name: "24/7 Customer Support", available: true },
      { name: "Priority Check-in", available: true },
      { name: "Hotel Booking Discounts", available: true },
      { name: "Lounge Access", available: true },
      { name: "Exclusive Travel Deals", available: true },
    ],
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const formatPrice = (price) => {
    return price.toLocaleString(); 
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">
        Designed for Travelers Like You
      </h2>
      <p className="text-center text-gray-500 mt-2">
        Explore our travel plans that fit your adventure needs.
      </p>

      <div className="flex justify-center items-center mt-6">
        <span className="text-gray-700 font-medium">Monthly</span>
        <label className="relative inline-flex items-center mx-2 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          />
          <div className="w-11 h-6 bg-gray-800 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
        </label>
        <span className="text-gray-700 font-medium">Yearly</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={{
              ...plan,
              price: formatPrice(
                billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice
              ), 
            }}
            isSelected={selectedPlan === index}
            onSelect={() => setSelectedPlan(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;