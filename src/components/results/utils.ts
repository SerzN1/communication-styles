import { multiWinnersInfo, styleInfo, styleMeta } from '../../data/assessment';
import type { StyleKey } from '../../types';

export function formatSingleWinnerText(winner: StyleKey, scores: Record<string, number>): string {
  const meta = styleMeta[winner];
  const info = styleInfo[winner];
  return [
    `Your Merrill-Reid Social Style: ${meta.name}`,
    '',
    'Description:',
    info.description,
    '',
    'Strengths:',
    ...info.strengths.map((s: string) => `- ${s}`),
    '',
    'Blind Spots:',
    ...info.blindSpots.map((s: string) => `- ${s}`),
    '',
    'How you see yourself:',
    info.selfView,
    '',
    'How others may see you:',
    info.othersView,
    '',
    'Tips for Effective Communication:',
    ...info.tips.map((s: string) => `- ${s}`),
    '',
    "Psychologist's Recommendation:",
    info.recommendation,
    '',
    'Results Breakdown:',
    ...(Object.keys(scores) as StyleKey[])
      .sort((a, b) => scores[b] - scores[a])
      .map(
        (style) =>
          `${styleMeta[style].name}: ${scores[style]} (${
            scores[style] > 0 ? Math.round((scores[style] / Object.values(scores).reduce((a, b) => a + b, 0)) * 100) : 0
          }%)`,
      ),
  ].join('\n');
}

export function formatMultiWinnersText(winners: StyleKey[], scores: Record<string, number>): string {
  let text = ['You Have a Balanced Communication Style', '', ...multiWinnersInfo.intro, ''];
  winners.forEach((style) => {
    const meta = styleMeta[style];
    const info = styleInfo[style];
    text.push(
      `When ${meta.name} Style Shines:`,
      ...info.strengths.map((s: string) => `- ${s}`),
      '',
      `How ${meta.name} might be perceived:`,
      info.othersView,
      '',
      "Psychologist's Recommendation:",
      info.recommendation,
      '',
    );
  });
  text.push(
    'Adapting Your Communication:',
    ...winners.flatMap((style) => styleInfo[style].adapting.map((tip: string) => `- ${tip}`)),
    '',
    "General Psychologist's Recommendation:",
    multiWinnersInfo.recommendation,
    '',
    'Results Breakdown:',
    ...(Object.keys(scores) as StyleKey[])
      .sort((a, b) => scores[b] - scores[a])
      .map(
        (style) =>
          `${styleMeta[style].name}: ${scores[style]} (${
            scores[style] > 0 ? Math.round((scores[style] / Object.values(scores).reduce((a, b) => a + b, 0)) * 100) : 0
          }%)`,
      ),
  );
  return text.join('\n');
}

export function getStylePercentage(scores: Record<string, number>, style: string): number {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  if (!total) return 0;
  return Math.round((scores[style] / total) * 100);
}

export function getWinners(scores: Record<StyleKey, number>): StyleKey[] {
  const maxScore = Math.max(...Object.values(scores));
  if (!maxScore) return [];
  return (Object.keys(scores) as StyleKey[]).filter((style) => scores[style as StyleKey] === maxScore && maxScore > 0);
}

export function getScores(answers: string[] | Record<string, unknown>): Record<StyleKey, number> {
  const scores: Record<StyleKey, number> = { yellow: 0, red: 0, green: 0, blue: 0 };
  const countColors = (key: string) => {
    const [, color] = key.split('|');
    const c = color as StyleKey;
    if (scores[c] !== undefined) scores[c]++;
  };
  if (Array.isArray(answers)) {
    answers.forEach(countColors);
  }
  return scores;
}
