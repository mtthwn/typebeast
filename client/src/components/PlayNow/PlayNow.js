import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlayNow.scss';
import nissan from './../../img/gtx_md.png';

const PlayNow = () => {
  const maxSpeed = 177;
  const acceleration = 5.5;

  return (
    <div className="PlayNow-container">
      <div className="PlayNow-content">
        <div className="PlayNow-current">
          <h5>Car</h5>
          <p>Nissan Silvia S15</p>
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
        <img src={nissan} alt="ferrari side view" />
      </div>
      <Link to="/play" className="PlayNow-btn">
        Play Now
      </Link>
    </div>
  );
};

export default PlayNow;
