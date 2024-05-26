import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteRoomLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (talkRoomId: number) =>
      axiosInstance.delete(`/v1/talk-rooms/${talkRoomId}/likes`),
    onSuccess: (_, talkRoomId) => {
      queryClient.invalidateQueries({
        queryKey: ["talkroom", "like", talkRoomId],
      });
    },
  });
};
