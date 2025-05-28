import { Card, CTA } from "../toolkit";

const FinalCTASection = () => (
  <section className="w-full max-w-3xl mx-auto text-center mb-20 px-4">
    <Card className="md:p-10 border-4 border-blue-500">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Ready to Discover Your Communication Style?
      </h3>
      <p className="text-2xl text-gray-600 mb-6">
        Take our comprehensive assessment and unlock insights about how you
        naturally communicate.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10">
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-500">4</div>
          <div className="text-base text-gray-600 uppercase tracking-wider">
            Dimensions
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-500">95%</div>
          <div className="text-base text-gray-600 uppercase tracking-wider">
            Accuracy
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-500">5min</div>
          <div className="text-base text-gray-600 uppercase tracking-wider">
            Quick Assessment
          </div>
        </div>
      </div>
      <CTA to="/quiz">Begin Assessment</CTA>
    </Card>
  </section>
);

export default FinalCTASection;
