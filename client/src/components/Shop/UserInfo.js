import React from 'react';
import './Shop.scss';
import nissan_sprite from './../../img/gtx_md.png';

export default () => {
  return (
    <div className="Shop-container">
      <div className="CarSlider-content UserInfo">
        <img className="Car-Sprite" src={nissan_sprite} alt="car sprite" />
        <h5>User</h5>
        <h2>Big Kwok</h2>
        <h5>Coins</h5>
        <h3>5000</h3>
      </div>
    </div>
  );
};
