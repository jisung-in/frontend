import axiosInstance from "@/app/api/requestApi";
import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useGetMemberData = () => {
  const isLoggedIn = useSelector((state: RootState) => state.loggedin.state);

  type MemberProps = {
    data: {
      userName: string;
      userImage: string;
    };
  };

  return useQuery<MemberProps>({
    queryKey: ["memberData"],
    queryFn: () => axiosInstance.get("/v1/users/me"),
    enabled: isLoggedIn,
  });
};
