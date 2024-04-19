
export const servicesApi = async() => {

  const urlApi = process.env.REACT_APP_API_URL;
  const idProveedor = process.env.REACT_APP_ID_PROVIDER_EXAMPLE;

  const urlPath = `${urlApi}/service/provider/${idProveedor}`;

  try {
    const resp = await fetch( urlPath , {
      method: 'GET'
    }).then( handleResponse );
    return resp;
  } catch (error) {

    console.log(error);
    throw new Error( error.message );
  }

}

function handleResponse(response) {
    return response.text().then(text => {

        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message || data.error ) || response.statusText;
            return Promise.reject({message: error.toString(), code: response.status} );
        }

        return data;
    });
}
