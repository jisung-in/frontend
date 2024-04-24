import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetTalkRoomRecommend = () => {
  return useQuery<any>({
    queryKey: ["talkroom", "recommend"],
    queryFn: () =>
      axiosInstance.get("http://localhost:9090/api/talkroom/recommend"),
    throwOnError: true,
  });
};
