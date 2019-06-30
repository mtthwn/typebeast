import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import RegisterForm from './RegisterForm';
import ModalLogic from './ModalLogic';
import FormModal from './FormModal';

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
            Register
          </Button>
          <FormModal show={props.show} onHide={props.handleClose} />
        </>
      )}
    </ModalLogic>
  );
};
