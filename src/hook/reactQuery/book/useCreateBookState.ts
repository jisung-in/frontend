import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type BookStateRequest = {
  isbn: string;
  readingStatus: string;
};

type BookStateResponse = {
  id: number;
  status: string;
  hasReadingStatus: boolean;
};

export const useCreateBookState = (isbn: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: BookStateRequest) =>
      axiosInstance.post(
        `${process.env.NEXT_PUBLIC_SERVER}/v1/user-libraries`,
        request,
      ),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["book", "state", isbn] }),
  });
};
