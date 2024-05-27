import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type StarRatingRequest = {
  id: number;
  rating: number;
  isbn: string;
};

export const useGetStarRating = (isbn: string) => {
  return useQuery<StarRatingRequest>({
    queryKey: ["starRating", isbn],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/v1/ratings?isbn=${isbn}`);
        return response.data;
      } catch (error) {
        // 에러 처리: 에러가 발생하면 빈 데이터를 반환
        console.error("Error fetching star rating:", error);
        return {};
      }
    },
    throwOnError: false, // 에러를 무시하고 빈 데이터를 반환
  });
};
