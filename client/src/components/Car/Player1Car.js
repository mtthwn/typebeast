import React from 'react';
import car from './../../img/gtx.png';
import './Car.scss';

const Car = ({ carPositioning, onFinish }) => {
  return (
    <div
      className={`Car${onFinish ? '-finish' : '1-img'}`}
      style={{ left: carPositioning.playerSocket }}
    >
      <img src={car} alt="car" />
    </div>
  );
};

export default Car;
