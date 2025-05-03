import { animate, ValueAnimationTransition } from "framer-motion";
import { useCallback, useRef } from "react";

interface ScrollOptions extends ValueAnimationTransition {
  offset?: number;
}

export function useScrollTo() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((options: ScrollOptions = {}) => {
    if (!ref.current) return;

    const { offset = 0, ...animationOptions } = options;
    const defaultOptions: ValueAnimationTransition = {
      type: "spring",
      bounce: 0,
      duration: 0.6,
    };

    const targetPosition = ref.current.offsetTop - offset;

    animate(window.scrollY, targetPosition, {
      ...defaultOptions,
      ...animationOptions,
      onUpdate: (latest) => window.scrollTo({ top: latest }),
    });
  }, []);

  return [ref, scrollTo] as const;
}
