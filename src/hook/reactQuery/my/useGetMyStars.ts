import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  order: number | "";
  page: number;
};

type TalkRoomResponse = {
  response: {
    queryResponse: [
      {
        commentId: number;
        userName: string;
        content: string;
        commentLikeCount: number;
        createTime: string;
      },
    ];
    totalCount: number;
    size: number;
  };
  userLikeCommentIds: number[];
};

export const useGetMyStar = ({ order, page }: TalkRoomRequest) => {
  return useQuery<any>({
    queryKey: ["my", "starRate", order, page],
    queryFn: () =>
      axiosInstance.get<any>(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/users/ratings?page=${page}&size=12&order=rating_asc&rating=${order}`,
      ),
    throwOnError: true,
  });
};
