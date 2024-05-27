import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type ReviewResponse = {
  data: {
    content: [
      {
        reviewId: number;
        ratingId: number;
        username: string;
        profileImage: string;
        reviewContent: string;
        starRating: number;
        likeCount: number;
      },
    ];
    hasContent: boolean;
    number: number;
    size: number;
    isFirst: boolean;
    isLast: boolean;
  };
};

type RequestField = {
  isbn: string;
  page: number;
  size: number;
  order: string;
};

export const useGetReview = ({
  isbn,
  page = 1,
  size,
  order = "recent",
}: RequestField) => {
  return useQuery<ReviewResponse>({
    queryKey: ["bookEvaluationUser"],
    queryFn: () =>
      axiosInstance
        .get(
          `/v1/books/${isbn}/reviews?page=${page}&size=${size}&order=${order}`,
        )
        .then((data) => data),
    throwOnError: true,
  });
};
