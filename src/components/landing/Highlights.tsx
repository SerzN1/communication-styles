import type { FunctionComponent } from 'preact';

interface HighlightsProps {
  className?: string;
}

const Highlights: FunctionComponent<HighlightsProps> = ({ className = '' }) => (
  <div className={`flex justify-center gap-8 my-8 sm:my-12 ${className}`}>
    <div className="text-center">
      <div className="text-2xl sm:text-4xl font-bold text-yellow-500">4</div>
      <div className="text-xs sm:text-base text-gray-600 uppercase tracking-wider">Dimensions</div>
    </div>
    <div className="text-center">
      <div className="text-2xl sm:text-4xl font-bold text-blue-500">95%</div>
      <div className="text-xs sm:text-base text-gray-600 uppercase tracking-wider">Accuracy</div>
    </div>
    <div className="text-center">
      <div className="text-2xl sm:text-4xl font-bold text-green-600 text-nowrap">5 min</div>
      <div className="text-xs sm:text-base text-gray-600 uppercase tracking-wider">Quick Assessment</div>
    </div>
  </div>
);

export default Highlights;
