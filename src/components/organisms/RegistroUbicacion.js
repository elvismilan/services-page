import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

import { useNavigate } from 'react-router-dom';
import Map from "../map/Map";
import AutoComplete from "../map/Buscardor";



import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        center={props.center}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))



export const RegistroUbicacion = () => {
  const [position, setPosition] = useState({ lat: -34.397, lng: 150.644 });
  const [ubication, setUbication] = useState({})
  useEffect(() => {
    console.log(ubication);

  }, [ubication])

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

    <h3 className="font-normal hover:font-bold  text-primary mb-5">Usar mi ubicacion actual</h3>

    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">

        <p className="bg-info">London, United Kingdom</p>
        <div className="map">
          <Map address={ubication.direction}
              lat={ ubication.coordinates.latitude }
              lng={ ubication.coordinates.longitude }
          />
        </div>


      </div>
    </div>


      <button onClick={() => setPosition({lat: 30, lng: 10})}>,
        Click me
      </button>
      <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          center={position}
          mapElement={<div style={{ height: `1000px`}} />}
      />


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
