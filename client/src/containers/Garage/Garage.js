import React from 'react';

import GarageSlider from '../../components/GarageSlider/GarageSlider';
import Header from '../../components/Header/Header';
import GarageLogic from './GarageLogic'

export default () => (
  <GarageLogic>
    {props => (
      <div>
        <Header user={props.user} />
        <div>
          <GarageSlider user={props.user} />
        </div>
      </div>
    )}
  </GarageLogic>
)