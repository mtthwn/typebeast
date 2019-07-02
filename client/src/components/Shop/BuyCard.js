import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';

// export default ({ src }) => {
//   return (
//     <Card>
//       <Card.Img variant="top" src={src} />
//       <Card.Body>
//         <Card.Title>Nissan SILVIA S15</Card.Title>
//         <Card.Text>
//           <h6>Max Speed</h6>
//           <ProgressBar now="177" max="250" label={`177 mph`} />
//           <h6>Acceleration 0-100 kph</h6>
//           <ProgressBar now="5.5" max="10" label={`5.5 seconds`} />
//         </Card.Text>
//       </Card.Body>
//       <Card.Footer>
//         <Button className="Buy-Btn" variant="outline-light">
//           $5000
//         </Button>
//       </Card.Footer>
//     </Card>
//   );
// };

export default ({ car, buyCarFunction }) => {
  return (
    <Card>
      <Card.Img variant="top" src={car.mediumImg} />
      <Card.Body>
        <Card.Title>
          {car.make} {car.model}
        </Card.Title>
        <Card.Text>
          <h6>Max Speed</h6>
          <ProgressBar now={car.maxSpeed} max="250" label={`${car.maxSpeed} mph`} srOnly />
          <h6>Acceleration 0-100 kph</h6>
          <ProgressBar now={car.acceleration} max="10" label={`${car.acceleration} seconds`} srOnly />
        </Card.Text>
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
