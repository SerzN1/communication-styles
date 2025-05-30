import { Card, CTA } from '../toolkit';
import Highlights from './Highlights';

const FinalCTASection = () => (
  <section className="w-full max-w-3xl mx-auto text-center">
    <Card className="md:p-10 border-4 border-blue-500">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Discover Your Communication Style?</h3>
      <p className="text-2xl text-gray-600 mb-6">
        Take our comprehensive assessment and unlock insights about how you naturally communicate.
      </p>
      <Highlights />
      <CTA className="!mb-0">Begin Assessment</CTA>
    </Card>
  </section>
);

export default FinalCTASection;
