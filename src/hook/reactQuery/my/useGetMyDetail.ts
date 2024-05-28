import axiosInstance from "@/app/api/requestApi";
import { useQuery } from "@tanstack/react-query";

type MyDetail = {
  userId: number;
  userImage: string;
  userName: string;
};

export const useGetMyDetail = () => {
  return useQuery<MyDetail>({
    queryKey: ["detail"],
    queryFn: () => axiosInstance.get(`/v1/users/me`).then((data) => data.data),
    throwOnError: true,
  });
};
