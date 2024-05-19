import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteRoomLike = (talkRoomId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      axiosInstance.delete(`/v1/talk-rooms/${talkRoomId}/likes`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["talkroom", "like", talkRoomId],
      });
    },
  });
};
