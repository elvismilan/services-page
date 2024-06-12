import { useSelector } from "react-redux";
import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import List from "../molecules/List";
import Item from "../atoms/Item";
import { ServModal } from "../ServModal";

const Servicios = (props) => {

  const { services,isOpenModal,active } = useSelector( state => state.servicios );
	const { _id,picture,first_name } = useSelector((state) => state.proveedor.selected)


  return (
    <Main
      header={<Header />}
      footer={<Footer />}
    >
      <ServModal isOpen={ isOpenModal } {...active} />
      <List>
        {/* {defaultItems.map(item => */}
          <Item
            key= {_id}
            id= {_id}
            empresa= {first_name}
            puntaje= {'3.5'}
            image= {picture}
            categoria = {null}
            servicios= {services}
          />
        {/* )} */}
      </List>

    </Main>
  )
}

export default Servicios
