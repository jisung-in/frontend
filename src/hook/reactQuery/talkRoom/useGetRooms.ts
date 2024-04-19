import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  page: number;
  size: number;
  order: "RECENT" | "RECOMMENDED";
  search?: string;
};

type TalkRoomResponse = {
  response: {
    queryResponse: TalkRoomInfo[];
    totalCount: number;
    size: number;
  };
  userLikeTalkRoomIds: null;
};

type TalkRoomInfo = {
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
};

export const useGetRooms = ({
  page,
  size,
  order,
  search = "",
}: TalkRoomRequest) => {
  return useQuery<any>({
    queryKey: ["talkRoom", search, order],
    queryFn: () =>
      axiosInstance.get<TalkRoomResponse>(
        `http://localhost:9090/v1/talk-rooms?page=${page}&size=${size}&order=${order}&search=${search}`,
      ),
    throwOnError: true,
  });
};
