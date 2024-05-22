import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

import { useNavigate } from 'react-router-dom';
import Maps from "../map/Map";
import AutoComplete from "../map/Buscardor";


export const RegistroUbicacion = () => {

 var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const [position, setPosition] = useState({ lat: -34.397, lng: 150.644 });
  const [ubication, setUbication] = useState({})
  useEffect(() => {

    console.log(ubication);

  }, [ubication])

  const getUserLocation = (event) => {
    event.preventDefault();

    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

  }

  const navigate = useNavigate();
  const onSubmit = ( event ) => {
    event.preventDefault();
    navigate('/servicios');
  }

  return (
  <>
    <form className="text-center" method="POST" onSubmit={ onSubmit } >

    <h3 className="mb-3 h3 text-left">Ingresa tu direccion</h3>
    <p className="mb-5 text-left text-gray-600" > loreDuis exercitation proident occaecat minim id magna tempor aliqua laborum veniam. </p>

    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <AutoComplete setUbication={setUbication} />
      </div>
    </div>

    <h3 className="font-normal hover:font-bold  text-primary mb-5">
      <button onClick={ getUserLocation }>
        Usar mi ubicacion actual
      </button>
    </h3>

    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">

        {/* <p className="bg-info">London, United Kingdom</p> */}
        <div className="map">
          {
            (!!ubication.coordinates)?
            <Maps address={ubication.direction}
                lat={ ubication.coordinates.latitude }
                lng={ ubication.coordinates.longitude }
            />
            : ''

          }
        </div>


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

  </>

  )

}

export default RegistroUbicacion
