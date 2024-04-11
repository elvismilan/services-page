import Input from "../atoms/Input";
import Button from "../atoms/Button";

import { useNavigate } from 'react-router-dom';

export const RegistroUbicacion = () => {

  const navigate = useNavigate();
  const onSubmit = ( event ) => {
    event.preventDefault();
    navigate('/servicios');
  }
  return (
  <form className="text-center" method="POST" onSubmit={ onSubmit } >

    <h3 className="mb-3 h3 text-left">Ingresa tu direccion</h3>
    <p className="mb-5 text-left text-gray-600" > loreDuis exercitation proident occaecat minim id magna tempor aliqua laborum veniam. </p>

    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="nombre"
          type="text"
          label="Escribe tu direccion"
        />
      </div>
    </div>

    <h3 className="font-normal hover:font-bold  text-primary mb-5">Usar mi ubicacion actual</h3>

    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">

              <img src='https://placehold.co/600x200' alt="" width="600" height="150" className="flex-none rounded-md bg-slate-100" />
      </div>
    </div>

    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Button type='submit'
          className="sm:h-[48px] !text-[14px]">
          Registrarse
        </Button>
      </div>
    </div>
  </form>

  )

}

export default RegistroUbicacion
