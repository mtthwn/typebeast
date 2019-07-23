import React from 'react';

import { Carousel, ProgressBar, Button } from 'react-bootstrap';

const SliderCaption = ({ car }) => {
  const { maxSpeed, acceleration, make, model, spriteFile } = car;

  return (
    <Carousel.Caption className="GarageSlider-container">
      <div className="GarageSlider-content">
        <h5>{make}</h5>
        <h1>{model}</h1>
        <img className="Car-Sprite" src={spriteFile} alt="car sprite" />

        <h6>Max Speed</h6>
        <ProgressBar now={maxSpeed} max="250" label={`${maxSpeed}mph`} />
        <h6>Acceleration 0-100 kph</h6>
        <ProgressBar
          now={acceleration}
          max="10"
          label={`${acceleration} seconds`}
        />
      </div>
      <Button className="GarageSlider-BuyBtn">Select Car</Button>
    </Carousel.Caption>
  );
};

export { SliderCaption as default };
