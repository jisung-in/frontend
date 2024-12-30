import { throttle } from "lodash";
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

    // 쓰로틀링을 적용하기 위한 함수
    const throttledOnIntersect = throttle(onIntersect, 500); // 데이터를 500ms 간격으로 호출

    if (target && target.current) {
      observer = new IntersectionObserver(throttledOnIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current);
    }

    return () => {
      observer && observer.disconnect();
      throttledOnIntersect.cancel(); // 쓰로틀링 취소
    };
  }, [target, root, rootMargin, threshold, onIntersect]);
};

export default useObserver;
