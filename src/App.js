import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react"; // Clerk for authentication
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute"; // For protected routes
import AuthPage from "./components/AuthPage"; // For sign-in and sign-up
import Dashboard from "./components/DashBoard"; // Dashboard Component
import ContactForm from "./pages/ContactForm"; // Contact Page
import DiscoverCities from "./pages/DiscoverCities"; // Discover Cities Page
import FAQ from "./components/faq";
import ScrollBanner from "./components/ScrollBanner";
import HeroSection from "./components/Hero";
import { LocationCarousel } from "./components/LocationCarousel";
import Tripplanner from "./components/Tripplanner";
import Supportmodal from "./components/SupportModal";
import PricingPlans from "./components/PricingPlans";
import TravelInfoSection from "./components/TravelInfoSection";
import TrustedBrands from "./components/TrustedBrands";
import TestimonialSection from "./components/Testimonials";
import ScrollToTop from "./components/ui/Scrolltotop";
import FeatureSection from "./components/FeaturesSection";
import NewsletterSection from "./components/NewsletterSection";
import ResetScrollOnRouteChange from "./components/ResetScrollOnRouteChange";

// Clerk Publishable Key
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Check your .env file.");
}

// Home Page Structure
const HomePageContent = () => {
  return (
    <>
      <HeroSection />
      <ScrollBanner />
      <TravelInfoSection />
      <LocationCarousel />
      <Tripplanner />
      <FeatureSection />
      <PricingPlans />
      <TestimonialSection />
      <FAQ />
      <TrustedBrands />
      <NewsletterSection />
    </>
  );
};

// App Component
const App = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Header />
        <ResetScrollOnRouteChange />
        <Supportmodal />
        <ScrollToTop />
        <div className="font-sans">
          <Routes>
            <Route path="/" element={<HomePageContent />} />
            {/* Authentication Pages */}
            <Route path="/signin" element={<AuthPage type="sign-in" />} />
            <Route path="/sign-up" element={<AuthPage type="sign-up" />} />

            {/* Protected Dashboard Page */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Other Routes */}
            <Route path="/discover-cities" element={<DiscoverCities />} />
            <Route path="/contact-form" element={<ContactForm />} />

            {/* Redirect unknown routes to Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ClerkProvider>
  );
};

export default App;
