import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useBookRank = () => {
  return useQuery<any>({
    queryKey: ["bookRank"],
    queryFn: () => axiosInstance.get("http://localhost:9090/api/book/rank"),
    throwOnError: true,
  });
};
