import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { useEffect } from "react";

export const useCheckAuthToken = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.clear();
      dispatch(logout());
      return ;
    }

    const email = localStorage.getItem("email");
    const first_name = localStorage.getItem("first_name");
    const last_name = localStorage.getItem("last_name");
    const _id = localStorage.getItem("uid");

    const formData = {
      uid: _id,
      email: email,
      displayName: first_name + " " + last_name,
      photoURL: "",
    };

    dispatch(login(formData));
  }, []);

  return {
    status
  }

}
