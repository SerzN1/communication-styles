export function getStylePercentage(scores: Record<string, number>, style: string): number {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  if (!total) return 0;
  return Math.round((scores[style] / total) * 100);
}

export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
