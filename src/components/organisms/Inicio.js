import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../atoms/Button";
import Swal from "sweetalert2";

export const Service = () => {

  const {status} = useSelector( state => state.auth );
  const navigate = useNavigate();


  const [userPos, setUserPos] = useState({lat: null, long: null})

  var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    if (err.code == 1) {
      Swal.fire('Acepte los permisos de ubicacion.',error,'error')
    }
  }

  const getPosition = (data) => {
    const newUserPos = {
          lat: data.coords.latitude,
          long: data.coords.longitude,
    };
    setUserPos(newUserPos)
    console.log(newUserPos)
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition, error, options);
  }, []);





  const onServicioDomicilio = (event) => {
    event.preventDefault();
    status === 'authenticated' ? navigate('/servicios'):navigate('login')
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
            href = "/sucursales"
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
