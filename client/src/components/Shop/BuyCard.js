import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';

export default ({ car, buyCarFunction }) => {
  return (
    <Card>
      <Card.Img variant="top" src={car.mediumImg} />
      <Card.Body>
        <Card.Title>
          {car.make} {car.model}
        </Card.Title>
        <div className="Car-description">
          <h6>Max Speed</h6>
          <ProgressBar
            now={car.maxSpeed}
            max="250"
            label={`${car.maxSpeed} mph`}
          />
          <h6>Acceleration 0-100 kph</h6>
          <ProgressBar
            now={car.acceleration}
            max="10"
            label={`${car.acceleration} seconds`}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button
          onClick={buyCarFunction(car._id)}
          className="Buy-Btn"
          variant="outline-light"
        >
          ${car.price}
        </Button>
      </Card.Footer>
    </Card>
  );
};
