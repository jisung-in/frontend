import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomLikeIds = {
  talkRoomIds?: number[] | [];
};

export const useGetRoomLike = () => {
  return useQuery<TalkRoomLikeIds>({
    queryKey: ["talk-rooms", "likes"],
    queryFn: () =>
      axiosInstance.get(`/v1/talk-rooms/likes`).then((data) => data.data),
    throwOnError: true,
  });
};