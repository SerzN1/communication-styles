import {
  FinalCTASection,
  FourDimensionsSection,
  FourStylesSection,
  HeroSection,
  IntroCardsSection,
  WhyUnderstandingSection,
} from '../components/landing';
import { CTA } from '../components/toolkit';
import { useScrollToTop } from '../hooks';

const LandingPage = () => {
  useScrollToTop();

  return (
    <div className="page">
      <HeroSection />
      <IntroCardsSection />
      <CTA>Take the Assessment Now</CTA>
      <WhyUnderstandingSection />
      <FourDimensionsSection />
      <CTA>Discover My Communication Style</CTA>
      <FourStylesSection />
      <FinalCTASection />
    </div>
  );
};

export default LandingPage;
