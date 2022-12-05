import { useEffect } from 'react';

export const useInterval = (
  time: number,
  index: number,
  alphabet: string[],
  execution: () => void
) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (alphabet[index]) {
        execution();
        ++index;
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, execution, alphabet]);
};
