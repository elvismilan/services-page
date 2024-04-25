import { createSlice } from '@reduxjs/toolkit';

export const serviciosSlice = createSlice({
  name: 'servicios',
  initialState: {
    isSaving: false,
    isOpenModal:false,
    messageSaved: '',
    services:[],
    active: null,
//      {
//        _id,name,imageURL,description,unitPrice
//      }
  },
  reducers: {
    savingNewService: ( state ) => {
        state.isSaving = true;
    },
    addNewEmptyService: (state,  action ) => {
        state.notes.push( action.payload );
        state.isSaving = false;
    },
    setActiveService: (state,  action ) => {
        state.active = action.payload;
        state.messageSaved = '';
    },
    setServices: (state,  action ) => {
        state.services = action.payload;
    },
    setActiveModal:(state) => {
      state.isOpenModal = true;
    },
    setNotActiveModal:(state) => {
      state.isOpenModal = false;
    }

  }
});


// Action creators are generated for each case reducer function
export const { savingNewService,addNewEmptyService,setActiveService,setServices,setActiveModal,setNotActiveModal } = serviciosSlice.actions;
