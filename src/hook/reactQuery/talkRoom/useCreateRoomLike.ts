import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateRoomLike = (talkRoomId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => axiosInstance.post(`/v1/talk-rooms/${talkRoomId}/likes`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["talkroom", "like", talkRoomId],
      });
    },
  });
};
