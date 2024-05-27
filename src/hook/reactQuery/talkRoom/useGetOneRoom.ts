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
  bookAuthor: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
  images: string[];
};

export const useGetOneRoom = ({ talkRoomId }: TalkRoomRequest) => {
  return useQuery<TalkRoomResponse>({
    queryKey: ["talkRoom", talkRoomId],
    queryFn: () =>
      axiosInstance
        .get(`/v1/talk-rooms/${talkRoomId}`)
        .then((data) => data.data),
    throwOnError: true,
  });
};
