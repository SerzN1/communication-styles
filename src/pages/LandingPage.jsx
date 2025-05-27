import CTAButton from "../components/CTAButton";
import FinalCTASection from "../components/FinalCTASection";
import FourDimensionsSection from "../components/FourDimensionsSection";
import FourStylesSection from "../components/FourStylesSection";
import HeroSection from "../components/HeroSection";
import IntroCardsSection from "../components/IntroCardsSection";
import WhyUnderstandingSection from "../components/WhyUnderstandingSection";

const LandingPage = () => (
  <div className="bg-gray-50 flex flex-col items-center">
    <HeroSection />
    <IntroCardsSection />
    <div className="text-center mb-20">
      <CTAButton to="/quiz">Take the Quiz Now</CTAButton>
    </div>
    <WhyUnderstandingSection />
    <FourDimensionsSection />
    <div className="text-center mb-20">
      <CTAButton to="/quiz">Discover My Communication Style</CTAButton>
    </div>
    <FourStylesSection />
    <FinalCTASection />
  </div>
);

export default LandingPage;
