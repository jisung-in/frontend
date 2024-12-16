import axiosInstance from "@/app/api/requestApi";
import { useInfiniteQuery } from "@tanstack/react-query";

type ReviewPage = {
  content: {
    reviewId: number;
    ratingId: number;
    creatorId: number;
    username: string;
    profileImage: string;
    reviewContent: string;
    starRating: number;
    likeCount: number;
  }[];
  hasContent: boolean;
  number: number;
  size: number;
  isFirst: boolean;
  isLast: boolean;
};

type RequestField = {
  isbn: string;
  size: number;
  order: string;
};

export const useGetReview = ({
  isbn,
  size,
  order = "recent",
}: RequestField) => {
  return useInfiniteQuery<ReviewPage, Error>({
    queryKey: ["bookEvaluationUser", isbn],
    queryFn: async ({ pageParam = 1 }) => {
      return await axiosInstance
        .get(
          `/v1/books/${isbn}/reviews?page=${pageParam}&size=${size}&order=${order}`,
        )
        .then((response) => response.data);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.number + 1;
    },
    initialPageParam: 1,
    throwOnError: true,
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
    refetchOnWindowFocus: false, // 포커스 전환 시 리패칭 방지
    refetchOnMount: false, // 컴포넌트가 마운트될 때 리패칭 방지
  });
};
