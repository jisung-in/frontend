import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export type MyStarRateRequest = {
  postId: number;
  title: string;
  image: string;
  starRate: string;
};

export const useGetMyStarRate = () => {
  return useQuery({
    queryKey: ["my", "star"],
    queryFn: async () =>
      await axiosInstance.get("http://localhost:9090/api/my/star"),
    throwOnError: true,
  });
};
