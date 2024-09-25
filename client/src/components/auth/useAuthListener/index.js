// import { useAuth0 } from "@auth0/auth0-react";
// import { useDispatch } from "react-redux";
// import { setAuthState } from "../../../features/auth/authSlice";
// import { useEffect } from "react";

// export const useAuthListener = () => {
//   const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();
//   const dispatch = useDispatch();
//   useEffect(() => { dispatch(setAuthState({ isAuthenticated, user, isLoading })); }, [dispatch, isAuthenticated, user, isLoading]);

//   return { isLoading, isAuthenticated };
// };
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../../features/auth/authSlice";
import { useEffect } from "react";
import { store } from "../../../app/store";

export const useAuthListener = () => {
  const { isAuthenticated, user, isLoading, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAccessToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          dispatch(setAuthState({ isAuthenticated, user, isLoading, token }));
        } catch (error) {
          console.error("Error fetching access token: ", error);
        }
      } else {
        dispatch(setAuthState({ isAuthenticated, user, isLoading }));
      }
    };

    fetchAccessToken();
              console.log("setAuthState in useAuthListener index.js",store.getState().auth.token  );

  }, [dispatch, isAuthenticated, user, isLoading, getAccessTokenSilently]);

  return { isLoading, isAuthenticated };
};
