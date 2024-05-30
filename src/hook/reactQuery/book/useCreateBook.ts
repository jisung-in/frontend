import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type NewBookType = {
  title: string;
  contents: string;
  isbn: string;
  authors: string[];
  publisher: string;
  thumbnail: string;
  datetime: string;
};

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: NewBookType) =>
      axiosInstance.post(`/v1/books`, request),
    onSuccess: (_, { isbn }) =>
      queryClient.invalidateQueries({ queryKey: ["book", "state", isbn] }),
  });
};
