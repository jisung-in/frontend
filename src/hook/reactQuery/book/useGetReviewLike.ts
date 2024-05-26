import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type ReviewIds = {
  reviewIds: number[] | [];
};

export const useGetReviewLike = () => {
  return useQuery<ReviewIds>({
    queryKey: ["review", "likes"],
    queryFn: () =>
      axiosInstance.get(`/v1/reviews/likes`).then((data) => data.data),
    throwOnError: true,
  });
};
