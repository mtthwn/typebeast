import React from 'react';
import DisplayQuoteInput from './../GameInput/GameInput';
import DisplayQuoteArea from './../Quote/Quote';
import CarWPMGauge from './../Guages/WPMGuage';
import NosGauge from './../Guages/NOSGuage';
import Minimap from './../Minimap/Minimap';
import './GameUI.scss';

const displayQuote = props => {
  const {
    fullPhrase,
    userInput,
    onUserInputChange,
    onFinish,
    second,
    char
  } = props;

  return onFinish ? (
    <div className="DisplayQuote-container">
      <div className="DisplayQuote-previewQuote">
        <h1 className="DisplayQuote-h1">Congrats mffferr</h1>
      </div>
    </div>
  ) : (
    <div className="DisplayQuoteUI-container">
      <CarWPMGauge second={second} char={char} />
      <div className="DisplayQuote-container">
        <Minimap />
        <DisplayQuoteArea fullPhrase={fullPhrase} userInput={userInput} />
        <DisplayQuoteInput onUserInputChange={onUserInputChange} />
      </div>
      <NosGauge />
    </div>
  );
};

export default displayQuote;
