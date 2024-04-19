import { servicesApi } from "./helpers"

export const startListServicios = () => {
  return async(dispatch) => {
    const resp = await servicesApi();
    return resp.data;
  }
}
