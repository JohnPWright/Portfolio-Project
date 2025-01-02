import React, { useState } from 'react'

type ModalProps = {
  iconSrc: string;
  title: string;
  description: string;
};

const Modal = ({ iconSrc, title, description }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <button
        className=""
        onClick={toggleModal}
        aria-label={`More about ${title}`}
      >
        <img
          className=""
          src={iconSrc}
          alt={title}
        />
        <p
          className=""
        >{title}</p>
      </button>

      {isOpen && (
        <div>
          <div>
            <button
              className=""
              onClick={toggleModal}
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal