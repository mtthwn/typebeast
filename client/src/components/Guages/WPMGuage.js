import React from 'react';
import TypingSpeed from '../TypingSpeed/TypingSpeed';
import socketIOClient from 'socket.io-client';
import './Guages.scss';

const CarGauge = ({ second, char, socket, wpm }) => {
  console.log(wpm);
  return (
    <div className="CarGauge-border">
      <div className="CarGauge">
        <div className="TypingSpeed-wpm">
          <div className="TypingSpeed-num">
            {wpm}
          </div>
          <div className="TypingSpeed-num-sm">wpm</div>
        </div>
      </div>
    </div>
  );
};

export default CarGauge;
