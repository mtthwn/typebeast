import React from 'react';
import { Carousel, ProgressBar, Button } from 'react-bootstrap';

export default ({ imgSrc, selectCurrentCar, car, user, show }) => {
  const maxspeed = car.maxSpeed;
  const acceleration = car.acceleration;

  return (
    <Carousel.Caption className="GarageSlider-container">
      <div className="GarageSlider-content">
        <h5>{car.make}</h5>
        <h1>{car.model}</h1>
        <img className="Car-Sprite" src={imgSrc} alt="car sprite" />
        <h6>Max Speed</h6>
        <ProgressBar now={maxspeed} max="250" label={`${maxspeed}mph`} />
        <h6>Acceleration 0-100 kph</h6>
        <ProgressBar
          now={acceleration}
          max="10"
          label={`${acceleration} seconds`}
        />
      </div>
      <Button
        className="GarageSlider-BuyBtn"
        onClick={selectCurrentCar(car._id)}
      >
        Select Car
      </Button>
    </Carousel.Caption>
  );
};
