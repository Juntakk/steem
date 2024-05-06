import React from "react";
import "./modal.css";

const CustomModal = ({ isOpen, title, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div>
          <p>{message}</p>
        </div>
        <div className="modal-body">
          <button onClick={onClose}>Back to Store</button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
