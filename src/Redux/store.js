import { configureStore } from '@reduxjs/toolkit';
import artistSlice from './artistSlice';

const store = configureStore({
  reducer: {
    artists: artistSlice,
  },
});

export default store;
