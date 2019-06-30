import React from 'react';
import { Modal } from 'react-bootstrap';
import RegisterForm from './RegisterForm';

export default ({ show, onHide }) => {
  return (
    <Modal className="Login-Content" show={show} onHide={onHide} centered>
      <Modal.Header className="Login-Header" closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegisterForm />
      </Modal.Body>
    </Modal>
  );
};
