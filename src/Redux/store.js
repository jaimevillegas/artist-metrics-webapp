import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import artistSlice from './artistSlice';
import albumsSlice from './albumsSlice';
import tracksSlice from './tracksSlice';
import tagsSlice from './tagsSlice';
import artistNameSlice from './artistNameSlice';
import artistListensSlice from './artistListensSlice';

const rootReducer = {
  artists: artistSlice.reducer,
  albums: albumsSlice.reducer,
  tracks: tracksSlice.reducer,
  tags: tagsSlice.reducer,
  artistName: artistNameSlice,
  artsitListens: artistListensSlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
