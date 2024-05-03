import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

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

export const useGetBookDetail = ({ isbn }: { isbn: number }) => {
  return useQuery<BookDetail>({
    queryKey: ["books", isbn.toString()],
    queryFn: () =>
      axiosInstance.get(`/v1/books/${isbn}`).then(({ data }) => data),
    throwOnError: true,
  });
};
