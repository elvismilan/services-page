import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import List from "../molecules/List";
import Item from "../atoms/Item";

const Servicios = (props) => {

  const defaultItems = [
    { id: 1,  empresa: 'Negocio 1', puntaje: '4.5', latitud: '100', longitud: '200' , logo: 'https://placehold.co/600x600', tipo: 'D',
      categoria: ['uñas'],
      servicios: [{ id: 1, titulo: 'Servicio 1', precio: '80', image: 'https://placehold.co/200x200'}, { id: 2, empresa: 'Servicio 2' , precio: '145', image: 'https://placehold.co/200x200' }]
    },
    { id: 2,  empresa: 'Negocio 2', puntaje: '5', latitud: '300', longitud: '400' , logo: 'https://placehold.co/600x600', tipo: 'L',
      categoria: ['pies','cabellos'],
      servicios: [{ id: 1, titulo: 'Servicio 3', precio: '80', image: 'https://placehold.co/200x200'}, { id: 2, empresa: 'Servicio 4' , precio: '145', image: 'https://placehold.co/200x200' }]
    },
    { id: 3,  empresa: 'Negocio 3', puntaje: '3.5', latitud: '500', longitud: '600' , logo: 'https://placehold.co/600x600', tipo: 'D', categoria: ['cabeza','uñas'] },
    { id: 4,  empresa: 'Negocio 4', puntaje: '4.2', latitud: '700', longitud: '800' , logo: 'https://placehold.co/600x600', tipo: 'L', categoria: ['uñas','cabellos'] },
    { id: 5,  empresa: 'Negocio 5', puntaje: '4.8', latitud: '900', longitud: '1200' , logo: 'https://placehold.co/600x600', tipo: 'D', categoria: ['uñas','cabellos'] },
    { id: 6,  empresa: 'Negocio 6', puntaje: '39', latitud: '1100', longitud: '1400' , logo: 'https://placehold.co/600x600', tipo: 'L', categoria: ['uñas','cabellos'] },
    { id: 7,  empresa: 'Negocio 7', puntaje: '4.1', latitud: '1300', longitud: '1600' , logo: 'https://placehold.co/600x600', tipo: 'D', categoria: ['uñas','cabellos'] },
    { id: 8,  empresa: 'Negocio 8', puntaje: '4.3', latitud: '1500', longitud: '1800' , logo: 'https://placehold.co/600x600', tipo: 'L', categoria: ['uñas','cabellos'] },

  ];

  return (
    <Main
      header={<Header />}
      footer={<Footer />}
    >
      <List>
        {defaultItems.map(item =>
          <Item
            key= {item.id}
            id= {item.id}
            empresa= {item.empresa}
            puntaje= {item.puntaje}
            image= {item.logo}
            categoria = {item.categoria}
            latitud= {item.latitud}
            longitud= {item.longitud}
            servicios= {item.servicios}
          />
        )}
      </List>

    </Main>
  )
}

export default Servicios
