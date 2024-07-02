import { GoogleMaps } from "./GoogleMaps"
import { Mapv2 } from "./Mapv2"

export const LOCATIONS =
  { lat:-17.7917873, lng:-63.1355414 }
;

export const MapComponent = () => {
  return (
    <Mapv2 >
      <GoogleMaps locations={LOCATIONS} />
    </Mapv2>
  )
}
