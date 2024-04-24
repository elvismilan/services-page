import { createSlice } from '@reduxjs/toolkit';

export const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    isSaving: false,
    messageSaved: '',
    services:[],
    active: null,
  },
  reducers: {
    addNewItem: (state,  action ) => {
        state.services.push( action.payload );
        state.isSaving = false;
    },

  }
});


// Action creators are generated for each case reducer function
export const { addNewItem } = carritoSlice.actions;
