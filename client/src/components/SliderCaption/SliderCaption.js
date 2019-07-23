import React, { useContext } from 'react';

import { Carousel, ProgressBar, Button } from 'react-bootstrap';

const userContext = require('./../../context/user-context');

const SliderCaption = () => {
  const { car } = useContext(userContext);

  const { maxspeed, acceleration, make, model } = car;

  console.log(car);

  return (
    <Carousel.Caption className="GarageSlider-container">
      <div className="GarageSlider-content">
        <h5>{make}</h5>
        <h1>{model}</h1>
        <h6>Max Speed</h6>
        <ProgressBar now={maxspeed} max="250" label={`${maxspeed}mph`} />
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

// <img className="Car-Sprite" src={imgSrc} alt="car sprite" />;
