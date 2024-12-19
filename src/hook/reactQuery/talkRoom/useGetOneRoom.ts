import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  talkRoomId: number;
};

type TalkRoomResponse = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookIsbn: string;
  bookName: string;
  bookThumbnail: string;
  bookAuthor: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
  images: string[];
  creatorId: number;
};

export const useGetOneRoom = ({ talkRoomId }: TalkRoomRequest) => {
  return useQuery<TalkRoomResponse>({
    queryKey: ["talkRoom", talkRoomId],
    queryFn: () =>
      axiosInstance
        .get(`/v1/talk-rooms/${talkRoomId}`)
        .then((data) => data.data),
    throwOnError: true,
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  });
};
