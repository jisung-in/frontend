import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type TalkRoomRequest = {
  talkRoomId: string;
};

type TalkRoomResponse = {};

export const useGetComments = ({ talkRoomId }: TalkRoomRequest) => {
  return useQuery({
    queryKey: ["talkRoom", "comment", talkRoomId],
    queryFn: () =>
      axiosInstance.get<any>(`${process.env.NEXT_PUBLIC_SERVER}/talkRoomId`),
    throwOnError: true,
  });
};
