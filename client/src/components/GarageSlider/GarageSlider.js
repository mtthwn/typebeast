import React, { useState, useEffect, useContext } from 'react';
import { Carousel } from 'react-bootstrap';

import UserContext from './../../context/user-context';
import './GarageSlider.scss';

const GarageSlider = () => {
  const { cars } = useContext(UserContext);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const renderCars = cars.map(car => {
    return (
        <Carousel.Item>

        </Carousel.Item>
    )
  });
};

export { GarageSlider as default }
