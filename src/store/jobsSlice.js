import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching jobs
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // dummy data
    return await res.json();
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    list: [],
    selectedJob: null,
    status: 'idle', // idle | loading | succeeded | failed
    error: null
  },
  reducers: {
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setSelectedJob } = jobsSlice.actions;
export default jobsSlice.reducer;
