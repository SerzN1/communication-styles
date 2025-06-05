import { FunctionalComponent } from 'preact';
import { Card, CardTitle } from '../../components/toolkit';
import { styleMeta } from '../../data/assessment';
import type { StyleKey } from '../../types';
import { getStylePercentage } from '../../utils';

interface BreakdownTableProps {
  scores: Record<StyleKey, number>;
}

const BreakdownTable: FunctionalComponent<BreakdownTableProps> = ({ scores }) => (
  <Card>
    <CardTitle>Your Results Breakdown</CardTitle>
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
          {(Object.keys(scores) as StyleKey[])
            .sort((a, b) => scores[b] - scores[a])
            .map((style) => (
              <tr key={style}>
                <td className={`py-3 px-4 capitalize font-semibold ${styleMeta[style].color}`}>
                  {styleMeta[style].name}
                </td>
                <td className="py-3 px-4">{scores[style]}</td>
                <td className="py-3 px-4">{getStylePercentage(scores, style)}%</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </Card>
);

export default BreakdownTable;
