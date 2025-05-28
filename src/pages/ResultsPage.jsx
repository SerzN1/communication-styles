import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BreakdownTable from "../components/results/BreakdownTable";
import { Card, CardTitle, H1 } from "../components/toolkit";
import { styleInfo, styleMeta } from "../data/quiz";
import { getScores, getWinners } from "../utils";

function NoWinnersCard({ onGoToQuiz }) {
  return (
    <section
      id="results"
      className="page"
    >
      <div className="text-center mb-12">
        <H1 className="mb-12">
          <span className="block text-7xl mb-12">
            <i className="fas fa-microscope text-orange-500"></i>
          </span>
          We cannot find your quiz results{" "}
          <span className="text-blue-600 text-nowrap"> :(</span>
        </H1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Please complete the quiz to see your communication style analysis.
        </p>
        <button
          onClick={onGoToQuiz}
          className="mt-20 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          <i className="fas fa-arrow-right mr-2"></i> Go to Quiz
        </button>
      </div>
    </section>
  );
}

function SingleWinnerCard({ winner }) {
  const { icon, color, label } = styleMeta[winner] || {};
  const { description, strengths, blindSpots, tips } = styleInfo[winner] || {};
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
            <i className="fas fa-eye-slash text-yellow-500 mr-2"></i>Potential Blind Spots
          </CardTitle>
          <ul className="space-y-2 text-gray-600">
            {blindSpots.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
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
          <p className="space-y-2 text-gray-700">
            Embrace your strengths and be mindful of your blind spots.
            Regularly seek feedback from trusted colleagues or friends to ensure your communication is both effective and empathetic.
            Remember, the most impactful communicators are those who adapt and grow.
          </p>
        </Card>
      </div>
    </div>
  );
}

function MultiWinnersCard({ winners }) {
  return (
    <div className="text-center mb-12">
      <H1 className="mb-12">
        <span className="block text-7xl mb-12">
          <i className="fas fa-layer-group text-blue-500"></i>
        </span>
        You Have a Balanced{" "}
        <span className="text-blue-600">Communication Style</span>
      </H1>
      <div className="mt-3 max-w-2xl mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        You have a flexible communication profile and can shift between styles as needed.
        This means you can adapt your approach based on the situation and audience.
        This versatility is a strength in diverse teams and dynamic environments. People may perceive you as adaptable, diplomatic, and able to connect with a wide range of personalities.
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
        {winners.map((style) => (
          <Card key={style}>
            <CardTitle>
              <i className={styleMeta[style].icon + " mr-2"}></i>
              When <span className={styleMeta[style].color}>{styleMeta[style].label}</span> Style Shines
            </CardTitle>
            <ul className="space-y-2 text-gray-600">
              {styleInfo[style].strengths.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
            <div className="mt-8">
              <CardTitle>
                <i className={styleMeta[style].icon + " mr-2"}></i>
                How <span className={styleMeta[style].color}>{styleMeta[style].label}</span> might be perceived
              </CardTitle>
              <ul className="space-y-2 text-gray-600 mt-2">
                <li>{styleInfo[style].othersView}</li>
              </ul>
            </div>
          </Card>
        ))}
        <Card className="bg-blue-50">
          <CardTitle>
            <i className="fas fa-sync-alt text-purple-500 mr-2"></i>Adapting Your Communication
          </CardTitle>
          <ul className="space-y-2 text-gray-700">
            {winners.map((style) =>
              styleInfo[style].adapting.map((tip, i) => (
                <li key={style + i}>• {tip}</li>
              ))
            )}
          </ul>
        </Card>
        <Card className="!bg-yellow-50">
          <CardTitle>
            <i className="fas fa-user-md text-purple-500 mr-2"></i>Psychologist's Recommendation:
          </CardTitle>
          <p className="space-y-2 text-gray-700">
            As someone with a balanced communication style, you have a unique ability to adapt and connect with many types of people. However, others may sometimes be unsure of your "true" style or intentions. To foster trust and clarity, consider sharing your thought process and motivations openly, especially when switching between styles. This transparency helps others feel secure and lets your adaptability shine as a strength, not a source of confusion.
          </p>
        </Card>
      </div>
    </div>
  );
}

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const answers = useMemo(() => {
    if (location.state?.answers) return location.state.answers;
    const stored = localStorage.getItem("quizResults");
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
        (typeof answers === "object" && Object.keys(answers).length === 0)) &&
      winners.length === 0
    ) {
      localStorage.removeItem("quizResults");
      navigate("/quiz", { replace: true });
    }
    if (winners.length > 0) {
      localStorage.setItem(
        "quizResults",
        JSON.stringify({ answers, scores, winners })
      );
    }
  }, [answers, scores, winners, navigate]);

  const handleRetake = () => {
    localStorage.removeItem("quizResults");
    navigate("/quiz");
  };

  const handleGoToQuiz = () => {
    navigate("/quiz");
  };

  const downloadResults = () => {
    const blob = new Blob(
      [JSON.stringify({ answers, scores, winners }, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "communication-style-results.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (winners.length === 0) {
    return <NoWinnersCard onGoToQuiz={handleGoToQuiz} />;
  }

  return (
    <section id="results" className="page">
      {winners.length === 1 ? (
        <SingleWinnerCard winner={winners[0]} />
      ) : (
        <MultiWinnersCard winners={winners} />
      )}

      {/* Breakdown */}
      <BreakdownTable scores={scores} />

      {/* Buttons */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleRetake}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 mr-4 cursor-pointer"
        >
          <i className="fas fa-redo mr-2"></i> Retake Quiz
        </button>
        <button
          onClick={downloadResults}
          className="px-6 py-3 border bg-gray-100 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-500 transition duration-300 cursor-pointer"
        >
          <i className="fas fa-download mr-2"></i> Download Results
        </button>
      </div>
    </section>
  );
};

export default ResultsPage;
