import axiosInstance from "@/app/api/requestApi";
import { QueryFunction, useQuery } from "@tanstack/react-query";

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

export const usePrefetchBookRank: QueryFunction<
  any,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/v1/books/best-seller?page=1&size=20"`,
    {
      next: {
        tags: ["book", "rank"],
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
