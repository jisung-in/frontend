import axiosInstance from "@/app/api/requestApi";
import { useLogin } from "@/hook/useLogin";
import { useQuery } from "@tanstack/react-query";

type MyDetail = {
  userId: number;
  userImage: string;
  userName: string;
};

export const useGetMyDetail = () => {
  const { isLoggedIn } = useLogin();
  return useQuery<MyDetail>({
    queryKey: ["detail"],
    queryFn: () => axiosInstance.get(`/v1/users/me`).then((data) => data.data),
    throwOnError: true,
    enabled: isLoggedIn,
  });
};
