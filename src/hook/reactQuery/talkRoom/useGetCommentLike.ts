import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetCommentLike = () => {
  return useQuery<number[]>({
    queryKey: ["likes"],
    queryFn: () =>
      axiosInstance.get(`/v1/talk-rooms/likes`).then((data) => data.data),
    throwOnError: true,
  });
};
