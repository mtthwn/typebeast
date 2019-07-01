import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';

export default ({ src }) => {
  return (
    <Card>
      <Card.Img variant="top" src={src} />
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
  );
};
