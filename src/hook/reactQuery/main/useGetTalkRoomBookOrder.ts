import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

interface param {
  page: number;
  size: number;
  order?: string;
}

export const useGetTalkRoomBookOrder = ({
  page = 1,
  size = 10,
  order = "recent",
}: param) => {
  return useQuery<any>({
    queryKey: ["talkroom", "order"],
    queryFn: () =>
      axiosInstance
        .get(`/v1/books?page=${page}&size=${size}&order=${order}`)
        .then(({ data }) => data.queryResponse),
    throwOnError: true,
  });
};
