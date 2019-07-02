import React from 'react';
import { Carousel, ProgressBar, Button } from 'react-bootstrap';

export default ({ imgSrc, selectCurrentCar, car }) => {
  const maxspeed = 170;
  const accerlation = 5.5;

  return (
    <Carousel.Caption className="CarSlider-content">
      <h5>Nissan</h5>
      <h3>Silvia S15</h3>
      <img className="Car-Sprite" src={imgSrc} alt="car sprite" />
      <h6>Max Speed</h6>
      <ProgressBar now={maxspeed} max="250" label={`${maxspeed}mph`} />
      <h6>Acceleration 0-100 kph</h6>
      <ProgressBar
        now={accerlation}
        max="10"
        label={`${accerlation} seconds`}
      />
      <Button onClick={selectCurrentCar(car._id)}>Select</Button>
    </Carousel.Caption>
  );
};
