import { Lista } from "../atoms/Lista"
import List from "../molecules/List"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import Main from "../templates/Main"

export const Cart = () => {

  const servicios =[
    { id: 1, titulo: 'Servicio 1', precio: '80', image: 'https://placehold.co/200x200'} ]


  return (

    <>

    <Main
      header={<Header />}
      footer={<Footer titulo="Solicitar Servicio" enlace="servicio" />}
    >
      <List >

         <ul>
          {
            (servicios)?
              servicios.map(
                servicio =>{
                  return <li key={servicio.id} >
                    <Lista servicio={ servicio } showallicon={true}  />
                  </li>
                }
              )
              : ''

          }
        </ul>



      </List>

    </Main>
    </>
  )
}
