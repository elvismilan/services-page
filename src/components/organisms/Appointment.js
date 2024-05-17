import React, { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import TextArea from '../atoms/TextArea'
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

import { useCreateBookingScreen } from "./../../hooks/useCreateBookingScreen";
import { useDispatch, useSelector } from 'react-redux';
import { addDays, format } from 'date-fns';
import { BOOKING_CUSTOMER_FULLNAME, BOOKING_CUSTOMER_PHONE, BOOKING_PAGO, BOOKING_SET } from '../../store';

//import es from 'date-fns/locale/es';
//registerLocale( 'es', es );

export const Appointment = () => {

	const booking = useSelector((state) => state.booking.selected)
	const bookingLoading = useSelector((state) => state.booking.loading)
	const state = useSelector((state) => state)
	const provider = useSelector((state) => state.proveedor.selected)
	const dispatch = useDispatch()

  const {
		// showCalendarModal,
		// closeModal,
		// _hourPicker,
		maxAvailableAfterHours,
		availability,
		// showCouponrModal,
		// setShowCouponModal,
		dialogVisible,
		// onVerifyCoupon,
		// setShowCalendarModal,
		hour,
		// _setHour,
		hourPicker,
		discount,
		paymentMethods,
		// selectedValue,
	  onValueCh,
		addresses,
		setDialogVisible,
		onSubmit,
		valueFact,
		setValueFact,
		// handleValueFact,
  } = useCreateBookingScreen();

  const [formValues, setFormValues] = useState({
    name: 'frank Callapa',
    telefono: '',
    start: addDays(new Date(),1), //new Date(),
    empleado: '',
    descuento: '',
    metodopago: ''
  })
  const onInputChanged = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
    if(target.name === "metodopago"){
      const paymentMethod= target.value;
      dispatch( BOOKING_PAGO({paymentMethod}) );
    }
    if(target.name === "name"){
      const fullName= target.value;
      dispatch( BOOKING_CUSTOMER_FULLNAME({fullName}) );
    }
   if(target.name === "telefono"){
      const phone= target.value;
      dispatch( BOOKING_CUSTOMER_PHONE({phone}) );
    }

   if(target.name === "direccion"){

    const a =!!target.value?JSON.parse(target.value):''
    onValueCh(a);

   }

  }

  const onDateChange = (event) => {
    setFormValues({
      ...formValues,
      ['start']: event
    })

    //TODO: guardar fecha
     const result = format(event, "yyyy-MM-dd'T'HH:mm:ssxxx")
     dispatch( BOOKING_SET({
      bookingDate:result
     }) )

  }


  const navigate = useNavigate();
  // const onSubmit = ( event ) => {
  //   event.preventDefault();
  //   console.log('Enviar formulario');

  //   console.log(formValues);

  //   //navigate('/gracias');
  // }

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
          minDate={ formValues.start }
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
          value={ formValues.empleado }
          onChange={ onInputChanged }
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Input
          name="descuento"
          type="text"
          label="Codigo de descuento"
          value={ formValues.descuento }
          onChange={ onInputChanged }
        />
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        {/* <Input
          name="metodo"
          type="text"
          label="Metodo de pago"
        /> */}
        <select
          name='metodopago'
          className='rounded-2xl border-solid border border-primary w-full px-4 sm:px-6 py-2 sm:py-3 text-secondary'
          value={ formValues.metodopago }
          onChange={ onInputChanged }
        >
          <option value=""> Seleccionar ... </option>
          {
            paymentMethods.map( metodo => {
              return <option key={metodo.value} value={ metodo.value } > { metodo.label }  </option>
            } )
          }
          <option></option>
        </select>
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6 text-left">
        <h2 className='text-primary font-[600] ' >
        Direccion (seleccionar direccion)
        </h2>

      </div>
      <div className="mb-3 sm:mb-6">
        <select
          name='direccion'
          className='rounded-2xl border-solid border border-primary w-full px-4 sm:px-6 py-2 sm:py-3 text-secondary'
          value={ formValues.direccion }
          onChange={ onInputChanged }
        >
          <option value=""> Seleccionar ... </option>
          {
            addresses.map( metodo => {
              return <option key={metodo.key} value={ JSON.stringify(metodo) } > { metodo.direction }  </option>
            } )
          }
        </select>

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
