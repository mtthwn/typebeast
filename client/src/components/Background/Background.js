import React from 'react';
import Player1Car from './../Car/Player1Car';
import Player2Car from './../Car/Player2Car';
import Player3Car from './../Car/Player3Car';

import gameStartBG from './../../img/forest-bg3.jpg';
import finishLineBG from './../../img/finish-line.jpg';
import './Background.scss';

const bgStart = {
  backgroundImage: `url(${gameStartBG})`
};

const bgFinish = {
  backgroundImage: `url(${finishLineBG})`,
  transition: 'opacity 1s linear',
  animation: 'fade 1s linear'
};

// const { opp1: socketID, opp2: socketID } = opponents;

const Background = ({ carPositioning, onFinish }) => {
  return (
    <div className="Background-img" style={onFinish ? bgFinish : bgStart}>
      <Player1Car onFinish={onFinish} carPositioning={carPositioning} />
      <Player2Car onFinish={onFinish} carPositioning={carPositioning} />
      <Player3Car onFinish={onFinish} carPositioning={carPositioning} />
    </div>
  );
};

export default Background;
