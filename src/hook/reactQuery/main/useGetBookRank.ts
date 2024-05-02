import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetBookRank = () => {
  return useQuery<any>({
    queryKey: ["book", "rank"],
    queryFn: () =>
      axiosInstance
        .get("/v1/books/best-seller?page=1&size=10")
        .then((data) => data.data.queryResponse),
    throwOnError: true,
  });
};
