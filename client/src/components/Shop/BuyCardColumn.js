import React from 'react';
import { CardColumns } from 'react-bootstrap';

import BuyCard from './BuyCard';

export default ({ cars }) => {
  const renderCars = cars.map(car => <BuyCard car={car} />);
  return (
    <CardColumns>
      {renderCars}
    </CardColumns>
  );
};