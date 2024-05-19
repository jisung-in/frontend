import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomResponse = {
  response: {
    queryResponse: [
      {
        commentId: number;
        userName: string;
        profileImage: string;
        content: string;
        commentLikeCount: number;
        commentImages: [];
        createTime: string;
      },
    ];
    totalCount: number;
    size: number;
  };
  userLikeCommentIds: number[];
};

export const useGetComments = (talkRoomId: number) => {
  return useQuery<TalkRoomResponse>({
    queryKey: ["talkRoom", "comment", talkRoomId],
    queryFn: () =>
      axiosInstance
        .get<any>(`/v1/talk-rooms/${talkRoomId}/comments`)
        .then((data) => data.data),
    throwOnError: true,
  });
};
