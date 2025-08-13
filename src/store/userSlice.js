import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  role: null, // 'jobSeeker' | 'recruiter'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = null;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
