import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  talkRoomId: string;
};

type TalkRoomResponse = {
  response: {
    queryResponse: [
      {
        commentId: number;
        userName: string;
        content: string;
        commentLikeCount: number;
        createTime: number[];
      },
    ];
    totalCount: number;
    size: number;
  };
  userLikeCommentIds: number[];
};

export const useGetComments = ({ talkRoomId }: TalkRoomRequest) => {
  return useQuery<TalkRoomResponse>({
    queryKey: ["talkRoom", "comment", talkRoomId],
    queryFn: () =>
      axiosInstance
        .get<any>(`v1/${talkRoomId}/comments`)
        .then((data) => data.data),
    throwOnError: true,
  });
};
