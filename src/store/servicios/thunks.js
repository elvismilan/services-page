import { servicesApi } from "./helpers"
import { setServices } from "./serviciosSlice";


export const startListServicios = () => {
  return async(dispatch) => {


    const idProveedor = process.env.REACT_APP_ID_PROVIDER_EXAMPLE;
    if( !idProveedor ) throw new Error('El ID del proveedor no existe');



    const services = await servicesApi( idProveedor );
    dispatch( setServices(services.data) );

  }
}
