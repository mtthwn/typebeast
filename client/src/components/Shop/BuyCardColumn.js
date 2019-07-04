import React from 'react';
import { CardColumns } from 'react-bootstrap';

import BuyCard from './BuyCard';

export default ({ cars, buyCarFunction, show }) => {
  const renderCars = cars.map(car => (
    <BuyCard buyCarFunction={buyCarFunction} car={car} show={show} />
  ));
  return <CardColumns>{renderCars}</CardColumns>;
};
