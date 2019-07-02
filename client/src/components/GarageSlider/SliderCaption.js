import React from 'react';
import { Carousel, ProgressBar, Button } from 'react-bootstrap';

export default ({ imgSrc, selectCurrentCar, car }) => {
  const maxspeed = car.maxSpeed;
  const accerlation = car.acceleration;

  return (
    <Carousel.Caption className="GarageSlider-content">
      <h5>{car.make}</h5>
      <h3>{car.model}</h3>
      <img className="Car-Sprite" src={imgSrc} alt="car sprite" />
      <h6>Max Speed</h6>
      <ProgressBar now={maxspeed} max="250" label={`${maxspeed}mph`} />
      <h6>Acceleration 0-100 kph</h6>
      <ProgressBar
        now={accerlation}
        max="10"
        label={`${accerlation} seconds`}
      />
      <Button
        className="GarageSlider-BuyBtn"
        onClick={selectCurrentCar(car._id)}
      >
        Select
      </Button>
    </Carousel.Caption>
  );
};
