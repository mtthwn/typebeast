import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import ModalLogic from './ModalLogic';
import LoginForm from './LoginForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
            <Modal.Header className="Modal-Login" closeButton>
              <Modal.Title>
                {' '}
                <FontAwesomeIcon icon={faUser} />
                Login
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <LoginForm handleLogin={props.handleLogin} />
            </Modal.Body>
          </Modal>
        </>
      )}
    </ModalLogic>
  );
};
