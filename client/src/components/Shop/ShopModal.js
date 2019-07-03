import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Badge } from 'react-bootstrap';

import purchaseSuccessful from './../../img/success.png';

export default ({ show }) => {
  return (
    <div className="Shop-Modal">
      <Modal show={show} dialogClassName="modal-100w" centered>
        <Modal.Title className="ShopModal-title">
          Purchase Successful
        </Modal.Title>
        <Modal.Body>
          <div className="Result-wrapper">
            <img src={purchaseSuccessful} />
            {/* <Badge variant="success">Purchase Successful!</Badge> */}
          </div>

          <Button variant="none" href="/" className="PlayAgain-btn">
            Home
          </Button>
          <Link to={'/shop'}>
            <Button variant="none" className="Home-btn">
              Keep Shopping
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};
