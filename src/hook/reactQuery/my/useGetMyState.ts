import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type Request = {
  page?: number;
  size?: number;
  order?: string;
  status?: string;
};

// type TalkRoomResponse = {
//   response: {
//     queryResponse: [
//       {
//         commentId: number;
//         userName: string;
//         content: string;
//         commentLikeCount: number;
//         createTime: string;
//       },
//     ];
//     totalCount: number;
//     size: number;
//   };
//   userLikeCommentIds: number[];
// };

export const useGetMyState = ({
  page = 1,
  size = 10,
  order,
  status,
}: Request) => {
  return useQuery<any>({
    queryKey: ["my", "state", page, order, status],
    queryFn: () =>
      axiosInstance.get<any>(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/users/statuses?page=${page}&size=${size}&order=${order}&status=${status}`,
      ),
    throwOnError: true,
  });
};
