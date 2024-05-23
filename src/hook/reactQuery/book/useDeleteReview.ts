import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axiosInstance.delete(`/v1/reviews/${id}`),
    onSuccess: (_, id) =>
      queryClient.invalidateQueries({ queryKey: ["review", id] }),
  });
};
