import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import AutoComplete from "./Buscardor";
//import Autocomplete from "react-google-autocomplete";

const location = {
  address: "santa cruz, Bolivia, Av. cumavi",
  lat:-17.7917873,
  lng:-63.1355414,
};

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ address="santa cruz, Bolivia, Av. cumavi", lat="-17.7917873", lng="-63.1355414" }) => {
  return (
    <div className="map">
      {/* <h2 className="map-h2">Come Visit Us At Our Campus</h2> */}
      {/* <Autocomplete
        apiKey={"AIzaSyBEdXyDKYlIu9xV8qcBidcDnfsAwIN0Luo"}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />; */}

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDTLtxGuSpbM9VRudSVAUAjuilzLKnHQCk" }}
          defaultCenter={location}
          defaultZoom={17}>
          <LocationPin
            lat={lat}
            lng={lng}
            text={address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
