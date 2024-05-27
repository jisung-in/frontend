import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteReviewLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reviewId: number) =>
      axiosInstance.delete(`/v1/reviews/${reviewId}/likes`),
    onSuccess: (_, reviewId) =>
      queryClient.invalidateQueries({
        queryKey: ["review", "likes", reviewId],
      }),
  });
};
