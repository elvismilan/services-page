import useModal from "../../components/useModal";
import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Modal from '../molecules/Modal';
import Login from '../organisms/Login';

const Inicio = () => {

  const {isShowing, toggle} = useModal();

  return (
    <Main 
      header={<Header onClick={toggle} />}
      footer={<Footer />}
    >
      {isShowing ? 
        <Modal closeModal={toggle}>
          <Login />
        </Modal>
        : null }
    </Main>
  )
}

export default Inicio