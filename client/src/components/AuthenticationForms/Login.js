import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ModalLogic from './ModalLogic';
import LoginForm from './LoginForm';

export default ({ className }) => {
  return (
    <ModalLogic>
      {props => (
        <>
          <Button
            className={className}
            variant="primary"
            onClick={props.handleShow}
          >
            Login
          </Button>
          <Modal
            className="Login-Content"
            show={props.show}
            onHide={props.handleClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <LoginForm />
            </Modal.Body>
          </Modal>
        </>
      )}
    </ModalLogic>
  );
};
