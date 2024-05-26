import { RootState } from "@/store/store";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/store/isLoggedInSlice";

export const useLogin = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.loggedin.state);
  const dispatch = useDispatch();
  const username =
    typeof window !== "undefined" ? localStorage.getItem("userName") : null;
  const userProfile =
    typeof window !== "undefined" ? localStorage.getItem("userProfile") : null;

  const handleLogin = (token: string) => {
    Cookies.set("accessToken", token, {
      expires: 7,
    });
    dispatch(login());
  };

  const handleLogout = () => {
    Cookies.remove("accessToken");
    localStorage.clear();
    router.replace("/");
    dispatch(logout());
  };

  return { username, userProfile, isLoggedIn, handleLogin, handleLogout };
};
