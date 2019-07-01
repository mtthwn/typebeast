import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import nissan_sprite from './../../img/gtx_md.png';
import porsche_sprite from './../../img/porsche_md.png';

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

const getSprite = (make, model) => {
  if (make === 'Nissan') {
    return nissan_sprite;
  } else if (make === 'Porsche') {
    return porsche_sprite;
  }
}

export default ({ car }) => {
  const imageImport = getSprite(car.make, car.model);
  
  return (
    <Card>
      <Card.Img variant="top" src={imageImport} />
      <Card.Body>
        <Card.Title>{car.make} {car.model}</Card.Title>
        <Card.Text>
          <h6>Max Speed</h6>
          <ProgressBar now="177" max="250" label={`177 mph`} />
          <h6>Acceleration 0-100 kph</h6>
          <ProgressBar now="5.5" max="10" label={`5.5 seconds`} />
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="Buy-Btn" variant="outline-light">
          ${car.price}
        </Button>
      </Card.Footer>
    </Card>
  );
};
