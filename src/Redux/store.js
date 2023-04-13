import { configureStore } from '@reduxjs/toolkit';
import artistSlice from './artistSlice';
import albumsSlice from './albumsSlice';

const store = configureStore({
  reducer: {
    artists: artistSlice,
    albums: albumsSlice,
  },
});

export default store;
