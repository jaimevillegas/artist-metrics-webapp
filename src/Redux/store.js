import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import artistSlice from './artistSlice';
import albumsSlice from './albumsSlice';

const rootReducer = {
  artists: artistSlice.reducer,
  albums: albumsSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
