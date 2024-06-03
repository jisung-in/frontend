import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type BookStateResponse = {
  id: number;
  bookIsbn: string;
  status: string;
};

export const useGetBookState = () => {
  return useQuery<BookStateResponse>({
    queryKey: ["state"],
    queryFn: () => axiosInstance.get(`/v1/libraries`).then((data) => data.data),
    throwOnError: true,
  });
};
