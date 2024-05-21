import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import AutoComplete from "./Buscardor";
import Marker from "./Marker";

import GoogleMap from 'google-maps-react-markers'
import { APIProvider,Map,AdvancedMarker,Pin,InfoWindow } from "@vis.gl/react-google-maps";


//import Autocomplete from "react-google-autocomplete";

const Maps = ({ address="santa cruz, Bolivia, Av. cumavi", lat="-17.7917873", lng="-63.1355414" }) => {

  const [location, setLocation] = useState({address,lat,lng})
  console.log(address,lat,lng);

  useEffect(() => {
    setLocation({address,lat,lng})
    console.log('update');
  }, [address])


  return (
    <APIProvider apiKey="AIzaSyDTLtxGuSpbM9VRudSVAUAjuilzLKnHQCk" >

   <div className="map">
      {/* <h2 className="map-h2">Come Visit Us At Our Campus</h2> */}
      {/* <Autocomplete
        apiKey={"AIzaSyBEdXyDKYlIu9xV8qcBidcDnfsAwIN0Luo"}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />;
      https://visgl.github.io/react-google-maps/examples/geometry
      */}

      <div className="google-map">
      <Map center={location} zoom={14}>

        <Marker
          position={location}
          clickable={true}
          onClick={() => alert('marker was clicked!')}
          title={'clickable google.maps.Marker'}
        />

      </Map>

{/*
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDTLtxGuSpbM9VRudSVAUAjuilzLKnHQCk" }}
          center={location}
          zoom={16}
           onClick={ev => {
            // console.log(ev);
          }}

          >
          <Marker

            text={location.address}
            lng={location.lng}
            lat={location.lat}
          />
           <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact> */}
      </div>
    </div>
    </APIProvider>
  );
};

export default Maps;
