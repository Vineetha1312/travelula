import React from "react";

const FAQ = () => {
  const questions = [
    { question: "What should I pack?", answer: "Comfortable clothing, sunscreen, and a camera." },
    { question: "Is the tour suitable for children?", answer: "Yes, it’s family-friendly." },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="font-semibold text-xl">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;