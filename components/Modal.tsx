import React from "react";

interface ModalProps {
  content: string;
}

const Modal: React.FC<ModalProps> = ({ content }) => {
  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Random later</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <label htmlFor="modal" className="btn">
              Thanks!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
