import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: [],
  error: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isLoading = action.payload.isLoading;
      state.user = action.payload.user;
      state.error = action.payload.error;
      state.token = action.payload.token;      
    }, 
  }
});

export const { setAuthState} = authSlice.actions;
export default authSlice.reducer;
