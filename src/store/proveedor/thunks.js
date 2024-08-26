
import { providerApi } from "./helpers";
import { provider_getall_failure, provider_getall_request, provider_getall_success, provider_set } from "./proveedorSlice";

export const startListProveedores = (id_prov) => {
  return async (dispatch) => {
    
    dispatch( provider_getall_request() );

    const {data} = await providerApi();
		let error = data.error;
    if( error  ) {
      dispatch( provider_getall_failure(error.toString()) );
      return;
    }

    dispatch( provider_getall_success(data) )

    // const idProveedor = process.env.REACT_APP_ID_PROVIDER_EXAMPLE;
    const myProvider=data.filter((e) => e.slugUrl === id_prov)[0]
    // console.log(myProvider);
    dispatch( provider_set(myProvider));


  };
};
