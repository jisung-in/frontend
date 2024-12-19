import EvaluationService from "./EvaluationService";
import {
  EvaluationCountProps,
  EvaluationRequestProps,
} from "./EvaluationService.types";

export const EvaluationQueryOptions = {
  getEvaluation: ({ isbn, size, order }: EvaluationRequestProps) => ({
    queryKey: ["evaluation", { isbn, size, order }],
    queryFn: () =>
      EvaluationService.getEvaluation({
        isbn,
        size,
        order,
      }),
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  }),
  getEvaluationCount: ({ isbn }: EvaluationCountProps) => ({
    queryKey: ["evaluation-count", { isbn }],
    queryFn: () =>
      EvaluationService.getEvaluationCount({
        isbn,
      }),
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  }),
};
