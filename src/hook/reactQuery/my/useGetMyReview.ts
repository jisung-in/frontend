import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

// type TalkRoomRequest = {
//   talkRoomId: string;
// };

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

export const useGetMyReview = ({ order }: { order: string }) => {
  return useQuery<any>({
    queryKey: ["my", "review", order],
    queryFn: () =>
      axiosInstance
        .get<any>(
          `${process.env.NEXT_PUBLIC_SERVER}/v1/users/reviews?page=1&size=10&order=${order}`,
        )
        .then((data) => data.data),
    throwOnError: true,
  });
};
