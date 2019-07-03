import React from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlayNow.scss';
import nissan from './../../img/gtx.png';

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
          <ProgressBar now="177" max="250" label="177 mph" srOnly />
          <ProgressBar now="5.5" max="10" label="5.5 seconds" srOnly />
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
