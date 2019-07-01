import React from 'react';
import { CardColumns, Card, Button, ProgressBar } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCoins } from '@fortawesome/free-solid-svg-icons';

import './Shop.scss';
import nissan_sprite from './../../img/gtx_md.png';
import porsche_sprite from './../../img/porsche_md.png';

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
              <Card.Title>Nissan SILVIA S15</Card.Title>
              <Card.Text>
                <h6>Max Speed</h6>
                <ProgressBar now="177" max="250" label={`177 mph`} />
                <h6>Acceleration 0-100 kph</h6>
                <ProgressBar now="5.5" max="10" label={`5.5 seconds`} />
                <h6>Price</h6>
                <div className="Shop-CarPrice">
                  <h1>$5000</h1>
                  <h5 className="coins">Coins</h5>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="Buy-Btn" variant="outline-light">
                Purchase
              </Button>{' '}
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={porsche_sprite} />
            <Card.Body>
              <Card.Title>Nissan SILVIA S15</Card.Title>
              <Card.Text>
                <h6>Max Speed</h6>
                <ProgressBar now="177" max="250" label={`177 mph`} />
                <h6>Acceleration 0-100 kph</h6>
                <ProgressBar now="5.5" max="10" label={`5.5 seconds`} />
                <h6>Price</h6>
                <div className="Shop-CarPrice">
                  <h1>$5000</h1>
                  <h5 className="coins">Coins</h5>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="Buy-Btn" variant="outline-light">
                Purchase
              </Button>{' '}
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src={porsche_sprite} />
            <Card.Body>
              <Card.Title>Nissan SILVIA S15</Card.Title>
              <Card.Text>
                <h6>Max Speed</h6>
                <ProgressBar now="177" max="250" label={`177 mph`} />
                <h6>Acceleration 0-100 kph</h6>
                <ProgressBar now="5.5" max="10" label={`5.5 seconds`} />
                <h6>Price</h6>
                <div className="Shop-CarPrice">
                  <h1>$5000</h1>
                  <h5 className="coins">Coins</h5>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="Buy-Btn" variant="outline-light">
                Purchase
              </Button>{' '}
            </Card.Footer>
          </Card>
        </CardColumns>
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={porsche_sprite} />
            <Card.Body>
              <Card.Title>Nissan SILVIA S15</Card.Title>
              <Card.Text>
                <h6>Max Speed</h6>
                <ProgressBar now="177" max="250" label={`177 mph`} />
                <h6>Acceleration 0-100 kph</h6>
                <ProgressBar now="5.5" max="10" label={`5.5 seconds`} />
                <h6>Price</h6>
                <div className="Shop-CarPrice">
                  <h1>$5000</h1>
                  <h5 className="coins">Coins</h5>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="Buy-Btn" variant="outline-light">
                Purchase
              </Button>{' '}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={porsche_sprite} />
            <Card.Body>
              <Card.Title>Nissan SILVIA S15</Card.Title>
              <Card.Text>
                <h6>Max Speed</h6>
                <ProgressBar now="177" max="250" label={`177 mph`} />
                <h6>Acceleration 0-100 kph</h6>
                <ProgressBar now="5.5" max="10" label={`5.5 seconds`} />
                <h6>Price</h6>
                <div className="Shop-CarPrice">
                  <h1>$5000</h1>
                  <h5 className="coins">Coins</h5>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="Buy-Btn" variant="outline-light">
                Purchase
              </Button>{' '}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={porsche_sprite} />
            <Card.Body>
              <Card.Title>Nissan SILVIA S15</Card.Title>
              <Card.Text>
                <h6>Max Speed</h6>
                <ProgressBar now="177" max="250" label={`177 mph`} />
                <h6>Acceleration 0-100 kph</h6>
                <ProgressBar now="5.5" max="10" label={`5.5 seconds`} />
                <h6>Price</h6>
                <div className="Shop-CarPrice">
                  <h1>$5000</h1>
                  <h5 className="coins">Coins</h5>
                </div>
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
