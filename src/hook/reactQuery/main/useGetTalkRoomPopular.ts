import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetTalkRoomPopular = () => {
  return useQuery<any>({
    queryKey: ["talkroom", "popular"],
    queryFn: () =>
      axiosInstance.get("http://localhost:9090/api/talkroom/popular"),
    throwOnError: true,
  });
};
