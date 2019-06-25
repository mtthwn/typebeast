import React from 'react';
import car from './../../img/gtx.png';
import './Car.scss';

const Car = ({ percentageComplete, onFinish, positioning }) => {
  console.log(percentageComplete)
  const styling = onFinish ? `Car-finish` : `Car${positioning}-img`
  return (
    <div
      className={`${styling}`}
      style={{ left: `${percentageComplete}` }}
    >
      <img src={car} alt="car" />
    </div>
  );
};

export default Car;
