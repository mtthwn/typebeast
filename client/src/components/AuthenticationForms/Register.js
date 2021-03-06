import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import ModalLogic from './ModalLogic';
import RegisterForm from './RegisterForm';

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
          <Modal
            className="Register-Content"
            show={props.show}
            onHide={props.handleClose}
            centered
          >
            <Modal.Header className="Modal-Register" closeButton>
              <Modal.Title>
                {' '}
                <FontAwesomeIcon icon={faUserPlus} />
                Register
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RegisterForm handleRegister={props.handleRegister} />
            </Modal.Body>
          </Modal>
        </>
      )}
    </ModalLogic>
  );
};
