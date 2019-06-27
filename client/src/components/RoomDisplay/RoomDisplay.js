import React from 'react';

const RoomDisplay = (props) => {
  return (
    <div className="Room-Display"> You are in Room # {props.roomNumber} </div>
  )
}

export default RoomDisplay;