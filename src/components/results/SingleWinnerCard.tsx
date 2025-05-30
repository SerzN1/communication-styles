import { styleInfo, StyleKey, styleMeta } from '../../data/assessment';
import { Card, CardTitle, H1 } from '../toolkit';

interface SingleWinnerCardProps {
  winner: StyleKey;
}

const SingleWinnerCard = ({ winner }: SingleWinnerCardProps) => {
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
};

export default SingleWinnerCard;
