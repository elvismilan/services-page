import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Lista } from "../atoms/Lista"
import List from "../molecules/List"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import Main from "../templates/Main"
import Button from "../atoms/Button"

export const Cart = () => {

  const navigate = useNavigate();
  const { services } = useSelector( state => state.carrito );
  const { selected } = useSelector( state => state.booking );
  const l_services = selected.serviceCart;
  // const servicios =[
  //   { id: 1, titulo: 'Servicio 1', precio: '80', image: 'https://placehold.co/200x200'} ]

  const onServicio = () => {
    navigate('/servicios');
  }

  return (

    <>

    <Main
      header={<Header />}
      footer={<Footer titulo="Solicitar Servicio" enlace="servicio" />}
    >
      <List >

         {/* <ul>
          {
            (services)?
              services.map(
                servicio =>{
                  return <li key={servicio._id} >
                    <Lista servicio={ servicio } showallicon={true} cant={ servicio.cant }  />
                  </li>
                }
              )
              : ''

          }
        </ul> */}
        <hr></hr>
         <ul>
          {
            (l_services)?
              l_services.map(
                servicio =>{
                  return <li key={servicio.service._id} >
                    <Lista orden={servicio} servicio={ servicio.service } showallicon={true} cant={ servicio.cant }  />
                  </li>
                }
              )
              : ''
          }
        </ul>



        <div className="container flexCenter mx-auto">
          <Button className="" onClick={ onServicio } >
            Agregar otro Servicio
          </Button>
        </div>

      </List>

    </Main>
    </>
  )
}
