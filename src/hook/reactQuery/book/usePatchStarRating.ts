import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type PatchStarRatingRequest = {
  bookIsbn: string;
  rating: number;
};

export const usePatchStarRating = (ratingId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: PatchStarRatingRequest) =>
      axiosInstance.patch(`/v1/ratings/${ratingId}`, request),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["starRating", ratingId] }),
  });
};
