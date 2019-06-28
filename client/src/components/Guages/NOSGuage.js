import React from 'react';
import './Guages.scss';

export default props => (
  <div className="NosGauge-border">
    <div className="NosGauge">
      <div className="NosGauge-wpm">
        <div className="NosGauge-num">{props.position}</div>
        <div className="NosGauge-num-sm">Position</div>
      </div>
    </div>
  </div>
);
