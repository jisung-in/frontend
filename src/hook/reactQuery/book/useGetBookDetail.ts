import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type param = {
  isbn: number;
};

type BookDetail = {
  title: string;
  content: string;
  isbn: number;
  publisher: string;
  imageUrl: string;
  thumbnail: string;
  authors: string[];
  ratingAverage: number;
  dateTime: number[];
};

export const useGetBookDetail = (isbn: param) => {
  return useQuery<BookDetail>({
    queryKey: ["isbn", isbn],
    queryFn: () =>
      axiosInstance.get(`/v1/books?page/${isbn}`).then(({ data }) => data.data),
    throwOnError: true,
  });
};
