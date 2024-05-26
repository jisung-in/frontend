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
  });
};
