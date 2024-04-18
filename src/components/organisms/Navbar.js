import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {BiUser} from "react-icons/bi"
import Search from "../molecules/Search";
import Button from "../atoms/Button";
import { startLogout } from "../../store";

export const Navbar = ({onClick}) => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const isCheckingAuthentication =  useMemo( () => status === 'authenticated',[status] );

  const onLogout = ( event ) => {
    event.preventDefault();
    dispatch( startLogout());
  }

  return (
  <nav className="flex justify-center sm:justify-between flex-col sm:flex-row w-full pt-6">
    <Search />
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
