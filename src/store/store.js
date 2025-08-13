import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import filtersReducer from './filtersSlice';
import jobsReducer from './jobsSlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    filters: filtersReducer,
    jobs: jobsReducer,
    ui: uiReducer
  }
});

export default store;
