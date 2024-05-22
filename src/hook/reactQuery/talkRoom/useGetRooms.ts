import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  page: number;
  size: number;
  order: "recent" | "recommend" | "recent-comment";
  search?: string;
  sortbydate?: "1m" | "1w" | "1d" | "";
};

type TalkRoomInfo = {
  response: {
    queryResponse: TalkRoom[];
    totalCount: number;
    size: number;
  };
  userLikeTalkRoomIds: number[];
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
        .then(({ data }) => data),
    throwOnError: true,
  });
};
