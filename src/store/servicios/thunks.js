import { useState } from "react";
import { servicesApi } from "./helpers"
import { setServices } from "./serviciosSlice";
import Swal from "sweetalert2";

export const startListServicios = () => {
  return async (dispatch) => {
    const idProveedor = process.env.REACT_APP_ID_PROVIDER_EXAMPLE;
    if (!idProveedor) throw new Error("El ID del proveedor no existe");

    const services = await servicesApi(idProveedor);
    dispatch(setServices(services.data));
  };
};
export const startListServiciosbyProvider = (idProveedor) => {
  return async (dispatch) => {
    if (!idProveedor) throw new Error("El ID del proveedor no existe");

    const services = await servicesApi(idProveedor);
    dispatch(setServices(services.data));
  };
};


export const startAddService = ({ _id,imageURL,unitPrice,name,description }) => {

//  const [count, setCount] = useState(0);
    const onAdd = () => {
      console.log('add');
    }
return async(dispatch) =>{

    console.log( { _id,imageURL,unitPrice,name,description } );

    const count =0;

    const { value: formValues } = await Swal.fire({
      title: "Cantidad",
      html: `
        ${name}
        ${description}
        <button >
            +
        </button>
            <input type="text" id="username" class="swal2-input" placeholder="Username">
        <input id="swal-input1" class="swal2-input" value="${count}">

      `,
      confirmButtonText: 'Agregar',
      focusConfirm: false,
      //didOpen: () => {
      //  const usernameInput = popup.querySelector('#username')
      //  usernameInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
      //},
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
        ];
      }
    });
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }


  };
};
