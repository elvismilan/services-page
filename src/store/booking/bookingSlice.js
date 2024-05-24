import { createSlice } from '@reduxjs/toolkit';

const EMPTY_BOOKING = Object.freeze({
	totalEstimatedWorkMinutes: null,
	status: null,
	bookingDate: null,
	paymentInfo: {},
	customer: {
		_id: null,
		fullName: '',
		phone: '',
		pushToken: null,
		address: {
			_id: null,
			direction: '',
			coordinates: {
				latitude: null,
				longitude: null,
			},
			street: '',
			house: '',
			reference: '',
			phone: '',
		},
	},
	provider: {
		_id: null,
		name: '',
		email: '',
		logoURL: '',
	},
	serviceCart: [],
	employee: null,
	feedbackInfo: {},
	createdAt: null,
	updatedAt: null,
	billingInfo: {},
	coupon: '',
	couponData: {},
	totalDiscount: 0,
	isInBranch: false,
	branch: null,
})

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    loading: false,
    error: null,
    items: [],
    selected: EMPTY_BOOKING,
  },
  reducers: {
		BOOKING_ISINBRANCH:(state) => {
			state.selected.isInBranch = true;
		},
		BOOKING_NOTISINBRANCH:(state) => {
			state.selected.isInBranch = false;
		},
	BOOKING_CREATE_REQUEST:(state ) => {
			state.loading = true;
			state.error = null;
		},
    BOOKING_GET_BY_CUSTOMER_REQUEST: (state, {payload}) => {
        state.loading = true;
				state.error = null;
    },
    BOOKING_CLEAR:(state) => {
      state.selected = {
					...EMPTY_BOOKING,
          serviceCart: []
      } ;
    },
		BOOKING_SET_CUSTOMER:(state, {payload}) => {
			state.selected.customer = payload.customer;
		},
		BOOKING_SET:(state, {payload}) => {
			state.selected.bookingDate=payload.bookingDate
			//state.selected = payload
		},
		BOOKING_PAGO:(state, {payload}) => {
			state.selected.paymentInfo.paymentMethod=payload.paymentMethod
			//state.selected = payload
		},
		BOOKING_CUSTOMER_FULLNAME:(state, {payload}) => {
			state.selected.customer.fullName =payload.fullName
			//state.selected = payload
		},
		BOOKING_CUSTOMER_PHONE:(state, {payload}) => {
			state.selected.customer.phone =payload.phone
			//state.selected = payload
		},
		BOOKING_SET_CART:(state, {payload}) => {
			state.selected.serviceCart = payload
		},
		BOOKING_ADD_TO_CART: (state, action) => {
			//booking = state.selected
			let mserviceCart = []
			let serviceOrder
			mserviceCart = state.selected.serviceCart;
			if(state.selected.serviceCart.length > 0){
				console.log('buscar .... servicio');
				serviceOrder = state.selected.serviceCart.find((e) =>
					e.service._id == action.payload.service._id
				 )
			}
			if (!!serviceOrder) {
				console.log('update servicio add booking');
				state.selected.serviceCart = state.selected.serviceCart.map((e) =>
					e.service._id === action.payload.service._id
						? action.payload
						: e
				)
			} else {
				console.log('nuevo servicio add booking');
				state.selected.serviceCart.push(action.payload)
			}
			//TODO: updateTotalEstimadoWorkMinutes and paymentInfo

			//state.selected.serviceCart=mserviceCart;
			mserviceCart = state.selected.serviceCart;
			state.selected.totalEstimatedWorkMinutes = mserviceCart.reduce(
			 			(a, b) => a + b.estimatedWorkMinutes,
			 			0
			)
			state.selected.paymentInfo.totalPrice = mserviceCart.reduce((a, b) => a + b.price, 0)

		},
		BOOKING_REMOVE_FROM_CART:(state, action) => {
			let serviceOrder
			if(state.selected.serviceCart.length > 0){
				serviceOrder = state.selected.serviceCart.find((e) =>
					e.service._id == action.payload
				 )
			}

			if (!!serviceOrder) {
				state.selected.serviceCart = state.selected.serviceCart.filter((e) => e.service._id !== action.payload)
			}

			//TODO: updateTotalEstimadoWorkMinutes and paymentInfo

		},
		BOOKING_SET_BRANCH:(state,{payload}) => {
			state.selected.branch=payload
		}

  }
});


// Action creators are generated for each case reducer function
export const {
	BOOKING_ISINBRANCH,
	BOOKING_NOTISINBRANCH,
	BOOKING_CREATE_REQUEST,
	BOOKING_GET_BY_CUSTOMER_REQUEST,
	BOOKING_CLEAR,
	BOOKING_SET,
	BOOKING_SET_CUSTOMER,
	BOOKING_PAGO,
	BOOKING_CUSTOMER_FULLNAME,
	BOOKING_CUSTOMER_PHONE,
	BOOKING_ADD_TO_CART,
	BOOKING_REMOVE_FROM_CART,
	BOOKING_SET_CART,
	BOOKING_SET_BRANCH } = bookingSlice.actions;
