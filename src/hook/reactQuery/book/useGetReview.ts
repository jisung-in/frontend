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
  });
};
