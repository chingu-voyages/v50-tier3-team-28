import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dashboardApi } from "./service/apiData";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },

  // The following middleware is responsible for caching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});

setupListeners(store.dispatch);
