import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCoins } from '@fortawesome/free-solid-svg-icons';

import './Shop.scss';
import nissan_sprite from './../../img/gtx_md.png';

export default () => {
  return (
    <div className="Shop-container">
      <div className="CarSlider-content UserInfo">
        <img className="Car-Sprite" src={nissan_sprite} alt="car sprite" />
        <ul>
          <li>
            <h5>
              <FontAwesomeIcon icon={faUser} />
              User
            </h5>
            <h2>Big Kwok</h2>
          </li>
          <li>
            <h5>
              <FontAwesomeIcon icon={faCoins} />
              Coins
            </h5>
            <h3>5000</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};
