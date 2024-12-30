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
      commentImages: string[];
      registeredDateTime: string;
      creatorId: number;
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
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  });
};
