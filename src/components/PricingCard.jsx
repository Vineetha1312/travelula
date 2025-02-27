import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const PricingCard = ({ plan, isSelected, onSelect }) => {
  return (
    <div
      className={`border rounded-lg shadow-lg p-6 w-full md:w-1/3 bg-white cursor-pointer transition-all ${
        isSelected ? "border-gray-400 border-2 shadow-xl" : ""
      }`}
      onClick={onSelect}
    >
      <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
      <p className="text-4xl font-bold my-3">₹{plan.price}</p>
      <p className="text-gray-500 text-sm">
        {plan.price === plan.yearlyPrice
          ? `${plan.yearlyPrice} USD per year`
          : `${plan.monthlyPrice} USD per month, paid annually`}
      </p>

      <button
        className={`w-full py-2 rounded-md mt-4 transition-all ${plan.buttonColor}`}
      >
        {plan.buttonText}
      </button>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center text-gray-700 ${
              !feature.available ? "line-through text-gray-400" : ""
            }`}
          >
            {feature.available ? (
              <FaCheck className="text-green-500 mr-2" />
            ) : (
              <FaTimes className="text-gray-400 mr-2" />
            )}
            {feature.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
