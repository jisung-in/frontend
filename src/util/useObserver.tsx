import throttle from "lodash/throttle";
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
    const throttledOnIntersect = throttle(onIntersect, 1000);

    let observer: IntersectionObserver | undefined;

    if (target.current) {
      observer = new IntersectionObserver(throttledOnIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current);
    }

    return () => {
      if (observer && target.current) {
        observer.unobserve(target.current);
      }
      throttledOnIntersect.cancel();
    };
  }, [target, root, rootMargin, threshold, onIntersect]);
};

export default useObserver;
