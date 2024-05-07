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

export const useGetMyState = () => {
  return useQuery<any>({
    queryKey: ["my", "state"],
    queryFn: () =>
      axiosInstance.get<any>(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/users/statuses?page=1&size=4&order=dictionary&status=want`,
      ),
    throwOnError: true,
  });
};
