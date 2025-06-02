import { FunctionalComponent } from 'preact';
import { FaUserMd } from 'react-icons/fa';
import { FaEyeSlash, FaHandFist, FaLightbulb, FaUser, FaUsers } from 'react-icons/fa6';
import { styleInfo, styleMeta } from '../../data/assessment';
import type { StyleKey } from '../../types';
import { Card, CardTitle, H1 } from '../toolkit';

interface SingleWinnerCardProps {
  winner: StyleKey;
}

const SingleWinnerCard: FunctionalComponent<SingleWinnerCardProps> = ({ winner }) => {
  const { icon, color, label } = styleMeta[winner] || {};
  const Icon = icon;
  const { description, strengths, blindSpots, tips, recommendation, selfView, othersView } = styleInfo[winner] || {};
  return (
    <div className="text-center mb-12">
      <H1 className="mb-12">
        <Icon className={`block text-7xl mb-12 m-auto ${color}`} />
        Your Dominant Style: <span className={color}>{label}</span>
      </H1>
      <p className="mt-3 max-w-2xl mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        {description}
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
        <Card>
          <CardTitle>
            <FaHandFist className="text-red-500 mr-2 inline align-baseline" />
            Strengths
          </CardTitle>
          <ul className="space-y-2 text-gray-600">
            {strengths.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle>
            <FaEyeSlash className="text-yellow-500 mr-2 inline align-baseline" />
            Blind Spots
          </CardTitle>
          <ul className="space-y-2 text-gray-600">
            {blindSpots.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </Card>
        <Card className="!bg-gray-50">
          <CardTitle>
            <FaUser className="text-green-500 mr-2 inline align-baseline" />
            How you see yourself
          </CardTitle>
          <p className="text-gray-700">{selfView}</p>
        </Card>
        <Card className="!bg-gray-50">
          <CardTitle>
            <FaUsers className="text-fuchsia-500 mr-2 inline align-baseline" />
            How others may see you
          </CardTitle>
          <p className="text-gray-700">{othersView}</p>
        </Card>
        <Card className="!bg-blue-50">
          <CardTitle>
            <FaLightbulb className="text-blue-400 mr-2 inline align-baseline" />
            Tips for Effective Communication
          </CardTitle>
          <ul className="space-y-2 text-gray-700">
            {tips.map((tip, i) => (
              <li key={i}>• {tip}</li>
            ))}
          </ul>
        </Card>
        <Card className="!bg-yellow-50">
          <CardTitle>
            <FaUserMd className="text-purple-500 mr-2 inline align-baseline" />
            Psychologist's Recommendation:
          </CardTitle>
          <p className="space-y-2 text-gray-700">{recommendation}</p>
        </Card>
      </div>
    </div>
  );
};

export default SingleWinnerCard;
