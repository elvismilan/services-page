import { createSlice } from '@reduxjs/toolkit';

export const proveedorSlice = createSlice({
  name: 'proveedor',
  initialState: {
    loadin: false,
    error: {
      message:null,
      code:null
    },
    item:[],
    selected:{
        _id:'63aca8f96eeafc6f83a943f9',
        name:'Armadillo',
        logoURL:'https://te-ayudo-img.s3.us-east-2.amazonaws.com/production/users/63aca8f96eeafc6f83a943f9@1672259925112',
      }
  },
  reducers: {
    setGetProv:(state) => {
      state.loadin = false;
    }

  }
});


// Action creators are generated for each case reducer function
export const { setGetProv } = proveedorSlice.actions;
