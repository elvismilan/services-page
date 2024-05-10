import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { useEffect, useState } from "react";
import { startListServicios } from "../store/servicios";
import { setDesactiveLoading, setItems } from "../store/carrito/carritoSlice";
import { BOOKING_SET_CART } from "../store";


export const useCheckAuthToken = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  // const initialCart = () => {
  //   console.log('loadin ....');
  //   console.log(  JSON.parse( localStorage.getItem('carrito') ) );
  //   return JSON.parse( localStorage.getItem('carrito') );
  //   const localStorageCart = localStorage.getItem('carrito');
  //   return localStorageCart ? JSON.parse(localStorageCart):[]
  // }

  const [items, setItems] = useState([]);

  const { selected } = useSelector( state => state.booking );

  useEffect(() => {
    console.log('update cart ....');
    console.log(selected.serviceCart);
    localStorage.setItem('carrito', JSON.stringify(selected.serviceCart)  );
  }, [items,selected]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('carrito'));
    console.log(items);
    if (items) {
    setItems(items);
    }

     const token = localStorage.getItem("authToken");
     if (!token) {
       dispatch(logout());
       return ;
     }

     const user = JSON.parse(localStorage.getItem("user"));
     const email =user.email;
     const first_name = user.first_name;
     const last_name = user.last_name;
     const _id = user.id;
     const formData = {
      uid: _id,
      email: email,
      displayName: first_name + " " + last_name,
      photoURL: "",
    };
    dispatch(login(formData));
    dispatch( startListServicios() );
    dispatch( setDesactiveLoading() );
  }, []);


  return {
    status
  }

}
