import type { FunctionComponent } from 'preact';
import { CTA } from '../toolkit';
import Highlights from './Highlights';

const HeroSection: FunctionComponent = () => (
  <section className="page max-w-5xl mx-auto active fade-in mb-6">
    <h1 className="text-center text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
      Discover Your <span className="text-blue-600 sm:text-nowrap">Communication Style</span>
    </h1>
    <p className="text-center mt-5 max-w-xl mx-auto text-xl text-gray-500">
      Understand how you communicate and how to effectively communicate for better relationships in business and in
      life.
    </p>
    <Highlights className="my-12" />
    <CTA className="!mb-0">Start the Assessment</CTA>
  </section>
);

export default HeroSection;
