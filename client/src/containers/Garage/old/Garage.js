import React from 'react';

import GarageSlider from '../../../components/GarageSlider/_old/GarageSlider';
import Header from '../../../components/Header/Header';
import GarageLogic from './GarageLogic';
import GarageModal from '../../../components/GarageSlider/GarageModal';

export default () => (
  <GarageLogic>
    {props => (
      <div>
        <Header user={props.user} />
        <div>
          <GarageSlider
            user={props.user}
            selectCurrentCar={props.selectCurrentCar}
          />
          <GarageModal show={props.show} />
        </div>
      </div>
    )}
  </GarageLogic>
);
