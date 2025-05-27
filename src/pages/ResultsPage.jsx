import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const styleDescriptions = {
  yellow: 'You are decisive, direct, and bold in your communication. You value clarity and action.',
  red: 'You are expressive, energetic, and persuasive. You bring enthusiasm and emotion to your interactions.',
  green: 'You are supportive, patient, and attentive. You value connection and understanding.',
  blue: 'You are precise, controlled, and analytical. You focus on details and consistency.',
};

const colorBorder = {
  yellow: 'border-t-8 border-yellow-400',
  red: 'border-t-8 border-red-400',
  green: 'border-t-8 border-green-400',
  blue: 'border-t-8 border-blue-400',
};

const colorText = {
  yellow: 'text-yellow-600',
  red: 'text-red-700',
  green: 'text-green-700',
  blue: 'text-blue-700',
};

function getScores(answers) {
  const scores = { yellow: 0, red: 0, green: 0, blue: 0 };
  Object.keys(answers).forEach((key) => {
    if (answers[key]) {
      let [, color] = key.split('|');
      if (color === 'orange') color = 'yellow';
      if (scores[color] !== undefined) scores[color]++;
    }
  });
  return scores;
}

const ResultsPage = ({ onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};
  const scores = getScores(answers);
  const maxScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter((style) => scores[style] === maxScore && maxScore > 0);

  useEffect(() => {
    if (winners.length > 0) {
      localStorage.setItem('quizResults', JSON.stringify({ answers, scores, winners }));
    }
  }, [answers, scores, winners]);

  const handleRetake = () => {
    localStorage.removeItem('quizResults');
    navigate('/quiz');
  };

  return (
    <div className="py-12 min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">My Results</h2>
      <div className="w-full max-w-3xl mx-auto">
        {winners.length === 0 ? (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-2xl text-yellow-800 text-center mb-8 text-2xl font-semibold shadow-xl backdrop-blur-md">
            <p>No answers selected.</p>
            <p className="text-lg mt-2">Please go back and complete the quiz.</p>
          </div>
        ) : (
          <div className={`rounded-2xl shadow-xl bg-white/80 backdrop-blur-md p-10 mb-8 ${colorBorder[winners[0]]} transition-all`}>
            <h3 className={`text-3xl font-bold mb-4 capitalize ${colorText[winners[0]]}`}>{winners.length > 1 ? 'Mixed Style' : winners[0]}</h3>
            <div className="mb-4 text-xl text-gray-700">
              {winners.map((style) => (
                <div key={style} className="mb-2">
                  <span className={`font-semibold ${colorText[style]}`}>{styleDescriptions[style]}</span>
                  <span className="ml-2 text-gray-500">(Score: {scores[style]})</span>
                </div>
              ))}
            </div>
            {winners.length > 1 && (
              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-xl text-gray-800 text-center mb-4">
                <p className="font-semibold text-xl">You have a mixed communication style!</p>
                <p className="text-lg">Multiple styles scored equally high. This means you flexibly use different communication approaches depending on the situation.</p>
              </div>
            )}
            <div className="text-center mt-8">
              <button
                onClick={handleRetake}
                className="bg-yellow-500 text-white px-16 py-7 rounded-2xl shadow-lg hover:bg-yellow-600 transition text-3xl font-extrabold"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;