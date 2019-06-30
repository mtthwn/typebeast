import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import ModalLogic from './ModalLogic';

export default () => {
  return (
    <ModalLogic>
      {props => (
        <>
          <Button variant="primary" onClick={props.handleShow}>
            Register
          </Button>

          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RegisterForm />
            </Modal.Body>
          </Modal>
        </>
      )}
    </ModalLogic>
  );
};
