import axiosInstance from "@/app/api/requestApi";
import { useLogin } from "@/hook/useLogin";
import { useQuery } from "@tanstack/react-query";

type TalkRoomLikeIds = {
  talkRoomIds?: number[] | [];
};

export const useGetRoomLike = () => {
  const { isLoggedIn } = useLogin();
  return useQuery<TalkRoomLikeIds>({
    queryKey: ["talk-rooms", "likes"],
    queryFn: () =>
      axiosInstance.get(`/v1/talk-rooms/likes`).then((data) => data.data),
    throwOnError: true,
    enabled: isLoggedIn,
    staleTime: 5000, // 5초 마다 신선한 데이터로 교체
    gcTime: 5 * 60 * 1000, // 캐시 데이터 5분 유지
  });
};
