import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type Prop = { username: string };

export const useMyStarRate = () => {
  return useQuery<any>({
    queryKey: ["myStarRate"],
    queryFn: () => axiosInstance.get("http://localhost:9090/api/my/star"),
    throwOnError: true,
  });
};
