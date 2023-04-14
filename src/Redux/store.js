import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import artistSlice from './artistSlice';
import albumsSlice from './albumsSlice';
import tracksSlice from './tracksSlice';
import tagsSlice from './tagsSlice';

const rootReducer = {
  artists: artistSlice.reducer,
  albums: albumsSlice.reducer,
  tracks: tracksSlice.reducer,
  tags: tagsSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
