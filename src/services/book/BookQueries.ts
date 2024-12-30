import BookService from "./BookService";
import { IsbnProps } from "./BookService.types";

export const BookServiceQueryOptions = {
  getBookInformation: ({ isbn }: IsbnProps) => ({
    queryKey: ["book-information", { isbn }],
    queryFn: () =>
      BookService.getBookInformation({
        isbn,
      }),
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  }),
};
