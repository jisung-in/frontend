import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCommentLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentId: number) =>
      axiosInstance.delete(`/v1/comments/${commentId}/likes`),
    onSuccess: (_, commentId) => {
      queryClient.invalidateQueries({
        queryKey: ["talkroom", "like", commentId],
      });
    },
  });
};
