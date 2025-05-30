import { useEffect, useMemo, useState } from 'preact/hooks';
import { FaArrowLeft, FaArrowRight, FaCircleCheck, FaCommentDots, FaPaperPlane } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import AssessmentOption from '../components/assessment/AssessmentOption';
import { getStoredData } from '../components/assessment/utils';
import { Card, CardTitle, H1 } from '../components/toolkit';
import { assessementData, StyleKey, styleMeta } from '../data/assessment';
import { useScrollToTop } from '../hooks';
import { shuffleArray } from '../utils';

function scrollToAssessmentCard() {
  setTimeout(() => {
    const card = document.getElementById('assessment-card');
    (card ?? document.body).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
}

const AssessmentPage = () => {
  useScrollToTop();

  const storedData = getStoredData();
  const [mode, setMode] = useState(() => storedData.mode);
  const [step, setStep] = useState(() => storedData.step);
  const [answers, setAnswers] = useState(() => storedData.answers);
  const navigate = useNavigate();

  const total = assessementData.length;
  const percent = Math.round((step / total) * 100);
  const { category = '', description = '', options = [] } = assessementData[step] || {};
  const shuffledOptions = useMemo(() => shuffleArray(options), [options]);

  // Persist intermediate state
  useEffect(() => {
    if (mode === 'quiz') {
      localStorage.setItem('sn-assessmentIntermediate', JSON.stringify({ mode, step, answers: Array.from(answers) }));
    } else {
      localStorage.removeItem('sn-assessmentIntermediate');
    }
  }, [mode, step, answers]);

  const handleStart = () => {
    setMode('quiz');
    setStep(0);
    setAnswers(new Set());
  };

  const handleChange = (category: string, color: StyleKey, option: string) => {
    const key = `${category}|${color}|${option}`;
    setAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const handleNext = () => {
    setStep((s) => {
      const nextStep = Math.min(s + 1, total - 1);
      scrollToAssessmentCard();
      return nextStep;
    });
  };
  const handlePrev = () => {
    setStep((s) => {
      const prevStep = Math.max(0, s - 1);
      scrollToAssessmentCard();
      return prevStep;
    });
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (answers.size === 0) return;
    const resultObj = { answers: Array.from(answers) };
    localStorage.setItem('sn-assessmentResults', JSON.stringify(resultObj));
    localStorage.removeItem('sn-assessmentIntermediate');
    setMode('results');
    navigate('/results', { state: resultObj });
  };

  const handleRestart = () => {
    localStorage.removeItem('sn-assessmentResults');
    localStorage.removeItem('sn-assessmentIntermediate');
    setAnswers(new Set());
    setStep(0);
    setMode('quiz');
  };

  const handleShowResults = () => {
    const stored = localStorage.getItem('sn-assessmentResults');
    if (stored) {
      const parsed = JSON.parse(stored);
      navigate('/results', { state: { answers: parsed.answers } });
    }
  };

  return (
    <section id="assessment" className="page">
      <div className="text-center mb-8">
        <H1>
          Communication Style <span className="text-blue-600">Assessment</span>
        </H1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Answer these questions honestly to discover your dominant communication style.
        </p>
      </div>

      <Card className="max-w-3xl m-auto" id="assessment-card">
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">{mode === 'quiz' ? `${percent}%` : '0%'}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="progress-bar bg-blue-600 h-2.5 rounded-full"
              style={{ width: mode === 'quiz' ? `${percent}%` : '0%' }}
            ></div>
          </div>
        </div>

        {mode === 'results' ? (
          <div className="text-center py-8" id="restart-screen">
            <FaCircleCheck className="text-green-500 text-5xl mb-6 block mx-auto" />
            <CardTitle>You've already completed the assessment.</CardTitle>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">Would you like to start the assessment again?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition duration-300 cursor-pointer"
              >
                Start Assessment Again
              </button>
              <button
                onClick={handleShowResults}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
              >
                My Results
              </button>
            </div>
          </div>
        ) : mode === 'intro' ? (
          <div className="text-center py-8" id="intro-screen">
            <FaCommentDots className="text-blue-500 text-5xl mb-6 block mx-auto" />
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ready to Discover Your Communication Style?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              This assessment consists of {total} sections representing different communication dimentions. There are no
              right or wrong answers - just select the option that best describes your natural tendencies.
            </p>
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Start Assessment
            </button>
          </div>
        ) : (
          // Only show the current step's form, not all at once
          <form onSubmit={handleSubmit} id="assessment-form">
            <CardTitle>{category}</CardTitle>
            <p className="mb-10">{description}</p>
            <div className="space-y-3 -mx-2 sm:mx-0">
              {shuffledOptions.map((item) => {
                const { color, option } = item;
                const key = `${category}|${color}|${option}`;
                return (
                  <AssessmentOption
                    key={key}
                    id={key}
                    checked={answers.has(key)}
                    onChange={() => handleChange(category, color, option)}
                    color={styleMeta[color].color}
                    option={option}
                  />
                );
              })}
            </div>
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 0}
                className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-300 disabled:opacity-50 cursor-pointer"
              >
                <FaArrowLeft className="mr-2 inline align-text-top" /> Previous
              </button>
              {step < total - 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
                >
                  Next <FaArrowRight className="ml-2 inline align-text-top" />
                </button>
              )}
              {step === total - 1 && (
                <button
                  type="submit"
                  disabled={answers.size === 0}
                  className={`px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300 ${
                    answers.size === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  } cursor-pointer`}
                >
                  Submit <FaPaperPlane className="ml-2 inline align-text-top" />
                </button>
              )}
            </div>
          </form>
        )}
      </Card>
    </section>
  );
};

export default AssessmentPage;
