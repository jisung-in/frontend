import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  isbn: string;
  page?: number;
  size?: number;
};

type TalkRoomInfo = {
  queryResponse: TalkRoom[];
  totalCount: number;
  size: number;
};

type TalkRoom = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookAuthor: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  registeredDateTime: string;
  creatorId: number;
};

export const useGetRelativeReooms = ({ isbn, page, size }: TalkRoomRequest) => {
  return useQuery<TalkRoomInfo>({
    queryKey: ["talkroom", "relative", isbn, (page = 1), (size = 10)],
    queryFn: () =>
      axiosInstance
        .get(`/v1/books/${isbn}/talk-rooms?page=${page}&size=${size}`)
        .then(({ data }) => data),
    throwOnError: true,
  });
};
