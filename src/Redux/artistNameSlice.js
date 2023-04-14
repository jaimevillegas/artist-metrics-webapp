import { createSlice } from '@reduxjs/toolkit';

const setArtistName = createSlice({
  name: 'artist',
  initialState: '',
  reducers: {
    setArtist: (state, action) => action.payload,
  },
});

export const { setArtist } = setArtistName.actions;

export default setArtistName.reducer;
