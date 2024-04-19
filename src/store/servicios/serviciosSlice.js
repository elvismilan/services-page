import { createSlice } from '@reduxjs/toolkit';

export const serviciosSlice = createSlice({
  name: 'servicios',
  initialState: {
    status: 'not-authenticated', //checking, email-confirmation , not-authenticated authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    error: null
  },
  reducers: {
    login: (state, {payload}) => {
        state.status = 'authenticated';
        state.uid = payload.uid;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
        state.error = null

    }

  }
});


// Action creators are generated for each case reducer function
export const { login } = serviciosSlice.actions;
