import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  order: string;
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

export const useGetMyStar = ({ order }: TalkRoomRequest) => {
  return useQuery<any>({
    queryKey: ["my", "starRate"],
    queryFn: () =>
      axiosInstance.get<any>(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/users/ratings?page=1&size=4&order=rating_asc&rating=4.0`,
      ),
    throwOnError: true,
  });
};
