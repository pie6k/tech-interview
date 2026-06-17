import { useEffect, useState } from "react";

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Will run callback every random interval between min and max
 */
function createInterval(min: number, max: number, callback: () => void) {
  let currentInterval: number | null = null;
  function runNext() {
    currentInterval = getRandomInt(min, max);
    setTimeout(runNext, currentInterval);
    callback();
  }

  runNext();
  return () => {
    if (currentInterval) {
      clearTimeout(currentInterval);
    }
  };
}

export function useRerenderInterval(min: number, max: number) {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    return createInterval(min, max, () => {
      setRenderCount((prev) => prev + 1);
    });
  }, [min, max]);

  return renderCount;
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
