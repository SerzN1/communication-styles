import FinalCTASection from "../components/landing/FinalCTASection";
import FourDimensionsSection from "../components/landing/FourDimensionsSection";
import FourStylesSection from "../components/landing/FourStylesSection";
import HeroSection from "../components/landing/HeroSection";
import IntroCardsSection from "../components/landing/IntroCardsSection";
import WhyUnderstandingSection from "../components/landing/WhyUnderstandingSection";
import { CTA } from "../components/toolkit";
import { useScrollToTop } from "../hooks";

const LandingPage = () => {
  useScrollToTop();

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
