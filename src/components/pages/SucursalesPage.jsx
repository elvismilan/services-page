import {useNavigate} from 'react-router-dom';
import Button from "../atoms/Button"
import { SucursalesItem } from "../atoms/SucursalesItem"
import List from "../molecules/List"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import Main from "../templates/Main"

export const SucursalesPage = () => {

const defaultItems = [
    { id: 1,  empresa: 'Negocio 1', puntaje: '4.5', latitud: '100', longitud: '200' , logo: 'https://placehold.co/600x600', tipo: 'D',
      categoria: ['uñas'],
    },
    { id: 2,  empresa: 'Negocio 2', puntaje: '4.5', latitud: '100', longitud: '200' , logo: 'https://placehold.co/600x600', tipo: 'D',
      categoria: ['uñas'],
    },
    { id: 3,  empresa: 'Negocio 3', puntaje: '4.5', latitud: '100', longitud: '200' , logo: 'https://placehold.co/600x600', tipo: 'D',
      categoria: ['uñas'],
    }
];


  const navigate = useNavigate();
  const onLogin = (  ) => {

    navigate('/login');
  }


  return (
    <>
      <Main header={<Header />} footer={<Footer />}>
        <List>
          <Button onClick={onLogin}  className="btn-auto font-normal mb-5" > Sucursales </Button>
          <ul>
            {defaultItems.map((item) => (
              <SucursalesItem key={item.id} {...item}  />
           ))}
          </ul>
        </List>
      </Main>
    </>
  );
}
