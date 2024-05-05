import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type BookInformation = {
  title: string;
  content: string;
  isbn: number;
  publisher: string;
  imageUrl: string;
  thumbnail: string;
  authors: string[];
  ratingAverage: number;
  dateTime: string;
};

export const useGetBookInformation = ({ isbn }: { isbn: number }) => {
  return useQuery<BookInformation>({
    queryKey: ["books", isbn.toString()],
    queryFn: () =>
      axiosInstance.get(`/v1/books/${isbn}`).then(({ data }) => data),
    throwOnError: true,
  });
};
