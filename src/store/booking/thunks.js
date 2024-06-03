import _fetch from "../../wrappers/_fetch";
import { BOOKING_CLEAR, BOOKING_CREATE_REQUEST } from "./bookingSlice";

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || data.error || response.statusText;
      return Promise.reject({ message: error, code: response.status });
    }
    return data;
  });
}

  async function create(object, route) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object)
    };

    return await _fetch(`https://test.teayudo.com.bo/api/${route}/`, requestOptions).then(
      handleResponse
    );
  }

export const startCreateBooking = (booking,onConfirmation) => {
  return async(dispatch) => {
    console.log(booking);
    dispatch(BOOKING_CREATE_REQUEST(booking));
    create(booking,'booking').then(()=>{
      console.log('create booking successful');
      dispatch( BOOKING_CLEAR() );
      onConfirmation();
    });

    //TODO:slice
    //TODO:api

    return true;
  }
}

export const startVerifyCoupon = (booking) => {
  const{code,services} = booking
  console.log(booking);
  return async(dispatch) => {

    dispatch(BOOKING_CREATE_REQUEST(booking));
    // create(booking,'coupon/verify').then((response)=>{
    //   console.log('verificar coupon');
    //   console.log(response);
    // });

  }
}
