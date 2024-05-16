import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type BookStateResponse = {
  id: number;
  status: string;
  hasReadingStatus: boolean;
};

export const useGetBookState = (isbn: string) => {
  return useQuery<BookStateResponse>({
    queryKey: ["book", "state", isbn],
    queryFn: () =>
      axiosInstance
        .get(`/v1/user-libraries?isbn=${isbn}`)
        .then((data) => data.data),
    throwOnError: true,
  });
};
