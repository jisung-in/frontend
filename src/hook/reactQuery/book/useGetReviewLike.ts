import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetReviewLike = () => {
  return useQuery<number[]>({
    queryKey: ["likes"],
    queryFn: () =>
      axiosInstance.get(`/v1/reviews/likes`).then((data) => data.data),
    throwOnError: true,
  });
};
