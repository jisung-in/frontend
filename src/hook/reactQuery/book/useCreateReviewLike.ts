import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateReviewLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reviewId: number) =>
      axiosInstance.post(`/v1/reviews/${reviewId}/likes`),
    onSuccess: (reviewId: number) =>
      queryClient.invalidateQueries({
        queryKey: ["review", "likes", reviewId],
      }),
  });
};
