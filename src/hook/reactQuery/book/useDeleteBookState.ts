import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteBookState = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      axiosInstance.delete(`/v1/user-libraries/${id}`),
    onSuccess: (_, id) =>
      queryClient.invalidateQueries({ queryKey: ["book", "state", id] }),
  });
};
