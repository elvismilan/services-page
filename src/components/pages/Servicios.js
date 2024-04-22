import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import List from "../molecules/List";
import Item from "../atoms/Item";
import { useSelector } from "react-redux";

const Servicios = (props) => {


  const { services } = useSelector( state => state.servicios );
//  const { provider } = services.data;

  const { _id,logoURL,name } = services[0].provider ;

  return (
    <Main
      header={<Header />}
      footer={<Footer />}
    >
      <List>
        {/* {defaultItems.map(item => */}
          <Item
            key= {_id}
            id= {_id}
            empresa= {name}
            puntaje= {'3.5'}
            image= {logoURL}
            categoria = {null}
            //latitud= {item.latitud}
            //longitud= {item.longitud}
            servicios= {services}
          />
        {/* )} */}
      </List>

    </Main>
  )
}

export default Servicios
