import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCommentLike = (commentId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => axiosInstance.post(`/v1/comments/${commentId}/likes`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", "like", commentId],
      });
    },
  });
};
