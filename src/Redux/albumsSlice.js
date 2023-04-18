/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getArtistAlbums } from './artistActions';

const initialState = {
  artistAlbums: [],
  isLoading: false,
  errorMessage: '',
};

const albumsSlice = createSlice({
  name: 'artistAlbums',
  initialState,
  reducers: {
    clearAlbums: (state) => {
      state.artistAlbums = [];
      state.isLoading = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtistAlbums.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getArtistAlbums.fulfilled, (state, action) => {
        state.isLoading = false;
        state.artistAlbums = action.payload;
      })

      .addCase(getArtistAlbums.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { clearAlbums } = albumsSlice.actions;

export default albumsSlice;
