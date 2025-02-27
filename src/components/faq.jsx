import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is there any special experience I can expect during the trip?",
      answer:
        "Absolutely! A highlight is the bush breakfast, where you’ll enjoy a meal surrounded by nature, watching animals graze nearby. The sunrise and sunset views over Maasai Mara are also unforgettable, offering some of the most beautiful landscapes you'll ever witness.",
    },
    {
      question:
        "Do I need any vaccinations or health preparations before traveling?",
      answer:
        "Yes, travelers should have Yellow Fever and Oral Polio vaccinations, taken at least 15 days before departure. You’ll also need a valid passport with at least 6 months' validity from the date of return.",
    },
    {
      question: "What is included in the trip package?",
      answer:
        "The package includes transport to and from the destination by 4*4 Landcruiser, accommodation at local camps, all meals as per the itinerary, game drives, park fees, and English-speaking guides.",
    },
    {
      question: "Can I expect to see all the 'Big 5' during the trip?",
      answer:
        "While the Maasai Mara is famous for its wildlife, the elusive rhino may be harder to spot. However, you’ll have great opportunities to see the Big 4 (Lion, Leopard, Elephant, Buffalo) during your game drives, with a chance of spotting rhinos as well.",
    },
    {
      question: "Can I customize the itinerary or activities?",
      answer:
        "We can offer some flexibility depending on availability and your interests. If you wish to explore specific areas or wildlife, just let your guide know, and they’ll adjust the schedule accordingly.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-10 text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow overflow-hidden border max-w-full p-2"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="w-6 h-6 text-gray-500" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
