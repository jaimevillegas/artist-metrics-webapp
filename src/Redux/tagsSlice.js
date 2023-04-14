/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getArtistTags } from './artistActions';

const initialState = {
  artistTags: [],
  isLoading: false,
  errorMessage: '',
};

const tagsSlice = createSlice({
  name: 'artistTags',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArtistTags.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getArtistTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.artistTags = action.payload;
      })

      .addCase(getArtistTags.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default tagsSlice;
