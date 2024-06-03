import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetReviewCount = (isbn: string) => {
  return useQuery({
    queryKey: ["book", isbn],
    queryFn: () =>
      axiosInstance
        .get(`/v1/books/${isbn}/reviews/count`)
        .then((data) => data.data),
    throwOnError: true,
  });
};
