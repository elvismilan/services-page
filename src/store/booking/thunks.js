import _fetch from "../../wrappers/_fetch";
import { BOOKING_CLEAR, BOOKING_COUPON_FAILURE, BOOKING_COUPON_SUCCESS, BOOKING_CREATE_REQUEST } from "./bookingSlice";
import Swal from "sweetalert2";

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
    create(booking,'booking').then(
      ()=>{
        console.log('create booking successful');
        dispatch( BOOKING_CLEAR() );
        onConfirmation();
      }
    );

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
    create({code,services},'coupon/verify').then(
      (response)=>{
        dispatch( BOOKING_COUPON_SUCCESS(response) );
				setTimeout(function () {
          Swal.fire('Cupon Aplicado.',response?.reason,'success')
				}, 500)
      },
      (error)=>{
        dispatch( BOOKING_COUPON_FAILURE(error) );
				setTimeout(function () {
          Swal.fire('Cupon Inválido.',error?.message,'error')
				}, 500)

      }
    );

  }
}
