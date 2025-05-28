import { useEffect } from "react";
import FinalCTASection from "../components/FinalCTASection";
import FourDimensionsSection from "../components/FourDimensionsSection";
import FourStylesSection from "../components/FourStylesSection";
import HeroSection from "../components/HeroSection";
import IntroCardsSection from "../components/IntroCardsSection";
import { CTA } from "../components/toolkit";
import WhyUnderstandingSection from "../components/WhyUnderstandingSection";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 flex flex-col items-center">
      <HeroSection />
      <IntroCardsSection />
      <div className="text-center mb-20">
        <CTA to="/quiz">Take the Quiz Now</CTA>
      </div>
      <WhyUnderstandingSection />
      <FourDimensionsSection />
      <div className="text-center mb-20">
        <CTA to="/quiz">Discover My Communication Style</CTA>
      </div>
      <FourStylesSection />
      <FinalCTASection />
    </div>
  );
};

export default LandingPage;
