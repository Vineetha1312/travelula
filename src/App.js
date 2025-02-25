import React from "react";
import Header from "./components/Header";
import AboutTour from "./components/AboutTour";
import Itinerary from "./components/Itinerary";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <AboutTour />
      <Itinerary />
      <WhyChooseUs />
      <Pricing />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;