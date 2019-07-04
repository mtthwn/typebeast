import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import purchaseSuccessful from './../../img/success.png';

export default ({ show }) => {
  return (
    <div className="ShopModal-Container">
      <Modal
        className="ShopModal"
        show={show}
        dialogClassName="modal-100w"
        centered
      >
        <Modal.Title className="ShopModal-title">
          <FontAwesomeIcon icon={faCheckSquare} />
          Current Car Updated!
        </Modal.Title>
        <Modal.Body>
          <div className="Result-wrapper">
            <img src={purchaseSuccessful} alt="current car updated" />
          </div>
          <Button href="/garage" variant="none" className="Home-btn">
            Select another car
          </Button>
          <Button variant="none" href="/play" className="PlayAgain-btn">
            Play Now
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};
