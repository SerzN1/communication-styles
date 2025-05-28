export function getStylePercentage(scores: Record<string, number>, style: string): number {
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

export function getWinners(scores: Record<string, number>): string[] {
  const maxScore = Math.max(...Object.values(scores));
  if (!maxScore) return [];
  return Object.keys(scores).filter((style) => scores[style] === maxScore && maxScore > 0);
}

export function getScores(answers: any): Record<string, number> {
  const scores: Record<string, number> = { yellow: 0, red: 0, green: 0, blue: 0 };
  const countColors = (key: string) => {
    let [, color] = key.split("|");
    if (scores[color] !== undefined) scores[color]++;
  };
  if (Array.isArray(answers)) {
    answers.forEach(countColors);
  } else if (typeof answers === "object" && answers !== null) {
    Object.keys(answers).forEach(countColors);
  }
  return scores;
}
