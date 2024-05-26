import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateRoomLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (talkRoomId: number) =>
      axiosInstance.post(`/v1/talk-rooms/${talkRoomId}/likes`),
    onSuccess: (_, talkRoomId) => {
      queryClient.invalidateQueries({
        queryKey: ["talkroom", "like", talkRoomId],
      });
    },
  });
};
