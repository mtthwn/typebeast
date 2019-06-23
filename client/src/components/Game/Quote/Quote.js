import React from 'react';

const DisplayQuoteArea = ({ userInput, fullPhrase }) => {
  const splitQuoteIntoChars = fullPhrase.split('');
  return (
    <div className="DisplayQuote-previewQuote">
      {splitQuoteIntoChars.map((char, index) => {
        let color;
        if (index < userInput.length) {
          color = char === userInput[index] ? '#04ad67' : '#ff373e';
        }

        return (
          <span key={index} style={{ background: color }}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default DisplayQuoteArea;
