import React from 'react';

export default ({ onUserInputChange }) => {
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
