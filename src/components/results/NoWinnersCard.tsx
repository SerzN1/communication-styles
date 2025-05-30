import { H1 } from '../toolkit';

interface NoWinnersCardProps {
  onGoToAssessment: () => void;
}

const NoWinnersCard = ({ onGoToAssessment }: NoWinnersCardProps) => (
  <section id="results" className="page">
    <div className="text-center mb-12">
      <H1 className="mb-12">
        <span className="block text-7xl mb-12">
          <i className="fas fa-microscope text-orange-500"></i>
        </span>
        We cannot find your assessment results <span className="text-blue-600 text-nowrap"> :(</span>
      </H1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Please complete the assessment to see your communication style analysis.
      </p>
      <button
        onClick={onGoToAssessment}
        className="mt-20 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        <i className="fas fa-arrow-right mr-2"></i> Go to Assessment
      </button>
    </div>
  </section>
);

export default NoWinnersCard;
