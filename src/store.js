import { configureStore } from '@reduxjs/toolkit';
import { countryMiddleware } from './features/countryMiddleware';
import countrySlice from './features/countrySlice';

const middleware = [countryMiddleware];
export const store = configureStore({
  reducer: {
    country: countrySlice,
  },
  middleware,
});
