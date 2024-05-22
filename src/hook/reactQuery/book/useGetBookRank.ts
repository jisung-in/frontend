import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type BookRankResponse = {
  ranking: number;
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
};

export const useGetBookRank = () => {
  return useQuery<BookRankResponse[]>({
    queryKey: ["book", "rank"],
    queryFn: () =>
      axiosInstance
        .get("/v1/books/best-seller?page=1&size=20")
        .then((data) => data.data.queryResponse),
    throwOnError: true,
  });
};
