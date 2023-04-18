import { createSlice } from '@reduxjs/toolkit';

const setArtistListens = createSlice({
  name: 'listens',
  initialState: 0,
  reducers: {
    setListens: (state, action) => action.payload,
  },
});

export const { setListens } = setArtistListens.actions;

export default setArtistListens.reducer;
