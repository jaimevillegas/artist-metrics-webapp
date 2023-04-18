/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getTopArtists } from './artistActions';

const initialState = {
  topArtists: [],
  isLoading: false,
  errorMessage: '',
};

const artistSlice = createSlice({
  name: 'topArtists',
  initialState,
  reducers: {
    clearArtists: (state) => {
      state.topArtists = [];
      state.isLoading = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopArtists.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getTopArtists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topArtists = action.payload;
      })

      .addCase(getTopArtists.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { clearArtists } = artistSlice.actions;

export default artistSlice;
