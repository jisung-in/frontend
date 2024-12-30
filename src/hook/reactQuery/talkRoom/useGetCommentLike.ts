import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type CommentLikeIds = {
  commentIds?: number[] | [];
};

export const useGetCommentLike = () => {
  return useQuery<CommentLikeIds>({
    queryKey: ["comments", "likes"],
    queryFn: () =>
      axiosInstance.get(`/v1/comments/likes`).then((data) => data.data),
    throwOnError: true,
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  });
};
