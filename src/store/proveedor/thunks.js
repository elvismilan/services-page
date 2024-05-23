import { providerApi } from "./helpers";
import { provider_getall_failure, provider_getall_request, provider_getall_success } from "./proveedorSlice";

export const startListProveedores = () => {
  return async (dispatch) => {
    dispatch( provider_getall_request() );

    const {data} = await providerApi();
		let error = data.error;
    if( error  ) {
      dispatch( provider_getall_failure(error.toString()) );
      return;
    }

    dispatch( provider_getall_success(data) )


  };
};
