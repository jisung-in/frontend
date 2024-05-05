import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TalkRoomRequest = {
  bookIsbn: string;
  title: string;
  content: string;
  readingStatus: string[];
  imageUrls?: string;
};

type TalkRoomResponse = {
  id: number;
  profileImage: string;
  username: string;
  title: string;
  content: string;
  bookName: string;
  bookThumbnail: string;
  likeCount: number;
  readingStatuses: string[];
  createTime: string;
  images: string[];
  likeTalkRoom: boolean;
};

export const useCreateRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: TalkRoomRequest) =>
      axiosInstance.post<TalkRoomResponse>(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/talk-rooms`,
        request,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["talkRoom"] }),
  });
};
