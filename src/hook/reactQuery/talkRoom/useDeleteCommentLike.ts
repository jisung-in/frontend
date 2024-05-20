import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCommentLike = (commentId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => axiosInstance.delete(`/v1/comments/${commentId}/likes`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["talkroom", "like", commentId],
      });
    },
  });
};
