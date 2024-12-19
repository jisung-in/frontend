import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

interface params {
  isbn: string;
  page: number;
  size: number;
}

interface BookStateResponse {
  queryResponse: [
    {
      id: number;
      profileImage: string;
      username: string;
      title: string;
      content: string;
      bookName: string;
      bookAuthor: string;
      bookThumbnail: string;
      likeCount: number;
      readingStatuses: string[];
      registeredDateTime?: string;
      creatorId: number;
    },
  ];
  totalCount: number;
  size: number;
}

export const useGetBookRelatedTalkRoom = ({
  isbn = "",
  page = 1,
  size = 12,
}: params) => {
  return useQuery<BookStateResponse>({
    queryKey: ["related-talkrooms", isbn, page, size],
    queryFn: () =>
      axiosInstance
        .get(`/v1/books/${isbn}/talk-rooms?page=${page}&size=${size}`)
        .then((data) => data.data),
    throwOnError: true,
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
    refetchOnWindowFocus: false, // 포커스 전환 시 리패칭 방지
    refetchOnMount: false, // 컴포넌트가 마운트될 때 리패칭 방지
  });
};
