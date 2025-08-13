import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  globalLoading: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => { state.darkMode = !state.darkMode; },
    setGlobalLoading: (state, action) => { state.globalLoading = action.payload; }
  }
});

export const { toggleDarkMode, setGlobalLoading } = uiSlice.actions;
export default uiSlice.reducer;
