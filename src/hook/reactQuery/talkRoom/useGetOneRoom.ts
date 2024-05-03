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
  bookName: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  createTime: number[];
  images: string[];
  likeTalkRoom: boolean;
};

export const useGetOneRoom = ({ talkRoomId }: TalkRoomRequest) => {
  return useQuery({
    queryKey: ["talkRoom", talkRoomId],
    queryFn: () =>
      axiosInstance
        .get<TalkRoomResponse>(`/v1/talk-room/${talkRoomId}`)
        .then((data) => data.data),
    throwOnError: true,
  });
};
