import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetTalkRoomMany = () => {
  return useQuery<any>({
    queryKey: ["talkroom", "many"],
    queryFn: () => axiosInstance.get("http://localhost:9090/api/talkroom/many"),
    throwOnError: true,
  });
};
