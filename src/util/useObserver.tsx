import { MutableRefObject, useEffect } from "react";

interface UseObserverProps {
  target: MutableRefObject<Element | null>;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect: IntersectionObserverCallback;
}

const useObserver = ({
  target,
  root = null,
  rootMargin = "0px 0px -100px 0px",
  threshold = 1.0,
  onIntersect,
}: UseObserverProps) => {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, root, rootMargin, threshold, onIntersect]);
};

export default useObserver;
