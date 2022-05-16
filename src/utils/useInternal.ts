import { useEffect, useLayoutEffect, useRef } from "react";

function useInternal(callback: () => void, delay: any | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    const id = setInterval(() => savedCallback.current(), delay);
    if (!delay && delay !== 0) {
      return;
    }

    return () => clearInterval(id);
  }, [delay]);
}

export default useInternal;
