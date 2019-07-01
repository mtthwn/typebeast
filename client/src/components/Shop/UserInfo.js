import React from 'react';
import { CardColumns, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCoins } from '@fortawesome/free-solid-svg-icons';

import './Shop.scss';
import nissan_sprite from './../../img/gtx_md.png';
import porsche_sprite from './../../img/porsche.png';

export default () => {
  return (
    <div className="Shop-container">
      <div className="CarSlider-content UserInfo">
        <h1> Shop</h1>
        <div className="border-bottom"></div>
        <img className="Car-Sprite" src={nissan_sprite} alt="car sprite" />
        <ul>
          <li>
            <h5>
              <FontAwesomeIcon icon={faUser} />
              Username
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

      <div className="Shop-Carlist-container">
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={porsche_sprite} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="Buy-Btn" variant="outline-light">
                Purchase
              </Button>{' '}
            </Card.Footer>
          </Card>
        </CardColumns>
      </div>
    </div>
  );
};
