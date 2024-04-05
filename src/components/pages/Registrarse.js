import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Modal from '../molecules/Modal';
import Registro from '../organisms/Registro';

const Registrarse = () => {

  return (
    <Main 
      header={<Header/>}
      footer={<Footer />}
    >
      <Modal  showBack={1}>
        <Registro />
      </Modal>
    </Main>
  )
}

export default Registrarse