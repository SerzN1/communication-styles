import { useEffect, useMemo } from 'preact/hooks';
import { FaDownload, FaRotateRight } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import BreakdownTable from '../components/results/BreakdownTable';
import MultiWinnersCard from '../components/results/MultiWinnersCard';
import NoWinnersCard from '../components/results/NoWinnersCard';
import SingleWinnerCard from '../components/results/SingleWinnerCard';
import { formatMultiWinnersText, formatSingleWinnerText, getScores, getWinners } from '../components/results/utils';
import { useScrollToTop } from '../hooks';

const ResultsPage = () => {
  useScrollToTop();

  const location = useLocation();
  const navigate = useNavigate();

  const answers = useMemo(() => {
    if (location.state?.answers) return location.state.answers;
    const stored = localStorage.getItem('sn-assessmentResults');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return parsed.answers || {};
      } catch {
        return {};
      }
    }
    return {};
  }, [location.state]);

  const scores = getScores(answers);
  const winners = getWinners(scores);

  useEffect(() => {
    if (
      (!answers ||
        (Array.isArray(answers) && answers.length === 0) ||
        (typeof answers === 'object' && Object.keys(answers).length === 0)) &&
      winners.length === 0
    ) {
      localStorage.removeItem('sn-assessmentResults');
      navigate('/assessment', { replace: true });
    }
    if (winners.length > 0) {
      localStorage.setItem('sn-assessmentResults', JSON.stringify({ answers, scores, winners }));
    }
  }, [answers, scores, winners, navigate]);

  const handleRetake = () => {
    localStorage.removeItem('sn-assessmentResults');
    navigate('/assessment');
  };

  const handleGoToAssessment = () => {
    navigate('/assessment');
  };

  const downloadResults = () => {
    let text;
    if (winners.length === 1) {
      text = formatSingleWinnerText(winners[0], scores);
    } else {
      text = formatMultiWinnersText(winners, scores);
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'communication-style-results.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (winners.length === 0) {
    return <NoWinnersCard onGoToAssessment={handleGoToAssessment} />;
  }

  return (
    <section id="results" className="page">
      {winners.length === 1 ? <SingleWinnerCard winner={winners[0]} /> : <MultiWinnersCard winners={winners} />}

      {/* Breakdown */}
      <BreakdownTable scores={scores} />

      {/* Buttons */}
      <div className="flex justify-center mt-12 gap-4">
        <button
          onClick={handleRetake}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-full sm:w-auto"
          aria-label="Retake Assessment"
          type="button"
        >
          <FaRotateRight className="mr-2 inline align-baseline" aria-hidden="true" />
          <span className="inline sm:hidden">Retry</span>
          <span className="hidden sm:inline">Retake Assessment</span>
        </button>
        <button
          onClick={downloadResults}
          className="px-6 py-3 border bg-gray-100 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-500 transition duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-full sm:w-auto"
          aria-label="Download Results as Text File"
          type="button"
        >
          <FaDownload className="mr-2 inline align-baseline" aria-hidden="true" />
          <span className="inline sm:hidden">Download</span>
          <span className="hidden sm:inline">Download Results</span>
        </button>
      </div>
    </section>
  );
};

export default ResultsPage;
