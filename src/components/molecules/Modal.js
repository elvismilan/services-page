import React, {useEffect, useRef} from "react";
import Button from "../atoms/Button";
import { BiXCircle } from "react-icons/bi";

function Modal({children, isModalOpen, closeModal}) {

  let modalRef = useRef();

  const checkClickOutside = (e) => {
    if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener('click', checkClickOutside);
    return () => document.removeEventListener('click', checkClickOutside);
  });

  return (
    <div ref={modalRef}
      className="news-modal-overlay topV"
    >
      <div className="news-modal-body">
        {children}
        <Button 
          className = "absolute right-3 top-0 w-[30px]" 
          href = "#login" 
          onClick = {closeModal}
          decoration={<BiXCircle size="2rem" className="text-secondary !p-0" />}>
        </Button>
      </div>
    </div>
  );
}

export default Modal;
