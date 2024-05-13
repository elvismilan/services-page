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

		let responseJSON = data;
		let error = data.error;

    if( error ) {
      dispatch( logout( data ) );
      setTimeout(() => {
        dispatch( clearErrorMessage() );
      },10);
      return;
    }
    if (responseJSON.error) {
      responseJSON = {
        user: {
          role: false,
        },
      }
    }
    if (
      !error &&
      responseJSON.user.role !== 'proveedor-empleado' &&
      responseJSON.user.role != 'empleado' &&
      responseJSON.user.role != 'proveedor-empresa' &&
      responseJSON.user.state
    ){
    		await localStorage.setItem(
					'authToken',
					'Bearer ' + responseJSON['data']['token']
				)
				await localStorage.setItem('user', JSON.stringify(responseJSON['user']) )

      const formData = {
        uid:        data.user._id,
        email:     data.user.email,
        displayName:   data.user.first_name+' '+data.user.last_name,
        photoURL:    '',
      }

      dispatch( login(formData) );

      onServicios();

    }else if (!responseJSON.user.state) {
				await localStorage.removeItem('authToken')
				return setTimeout(
					function () {
          //	Alert.alert('Tu cuenta está inhabilitada')
              dispatch( clearErrorMessage() );
					}.bind(this),
					150
				)
			} else if (!error) {
				await localStorage.removeItem('authToken')
				return setTimeout(
					function () {
						//Alert.alert('Debes ingresar con una cuenta de cliente.')
            dispatch( clearErrorMessage() );
					}.bind(this),
					150
				)
			}

			return true

  }
}


export const startLogout = () => {
  return (dispatch) => {
		  localStorage.setItem('authToken', '')
		  localStorage.setItem('user', '')
      dispatch(logout());
  }
}
