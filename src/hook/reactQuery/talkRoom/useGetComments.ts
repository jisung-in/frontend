import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomResponse = {
  queryResponse: [
    {
      commentId: number;
      userName: string;
      profileImage: string;
      content: string;
      commentLikeCount: number;
      commentImages: [];
      registeredDateTime: string;
    },
  ];
  totalCount: number;
  size: number;
};

export const useGetComments = (talkRoomId: number) => {
  return useQuery<TalkRoomResponse>({
    queryKey: ["talkRoom", "comment", talkRoomId],
    queryFn: () =>
      axiosInstance
        .get(`/v1/talk-rooms/${talkRoomId}/comments`)
        .then((data) => data.data),
    throwOnError: true,
  });
};
