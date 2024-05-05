import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  page: number;
  size: number;
  order: "recent" | "recommend" | "recent-comment";
  search?: string;
  sortbydate?: string;
};

type TalkRoomInfo = {
  queryResponse: {
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
  };
  totalCount: number;
  size: number;
};

export const useGetRooms = ({
  page = 1,
  size = 10,
  order = "recent",
  search = "",
  sortbydate = "",
}: TalkRoomRequest) => {
  return useQuery<TalkRoomInfo>({
    queryKey: ["talkroom", "popular", page, size, order, search, sortbydate],
    queryFn: () =>
      axiosInstance
        .get(
          `/v1/talk-rooms?page=${page}&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
        )
        .then(({ data }) => data.response),
    throwOnError: true,
  });
};
