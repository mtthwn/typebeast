import React from 'react';
import { CardColumns } from 'react-bootstrap';

import BuyCard from './BuyCard';

export default ({ cars, buyCarFunction }) => {
  const renderCars = cars.map(car => (
    <BuyCard buyCarFunction={buyCarFunction} car={car} />
  ));
  return <CardColumns>{renderCars}</CardColumns>;
};
