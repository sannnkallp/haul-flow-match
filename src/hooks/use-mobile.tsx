
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// Add the useIsMobile hook that's being imported in other files
export function useIsMobile(): boolean {
  // Standard mobile breakpoint at 768px (md in Tailwind)
  return useMediaQuery('(max-width: 767px)');
}
