import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type Prop = { username: string };

export const useGetMyStarRate = () => {
  return useQuery({
    queryKey: ["my", "star"],
    queryFn: () => axiosInstance.get("http://localhost:9090/api/my/star"),
    throwOnError: true,
  });
};
