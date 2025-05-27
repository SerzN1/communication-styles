import BlueCTASection from "../components/BlueCTASection";
import FinalCTASection from "../components/FinalCTASection";
import FourDimensionsSection from "../components/FourDimensionsSection";
import FourStylesSection from "../components/FourStylesSection";
import HeroSection from "../components/HeroSection";
import IntroCardsSection from "../components/IntroCardsSection";
import WhyUnderstandingSection from "../components/WhyUnderstandingSection";

const LandingPage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center">
    <HeroSection />
    <IntroCardsSection />
    <BlueCTASection />
    <WhyUnderstandingSection />
    <FourStylesSection />
    <FinalCTASection />
    <FourDimensionsSection />
  </div>
);

export default LandingPage;
