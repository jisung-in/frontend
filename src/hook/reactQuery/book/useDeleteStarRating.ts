import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteStarRating = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reviewId: number) =>
      axiosInstance.delete(`/v1/ratings/${reviewId}`),
    onSuccess: (_, reviewId) =>
      queryClient.invalidateQueries({ queryKey: ["starRating", reviewId] }),
  });
};
