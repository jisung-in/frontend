import axiosInstance from "@/app/api/requestApi";
import { QueryFunction, useQuery, useQueryClient } from "@tanstack/react-query";

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
    queryKey: ["talk-room", "first"],
    queryFn: () =>
      axiosInstance
        .get(
          `/v1/talk-rooms?page=${page}&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
        )
        .then(({ data }) => data),
    throwOnError: true,
  });
};

export const usePrefetchRooms: QueryFunction<
  any,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/talk-rooms?page=1&size=4&order=recommended`,
    {
      next: {
        tags: ["talk-room", "first"],
      },
      cache: "no-store",
    },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
