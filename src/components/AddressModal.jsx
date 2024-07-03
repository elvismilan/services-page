import React from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux';
import { setNotActiveModalAddress } from '../store';
import { MapComponent } from './map/MapComponent';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
  },
};

Modal.setAppElement('#root');

export const AddressModal = ({ isOpen=true  }) => {

  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(setNotActiveModalAddress());
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      style={customStyles}
      className="modal"
    >

      <MapComponent  />
    </Modal>
  )
}
