import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, H1, H3 } from '../components/toolkit';
import { styleInfo, styleMeta } from '../data/quiz';
import { capitalize, getStylePercentage } from '../utils';

function getScores(answers) {
  const scores = { yellow: 0, red: 0, green: 0, blue: 0 };
  const countColors = (key) => {
    let [, color] = key.split('|');
    if (scores[color] !== undefined) scores[color]++;
  };
  if (Array.isArray(answers)) {
    answers.forEach(countColors);
  } else if (typeof answers === 'object' && answers !== null) {
    Object.keys(answers).forEach(countColors);
  }
  return scores;
}

function NoWinnersCard({ onGoToQuiz }) {
  return (
    <section id="results" className="page py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          We cannot find your quiz results <span className="text-blue-600"> :(</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Please complete the quiz to see your communication style analysis.
        </p>
      </div>
      <Card>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-2xl text-yellow-800 text-center mb-8 text-2xl font-semibold shadow-xl backdrop-blur-md">
          <p>No answers selected.</p>
          <p className="text-lg mt-2">Please go back and complete the quiz.</p>
          <button
            onClick={onGoToQuiz}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <i className="fas fa-arrow-right mr-2"></i> Go to Quiz
          </button>
        </div>
      </Card>
    </section>
  );
}

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const answers = useMemo(() => {
    if (location.state?.answers) return location.state.answers;
    const stored = localStorage.getItem('quizResults');
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
  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter((style) => scores[style] === maxScore && maxScore > 0);

  useEffect(() => {
    if (
      (!answers || (Array.isArray(answers) && answers.length === 0) || (typeof answers === 'object' && Object.keys(answers).length === 0))
      && winners.length === 0
    ) {
      localStorage.removeItem('quizResults');
      navigate('/quiz', { replace: true });
    }
    if (winners.length > 0) {
      localStorage.setItem('quizResults', JSON.stringify({ answers, scores, winners }));
    }
  }, [answers, scores, winners, navigate]);

  const handleRetake = () => {
    localStorage.removeItem('quizResults');
    navigate('/quiz');
  };

  const handleGoToQuiz = () => {
    navigate('/quiz');
  };

  const downloadResults = () => {
    const blob = new Blob([JSON.stringify({ answers, scores, winners }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "communication-style-results.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Winner detection and early return for no winners
  if (winners.length === 0) {
    return <NoWinnersCard onGoToQuiz={handleGoToQuiz} />;
  }

  return (
    <section id="results" className="page py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        {winners.length === 1 ? (
          <H1>
            Your Dominant Style: <span className={styleMeta[winners[0]]?.color || ""}>{capitalize(winners[0])}</span>
          </H1>
        ) : (
          <h1 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
            You Have a Balanced Communication Style
          </h1>
        )}
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Here's your personalized communication style analysis.
        </p>
      </div>

      {winners.length === 1 && (
        <Card>
          <div className="text-center mb-8">
            <div className="inline-flex p-6 rounded-full mb-4 text-6xl">
              <span>
                <i className={styleMeta[winners[0]].iconClass}></i>
              </span>
            </div>
            <h2
              className={`text-2xl font-bold mb-2 ${styleMeta[winners[0]]?.color || ""}`}
            >
              Your Dominant Style: {capitalize(winners[0])}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {styleInfo[winners[0]].description}
            </p>
          </div>
        </Card>
      )}

      {winners.length > 1 && (
        <Card>
          <div className="text-center mb-8">
            <div className="inline-flex p-6 rounded-full mb-4 text-6xl">
              <span><i className="fas fa-palette text-gray-500"></i></span>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600">
              You Have a Balanced Communication Style
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your results show equal dominance in multiple communication styles. This means you can adapt your approach based on the situation and audience.
            </p>
          </div>
        </Card>
      )}

      {winners.map((style) => (
        <Card key={style} className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <H3>
                <i className="fas fa-thumbs-up text-green-500 mr-2"></i>Strengths
              </H3>
              <ul className="space-y-2 text-gray-600">
                {styleInfo[style].strengths.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                <i className="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>Potential Blind Spots
              </h3>
              <ul className="space-y-2 text-gray-600">
                {styleInfo[style].blindSpots.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Tips */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              <i className="fas fa-lightbulb text-blue-400 mr-2"></i>Tips for Effective Communication
            </h3>
            <ul className="space-y-2 text-gray-700 bg-blue-50 p-4 rounded-lg">
              {styleInfo[style].tips.map((tip, i) => (
                <li key={i}>• {tip}</li>
              ))}
            </ul>
          </div>
          {/* Look */}
          <div className="mb-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-800">
                <i className="fas fa-user text-gray-500 mr-2"></i>How you see yourself as a communicator
              </h4>
              <p className="text-gray-700">{styleInfo[style].selfView}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-800">
                <i className="fas fa-users text-gray-500 mr-2"></i>How others may see your style
              </h4>
              <p className="text-gray-700">{styleInfo[style].othersView}</p>
            </div>
          </div>
          {/* Adapting */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              <i className="fas fa-sync-alt text-purple-500 mr-2"></i>Adapting Your Communication
            </h3>
            <Card className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg text-gray-700">
              <ul className="space-y-2">
                {styleInfo[style].adapting.map((tip, i) => (
                  <li key={i}>• {tip}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Card>
      ))}

      <Card className='mb-12'>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Your Full Results Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Style</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Score</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Object.keys(scores).map((style) => (
                <tr key={style}>
                  <td className={`py-3 px-4 capitalize font-semibold ${styleMeta[style].color}`}>
                    {style}
                  </td>
                  <td className="py-3 px-4">{scores[style]}</td>
                  <td className="py-3 px-4">{getStylePercentage(scores, style)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-center">
        <button
          onClick={handleRetake}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 mr-4"
        >
          <i className="fas fa-redo mr-2"></i> Retake Quiz
        </button>
        <button
          onClick={downloadResults}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-300"
        >
          <i className="fas fa-download mr-2"></i> Download Results
        </button>
      </div>

    </section>
  );
};

export default ResultsPage;