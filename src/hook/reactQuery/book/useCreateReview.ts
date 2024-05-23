import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type CreateReview = {
  bookIsbn: string;
  content: string;
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: CreateReview) =>
      axiosInstance.post(`/v1/reviews`, request),
    onSuccess: (_, { bookIsbn }) =>
      queryClient.invalidateQueries({
        queryKey: ["review", bookIsbn],
      }),
  });
};
