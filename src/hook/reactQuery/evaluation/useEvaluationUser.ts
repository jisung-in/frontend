import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useEvaluationUser = () => {
  return useQuery<any>({
    queryKey: ["evaluationUser"],
    queryFn: () =>
      axiosInstance.get("http://localhost:9090/api/evaluation/user"),
    throwOnError: true,
  });
};
