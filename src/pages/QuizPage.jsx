import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data/quiz';

const categoryDescriptions = {
  Verbal: 'Verbal is connected to what you say, the way you express yourself. It is how we talk, write, listen, and read.',
  Paraverbal: 'Paraverbal is how you say things, the way you talk. It is about tone, speed, and inflection.',
  'Body language': 'Body language is how you express yourself without words. Examples are eye contact, body contact, movements, and facial expressions.',
  'Personal space': 'Personal space is how you like the space around you – either sitting at your desk, working on the floor, or talking with others.',
};

const styleColors = {
  yellow: 'text-yellow-600',
  red: 'text-red-600',
  green: 'text-green-600',
  blue: 'text-blue-600',
  orange: 'text-yellow-600', // for legacy data
};

const styleLabels = {
  yellow: 'Yellow',
  red: 'Red',
  green: 'Green',
  blue: 'Blue',
  orange: 'Yellow',
};

const styleAccent = {
  yellow: '#facc15',
  red: '#ef4444',
  green: '#22c55e',
  blue: '#3b82f6',
  orange: '#facc15',
};

const QuizPage = ({ onNavigate }) => {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('quizResults');
  }, []);

  const currentCategory = quizData[step];

  const handleChange = (category, color, option) => {
    setAnswers((prev) => {
      const key = `${category}|${color}|${option}`;
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, quizData.length - 1));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('quizResults', JSON.stringify({ answers }));
    navigate('/results', { state: { answers } });
  };

  return (
    <div className="py-10 flex flex-col">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">Communication Style Quiz</h2>
      <div className="max-w-2xl mx-auto mb-8">
        <h3 className="text-3xl font-bold mb-2 text-gray-900">{currentCategory.category}</h3>
        <p className="text-xl text-gray-700">{categoryDescriptions[currentCategory.category]}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex-1">
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl bg-white text-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="py-4 px-2 font-bold">Style</th>
                <th className="py-4 px-2 font-bold">Option</th>
                <th className="py-4 px-2 font-bold">Select</th>
              </tr>
            </thead>
            <tbody>
              {currentCategory.styles.flatMap((style) =>
                style.options.map((option, idx) => {
                  const color = style.color === 'orange' ? 'yellow' : style.color;
                  const key = `${currentCategory.category}|${style.color}|${option}`;
                  return (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className={`py-3 px-2 font-semibold ${styleColors[color]}`}>{styleLabels[color]}</td>
                      <td className="py-3 px-2 text-gray-700">{option}</td>
                      <td className="py-3 px-2 text-center">
                        <input
                          type="checkbox"
                          checked={!!answers[key]}
                          onChange={() => handleChange(currentCategory.category, style.color, option)}
                          className={`w-7 h-7 rounded border-gray-300 focus:ring-2 transition ${styleColors[color]}`}
                          style={{ accentColor: styleAccent[color] }}
                        />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-12 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={handlePrev}
            disabled={step === 0}
            className={`px-16 py-7 rounded-2xl text-3xl font-extrabold shadow transition ${step === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-900'}`}
          >
            Previous
          </button>
          {step < quizData.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-yellow-500 text-white px-16 py-7 rounded-2xl text-3xl font-extrabold shadow-lg hover:bg-yellow-600 transition"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-yellow-500 text-white px-16 py-7 rounded-2xl text-3xl font-extrabold shadow-lg hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuizPage;