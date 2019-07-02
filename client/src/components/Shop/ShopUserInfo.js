import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCoins } from '@fortawesome/free-solid-svg-icons';

import nissan_sprite from './../../img/gtx_md.png';

export default ({ user }) => {
  console.log(user);
  return (
    <div className="CarSlider-content UserInfo">
      <div className="Shop-header-title">
        <h1>Shop</h1>
        <div className="border-bottom"></div>
      </div>
      <ul>
        <li>
          <img className="Car-Sprite" src={nissan_sprite} alt="car sprite" />
        </li>
        <li>
          <h5>
            <FontAwesomeIcon icon={faUser} />
            Username
          </h5>
          <h2>{user.username}</h2>
        </li>
        <li>
          <h5>
            <FontAwesomeIcon icon={faCoins} />
            Coins
          </h5>
          <h3>{user.cash}</h3>
        </li>
      </ul>
    </div>
  );
};
