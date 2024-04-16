import { checkingCredentials } from "./";


export const checkingAuthentication = (email,password) => {
  return async(dispatch)=>{
   dispatch(checkingCredentials());

  }
}

export const startCreatingUserWithEmailPassword = ({ email,password }) => {

 return async(dispatch) => {


 }

}
