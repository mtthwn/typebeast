import React from 'react';

// const DisplayQuoteArea = ({ userInput, fullPhrase }) => {
//   const splitQuoteIntoChars = fullPhrase.split('');
//   return (
//     <div className="DisplayQuote-previewQuote">
//       {splitQuoteIntoChars.map((char, index) => {
//         let color;
//         if (index < userInput.length) {
//           color = char === userInput[index] ? '#04ad67' : '#ff373e';
//         }

//         return (
//           <span key={index} style={{ background: color }}>
//             {char}
//           </span>
//         );
//       })}
//     </div>
//   );
// };

const DisplayQuoteArea = ({ completed, input, currentWord, remaining }) => {
  const correct = `{ background: '#04ad67'}`;
  const incorrect = `{ background: '#ff373e' }`;

  let currentCorrect = '';
  let currentIncorrect = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === currentWord[i]) {
      currentCorrect += i;
    } else {
      return;
    }
  }

  if (currentCorrect.length < input.length) {
    currentIncorrect += input.substring(currentCorrect.length);
  }

  return (
    <div className="DisplayQuote-previewQuote">
      <span style={correct}>{completed}</span>
      <span style={correct}>{currentCorrect}</span>
      <span style={incorrect}>{currentIncorrect}</span>
      <span>{remaining}</span>
    </div>
  )
};

export default DisplayQuoteArea;
