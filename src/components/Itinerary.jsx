import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const days = [
    {
      day: 1,
      date: "Nov 14th 2023",
      title: "Journey to Maasai Mara",
      description: "Begin your adventure with a scenic drive through the heart of Kenya",
      image: "https://images.unsplash.com/photo-1566288623394-377af472d81b?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Early morning pickup from JKIA airport",
        "Scenic drive through Nairobi National Park",
        "Great Rift Valley viewpoint stop",
        "Afternoon game drive at Talek and Topi plains",
        "Evening at the camp with sundowner",
      ],
    },
    {
      day: 2,
      date: "Nov 15th 2023",
      title: "Sunrise Safari & Big Cats",
      description: "Wake up to the magic of an African sunrise and track majestic predators",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Early morning game drive",
        "Bush breakfast experience",
        "Cheetah tracking expedition",
        "Afternoon leopard search",
        "Evening wildlife photography",
      ],
    },
    {
      day: 3,
      date: "Nov 16th 2023",
      title: "Full Day Adventure",
      description: "Explore the furthest reaches of the reserve and witness incredible wildlife",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Visit to Sand River border",
        "Packed breakfast and lunch",
        "Big Five spotting opportunity",
        "Guided nature walk (optional)",
        "Final evening at camp",
      ],
    },
    {
      day: 4,
      date: "Nov 17th 2023",
      title: "Farewell to Mara",
      description: "Savor your final moments in this magical wilderness",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1000",
      highlights: [
        "Leisure breakfast",
        "Optional morning game drive",
        "Return journey to Nairobi",
        "Drop off at JKIA airport",
      ],
    },
  ];


const Itinerary = () => {
  return (
    <section id="itinerary" className=" bg-gradient-to-b from-gray-50 to-white mt-20 py-4 rounded-2xl border shadow-sm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#f97316] font-medium tracking-wider text-sm">YOUR JOURNEY</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-gray-900">
            Your Perfect Itinerary
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Every day brings new discoveries and unforgettable moments.
            Let us take you on a journey of a lifetime.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {days.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8"
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white border shadow-xs hover:shadow-sm transition-shadow duration-300">
                <div className="grid md:grid-cols-[2fr,3fr]">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={day.image}
                      alt={day.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                      <p className="font-display text-[#f97316] text-lg">{day.date}</p>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <p className="text-sm">Day {day.day}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-display text-gray-900 mb-2">
                      {day.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {day.description}
                    </p>
                    <ul className="space-y-3">
                      {day.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#f97316] flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;