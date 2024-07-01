import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCatImage } from '../api/cat';

const initialState = {
  catImage: null,
  status: 'idle',
};

export const fetchCatImageAsync = createAsyncThunk(
  'cat/fetchCatImage',
  async () => {
    const response = await fetchCatImage();
    return response[0];
  }
);

const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatImageAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCatImageAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.catImage = action.payload;
      })
      .addCase(fetchCatImageAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectCatImage = (state) => state.cat.catImage;
export default catSlice.reducer;
