import React from 'react';

const DisplayQuoteInput = ({ onUserInputChange }) => {
  return (
    <div>
      <input
        id="DisplayQuote-inputWord"
        onChange={onUserInputChange}
        autoFocus={true}
        autoComplete="off"
      />
    </div>
  );
};

export default DisplayQuoteInput;
