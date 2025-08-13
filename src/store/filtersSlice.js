import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  location: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTitle: (state, action) => { state.title = action.payload; },
    setLocation: (state, action) => { state.location = action.payload; },
    resetFilters: () => initialState
  }
});

export const { setTitle, setLocation, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
