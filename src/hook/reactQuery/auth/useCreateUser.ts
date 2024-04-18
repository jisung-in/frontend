import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/app/api/requestApi";

export interface MemberRequest {
  nickname: string;
  birth?: string;
}

export const useCreateMemberData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MemberRequest) => axiosInstance.put("/my", data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["memberData"] }),
  });
};
