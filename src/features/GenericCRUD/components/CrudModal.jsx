import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CrudModal({
  title = "Modal",
  show = false,
  handleClose,
  children,
  size = "lg",
  footerButtons = true,
  customFooter = null,
}) {
  return (
    <Modal show={show} onHide={handleClose} size={size}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer>
        {customFooter ? (
          customFooter
        ) : (
          footerButtons && (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </>
          )
        )}
      </Modal.Footer>
    </Modal>
  );
}