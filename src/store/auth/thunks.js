import { useNavigate } from "react-router-dom";
import { checkingCredentials, confirmation, logout } from "./";
import { registerApi } from "./helpers/registerApi";


export const checkingAuthentication = (email,password) => {
  return async(dispatch)=>{
   dispatch(checkingCredentials());

  }
}

export const startCreatingUserWithEmailPassword = ({ first_name,last_name,email,password,phone,role },onConfirmation) => {

 return async(dispatch) => {

    dispatch(checkingCredentials());
    const result = await registerApi({first_name,last_name,email,password,phone,role });

    const newResult = {
      email: email,
    }

    if( result.error )
       return dispatch( logout( result ) );

    dispatch( confirmation(newResult) );

    onConfirmation();
 }

}
