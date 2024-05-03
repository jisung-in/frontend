import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type param = {
  page: number;
  size: number;
  order?: string;
  search?: string;
  sortbydate?: string;
};

type TalkRoomPopular = {
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
  registeredDateTime: number[];
};

export const useGetTalkRoomPopular = ({
  page = 1,
  size = 10,
  order = "recent",
  search = "",
  sortbydate = "",
}: param) => {
  return useQuery<TalkRoomPopular>({
    queryKey: ["talkroom", "popular"],
    queryFn: () =>
      axiosInstance
        .get(
          `/v1/talk-rooms?page=${page}&size=${size}&order=${order}&search=${search}&day=${sortbydate}`,
        )
        .then(({ data }) => data.response.queryResponse),
    throwOnError: true,
  });
};
