import { useState } from 'react';
import Modal from 'react-modal'
import Button from './atoms/Button';
import { useDispatch } from 'react-redux';
import { setNotActiveModal } from '../store/servicios';
import { useNavigate } from 'react-router-dom';
import { addNewItem } from '../store';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-31%',
    transform: 'translate(-50%, -0%)',
  },
};

Modal.setAppElement('#root');

export const ServModal = ({_id, name,unitPrice,description,imageURL='',isOpen=false }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cant, setCant] = useState(0);
  const onCloseModal = () => {
    dispatch(setNotActiveModal());
  }
  const onIncrement = () => {
    setCant(cant+1)
  }
  const onDecrement = () => {
    setCant( cant-1 )
  }

  const onCarrito = () => {
    console.log('agregar al carrito');
    dispatch( addNewItem( { _id,name,unitPrice,description,imageURL,cant } ) );

    dispatch(setNotActiveModal());
    navigate('/carrito');

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <div className="container w-350 ">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent mb-5">
            <div className="w-2/3 bg-white flex flex-col space-y-2 p-3  inline-flex items-start space-x-2">
              <div className="text-slate-500 ">
                {" "}
                <strong>{name}</strong>{" "}
              </div>
              <div className="text-slate-500">{ !!description?description.substring(0,50):''}</div>
              <div className="text-slate-500">
                <span>Desde</span> <strong> Bs. {unitPrice} </strong>
              </div>
            </div>
            <div>
              <img
                src={imageURL}
                alt=""
                width="70"
                height="70"
                className="flex-none rounded-md bg-slate-100"
              />

              <div className="mt-2 float-end">
                <button type="button" className={`btn-icon  `} onClick={ onDecrement } >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    border="0"
                  >
                    <path
                      fillRule="evenodd"
                      fill="#ffffff"
                      d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                    ></path>
                  </svg>

                  <span className="sr-only">Icon description</span>
                </button>
                <span className={` mr-1.5  `}> { cant } </span>
                <button type="button" className="btn-icon" onClick={ onIncrement } >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    border="0"
                  >
                    <path
                      fillRule="evenodd"
                      fill="#ffffff"
                      d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                    ></path>
                  </svg>

                  <span className="sr-only">Icon description</span>
                </button>
              </div>
            </div>
          </div>

          <div className="container flexCenter mx-auto">
            <Button className="" onClick={ onCarrito } >
              Agregar
            </Button>
          </div>


        </div>
      </div>
    </Modal>
  );
}
