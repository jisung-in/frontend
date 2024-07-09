import axiosInstance from "@/app/api/requestApi";
import { useInfiniteQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  page?: number;
  size?: number;
  order?: string;
  search?: string;
  sortbydate?: "1m" | "1w" | "1d" | "";
};

type TalkRoomInfo = {
  content: TalkRoom[];
  hasContent: boolean;
  number: number;
  size: number;
  isFirst: boolean;
  isLast: boolean;
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

export const useGetRooms = ({
  size,
  order = "recent",
  search = "",
  sortbydate = "",
}: TalkRoomRequest) => {
  return useInfiniteQuery<TalkRoomInfo, Error>({
    queryKey: ["talkroom", size, order, search, sortbydate],
    queryFn: async ({ pageParam = 1 }) => {
      return axiosInstance
        .get(
          `/v1/talk-rooms?page=${pageParam}&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
        )
        .then(({ data }) => data);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.number + 1;
    },
    initialPageParam: 1,
    throwOnError: true,
  });
};
