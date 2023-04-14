/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getArtistTracks } from './artistActions';

const initialState = {
  artistTracks: [],
  isLoading: false,
  errorMessage: '',
};

const tracksSlice = createSlice({
  name: 'artistTracks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArtistTracks.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getArtistTracks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.artistTracks = action.payload;
      })

      .addCase(getArtistTracks.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default tracksSlice;
