import axios from "axios";


const teayudoAPI = axios.create({
  baseURL:'https://test.teayudo.com.bo/api'
});

teayudoAPI.interceptors.request.use( config => {

  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }
return config;
})


export default teayudoAPI;
