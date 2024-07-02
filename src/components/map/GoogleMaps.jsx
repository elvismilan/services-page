import React, { useEffect, useRef, useState } from "react";
import { createCustomEqual } from "fast-equals";

const DEFAULT_CENTER ={ lat:-17.7917873, lng:-63.1355414 };
const DEFAULT_ZOOM = 15;

export const GoogleMaps = ({locations,className}) => {
  const ref = useRef(null);

  const [center, setCenter] = useState(locations);
  const [clicks, setClicks] = useState([]);
  const [current, setCurrent] = useState({});


  const onClick = (e) => {
    console.log(e.latLng);
    setClicks([e.latLng]);
    setCurrent({});
  };

  const onIdle = (m) => {
    console.log("onIdle");
    // setZoom(m.getZoom()!);
    // setCenter(m.getCenter()!.toJSON());
  };

  const form = (
    <div
      style={{
        padding: "1rem",
        flexBasis: "250px",
        height: "100%",
        overflow: "auto"
      }}
    >
      <br />
      <label htmlFor="lat">Latitude</label>
      <input
        type="number"
        id="lat"
        name="lat"
        value={center.lat}
        onChange={(event) =>
          setCenter({ ...center, lat: Number(event.target.value) })
        }
      />
      <br />
      <label htmlFor="lng">Longitude</label>
      <input
        type="number"
        id="lng"
        name="lng"
        value={center.lng}
        onChange={(event) =>
          setCenter({ ...center, lng: Number(event.target.value) })
        }
      />
      <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
      {clicks.map((latLng, i) => (
        <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
      ))}
      <button onClick={() => setClicks([])}>Clear</button>
    </div>
  );

  const getUserLocation = (event) => {
    event.preventDefault();

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          const latlng = {
            'lat':latitude,
            'lng':longitude
          }
            setCurrent(latlng);
           console.log(latlng);
           setCenter(latlng);
          setClicks([])

        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error);
        }
      );

    } else {
      console.log("Geolocation is not supported by this browser.");
    }

  }

  return (
    <>
      {/* <div
        ref={ref}
        style={{ width: "100%", height: "300px" }}
      /> */}
        <h3 className="font-normal hover:font-bold  text-primary mb-5">
          <button onClick={ getUserLocation }>
            Usar mi ubicacion actual
          </button>
        </h3>

        <Map
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom= {DEFAULT_ZOOM}
          style={{ flexGrow: "1", width: "100%", height:"300px" }}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
          { Object.entries(current).length === 0 ? ( ''):(<Marker position={current} />)
          }

        </Map>

    {form}
    </>
  );
};



const Map = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);
  console.log(React.Children);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const addSingleMarkers = ({locations,map}) =>
  locations.map(
    position =>
      new window.google.maps.Marker({
        position,
        map,
      }),
  );

const Marker = (options) => {
  const [marker, setMarker] = useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const deepCompareEqualsForMaps = createCustomEqual(
  (deepEqual) => (a, b) => {
    if (
      (a) ||
      a instanceof window.google.maps.LatLng ||
      (b) ||
      b instanceof window.google.maps.LatLng
    ) {
      return new window.google.maps.LatLng(a).equals(new window.google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
  }
);

function useDeepCompareMemoize(value) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(
  callback,
  dependencies
) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}
