import { StyleKey } from './data/assessment';

export function getStylePercentage(scores: Record<StyleKey, number>, style: StyleKey): number {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  if (!total) return 0;
  return Math.round((scores[style] / total) * 100);
}

export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getWinners(scores: Record<StyleKey, number>): StyleKey[] {
  const maxScore = Math.max(...Object.values(scores));
  if (!maxScore) return [];
  return (Object.keys(scores) as StyleKey[]).filter((style) => scores[style] === maxScore && maxScore > 0);
}

export function getScores(answers: string[] | Record<string, unknown>): Record<StyleKey, number> {
  const scores: Record<StyleKey, number> = { yellow: 0, red: 0, green: 0, blue: 0 };
  const countColors = (key: string) => {
    let [, color] = key.split('|');
    if (color in scores) scores[color as StyleKey]!++;
  };
  if (Array.isArray(answers)) {
    answers.forEach(countColors);
  } else if (typeof answers === 'object' && answers !== null) {
    Object.keys(answers).forEach(countColors);
  }
  return scores;
}
