import { configureStore } from '@reduxjs/toolkit';
import socialNetowrksApi from './components/SocialNetwork/SocialNetwork';

export const store = configureStore({
  reducer: {
    [socialNetowrksApi.reducerPath]: socialNetowrksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socialNetowrksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
