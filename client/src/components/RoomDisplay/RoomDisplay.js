import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import './RoomDisplay.scss';

const RoomDisplay = ({ roomNumber }) => {
  return (
    <div className="Room-Display-container">
      <Badge className="Room-Display-BadgeOutter" variant="primary">
        You are in Room
        <Badge className="Room-Display-BadgeInner" variant="light">
          {roomNumber}
        </Badge>
      </Badge>
    </div>
  );
};

export default RoomDisplay;
