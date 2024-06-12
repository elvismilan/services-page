import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { startLoginGoogle, startLoginWithEmailPassword } from "../../store/auth";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { startListServicios } from "../../store";
import { useGoogleLogin  } from '@react-oauth/google';
import axios from "axios";
import { jwtDecode } from 'jwt-decode'
import { loginGoogleapi } from "../../store/auth/helpers/loginGoogleapi";

const formData = {
  email: '',
  password: '',
  role: 'cliente'
}

export const Login = () => {

  const [formSubmitedd, setFormSubmitedd] = useState(false)
  const { error } = useSelector( state => state.auth );
  const {selected} = useSelector( state => state.booking );

  const [ userg, setUserg ] = useState([]);

  useEffect(() => {
    if (userg) {
        fetchUserInfo(userg.access_token);
    }

  }, [userg])


  useEffect(() => {
    if( error !== null && formSubmitedd ){
      Swal.fire('Error en la authentificacion',error,'error')
    }

  }, [error])

  const { email, password,role, onInputChange, formState } = useForm( formData ) ;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserInfo = async (token) => {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const user = await response.json();
    dispatch(startLoginGoogle(user,onInicio))
    return user;
  };


  const onInicio = () => {
    navigate('/')
  }
  const onServicios = () => {
    if(selected.isInBranch){

    navigate('/sucursales')
    }else{

    navigate('/servicios')
    }
  }


  const login = useGoogleLogin({
    onSuccess: tokenResponse =>  setUserg(tokenResponse),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitedd(true);

    dispatch( startListServicios() );
    dispatch(startLoginWithEmailPassword({email,password,role},onServicios));
  }



  return (
<>
   <form className="text-center" method="POST" onSubmit={ onSubmit } >
    <Logo className="h-8 sm:h-14 mb-6 sm:mb-14 " />
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          type="email"
          label="Email"
          name= "email"
          value={email}
          onChange={ onInputChange }
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          type="password"
          label="Contraseña"
          name= "password"
          value={password}
          onChange={ onInputChange }

        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6 text-right">
        <Button
          bg = "bg-transparent"
          tc= "text-primary"
          className = "font-[400] !p-0 !text-[14px] !sm:text-[13px]"
          href = "https://app.teayudo.com.bo/#/forgotPassword?role=cliente"
        >
          Olvidaste tu contraseña?
        </Button>
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Button
          //href={"/empresa"}
          type="submit"
          bg="bg-primary w-[250px] sm:w-[270px] mx-auto hover:bg-white "
          tc="text-white hover:text-secondary"
          className="sm:h-[48px] !text-[14px] bordered">
          Ingresar
        </Button>
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Button
          href={"/registrarse"}
          bg="btn-transparent w-[250px] sm:w-[270px] mx-auto"
          tc="text-secondary hover:text-white "
          className="sm:h-[48px] !text-[14px] bordered">
          Registrarse
        </Button>
      </div>
    </div>
  </form>
    <div className="text-center" >
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Button onClick={() => login()}
          bg="btn-transparent w-[250px] sm:w-[270px] mx-auto"
          tc="text-secondary hover:text-white "
          className="sm:h-[48px] !text-[14px] bordered mt-0 pt-0"
          >
         Iniciar Sesion con Google
        </Button>
      </div>
    </div>

    </div>



</>
  )
}

export default Login
