import React from 'react';
import { Modal } from 'react-bootstrap';
import RegisterForm from './RegisterForm';

export default ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegisterForm />
      </Modal.Body>
    </Modal>
  );
};
