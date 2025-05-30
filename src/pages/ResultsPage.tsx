import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BreakdownTable from '../components/results/BreakdownTable';
import { formatMultiWinnersText, formatSingleWinnerText, getScores, getWinners } from '../components/results/utils';
import { Card, CardTitle, H1 } from '../components/toolkit';
import { multiWinnersInfo, styleInfo, StyleKey, styleMeta } from '../data/assessment';
import { useScrollToTop } from '../hooks';

function NoWinnersCard({ onGoToAssessment }: { onGoToAssessment: () => void }) {
  return (
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
}

function SingleWinnerCard({ winner }: { winner: StyleKey }) {
  const { icon, color, label } = styleMeta[winner] || {};
  const { description, strengths, blindSpots, tips, recommendation, selfView, othersView } = styleInfo[winner] || {};
  return (
    <div className="text-center mb-12">
      <H1 className="mb-12">
        <span className="block text-7xl mb-12">
          <i className={icon}></i>
        </span>
        Your Dominant Style: <span className={color}>{label}</span>
      </H1>
      <p className="mt-3 max-w-2xl mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        {description}
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
        <Card>
          <CardTitle>
            <i className="fas fa-thumbs-up text-green-500 mr-2"></i>Strengths
          </CardTitle>
          <ul className="space-y-2 text-gray-600">
            {strengths.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle>
            <i className="fas fa-eye-slash text-yellow-500 mr-2"></i>Blind Spots
          </CardTitle>
          <ul className="space-y-2 text-gray-600">
            {blindSpots.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </Card>
        <Card className="!bg-gray-50">
          <CardTitle>
            <i className="fas fa-user text-gray-500 mr-2"></i>How you see yourself
          </CardTitle>
          <p className="text-gray-700">{selfView}</p>
        </Card>
        <Card className="!bg-gray-50">
          <CardTitle>
            <i className="fas fa-users text-gray-500 mr-2"></i>How others may see you
          </CardTitle>
          <p className="text-gray-700">{othersView}</p>
        </Card>
        <Card className="!bg-blue-50">
          <CardTitle>
            <i className="fas fa-lightbulb text-blue-400 mr-2"></i>Tips for Effective Communication
          </CardTitle>
          <ul className="space-y-2 text-gray-700">
            {tips.map((tip, i) => (
              <li key={i}>• {tip}</li>
            ))}
          </ul>
        </Card>

        <Card className="!bg-yellow-50">
          <CardTitle>
            <i className="fas fa-user-md text-purple-500 mr-2"></i>Psychologist's Recommendation:
          </CardTitle>
          <p className="space-y-2 text-gray-700">{recommendation}</p>
        </Card>
      </div>
    </div>
  );
}

function MultiWinnersCard({ winners }: { winners: StyleKey[] }) {
  return (
    <div className="text-center mb-12">
      <H1 className="mb-12">
        <span className="block text-7xl mb-12">
          <i className="fas fa-layer-group text-blue-500"></i>
        </span>
        You Have a Balanced <span className="text-blue-600">Communication Style</span>
      </H1>
      <div className="mt-3 max-w-2xl mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        {multiWinnersInfo.intro.map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
        {winners.map((style) => (
          <Card key={style}>
            <CardTitle>
              <i className={styleMeta[style].icon + ' mr-2'}></i>
              When <span className={styleMeta[style].color}>{styleMeta[style].label}</span> Style Shines
            </CardTitle>
            <ul className="space-y-2 text-gray-600">
              {styleInfo[style].strengths.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
            <div className="mt-8">
              <CardTitle>
                <i className={styleMeta[style].icon + ' mr-2'}></i>
                How <span className={styleMeta[style].color}>{styleMeta[style].label}</span> might be perceived
              </CardTitle>
              <ul className="space-y-2 text-gray-600 mt-2">
                <li>{styleInfo[style].othersView}</li>
              </ul>
            </div>
          </Card>
        ))}
        <Card className="!bg-blue-50">
          <CardTitle>
            <i className="fas fa-sync-alt text-purple-500 mr-2"></i>Adapting Your Communication
          </CardTitle>
          <ul className="space-y-2 text-gray-700">
            {winners.map((style) => styleInfo[style].adapting.map((tip, i) => <li key={style + i}>• {tip}</li>))}
          </ul>
        </Card>
        <Card className="!bg-yellow-50">
          <CardTitle>
            <i className="fas fa-user-md text-purple-500 mr-2"></i>Psychologist's Recommendation:
          </CardTitle>
          <p className="space-y-2 text-gray-700">{multiWinnersInfo.recommendation}</p>
        </Card>
      </div>
    </div>
  );
}

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
          <i className="fas fa-redo mr-2" aria-hidden="true"></i>
          <span className="inline sm:hidden">Retry</span>
          <span className="hidden sm:inline">Retake Assessment</span>
        </button>
        <button
          onClick={downloadResults}
          className="px-6 py-3 border bg-gray-100 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-500 transition duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-full sm:w-auto"
          aria-label="Download Results as Text File"
          type="button"
        >
          <i className="fas fa-download mr-2" aria-hidden="true"></i>
          <span className="inline sm:hidden">Download</span>
          <span className="hidden sm:inline">Download Results</span>
        </button>
      </div>
    </section>
  );
};

export default ResultsPage;
