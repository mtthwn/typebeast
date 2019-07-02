import React, { Fragment } from 'react';

import DisplayQuoteArea from './../components/Quote/Quote';
import CarWPMGauge from './../components/Guages/WPMGuage';
import Minimap from './../components/Minimap/Minimap';
import DisplayQuoteInput from '../components/GameInput/GameInput';
import NosGauge from './../components/Guages/NOSGuage';
import StartGameButton from './../components/StartGameButton/StartGameButton';
import LeaderboardModal from './../components/LeaderboardModal/LeaderboardModal';

export const renderGame = props => {
  const countdown = props.countdown ? (
    <h1>{props.countdownCount}</h1>
  ) : (
    <StartGameButton emitStart={props.onEmitStart} />
  );

  const gameStart = props.timerStart ? (
    <Fragment>
      <DisplayQuoteArea
        completed={props.wordsCompleted}
        input={props.userInput}
        currentWord={props.words[props.index]}
        remaining={props.remainingPhrase}
      />
      <DisplayQuoteInput onUserInputChange={props.onUserInputChange} />
    </Fragment>
  ) : (
    <DisplayQuoteArea
      completed={''}
      input={''}
      currentWord={''}
      remaining={'Please wait for the game to start'}
    />
  );

  return props.timerFinished ? (
    <Fragment>
      <LeaderboardModal
        leaderboard={props.leaderboard}
        placings={props.placings}
      />
    </Fragment>
  ) : (
    <div className="DisplayQuoteUI-container">
      <CarWPMGauge
        wpm={props.wpm}
        second={props.sec}
        char={props.char}
        socket={props.socket}
      />
      <div className="DisplayQuote-container">
        {countdown}
        <Minimap playerProgress={props.playerProgress} />
        {gameStart}
      </div>
      <NosGauge position={props.position} />
    </div>
  );
};
