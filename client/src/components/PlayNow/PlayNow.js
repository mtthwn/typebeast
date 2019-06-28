import React from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './PlayNow.scss';
import ferarriSideView from './../../img/ferarri-side.png';

const PlayNow = () => {
  return (
    <div className="PlayNow-container">
      <div className="PlayNow-content">
        <div className="PlayNow-current">
          <h5>Car</h5>
          <p>Lamborghini Aventador</p>
        </div>
        <div className="PlayNow-specs">
          <h5>Specs</h5>
          <p>Max Speed: 300km/h Accerelation: 100km/s</p>
        </div>
        <img src={ferarriSideView} alt="ferrari side view" />
      </div>
      <Button className="PlayNow-btn" variant="outline-light">
        Race as Guest
      </Button>
    </div>
  );
};

export default PlayNow;
