import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type param = {
  page: number;
  size: number;
  order?: string;
};

type TalkRoomBookOrder = {
  isbn: number;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: number[];
};

export const useGetTalkRoomBookOrder = ({
  page = 1,
  size = 10,
  order = "recent",
}: param) => {
  return useQuery<TalkRoomBookOrder>({
    queryKey: ["talkroom", "order"],
    queryFn: () =>
      axiosInstance
        .get(`/v1/books?page=${page}&size=${size}&order=${order}`)
        .then(({ data }) => data.queryResponse),
    throwOnError: true,
  });
};
