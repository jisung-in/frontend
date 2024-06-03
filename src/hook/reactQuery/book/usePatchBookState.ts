import axiosInstance from "@/app/api/requestApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type BookStateRequest = {
  isbn: string;
  readingStatus: string;
};

export const usePatchBookState = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: BookStateRequest) =>
      axiosInstance.patch(`/v1/libraries/${id}`, request),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["book", "state", id] }),
  });
};
