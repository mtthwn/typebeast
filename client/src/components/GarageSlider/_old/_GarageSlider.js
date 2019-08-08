import React, { useState, useEffect, useContext } from 'react';
import { Carousel } from 'react-bootstrap';

import SliderCaption from './../SliderCaption/SliderCaption';

import UserContext from './../../context/user-context';
import GarageSliderContext from './../../context/garage-slider-context';
import './GarageSlider.scss';

const GarageSlider = () => {
  const { cars } = useContext(UserContext);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const renderCars = cars.map(car => {
    return (
      <Carousel.Item key={car._id}>
        <SliderCaption car={car} />
      </Carousel.Item>
    );
  });

  return (
    <div className="GarageSlider-container">
      <Carousel>{renderCars}</Carousel>
    </div>
  );
};

export { GarageSlider as default };
