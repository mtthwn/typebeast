import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Badge } from 'react-bootstrap';
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
          Purchase Successful
        </Modal.Title>
        <Modal.Body>
          <div className="Result-wrapper">
            <img src={purchaseSuccessful} />
          </div>
          <Link to="/">
            <Button variant="none" className="Home-btn">
              Home
            </Button>
          </Link>
          <Button variant="none" href="/shop" className="PlayAgain-btn">
            Continue Shopping
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};