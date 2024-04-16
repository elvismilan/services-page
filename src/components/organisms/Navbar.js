import {BiUser} from "react-icons/bi"
import Search from "../molecules/Search";
import Button from "../atoms/Button";

export const Navbar = ({onClick}) => (

  <nav className="flex justify-center sm:justify-between flex-col sm:flex-row w-full pt-6">
    <Search />
    <div className="text-center sm:text-right md:text-right">
      <Button
        className = "font-bold px-0 sm:pr-0"
        href = "/login"
        onClick = {onClick}
        decoration={<BiUser size="2rem" className="text-primary" />}>
        Iniciar Sesión
      </Button>
    </div>
  </nav>
);

export default Navbar
