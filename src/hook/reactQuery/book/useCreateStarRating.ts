import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type StarRatingRequest = {
  bookIsbn: string;
  rating: string;
};

export const useCreateStarRating = ({
  bookIsbn,
  rating,
}: StarRatingRequest) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: StarRatingRequest) =>
      axiosInstance.post(`/v1/ratings`, request),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["book", "rating", bookIsbn],
      }),
  });
};
