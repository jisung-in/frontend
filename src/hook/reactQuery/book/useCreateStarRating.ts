import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type StarRatingRequest = {
  bookIsbn: string;
  rating: number;
};

export const useCreateStarRating = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: StarRatingRequest) =>
      axiosInstance.post(`/v1/ratings`, request),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["starRating", variables.bookIsbn],
      });
    },
    onError: (error) => {
      console.error("An error occurred while creating the star rating:", error);
    },
  });
};
