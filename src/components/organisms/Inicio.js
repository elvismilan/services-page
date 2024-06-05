import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../atoms/Button";
import Swal from "sweetalert2";
import { BOOKING_ISINBRANCH, BOOKING_NOTISINBRANCH } from "../../store";

export const Service = () => {

  const {status} = useSelector( state => state.auth );
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const onServicioDomicilio = (event) => {
    event.preventDefault();
    dispatch( BOOKING_NOTISINBRANCH() );
    status === 'authenticated' ? navigate('/servicios'):navigate('login')
  }

  const onServicioLocal = (event) => {
    event.preventDefault();
    dispatch( BOOKING_ISINBRANCH() );
    status === 'authenticated' ? navigate('/sucursales'):navigate('login')
  }

  return (
    <div className="text-center" >
      <h3 className="h3 text-primary">Quieres tu servicio <br />en el local o a dimicilio?</h3>

      <div className="col-span-full">
        <div className="mb-3 sm:mb-12">
          <Button
            bg="btn-transparent"
            tc="text-secondary hover:text-white"
            href = "/login"
            onClick={ onServicioDomicilio }
            className="sm:h-[80px] lg-text-[26px] sm bordered">
            Servicio a domicilio
          </Button>
        </div>
      </div>
      <div className="col-span-full">
        <div className="mb-3 sm:mb-6">
          <Button
            bg="btn-transparent"
            tc="text-secondary hover:text-white"
            href = "/login"
            onClick={ onServicioLocal }
            //onClick={() => gotToNewPage('L')}
            className="sm:h-[80px] lg-text-[26px] bordered">
            Servicio en el local
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Service
