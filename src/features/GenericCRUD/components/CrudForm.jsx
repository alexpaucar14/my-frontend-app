import React from "react";

const CrudForm = ({ title, onClose, children }) => {
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </>
  );
};

export default CrudForm;