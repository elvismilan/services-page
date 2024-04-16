
import { useDispatch } from "react-redux";
import { checkingAuthentication } from "../../store/auth";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";


export const Login = () => {

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  }


  return (

   <form className="text-center" method="POST" onSubmit={ onSubmit } >
    <Logo className="h-8 sm:h-14 mb-6 sm:mb-14 " />
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="username"
          type="email"
          label="Email"
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="password"
          type="password"
          label="Contraseña"
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
