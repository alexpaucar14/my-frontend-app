import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import compomentNew from "../usuario/Nuevo"

export default function ModalComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function fetchUserData() {
        // aquí harás el fetch real después
        console.log("Guardando cambios...");
    }

    return (
        <>
            <a onClick={handleShow} className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Customers</a>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Detalle Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <compomentNew/>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="w-50" variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button className="w-50" variant="primary" onClick={fetchUserData}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
