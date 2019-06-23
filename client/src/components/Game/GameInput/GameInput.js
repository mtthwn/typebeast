import React from 'react';

const DisplayQuoteInput = ({ onUserInputChange }) => {
  return (
    <div>
      <input
        id="DisplayQuote-inputWord"
        onChange={onUserInputChange}
        autofocus="true"
        autoComplete="off"
      />
    </div>
  );
};

export default DisplayQuoteInput;
