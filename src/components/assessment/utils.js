export function getStoredData() {
  const stored = localStorage.getItem('quizIntermediate');
  if (stored) {
    try {
      const { mode, step, answers } = JSON.parse(stored);
      return {
        mode: mode || 'intro',
        step: step ?? 0,
        answers: new Set(answers || []),
      };
    } catch {
      return { mode: 'intro', step: 0, answers: new Set() };
    }
  }
  if (localStorage.getItem('quizResults')) {
    return { mode: 'results', step: 0, answers: new Set() };
  }
  return { mode: 'intro', step: 0, answers: new Set() };
}
