import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type Props = {
  order: string;
  page: number;
};

export const useGetMyTalkRooms = ({ order, page }: Props) => {
  return useQuery<any>({
    queryKey: ["my", "talkRooms", order, page],
    queryFn: async () =>
      await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/users/talk-rooms?page=${page}&size=12&userTalkRoomsFilter=${order === "mine"}&commentFilter=${order === "commnet"}&likeFilter=${order === "liked"}`,
      ),
    throwOnError: true,
  });
};
