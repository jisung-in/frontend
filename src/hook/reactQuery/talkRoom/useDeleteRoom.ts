import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type DeleteRequest = {
  talkRoomId: string;
};

export const useDeleteRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (talkRoomId: DeleteRequest) =>
      axiosInstance.delete(`/v1/talk-rooms?${talkRoomId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["talkRoom"] }),
  });
};
