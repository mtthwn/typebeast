import React from 'react';
import TypingSpeed from '../TypingSpeed/TypingSpeed';
import socketIOClient from "socket.io-client";
import './Guages.scss';

const CarGauge = ({ second, char, socket }) => {
  return (
    <div className="CarGauge-border">
      <div className="CarGauge">
        <TypingSpeed second={second} char={char} socket={socket} />
      </div>
    </div>
  );
};

export default CarGauge;
