import { useEffect } from 'preact/hooks';

export function useScrollToTop(): void {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
}
