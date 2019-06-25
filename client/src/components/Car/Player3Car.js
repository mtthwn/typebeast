import React from 'react';
import car from './../../img/civic.png';
import './Car.scss';

const Player2Car = ({ carPositioning }) => {
  return (
    <div className="Car3-img" style={{ left: carPositioning }}>
      <img src={car} alt="Civic" />
    </div>
  );
};

export default Player2Car;
