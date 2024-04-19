import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { serviciosSlice } from './servicios';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    servicios: serviciosSlice.reducer,
  },
})
