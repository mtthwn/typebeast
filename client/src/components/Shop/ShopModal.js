import React from 'react';
import { Link } from 'react-router-dom';
import purchaseSuccessful from './../../img/success.png';

export default () => {
  return (
    <div className="Shop-Modal">
      <Modal show={true} dialogClassName="modal-100w" centered>
        <Modal.Body>
          <div className="Result-wrapper">
            <img src={purchaseSuccessful} />
          </div>

          <Button variant="none" href="/" className="PlayAgain-btn">
            Home
          </Button>
          <Link to={'/'}>
            <Button variant="none" className="Home-btn">
              Keep Shopping
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};
