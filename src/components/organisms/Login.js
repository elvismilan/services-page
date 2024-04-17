
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startLoginWithEmailPassword } from "../../store/auth";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import Swal from "sweetalert2";

const formData = {
  email: '',
  password: '',
  role: 'cliente'
}

export const Login = () => {

  const { error } = useSelector( state => state.auth );

  useEffect(() => {
    if( error !== null ){
      Swal.fire('Error en la authentificacion',error,'error')
    }

  }, [error])


  const { email, password,role, onInputChange, formState } = useForm( formData ) ;

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email,password,role}));

  }


  return (

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
          href = "#forgot"
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

  )
}

export default Login
