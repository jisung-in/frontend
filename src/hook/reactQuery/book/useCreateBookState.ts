import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type BookStateRequest = {
  isbn: string;
  readingStatus: string;
};

export const useCreateBookState = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: BookStateRequest) =>
      axiosInstance.post(`/v1/libraries`, request),
    onSuccess: (_, { isbn }) =>
      queryClient.invalidateQueries({ queryKey: ["book", "state", isbn] }),
  });
};
