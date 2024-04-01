import Button from "../atoms/Button";
import {BiXCircle} from "react-icons/bi"
import React, { useEffect, useRef, useState } from "react";

function Modal({children}) {
  
  const [showModal, setShowModal] = useState(true);

  // Reference to the modal's outer div element
  const divRef = useRef(null);

  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle clicks outside the modal
  const handleClickOutside = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  // Adding and removing event listener when the component mounts and unmounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Rendering the modal based on the showModal state
  if (showModal) {
    return (
      <>
        <div
          ref={divRef}
          className="news-modal-overlay topV"
        >
          <div className="news-modal-body">
            {children}
            <Button
              onClick={closeModal}
              href='#close'
              className="bg-transparent text-secondary w-[40px] absolute right-0 top-0 "
              decoration={<BiXCircle size="1.5rem" />}
            >
            </Button>
          </div>
        </div>
      </>
    );
  } else {
    return "";
  }
}

export default Modal;
