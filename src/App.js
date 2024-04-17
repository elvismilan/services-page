import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Registrarse from "./components/pages/Registrarse";
import RegistrarUbicacion from "./components/pages/RegistrarUbicacion";
import Home from "./components/pages/Home";
import Servicios from "./components/pages/Servicios";
import NotFound from "./components/pages/NotFound"
import ServiceAppointment from "./components/pages/ServiceAppointment";
import { Thanks } from "./components/pages/Thanks";
import { Cart } from "./components/pages/Cart";
import { Empresa } from "./components/pages/Empresa";
import { SucursalesPage } from "./components/pages/SucursalesPage";
import { ConfirmacionPage } from "./components/pages/ConfirmacionPage";
import { useCheckAuthToken } from "./hooks/useCheckAuthToken";

function App() {

  const { status } = useCheckAuthToken();


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/programar" element={<ServiceAppointment />} />
        <Route path="/gracias" element={<Thanks />} />
        <Route path="/ubicacion" element={<RegistrarUbicacion />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/sucursales" element={<SucursalesPage />} />
        <Route path="/confirmacion" element={<ConfirmacionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
