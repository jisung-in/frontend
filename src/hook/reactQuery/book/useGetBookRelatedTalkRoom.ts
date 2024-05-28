import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type params = {
  isbn: string;
  page: number;
  size: number;
};

type BookStateResponse = {
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
};

export const useGetBookRelatedTalkRoom = ({
  isbn = "",
  page = 1,
  size = 12,
}: params) => {
  return useQuery<BookStateResponse>({
    queryKey: ["book", "talkroom", isbn, page, size],
    queryFn: () =>
      axiosInstance
        .get(`/v1/books/${isbn}/talk-rooms?page=${page}&size=${size}`)
        .then((data) => data.data),
    throwOnError: true,
  });
};
