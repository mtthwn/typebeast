import React from 'react';
import './Minimap.scss';
import { ProgressBar } from 'react-bootstrap';

const Minimap = ({ playerProgress }) => {
  const now = Math.round(playerProgress * 100);
  return (
    <div className="Minimap-container">
      <ProgressBar className="Minimap-bar" now={now} label={`${now}%`} />
    </div>
  );
};

export default Minimap;
