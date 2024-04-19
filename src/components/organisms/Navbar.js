import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import {BiUser} from "react-icons/bi"
import Button from "../atoms/Button";
import { startLogout } from "../../store";
import { startListServicios } from "../../store/servicios";
import {  useNavigate } from "react-router-dom";

  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

export const Navbar = ({onClick}) => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCheckingAuthentication =  useMemo( () => status === 'authenticated',[status] );

  // const items = dispatch(startListServicios());
  // console.log(items);

  const onLogout = ( event ) => {
    event.preventDefault();
    dispatch( startLogout());
  }



  const handleOnSelect = (item) => {
    //console.log(item);
    navigate('/carrito');
  };


  return (
  <nav className="flex justify-center sm:justify-between flex-col sm:flex-row w-full pt-6">

        <div className="flex justify-end flex-row-reverse sm:w-2/3 rounded-2xl  mb-3 sm:mb-0" >
          <ReactSearchAutocomplete
            placeholder="Buscar Servicio"
            items={items}
             onSelect={handleOnSelect}
            styling={{ zIndex: 4 }} // To display it on top of the search box below
            autoFocus
            className="w-full rounded-2xl text-secondary search"
          />
        </div>

    <div className="text-center sm:text-right md:text-right">
      <Button
        className = {`font-bold px-0 sm:pr-0 ${ isCheckingAuthentication?"hidden":"" } `}
        href = "/login"
        onClick = {onClick}
        decoration={<BiUser size="2rem" className="text-primary" />}>
        Iniciar Sesión
      </Button>
      <Button
        className = {`font-bold px-0 sm:pr-0 ${ !isCheckingAuthentication?"hidden":"" } `}
        href = "/logout"
        onClick = {onLogout}
        decoration={<BiUser size="2rem" className="text-primary" />}>
        Cerrar Seccion
      </Button>
    </div>
  </nav>
  )
};

export default Navbar
