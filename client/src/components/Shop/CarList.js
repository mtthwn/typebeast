import React from 'react';

import BuyCardColumn from './BuyCardColumn';

export default ({ cars }) => {
  return (
    <div className="Shop-Carlist-container">
      <BuyCardColumn cars={cars} />
    </div>
  );
};
