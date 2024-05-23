import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteStarRating = (reviewId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => axiosInstance.delete(`/v1/reviews/${reviewId}`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["book", "state", reviewId] }),
  });
};
