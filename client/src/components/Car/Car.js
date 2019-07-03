import React from 'react';
import car from './../../img/gtx.png';
import './Car.scss';

const Car = ({ percentageComplete, onFinish, positioning, user }) => {
  // console.log(percentageComplete)
  const styling = onFinish ? `Car-finish` : `Car${positioning}-img`
  const defaultCar = 'https://i.imgur.com/a4hVyfy.png'
  return (
    <div
      className={`${styling}`}
      style={{ left: `${percentageComplete}`, transition: 'all 1s ease-in', animation: 'car2 50s linear forward' }}
    >
      <img src={user.currentCar ? user.currentCar.spriteFile : defaultCar} alt="car" />
    </div>
  );
};

export default Car;
