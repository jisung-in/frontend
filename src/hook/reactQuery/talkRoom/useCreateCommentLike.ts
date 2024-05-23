import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateCommentLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentId: number) =>
      axiosInstance.post(`/v1/comments/${commentId}/likes`),
    onSuccess: (_, commentId) => {
      queryClient.invalidateQueries({
        queryKey: ["comment", "like", commentId],
      });
    },
  });
};
