import { checkingCredentials, clearErrorMessage, confirmation, login, logout } from "./";
import { registerApi } from "./helpers/registerApi";
import { loginApi } from "./helpers/loginApi";


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

export const startLoginWithEmailPassword = ({email, password,role},onServicios) => {
  return async(dispatch) => {
    dispatch( checkingCredentials() );
    const { data } = await loginApi({email, password, role});

    if( data.error ) {
      dispatch( logout( data ) );
      setTimeout(() => {
        dispatch( clearErrorMessage() );
      },10);
      return;
    }

      localStorage.setItem('token',data.data.token);
      localStorage.setItem('email',data.user.email);
      localStorage.setItem('first_name',data.user.first_name);
      localStorage.setItem('last_name',data.user.last_name);
      localStorage.setItem('uid',data.user._id);
      localStorage.setItem('token-init-data',new Date().getTime());

      const formData = {
        uid:        data.user._id,
        email:     data.user.email,
        displayName:   data.user.first_name+' '+data.user.last_name,
        photoURL:    '',
      }

      dispatch( login(formData) );

      onServicios();

  }
}


export const startLogout = () => {
  return (dispatch) => {
      localStorage.clear();
      dispatch(logout());
  }
}
