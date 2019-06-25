import React from 'react';
import Player1Car from './../Car/Player1Car';
import Player2Car from './../Car/Player2Car';
import Player3Car from './../Car/Player3Car';
import Car from './../Car/Car';

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

  const carIds = Object.keys(carPositioning);
  const Cars = carIds.map((car, index) => {
    return (
      <Car percentageComplete={`${Number(carPositioning[car].progress) * 100}%`} onFinish={onFinish} positioning={index + 1} />
      )
  })

  return (
    <div className="Background-img" style={onFinish ? bgFinish : bgStart}>
    {Cars}
    </div>
  );
};

 // <Player1Car onFinish={onFinish} carPositioning={carPositioning} />
 //      <Player2Car onFinish={onFinish} carPositioning={carPositioning} />
 //      <Player3Car onFinish={onFinish} carPositioning={carPositioning} />


export default Background;
