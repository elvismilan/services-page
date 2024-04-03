import useModal from "../../components/useModal";
import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Modal from '../molecules/Modal';
import Service from '../organisms/Service';

const Servicio = () => {

  const {isShowing, toggle} = useModal();

  return (
    <Main 
      header={<Header onClick={toggle} />}
      footer={<Footer />}
    >
        <Modal closeModal={toggle}>
          <Service />
        </Modal>
    </Main>
  )
}

export default Servicio