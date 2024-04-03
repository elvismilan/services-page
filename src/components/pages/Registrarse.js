import useModal from "../../components/useModal";
import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Modal from '../molecules/Modal';
import Registro from '../organisms/Registro';

const Inicio = () => {

  const {isShowing, toggle} = useModal();

  return (
    <Main 
      header={<Header onClick={toggle} />}
      footer={<Footer />}
    >
      {isShowing ? 
        <Modal closeModal={toggle}>
          <Registro />
        </Modal>
        : null }
    </Main>
  )
}

export default Inicio