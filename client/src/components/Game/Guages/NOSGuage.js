import React from 'react';
import './Gauges.scss';

const NosGauge = () => {
  return (
    <div className="NosGauge-border">
      <div className="NosGauge">
        <div className="NosGauge-wpm">
          <div className="NosGauge-num">2</div>
          <div className="NosGauge-num-sm">Position</div>
        </div>
      </div>
    </div>
  );
};

export default NosGauge;
