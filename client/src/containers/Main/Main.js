import React from 'react';

import MainLogic from './MainLogic';
import CarSlider from './../../components/CarSlider/CarSlider';
import SocialMedia from './../../components/SocialMedia/SocialMedia';
import PlayNow from './../../components/PlayNow/PlayNow';

import Header from './../../components/Header/Header';

export default () => (
  <MainLogic>
    {props => (
      <div>
        <Header user={props.user} />
        <div>
          <SocialMedia />
          <CarSlider />
          <PlayNow currentCar={props.user.currentCar} />
        </div>
      </div>
    )}
  </MainLogic>
);
