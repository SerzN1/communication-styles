import { FaLayerGroup, FaRotate, FaUserDoctor } from 'react-icons/fa6';
import { multiWinnersInfo, styleInfo, StyleKey, styleMeta } from '../../data/assessment';
import { Card, CardTitle, H1 } from '../toolkit';

interface MultiWinnersCardProps {
  winners: StyleKey[];
}

const MultiWinnersCard = ({ winners }: MultiWinnersCardProps) => (
  <div className="text-center mb-12">
    <H1 className="mb-12">
      <FaLayerGroup className="block text-7xl mb-12 m-auto text-blue-500" />
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
      {winners.map((style) => {
        const { icon: Icon, label, color } = styleMeta[style];
        const { strengths, othersView } = styleInfo[style];

        <Card key={style}>
          <CardTitle>
            <Icon className={color + ' mr-2'} />
            When <span className={color}>{label}</span> Style Shines
          </CardTitle>
          <ul className="space-y-2 text-gray-600">
            {strengths.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
          <div className="mt-8">
            <CardTitle>
              <Icon className={color + ' mr-2'} />
              How <span className={color}>{label}</span> might be perceived
            </CardTitle>
            <ul className="space-y-2 text-gray-600 mt-2">
              <li>{othersView}</li>
            </ul>
          </div>
        </Card>;
      })}
      <Card className="!bg-blue-50">
        <CardTitle>
          <FaRotate className="text-purple-500 mr-2 inline" />
          Adapting Your Communication
        </CardTitle>
        <ul className="space-y-2 text-gray-700">
          {winners.map((style) => styleInfo[style].adapting.map((tip, i) => <li key={style + i}>• {tip}</li>))}
        </ul>
      </Card>
      <Card className="!bg-yellow-50">
        <CardTitle>
          <FaUserDoctor className="text-purple-500 mr-2 inline" />
          Psychologist's Recommendation:
        </CardTitle>
        <p className="space-y-2 text-gray-700">{multiWinnersInfo.recommendation}</p>
      </Card>
    </div>
  </div>
);

export default MultiWinnersCard;
