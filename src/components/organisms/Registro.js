import Input from "../atoms/Input";
import Button from "../atoms/Button";

import { useNavigate } from 'react-router-dom';

export const Registro = () => {

  const navigate = useNavigate();
  const onSubmit = ( event ) => {
    event.preventDefault();
    navigate('/ubicacion');
  }
  return (
  <form className="text-center" method="POST" onSubmit={ onSubmit } >
    <h3 className="h3 text-primary">Crear Cuenta</h3>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="nombre"
          type="text"
          label="Nombre(s)"
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="apellido"
          type="text"
          label="Apellido(s)"
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="email"
          type="email"
          label="Correo electrónico"
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
      <div className="mb-3 sm:mb-6">
        <Input
          name="telefono"
          type="text"
          label="Teléfono"
        />
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

export default Registro
