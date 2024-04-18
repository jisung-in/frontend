import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useTalkRoomPopular = () => {
  return useQuery<any>({
    queryKey: ["talkRoomPopular"],
    queryFn: () =>
      axiosInstance.get("http://localhost:9090/api/talkroom/popular"),
    throwOnError: true,
  });
};
