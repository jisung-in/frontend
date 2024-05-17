import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type param = {
  page: number;
  size: number;
  order?: string;
};

type TalkRoomBookOrder = {
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
};

export const useGetRoomBookOrder = ({
  page = 1,
  size = 10,
  order = "recent",
}: param) => {
  return useQuery<TalkRoomBookOrder[]>({
    queryKey: ["talkroom", "order", page, size, order],
    queryFn: () =>
      axiosInstance
        .get(`/v1/books?page=${page}&size=${size}&order=${order}`)
        .then(({ data }) => data.queryResponse),
    throwOnError: true,
  });
};
