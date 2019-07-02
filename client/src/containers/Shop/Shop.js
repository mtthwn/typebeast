import React from 'react';

import ShopLogic from './ShopLogic';

import ShopUserInfo from './../../components/Shop/ShopUserInfo';
import CarList from './../../components/Shop/CarList';
import Header from './../../components/Header/Header';

import './../../components/Shop/Shop.scss';

export default () => (
  <ShopLogic>
    {props => (
      <div>
        <Header user={props.user} />
        <div className="Shop-container">
          <ShopUserInfo user={props.user} />
          <CarList buyCarFunction={props.buyCarFunction} cars={props.cars} />
        </div>
      </div>
    )}
  </ShopLogic>
);
