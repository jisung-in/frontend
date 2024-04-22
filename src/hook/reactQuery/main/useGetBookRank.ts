import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetBookRank = () => {
  return useQuery<any>({
    queryKey: ["book", "rank"],
    queryFn: () => axiosInstance.get("http://localhost:9090/api/book/rank"),
    throwOnError: true,
  });
};
