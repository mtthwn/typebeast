import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlayNow.scss';
import nissan from './../../img/gtx_md.png';

const PlayNow = ({ currentCar }) => {
  const maxSpeed = currentCar ? currentCar.maxSpeed : 177;
  const acceleration = currentCar ? currentCar.acceleration : 5.5;
  const make = currentCar ? currentCar.make : 'Nissan'
  const model = currentCar ? currentCar.model : 'Silvia S15';
  const image = currentCar ? currentCar.spriteFile : nissan;

  return (
    <div className="PlayNow-container">
      <div className="PlayNow-content">
        <div className="PlayNow-current">
          <h5>Car</h5>
          <p>{make} {model}</p>
        </div>
        <div className="PlayNow-specs">
          <h5>Specs</h5>
          <ProgressBar now={maxSpeed} max="250" label={`${maxSpeed} mph`} />
          <ProgressBar
            now={acceleration}
            max="10"
            label={`${acceleration} seconds`}
          />
        </div>
        <img src={image} alt="ferrari side view" />
      </div>
      <Link to="/play" className="PlayNow-btn">
        Play Now
      </Link>
    </div>
  );
};

export default PlayNow;
