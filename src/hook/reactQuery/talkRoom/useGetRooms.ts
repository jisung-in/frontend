import axiosInstance from "@/app/api/requestApi";
import { useInfiniteQuery } from "@tanstack/react-query";

interface TalkRoomRequestProps {
  page?: number;
  size?: number;
  order?: string;
  search?: string;
  sortbydate?: "1m" | "1w" | "1d" | "";
}

interface TalkRoomInfoProps {
  content: TalkRoomProps[];
  hasContent: boolean;
  number: number;
  size: number;
  isFirst: boolean;
  isLast: boolean;
}

interface TalkRoomProps {
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
}

export const useGetRooms = ({
  size,
  order = "recent",
  search = "",
  sortbydate = "",
}: TalkRoomRequestProps) => {
  return useInfiniteQuery<TalkRoomInfoProps, Error>({
    queryKey: ["talkrooms", size, order, search, sortbydate],
    queryFn: async ({ pageParam = 1 }) => {
      return await axiosInstance
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
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  });
};
