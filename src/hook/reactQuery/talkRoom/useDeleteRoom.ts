import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (talkRoomId: number) =>
      axiosInstance.delete(`/v1/talk-rooms/${talkRoomId}`),
    onSuccess: (_, talkRoomId) =>
      queryClient.invalidateQueries({ queryKey: ["talkRoom", talkRoomId] }),
  });
};
