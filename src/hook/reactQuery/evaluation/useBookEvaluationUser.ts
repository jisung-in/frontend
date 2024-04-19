import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useBookEvaluationUser = () => {
  return useQuery<any>({
    queryKey: ["bookEvaluationUser"],
    queryFn: () =>
      axiosInstance.get("http://localhost:9090/api/book/evaluation/user"),
    throwOnError: true,
  });
};
