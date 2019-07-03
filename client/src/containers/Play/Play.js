import React from 'react';
import './GameUI.scss';

import { renderGame } from './../../lib/playHelpers';

import PlayGameLogic from './PlayLogic';
import Background from './../../components/Background/Background';
import Header from './../../components/Header/Header';

export default () => {
  return (
    <PlayGameLogic>
      {values => (
        <div>
          <Header user={values.user} />
          <div className="PlayGame">
            <Background
              socket={values.socket}
              carPositioning={values.carPositioning}
              onFinish={values.timerFinished}
              onStart={values.timerStart}
              timer={values.timer}
              showUsername={values.leaderboard}
              roomNumber={values.roomNumber}
              leaderboard={values.leaderboard}
              placings={values.placings}
            />

            {!values.loading
              ? renderGame({
                  ...values
                })
              : 'loading'}
          </div>
        </div>
      )}
    </PlayGameLogic>
  );
};
