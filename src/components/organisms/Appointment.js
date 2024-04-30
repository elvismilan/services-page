import React, { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import TextArea from '../atoms/TextArea'
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

//import es from 'date-fns/locale/es';
//registerLocale( 'es', es );

export const Appointment = () => {

  const [formValues, setFormValues] = useState({
    name: 'frank Callapa',
    telefono: '',
    start: new Date(),
  })

  const onInputChanged = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChange = (event) => {
    setFormValues({
      ...formValues,
      ['start']: event
    })

  }

  const navigate = useNavigate();
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log('Enviar formulario');
    navigate('/gracias');
  }

  return (
    <>
  <div className="col-span-full">
    <div className="mb-3 sm:mb-6 text-left">
      <h2 className='text-primary font-[600] ' >
      Programar el Servicio
      </h2>
    </div>
  </div>

  <form className="text-center" method="POST" onSubmit={ onSubmit }  >
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="name"
          type="text"
          label="Nombre y Apellido"
          value={ formValues.name }
          onChange={ onInputChanged }
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="telefono"
          type="text"
          label="Telefono"
          value={ formValues.telefono }
          onChange={ onInputChanged }
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <div className=' flex justify-end flex-row-reverse sm:w-2/3 rounded-2xl border-solid border-2 border-primary mb-3 sm:mb-0 ' >
        <DatePicker
          selected={ formValues.start }
          onChange={ (event) => onDateChange(event) }
          dateFormat="Pp"
          showTimeSelect
          className=" rounded-2xl  border  w-full px-4 sm:px-6 py-2 sm:py-3 text-secondary "
        />

        </div>
        {/* <Input
          name="fecha"
          type="text"
          label="Escoger Fecha"
        /> */}
      </div>
    </div>
    {/* <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="horario"
          type="text"
          label="Escoger horario"
        />
      </div>
    </div> */}
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="empleado"
          type="text"
          label="Empleado (opcional)"
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="descuento"
          type="text"
          label="Codigo de descuento"
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="metodo"
          type="text"
          label="Metodo de pago"
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6 text-left">
        <h2 className='text-primary font-[600] ' >
        Direccion (seleccionar direccion)
        </h2>
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">

              <img src='https://placehold.co/600x150' alt="" width="600" height="150" className="flex-none rounded-md bg-slate-100" />
      </div>
    </div>


    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <TextArea
          name="nota"
          type="text"
          label="Notas"
        />
      </div>
    </div>




    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Button
          type="submit"
          className="sm:h-[48px] !text-[14px]">
          Confirmar Servicio
        </Button>
      </div>
    </div>
  </form>

    </>
  )
}

export default Appointment
