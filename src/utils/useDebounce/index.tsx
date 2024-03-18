import { useRef, useCallback } from "react";

export const useDebounce = <T,>(callback: (args: T) => void, delay: number) => {
  const timeoutRef = useRef<number | null>(null);

  return useCallback(
    (args: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        callback(args);
      }, delay);
    },
    [callback, delay]
  );
};
