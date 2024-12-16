import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

interface BestSellerProps {
  ranking: number;
  isbn: string;
  title: string;
  publisher: string;
  thumbnail: string;
  authors: string[];
  dateTime: string;
}

export const useGetBestSeller = () => {
  return useQuery<BestSellerProps[]>({
    queryKey: ["book", "rank"],
    queryFn: () =>
      axiosInstance
        .get("/v1/books/best-seller?page=1&size=20")
        .then((data) => data.data.queryResponse),
    throwOnError: true,
  });
};
