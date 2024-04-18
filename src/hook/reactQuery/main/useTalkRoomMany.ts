import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useTalkRoomMany = () => {
  return useQuery<any>({
    queryKey: ["talkRoomMany"],
    queryFn: () => axiosInstance.get("http://localhost:9090/api/talkroom/many"),
    throwOnError: true,
  });
};
