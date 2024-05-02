import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetTalkRoomMany = () => {
  return useQuery<any>({
    queryKey: ["talkroom", "many"],
    queryFn: () =>
      axiosInstance
        .get("/v1/books/0000000000001/talk-rooms?page=1&size=12")
        .then(({ data }) => data.response.queryResponse),
    throwOnError: true,
  });
};
