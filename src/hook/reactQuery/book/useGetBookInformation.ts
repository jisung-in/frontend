import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";
import { QueryFunction } from "@tanstack/query-core";

type BookInformation = {
  title: string;
  content: string;
  isbn: string;
  publisher: string;
  imageUrl: string;
  thumbnail: string;
  authors: string[];
  ratingAverage: number;
  dateTime: string;
};

export const useGetBookInformation = ({ isbn }: { isbn: string }) => {
  return useQuery<BookInformation>({
    queryKey: ["books", isbn.toString()],
    queryFn: () =>
      axiosInstance.get(`/v1/books/${isbn}`).then(({ data }) => data),
    throwOnError: true,
  });
};

export const usePrefetchBookInfo: QueryFunction<
  any,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, isbn] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/v1/books/${isbn}`,
    {
      next: {
        tags: ["books", isbn],
      },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
