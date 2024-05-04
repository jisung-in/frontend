import { useRouter } from "next/navigation";
import type { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "@/store/isLoggedInSlice";

export const useAuth = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.loggedin.state);
  const dispatch = useDispatch();

  const username =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;
  const handleLogin = (token: string) => {
    localStorage.setItem("token", token);
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    router.replace("/");
  };

  return { isLoggedIn, username, login: handleLogin, logout: handleLogout };
};
