import React from 'react';
import TypingSpeed from '../TypingSpeed/TypingSpeed';
import './Guages.scss';

const CarGauge = ({ second, char }) => {
  return (
    <div className="CarGauge-border">
      <div className="CarGauge">
        <TypingSpeed second={second} char={char} />
      </div>
    </div>
  );
};

export default CarGauge;
