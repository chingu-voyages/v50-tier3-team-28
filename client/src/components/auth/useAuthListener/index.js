import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../../features/auth/authSlice";
import { useEffect } from "react";

export const useAuthListener = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => { dispatch(setAuthState({ isAuthenticated, user, isLoading })); }, [dispatch, isAuthenticated, user, isLoading]);

  return { isLoading, isAuthenticated };
};
