import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

export const useGetMyTalkRooms = (key: string) => {
  return useQuery<any>({
    queryKey: ["my", "talkRooms", key],
    queryFn: async () =>
      await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/users/talk-rooms?page=1&size=10&commentFilter=${key === "replied"}&likeFilter=${key === "liked"}`,
      ),
    throwOnError: true,
  });
};
