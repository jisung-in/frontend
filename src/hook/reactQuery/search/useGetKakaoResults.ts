import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type SearchingRequest = {
  target: string;
};

type SearchingResponse = {
  documents: BookInfo[];
};

export type BookInfo = {
  author: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
};

export const useGetKakaoResults = ({ target }: SearchingRequest) => {
  return useQuery<SearchingResponse>({
    queryKey: ["kakao", target],
    queryFn: () =>
      axiosInstance.get(
        `https://dapi.kakao.com/v3/search/book?target=title&query=${target}&page=1`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API}`,
          },
        },
      ),
    throwOnError: true,
  });
};
