import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices';

const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
});

export default store;
