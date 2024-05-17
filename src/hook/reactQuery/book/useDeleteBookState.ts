import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBookState = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => axiosInstance.delete(`/v1/user-libraries/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["book", "state", id] }),
  });
};
