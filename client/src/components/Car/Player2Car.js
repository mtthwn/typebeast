import React from 'react';
import car from './../../img/corvette.png';
import './Car.scss';

const Player2Car = ({ carPositioning, onFinish }) => {
  return (
    <div className="Car2-img" style={{ left: carPositioning }}>
      <img src={car} alt="Corvette" />
    </div>
  );
};

export default Player2Car;
