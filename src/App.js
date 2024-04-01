
import Header from './components/organisms/Header';
import Modal from './components/organisms/Modal';
import Login from './components/organisms/Login';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <>
      <Header />
      <Modal>
        <Login />
      </Modal>
      <Footer />
    </>
  );
}

export default App;