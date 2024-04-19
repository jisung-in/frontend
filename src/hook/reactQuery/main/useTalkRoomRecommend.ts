import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useTalkRoomRecommend = () => {
  return useQuery<any>({
    queryKey: ["talkRoomRecommend"],
    queryFn: () =>
      axiosInstance.get("http://localhost:9090/api/talkroom/recommend"),
    throwOnError: true,
  });
};
