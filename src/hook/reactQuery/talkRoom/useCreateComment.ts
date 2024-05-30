import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type CommentRequest = {
  content: string;
  talkRoomId: string;
  imageUrls?: string[];
};

type CommentResponse = {
  content: string;
  userName: string;
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: CommentRequest) =>
      axiosInstance.post<CommentResponse>(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/talk-rooms/${request.talkRoomId}/comments`,
        request,
      ),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["talkRoom", "comment"] }),
  });
};
